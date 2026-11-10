import { RotateCcw } from "lucide-react";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { labNotes } from "@/data/labNotes";

export function DesktopStatusPanel({ onResetLayout }: { onResetLayout: () => void }) {
  return <aside className="desktop-status"><span>SINANOS / RESEARCH EDITION</span><div><i/>Research case files<b>{projects.length}</b></div><div><i/>Publications & chapters<b>{publications.length}</b></div><div><i/>Research notes<b>{labNotes.length}</b></div><p>Omics. Protein dynamics. Drug discovery.<br/>A molecular biology & AI workstation.</p><button onClick={onResetLayout}><RotateCcw size={13}/>Reset icon layout</button></aside>;
}
