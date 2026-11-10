"use client";

import { BookOpenText, Contact, Dna, ExternalLink, FileText, FlaskConical, Github, Linkedin, Mail, Microscope, Network, TerminalSquare } from "lucide-react";
import { profile } from "@/data/profile";
import { useWindowStore } from "@/hooks/useWindowStore";
import type { AppId } from "@/types/window";

const programs: { label: string; app: AppId; icon: typeof Dna }[] = [
  { label: "System Properties", app: "about", icon: Contact }, { label: "Research Matrix", app: "research", icon: Network }, { label: "Research Explorer", app: "projects", icon: Dna }, { label: "Model Zoo", app: "model-zoo", icon: Microscope }, { label: "Publications", app: "publications", icon: FileText }, { label: "Lab Notes", app: "lab-notes", icon: BookOpenText }, { label: "Terminal", app: "terminal", icon: TerminalSquare },
];

export function StartMenu({ close }: { close: () => void }) {
  const open = useWindowStore((state) => state.openWindow);
  const launch = (app: AppId) => { open(app); close(); };
  return <div className="start-menu"><div className="start-rail">SINANOS <small>BIOAI WORKSTATION</small></div><div className="start-body"><section><h3>Programs</h3>{programs.map(({ label, app, icon: Icon }) => <button key={label} onClick={() => launch(app)}><Icon/>{label}</button>)}</section><section><h3>Documents</h3><a href={profile.cvPath} download><FileText/>CV.pdf</a><button onClick={() => launch("projects")}><FlaskConical/>Research Case Files</button></section><section><h3>Network</h3><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/>LinkedIn<ExternalLink/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github/>GitHub<ExternalLink/></a><a href={`mailto:${profile.email}`}><Mail/>Email</a><button onClick={() => launch("contact")}><Contact/>Connection Center</button></section></div></div>;
}
