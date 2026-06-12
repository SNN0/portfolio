"use client";

import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const bootLines = [
  "Initializing molecular environment...",
  "Loading omics datasets...",
  "Mounting TCGA/GEO volumes...",
  "Compiling graph neural modules...",
  "Indexing intrinsically disordered protein states...",
  "Starting cryptic pocket scanner...",
  "Network connection established.",
  "Welcome, visitor.",
];

export function useBootSequence() {
  const reducedMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(0);
  const [complete, setComplete] = useState(false);
  const skip = useCallback(() => { setVisibleLines(bootLines.length); setComplete(true); }, []);

  useEffect(() => {
    if (reducedMotion) return skip();
    const timer = window.setInterval(() => setVisibleLines((count) => {
      if (count >= bootLines.length - 1) { window.clearInterval(timer); return bootLines.length; }
      return count + 1;
    }), 300);
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") skip(); };
    window.addEventListener("keydown", key);
    return () => { window.clearInterval(timer); window.removeEventListener("keydown", key); };
  }, [reducedMotion, skip]);

  return { visibleLines, complete, enter: () => setComplete(true), skip };
}
