import { researchAreas } from "@/data/researchAreas";
import { Badge } from "@/components/ui/Badge";
import { NetworkGraph } from "@/components/scientific/NetworkGraph";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ResearchAreasApp() {
  return <div className="app-shell scrollable research-app">
    <SectionHeader eyebrow="CONNECTED DOMAINS" title="Research Matrix" text="Biological question -> data layer -> computational pipeline -> interpretable signal." />
    <div className="research-layout"><div className="matrix-visual"><NetworkGraph/><div className="matrix-core">BIO<br/>AI</div></div><div className="research-grid">{researchAreas.map((area, index) => <article key={area.id} className={`research-card research-${index + 1}`}><span>MODULE_0{index + 1}</span><h3>{area.title}</h3><p>{area.description}</p><div>{area.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div></article>)}</div></div>
  </div>;
}
