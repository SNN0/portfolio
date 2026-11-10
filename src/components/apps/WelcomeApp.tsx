"use client";

import { ArrowRight, Download, FlaskConical, TerminalSquare } from "lucide-react";
import { profile } from "@/data/profile";
import { useWindowStore } from "@/hooks/useWindowStore";
import { ProteinRibbon } from "@/components/scientific/ProteinRibbon";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { Button } from "@/components/ui/Button";

export function WelcomeApp() {
  const open = useWindowStore((state) => state.openWindow);
  return <div className="welcome-app app-shell">
    <div className="welcome-copy">
      <p className="terminal-kicker">SINANOS::IDENTITY_LOADED</p>
      <h1>{profile.displayName}</h1>
      <h2>{profile.title}</h2>
      <p className="hero-line">{profile.headline}</p>
      <p>{profile.shortBio}</p>
      <div className="button-row">
        <Button onClick={() => open("research")}><FlaskConical size={15}/>Open Research Matrix</Button>
        <Button onClick={() => open("projects")}><ArrowRight size={15}/>View Projects</Button>
        <a className="retro-button" href={profile.cvPath} download><Download size={15}/>Download CV</a>
        <Button onClick={() => open("terminal")}><TerminalSquare size={15}/>Launch Terminal</Button>
      </div>
      <div className="status-strip"><span>Current focus</span>AI for protein dynamics, omics-scale disease profiling, and druggable state discovery.</div>
    </div>
    <div className="welcome-visual"><ProteinRibbon/><div className="visual-caption"><i />Protein dynamics / conceptual view</div><div className="welcome-counts"><span><strong>{projects.length}</strong>case files</span><span><strong>{publications.filter((item) => item.status === "published").length}</strong>published</span><span><strong>{publications.filter((item) => item.status === "in-press").length}</strong>in press</span></div></div>
  </div>;
}
