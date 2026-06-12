"use client";

import { FolderLock, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useWindowStore } from "@/hooks/useWindowStore";
import { SafePublicNote } from "@/components/common/SafePublicNote";
import { Badge } from "@/components/ui/Badge";

export function ProjectsApp() {
  const open = useWindowStore((state) => state.openWindow);
  return <div className="app-shell scrollable">
    <SafePublicNote>These case files summarize public-safe methodology and research direction. Raw datasets, source code, unpublished results, and confidential materials are intentionally not displayed.</SafePublicNote>
    <div className="file-toolbar"><span>5 research case files</span><span>View: methodology + reasoning</span></div>
    <div className="project-list">{projects.map((project, index) => <button key={project.id} onClick={() => open("project", { projectId: project.id })} className="project-file">
      <span className="folder-icon"><FolderLock aria-hidden="true"/><small>{String(index + 1).padStart(2, "0")}</small></span>
      <span className="project-file-copy"><small>{project.appName}</small><strong>{project.title}</strong><span>{project.mission}</span><span className="badge-line">{project.domain.map((tag) => <Badge key={tag}>{tag}</Badge>)}</span></span>
      <span className="file-meta"><small>{project.year}</small><em>{project.status}</em><ArrowUpRight aria-hidden="true"/></span>
    </button>)}</div>
  </div>;
}
