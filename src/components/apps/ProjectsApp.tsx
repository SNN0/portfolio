"use client";

import { useMemo, useState } from "react";
import { ArrowRight, FileSearch, Folder, FolderOpen, Search } from "lucide-react";
import { projects, projectContributions } from "@/data/projects";
import { useWindowStore } from "@/hooks/useWindowStore";
import { Badge } from "@/components/ui/Badge";

const folders = [
  { id: "all", label: "All research", ids: projects.map((project) => project.id) },
  { id: "omics", label: "Disease & omics", ids: ["pdac-biomarker", "alzheimers-apoe-network", "drug-response-profiler"] },
  { id: "proteins", label: "Protein AI", ids: ["idp-dynamics", "cryptic-pocket-hunter"] },
  { id: "incoming", label: "Incoming research", ids: ["multiomics-organoid-drug-resistance"] },
];

export function ProjectsApp() {
  const open = useWindowStore((state) => state.openWindow);
  const [folderId, setFolderId] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const folder = folders.find((item) => item.id === folderId)!;
  const visible = useMemo(() => projects.filter((project) =>
    folder.ids.includes(project.id) && [project.title, project.appName, project.institution, ...project.domain, ...project.modelStack].join(" ").toLowerCase().includes(query.toLowerCase().trim())
  ), [folder, query]);
  const selected = visible.find((item) => item.id === selectedId) ?? visible[0];
  const launch = (id: string) => open("project", { projectId: id });
  return <div className="workstation-app explorer-app">
    <div className="app-address"><FolderOpen size={16} /><span>SinanOS</span><b>›</b><span>Research</span><b>›</b><strong>{folder.label}</strong></div>
    <div className="app-toolbar"><span className="toolbar-label">Research Explorer</span><label className="retro-search"><Search size={14} /><input aria-label="Search research files" placeholder="Find a project or method…" value={query} onChange={(event) => setQuery(event.target.value)} /></label></div>
    <div className="explorer-layout">
      <nav className="explorer-folders" aria-label="Research folders"><p>RESEARCH FOLDERS</p>{folders.map((item) => <button key={item.id} aria-pressed={folderId === item.id} onClick={() => setFolderId(item.id)}>{folderId === item.id ? <FolderOpen size={16} /> : <Folder size={16} />}<span>{item.label}</span><small>{item.ids.length}</small></button>)}<div className="explorer-hint"><FileSearch size={26} /><p>Select a file to preview it.<br />Double-click or press Enter to open.</p></div></nav>
      <div className="explorer-files" aria-label="Research files"><div className="explorer-columns"><span>Name</span><span>Year / stage</span></div><div className="explorer-file-list">
        {visible.map((project) => <button key={project.id} className="explorer-file" aria-label={`Select ${project.appName}`} aria-pressed={selected?.id === project.id} onClick={() => setSelectedId(project.id)} onDoubleClick={() => launch(project.id)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); launch(project.id); } }}><Folder size={23} /><span><strong>{project.appName}</strong><small>{project.domain[0]}</small></span><em>{project.year}</em></button>)}
        {visible.length === 0 && <div className="retro-empty"><FileSearch size={32} /><h3>No matching files</h3><p>Try another project name or method.</p><button className="retro-button" onClick={() => { setQuery(""); setFolderId("all"); }}>Show all research</button></div>}
      </div></div>
      <aside key={selected?.id} className="explorer-preview" aria-label="Selected research preview" aria-live="polite">{selected ? <><div className="explorer-preview-body"><div className="preview-file-icon"><FolderOpen size={31} /><span>RESEARCH FILE</span></div><h2>{selected.title}</h2><dl><div><dt>Institution</dt><dd>{selected.institution}</dd></div><div><dt>Status</dt><dd>{selected.status}</dd></div></dl><h3>Research question</h3><p>{selected.biologicalQuestion}</p>{projectContributions[selected.id] && <><h3>My contribution</h3><p>{projectContributions[selected.id]}</p></>}<div className="preview-methods">{selected.modelStack.slice(0, 4).map((method) => <Badge key={method}>{method}</Badge>)}</div></div><div className="explorer-preview-action"><button className="retro-button primary" onClick={() => launch(selected.id)}>Open case file<ArrowRight size={14} /></button></div></> : <p>Select a research folder to browse its files.</p>}</aside>
    </div>
    <footer className="app-statusbar"><span>{visible.length} of {projects.length} research files</span><span>{selected?.appName ?? "No file selected"}</span></footer>
  </div>;
}
