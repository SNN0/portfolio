import { projects, projectContributions } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { SafePublicNote } from "@/components/common/SafePublicNote";
import { PipelineDiagram } from "@/components/scientific/PipelineDiagram";
import { OmicsHeatmap } from "@/components/scientific/OmicsHeatmap";
import { NetworkGraph } from "@/components/scientific/NetworkGraph";
import { ProteinRibbon } from "@/components/scientific/ProteinRibbon";
import { DescriptorGrid } from "@/components/scientific/DescriptorGrid";
import { publications } from "@/data/publications";
import { ExternalLink } from "@/components/common/ExternalLink";

function ProjectVisual({ id }: { id: string }) {
  if (id === "alzheimers-apoe-network") return <NetworkGraph/>;
  if (id === "idp-dynamics") return <div><ProteinRibbon compact/><div className="time-strip"><span>t0</span><i/><span>t1</span><i/><span>t2</span><i/><strong>prediction</strong></div></div>;
  if (id === "cryptic-pocket-hunter") return <div><ProteinRibbon compact/><DescriptorGrid/></div>;
  return <OmicsHeatmap/>;
}

export function ProjectCaseFileApp({ projectId }: { projectId?: string }) {
  const project = projects.find((item) => item.id === projectId) ?? projects[0];
  const contribution = projectContributions[project.id];
  const related = publications.filter((item) => item.relatedProjectIds?.includes(project.id));
  return <div className="app-shell scrollable case-file">
    <header className="case-header"><div><p>RESEARCH CASE FILE / {project.id.toUpperCase()}</p><h2>{project.title}</h2><div>{project.domain.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div></div><dl><div><dt>Institution</dt><dd>{project.institution}</dd></div><div><dt>{project.appointment ? "Stage" : "Year"}</dt><dd>{project.year}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div></dl></header>
    {project.appointment ? <section className="panel-card appointment-details">
      <h3>Research appointment</h3><p>{project.mission}</p>
      <dl className="system-list">
        <div><dt>Role</dt><dd>{project.appointment.role}</dd></div>
        <div><dt>Funding</dt><dd>{project.appointment.funding}</dd></div>
        <div><dt>Project No.</dt><dd>{project.appointment.projectNumber}</dd></div>
        <div><dt>Principal investigator</dt><dd>{project.appointment.principalInvestigator}</dd></div>
      </dl>
    </section> : <>
    <div className="case-intro"><section><h3>Mission</h3><p>{project.mission}</p><h3>Biological Question</h3><blockquote>{project.biologicalQuestion}</blockquote></section><aside><ProjectVisual id={project.id}/></aside></div>
    {contribution && <section className="case-personal-contribution"><h3>My contribution</h3><p>{contribution}</p></section>}
    <div className="case-columns"><section><h3>Data Layer</h3><ul>{project.dataLayer.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h3>Model Stack</h3><div className="model-chips">{project.modelStack.map((item) => <Badge key={item}>{item}</Badge>)}</div></section></div>
    <section><h3>Computational Pipeline</h3><PipelineDiagram steps={project.pipeline}/></section>
    <div className="signal-grid"><section><span>RESEARCH SIGNAL</span><p>{project.researchSignal}</p></section><section><span>WHY IT MATTERS</span><p>{project.whyItMatters}</p></section></div>
    </>}
    {related.length > 0 && <section className="case-related-publications"><h3>Related publications & writing</h3>{related.map((item) => <article key={item.title}><p>{item.title}</p><small>{item.status.replaceAll("-", " ")}{item.year ? ` / ${item.year}` : ""}</small>{item.doi && <ExternalLink href={item.doi}>Read publication</ExternalLink>}</article>)}</section>}
    <SafePublicNote>{project.publicViewNote}</SafePublicNote>
  </div>;
}
