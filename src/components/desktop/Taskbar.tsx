"use client";

import { Dna } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useWindowStore } from "@/hooks/useWindowStore";
import { StartMenu } from "@/components/desktop/StartMenu";
import { SystemTray } from "@/components/desktop/SystemTray";

export function Taskbar() {
  const [menu, setMenu] = useState(false);
  const menuRoot = useRef<HTMLDivElement>(null);
  const windows = useWindowStore((state) => state.windows);
  const restore = useWindowStore((state) => state.restoreWindow);
  const minimize = useWindowStore((state) => state.minimizeWindow);
  const activeId = windows.filter((item) => !item.isMinimized).reduce<typeof windows[number] | undefined>((top, item) => !top || item.zIndex > top.zIndex ? item : top, undefined)?.id;
  useEffect(() => {
    if (!menu) return;
    const outside = (event: PointerEvent) => { if (!menuRoot.current?.contains(event.target as Node)) setMenu(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenu(false); };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [menu]);
  return <div ref={menuRoot}><footer className="taskbar"><button className={`start-button ${menu ? "pressed" : ""}`} onClick={() => setMenu(!menu)} aria-expanded={menu}><Dna size={18}/><strong>SinanOS</strong></button><div className="task-items">{windows.map((item) => <button className={item.id === activeId ? "active" : ""} key={item.id} onClick={() => item.isMinimized ? restore(item.id) : item.id === activeId ? minimize(item.id) : restore(item.id)}>{item.title}</button>)}</div><SystemTray/></footer>{menu && <StartMenu close={() => setMenu(false)}/>}</div>;
}
