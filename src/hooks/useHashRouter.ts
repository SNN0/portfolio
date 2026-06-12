"use client";

import { useEffect } from "react";
import { projects } from "@/data/projects";
import { useWindowStore } from "@/hooks/useWindowStore";
import type { AppId } from "@/types/window";

const aliases: Record<string, AppId> = {
  about: "about", research: "research", projects: "projects", publications: "publications",
  terminal: "terminal", contact: "contact", "model-zoo": "model-zoo", "lab-notes": "lab-notes", welcome: "welcome",
};

export function useHashRouter(ready: boolean) {
  const openWindow = useWindowStore((state) => state.openWindow);
  useEffect(() => {
    if (!ready) return;
    const route = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash.startsWith("project/")) {
        const id = hash.split("/")[1];
        if (projects.some((project) => project.id === id)) return openWindow("project", { projectId: id }, false);
      }
      const app = aliases[hash];
      openWindow(app ?? "welcome", undefined, false);
    };
    route();
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, [ready, openWindow]);
}
