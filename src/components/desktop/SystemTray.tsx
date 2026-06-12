"use client";

import { Atom, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export function SystemTray() {
  const [clock, setClock] = useState("");
  useEffect(() => { const tick = () => setClock(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })); tick(); const id = setInterval(tick, 30000); return () => clearInterval(id); }, []);
  return <div className="system-tray"><span title="AI Core online"><Wifi size={14}/><b>AI Core: online</b></span><span title="GPU simulated"><Atom size={14}/><b>GPU: simulated</b></span><time>{clock}</time></div>;
}
