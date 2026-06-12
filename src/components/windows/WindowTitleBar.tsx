import { Dna } from "lucide-react";
import { WindowControls } from "@/components/windows/WindowControls";

export function WindowTitleBar({ title, active, onMinimize, onClose }: { title: string; active: boolean; onMinimize: () => void; onClose: () => void }) {
  return <header className={`window-titlebar ${active ? "active" : ""}`}><span className="window-drag-handle"><Dna aria-hidden="true" size={14}/><strong>{title}</strong></span><WindowControls onMinimize={onMinimize} onClose={onClose}/></header>;
}
