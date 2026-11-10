"use client";

import { useWindowStore } from "@/hooks/useWindowStore";
import { WindowFrame } from "@/components/windows/WindowFrame";
import { WelcomeApp } from "@/components/apps/WelcomeApp";
import { AboutApp } from "@/components/apps/AboutApp";
import { ResearchAreasApp } from "@/components/apps/ResearchAreasApp";
import { ProjectsApp } from "@/components/apps/ProjectsApp";
import { ProjectCaseFileApp } from "@/components/apps/ProjectCaseFileApp";
import { PublicationsApp } from "@/components/apps/PublicationsApp";
import { ModelZooApp } from "@/components/apps/ModelZooApp";
import { LabNotesApp } from "@/components/apps/LabNotesApp";
import { TerminalApp } from "@/components/apps/TerminalApp";
import { ContactApp } from "@/components/apps/ContactApp";
import type { AppWindow } from "@/types/window";

function AppContent({ item }: { item: AppWindow }) {
  switch (item.appId) {
    case "welcome": return <WelcomeApp/>;
    case "about": return <AboutApp/>;
    case "research": return <ResearchAreasApp/>;
    case "projects": return <ProjectsApp/>;
    case "project": return <ProjectCaseFileApp projectId={item.payload?.projectId}/>;
    case "publications": return <PublicationsApp/>;
    case "model-zoo": return <ModelZooApp/>;
    case "lab-notes": return <LabNotesApp/>;
    case "terminal": return <TerminalApp/>;
    case "contact": return <ContactApp/>;
  }
}

export function WindowManager() {
  const windows = useWindowStore((state) => state.windows);
  const activeId = windows.filter((item) => item.isOpen && !item.isMinimized).reduce<typeof windows[number] | undefined>((top, item) => !top || item.zIndex > top.zIndex ? item : top, undefined)?.id;
  return <>{windows.filter((item) => item.isOpen).map((item) => <WindowFrame key={item.id} windowData={item} active={item.id === activeId}><AppContent item={item}/></WindowFrame>)}</>;
}
