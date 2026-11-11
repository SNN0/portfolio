"use client";

import { FolderOpen } from "lucide-react";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import { MusicTray } from "./MusicTray";

export function SystemTray() {
  const [clock, setClock] = useState("");
  useEffect(() => { const tick = () => setClock(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })); tick(); const id = setInterval(tick, 30000); return () => clearInterval(id); }, []);
  return <div className="system-tray"><span title="Research case files"><FolderOpen size={14}/><b>{projects.length} case files</b></span><MusicTray /><time>{clock}</time></div>;
}
