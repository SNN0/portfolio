"use client";

import { Dna } from "lucide-react";
import { useState } from "react";
import { useWindowStore } from "@/hooks/useWindowStore";
import { StartMenu } from "@/components/desktop/StartMenu";
import { SystemTray } from "@/components/desktop/SystemTray";

export function Taskbar() {
  const [menu, setMenu] = useState(false);
  const windows = useWindowStore((state) => state.windows);
  const restore = useWindowStore((state) => state.restoreWindow);
  const minimize = useWindowStore((state) => state.minimizeWindow);
  const topZ = useWindowStore((state) => state.topZ);
  return <><footer className="taskbar"><button className={`start-button ${menu ? "pressed" : ""}`} onClick={() => setMenu(!menu)} aria-expanded={menu}><Dna size={18}/><strong>SinanOS</strong></button><div className="task-items">{windows.map((item) => <button className={!item.isMinimized && item.zIndex === topZ ? "active" : ""} key={item.id} onClick={() => item.isMinimized ? restore(item.id) : item.zIndex === topZ ? minimize(item.id) : restore(item.id)}>{item.title}</button>)}</div><SystemTray/></footer>{menu && <StartMenu close={() => setMenu(false)}/>}</>;
}
