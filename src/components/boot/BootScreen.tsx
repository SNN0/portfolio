"use client";

import { Dna } from "lucide-react";
import { useBootSequence, bootLines } from "@/hooks/useBootSequence";
import { BootLog } from "@/components/boot/BootLog";
import { Desktop } from "@/components/desktop/Desktop";

export function BootScreen() {
  const { visibleLines, complete, enter, skip } = useBootSequence();
  if (complete) return <Desktop/>;
  return <main className="boot-screen"><div className="boot-panel"><header><Dna/><div><p>SinanOS v1.0</p><h1>BioAI Workstation</h1></div></header><BootLog visibleLines={visibleLines}/><div className="boot-progress"><i style={{ width: `${Math.max(5, (visibleLines / bootLines.length) * 100)}%` }}/></div><div className="boot-actions"><button onClick={enter} disabled={visibleLines < bootLines.length}>Enter Workstation</button><button onClick={skip}>Skip boot</button><span>Press ESC to skip boot</span></div></div></main>;
}
