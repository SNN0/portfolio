"use client";

import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { useWindowStore } from "@/hooks/useWindowStore";
import { WindowTitleBar } from "@/components/windows/WindowTitleBar";
import type { AppWindow } from "@/types/window";
import type { PropsWithChildren } from "react";

export function WindowFrame({ windowData, active, children }: PropsWithChildren<{ windowData: AppWindow; active: boolean }>) {
  const [mobile, setMobile] = useState(false);
  const { closeWindow, minimizeWindow, focusWindow, moveWindow, resizeWindow } = useWindowStore();
  useEffect(() => {
    const query = matchMedia("(max-width: 720px)");
    const sync = () => setMobile(query.matches);
    sync(); query.addEventListener("change", sync); return () => query.removeEventListener("change", sync);
  }, []);
  if (windowData.isMinimized) return null;

  const frame = <section className="window-frame" role="dialog" aria-label={windowData.title} onMouseDown={() => focusWindow(windowData.id)}>
    <WindowTitleBar title={windowData.title} active={active} onMinimize={() => minimizeWindow(windowData.id)} onClose={() => closeWindow(windowData.id)}/>
    <div className="window-content">{children}</div>
  </section>;

  if (mobile) return <div className="mobile-window" style={{ zIndex: windowData.zIndex }}>{frame}</div>;
  return <Rnd bounds="parent" dragHandleClassName="window-drag-handle" minWidth={430} minHeight={320} size={{ width: windowData.width, height: windowData.height }} position={{ x: windowData.x, y: windowData.y }} style={{ zIndex: windowData.zIndex }} onDragStop={(_, data) => moveWindow(windowData.id, data.x, data.y)} onResizeStop={(_, __, ref, ___, position) => { resizeWindow(windowData.id, ref.offsetWidth, ref.offsetHeight); moveWindow(windowData.id, position.x, position.y); }} onMouseDown={() => focusWindow(windowData.id)}>{frame}</Rnd>;
}
