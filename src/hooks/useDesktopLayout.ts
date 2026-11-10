"use client";

import { useCallback, useEffect, useState } from "react";

export type DesktopPosition = { x: number; y: number };
export type DesktopPositions = Record<string, DesktopPosition>;

const storageKey = "sinanos-desktop-layout-v1";

export const defaultDesktopPositions: DesktopPositions = {
  about: { x: 18, y: 18 },
  research: { x: 18, y: 122 },
  projects: { x: 18, y: 226 },
  "model-zoo": { x: 132, y: 18 },
  publications: { x: 132, y: 122 },
  "lab-notes": { x: 132, y: 226 },
  terminal: { x: 18, y: 330 },
  contact: { x: 132, y: 330 },
  cv: { x: 18, y: 434 },
};

function isSavedLayout(value: unknown): value is DesktopPositions {
  if (!value || typeof value !== "object") return false;
  return Object.values(value).every((position) => {
    if (!position || typeof position !== "object") return false;
    const candidate = position as DesktopPosition;
    return Number.isFinite(candidate.x) && Number.isFinite(candidate.y);
  });
}

export function useDesktopLayout() {
  const [positions, setPositions] = useState<DesktopPositions>(defaultDesktopPositions);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return;
      const parsed: unknown = JSON.parse(saved);
      if (isSavedLayout(parsed)) setPositions({ ...defaultDesktopPositions, ...parsed });
    } catch {}
  }, []);

  const moveIcon = useCallback((id: string, position: DesktopPosition) => {
    setPositions((current) => {
      const next = { ...current, [id]: position };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const resetLayout = useCallback(() => {
    setPositions(defaultDesktopPositions);
    try { localStorage.removeItem(storageKey); } catch {}
  }, []);

  return { positions, moveIcon, resetLayout };
}
