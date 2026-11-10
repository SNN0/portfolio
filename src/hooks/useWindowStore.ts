"use client";

import { create } from "zustand";
import { appTitles, windowPresets } from "@/lib/windowPresets";
import { projects } from "@/data/projects";
import type { AppId, AppWindow } from "@/types/window";

type WindowState = {
  windows: AppWindow[];
  topZ: number;
  openWindow: (appId: AppId, payload?: AppWindow["payload"], updateHash?: boolean) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  moveWindow: (id: string, x: number, y: number) => void;
  resizeWindow: (id: string, width: number, height: number) => void;
  toggleMaximizeWindow: (id: string) => void;
};

function hashFor(appId: AppId, payload?: AppWindow["payload"]) {
  if (appId === "research") return "#research";
  if (appId === "model-zoo") return "#model-zoo";
  if (appId === "lab-notes") return "#lab-notes";
  if (appId === "project" && payload?.projectId) return `#project/${payload.projectId}`;
  return `#${appId}`;
}

export const useWindowStore = create<WindowState>((set, get) => ({
  windows: [],
  topZ: 10,
  openWindow: (appId, payload, updateHash = true) => {
    const projectId = payload?.projectId;
    const id = appId === "project" && projectId ? `project-${projectId}` : appId;
    const existing = get().windows.find((item) => item.id === id);
    const zIndex = get().topZ + 1;
    if (existing) {
      set({ windows: get().windows.map((item) => item.id === id ? { ...item, isOpen: true, isMinimized: false, zIndex } : item), topZ: zIndex });
    } else {
      const preset = windowPresets[appId];
      const project = projectId ? projects.find((item) => item.id === projectId) : undefined;
      set({ windows: [...get().windows, { id, appId, title: project?.appName ?? appTitles[appId], isOpen: true, isMinimized: false, zIndex, ...preset, payload }], topZ: zIndex });
    }
    if (updateHash && typeof window !== "undefined") history.replaceState(null, "", hashFor(appId, payload));
  },
  closeWindow: (id) => set({ windows: get().windows.filter((item) => item.id !== id) }),
  minimizeWindow: (id) => set({ windows: get().windows.map((item) => item.id === id ? { ...item, isMinimized: true } : item) }),
  focusWindow: (id) => {
    const zIndex = get().topZ + 1;
    set({ windows: get().windows.map((item) => item.id === id ? { ...item, zIndex } : item), topZ: zIndex });
  },
  restoreWindow: (id) => {
    const zIndex = get().topZ + 1;
    set({ windows: get().windows.map((item) => item.id === id ? { ...item, isMinimized: false, zIndex } : item), topZ: zIndex });
  },
  moveWindow: (id, x, y) => set({ windows: get().windows.map((item) => item.id === id ? { ...item, x, y } : item) }),
  resizeWindow: (id, width, height) => set({ windows: get().windows.map((item) => item.id === id ? { ...item, width, height } : item) }),
  toggleMaximizeWindow: (id) => {
    const zIndex = get().topZ + 1;
    set({ windows: get().windows.map((item) => item.id === id ? { ...item, isMaximized: !item.isMaximized, isMinimized: false, zIndex } : item), topZ: zIndex });
  },
}));
