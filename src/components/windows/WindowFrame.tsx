"use client";

import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { useWindowStore } from "@/hooks/useWindowStore";
import { WindowTitleBar } from "@/components/windows/WindowTitleBar";
import type { AppWindow } from "@/types/window";
import type { PropsWithChildren } from "react";

export function WindowFrame({ windowData, active, children }: PropsWithChildren<{ windowData: AppWindow; active: boolean }>) {
  const [mobile, setMobile] = useState(false);
  const [viewport, setViewport] = useState({ width: 1280, height: 800 });
  const { closeWindow, minimizeWindow, focusWindow, moveWindow, resizeWindow, toggleMaximizeWindow } = useWindowStore();
  useEffect(() => {
    const query = matchMedia("(max-width: 720px)");
    const sync = () => {
      setMobile(query.matches);
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);
  if (windowData.isMinimized) return null;

  const frame = <section className="window-frame" role="dialog" aria-label={windowData.title} onMouseDown={() => focusWindow(windowData.id)}>
    <WindowTitleBar title={windowData.title} active={active} appId={windowData.appId} maximized={!!windowData.isMaximized} onMaximize={() => toggleMaximizeWindow(windowData.id)} onMinimize={() => minimizeWindow(windowData.id)} onClose={() => closeWindow(windowData.id)}/>
    <div className="window-content">{children}</div>
  </section>;

  if (mobile) return <div className="mobile-window" style={{ zIndex: windowData.zIndex }}>{frame}</div>;
  const maximized = !!windowData.isMaximized;
  const width = maximized ? viewport.width - 24 : Math.min(windowData.width, viewport.width - 24);
  const height = maximized ? viewport.height - 67 : Math.min(windowData.height, viewport.height - 67);
  const x = maximized ? 12 : Math.max(12, Math.min(windowData.x, viewport.width - width - 12));
  const y = maximized ? 12 : Math.max(12, Math.min(windowData.y, viewport.height - height - 55));
  return <Rnd bounds="parent" dragHandleClassName="window-drag-handle" disableDragging={maximized} enableResizing={!maximized} minWidth={Math.min(430, width)} minHeight={Math.min(320, height)} maxWidth={viewport.width - 24} maxHeight={viewport.height - 67} size={{ width, height }} position={{ x, y }} style={{ zIndex: windowData.zIndex }} onDragStop={(_, data) => moveWindow(windowData.id, data.x, data.y)} onResizeStop={(_, __, ref, ___, position) => { resizeWindow(windowData.id, ref.offsetWidth, ref.offsetHeight); moveWindow(windowData.id, position.x, position.y); }}>{frame}</Rnd>;
}
