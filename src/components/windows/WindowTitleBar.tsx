import { Dna } from "lucide-react";
import { WindowControls } from "@/components/windows/WindowControls";
import type { AppId } from "@/types/window";

const appIcons: Partial<Record<AppId, string>> = { about: "about", research: "omics", project: "protein", projects: "protein", publications: "publications", "model-zoo": "model-zoo", "lab-notes": "lab-notes", terminal: "terminal", contact: "contact" };

export function WindowTitleBar({ title, active, appId, onMinimize, onClose, onMaximize, maximized }: { title: string; active: boolean; appId: AppId; onMinimize: () => void; onClose: () => void; onMaximize: () => void; maximized: boolean }) {
  return <header className={`window-titlebar ${active ? "active" : ""}`}><span className="window-drag-handle" onDoubleClick={onMaximize}>{appIcons[appId] ? <img src={`/icons/app-${appIcons[appId]}.svg`} alt="" aria-hidden="true"/> : <Dna aria-hidden="true" size={15}/>}<strong>{title}</strong></span><WindowControls onMinimize={onMinimize} onClose={onClose} onMaximize={onMaximize} maximized={maximized}/></header>;
}
