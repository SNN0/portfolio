"use client";

import { BookOpenText, Contact, FileDown, FileText, FlaskConical, FolderLock, Network, TerminalSquare } from "lucide-react";
import { useState } from "react";
import { useHashRouter } from "@/hooks/useHashRouter";
import { useWindowStore } from "@/hooks/useWindowStore";
import { useDesktopLayout } from "@/hooks/useDesktopLayout";
import { profile } from "@/data/profile";
import { DesktopIcon } from "@/components/desktop/DesktopIcon";
import { DraggableDesktopItem } from "@/components/desktop/DraggableDesktopItem";
import { DesktopStatusPanel } from "@/components/desktop/DesktopStatusPanel";
import { WindowManager } from "@/components/windows/WindowManager";
import { Taskbar } from "@/components/desktop/Taskbar";
import type { AppId } from "@/types/window";

const icons: { label: string; app: AppId; iconPath: string; mobileIcon: typeof Network }[] = [
  { label: "About.app", app: "about", iconPath: "/icons/app-about.svg", mobileIcon: Contact },
  { label: "Research_Matrix.exe", app: "research", iconPath: "/icons/app-omics.svg", mobileIcon: Network },
  { label: "Projects", app: "projects", iconPath: "/icons/app-protein.svg", mobileIcon: FolderLock },
  { label: "Model_Zoo", app: "model-zoo", iconPath: "/icons/app-model-zoo.svg", mobileIcon: FlaskConical },
  { label: "Publications", app: "publications", iconPath: "/icons/app-publications.svg", mobileIcon: FileText },
  { label: "Lab_Notes", app: "lab-notes", iconPath: "/icons/app-lab-notes.svg", mobileIcon: BookOpenText },
  { label: "Terminal", app: "terminal", iconPath: "/icons/app-terminal.svg", mobileIcon: TerminalSquare },
  { label: "Contact.vcf", app: "contact", iconPath: "/icons/app-contact.svg", mobileIcon: Contact },
];

export function Desktop() {
  const open = useWindowStore((state) => state.openWindow);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const { positions, moveIcon, resetLayout } = useDesktopLayout();
  useHashRouter(true);
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = profile.cvPath;
    link.download = "Sinan_Eyuboglu_CV.pdf";
    link.click();
  };

  return <main className="desktop" onClick={(event) => { if (event.target === event.currentTarget) setSelectedIcon(null); }}>
    <div className="desktop-grid" aria-label="SinanOS applications" onClick={(event) => { if (event.target === event.currentTarget) setSelectedIcon(null); }}>
      {icons.map((item) => <DraggableDesktopItem key={item.app} position={positions[item.app]} onMove={(position) => moveIcon(item.app, position)} onSelect={() => setSelectedIcon(item.app)}><DesktopIcon label={item.label} iconPath={item.iconPath} selected={selectedIcon === item.app} onSelect={() => setSelectedIcon(item.app)} onOpen={() => open(item.app)}/></DraggableDesktopItem>)}
      <DraggableDesktopItem position={positions.cv} onMove={(position) => moveIcon("cv", position)} onSelect={() => setSelectedIcon("cv")}><DesktopIcon label="Download_CV.pdf" icon={FileDown} selected={selectedIcon === "cv"} onSelect={() => setSelectedIcon("cv")} onOpen={downloadCv}/></DraggableDesktopItem>
    </div>
    <DesktopStatusPanel onResetLayout={() => { resetLayout(); setSelectedIcon(null); }}/>
    <div className="mobile-launcher"><span>SINANOS / RESEARCH WORKSTATION</span><h1>Explore the research</h1><div>{icons.map(({ label, app, mobileIcon: Icon }) => <button key={label} onClick={() => open(app)}><Icon/>{label}</button>)}<a href={profile.cvPath} download><FileDown/>Download CV</a></div></div>
    <WindowManager/>
    <Taskbar/>
  </main>;
}
