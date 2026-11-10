"use client";

import { researchAreas } from "@/data/researchAreas";
import { projects } from "@/data/projects";
import { useWindowStore } from "@/hooks/useWindowStore";
import { Badge } from "@/components/ui/Badge";
import { NetworkGraph } from "@/components/scientific/NetworkGraph";
import { SectionHeader } from "@/components/common/SectionHeader";
const related: Record<string, string[]> = {
  omics: ["pdac-biomarker", "alzheimers-apoe-network"],
  "protein-dynamics": ["idp-dynamics", "cryptic-pocket-hunter"],
  "drug-discovery": ["drug-response-profiler", "multiomics-organoid-drug-resistance"],
  "interpretable-bioai": ["pdac-biomarker", "drug-response-profiler"],
};
export function ResearchAreasApp() {
  const open = useWindowStore((state) => state.openWindow);
  return <div className="app-shell scrollable research-app">
    <SectionHeader eyebrow="CONNECTED DOMAINS" title="Research Matrix" text="Biological questions, computational methods, and the research files that connect them." />
    <div className="research-layout"><div className="matrix-visual"><NetworkGraph/><div className="matrix-core">BIO<br/>AI</div><span className="matrix-caption">Conceptual research connections</span></div><div className="research-grid">{researchAreas.map((area, index) => <article key={area.id} className={`research-card research-${index + 1}`}><span>MODULE_0{index + 1}</span><h3>{area.title}</h3><p>{area.description}</p><div>{area.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div><div className="matrix-case-links">{related[area.id].map((id) => <button key={id} onClick={() => open("project", { projectId: id })}>{projects.find((project) => project.id === id)?.appName} ↗</button>)}</div></article>)}</div></div>
  </div>;
}
