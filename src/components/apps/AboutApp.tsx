import { profile } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

const layers = [
  { name: "Bench Layer", items: "PCR, SDS-PAGE, cloning, chromatography, diagnostic assays" },
  { name: "Data Layer", items: "RNA-seq, TCGA/GEO, proteomics, survival data, MD simulation states" },
  { name: "Model Layer", items: "SVM, Random Forest, Logistic Regression, GCN, GRU, LSTM, GNNs" },
];

export function AboutApp() {
  return <div className="app-shell scrollable">
    <SectionHeader eyebrow="SYSTEM IDENTITY" title="Molecular biology at the base. AI in the loop." />
    <div className="identity-grid">
      <Card><dl className="system-list"><div><dt>Name</dt><dd>{profile.displayName}</dd></div><div><dt>Base Layer</dt><dd>Molecular Biotechnology</dd></div><div><dt>Current Module</dt><dd>M.Sc. Artificial Intelligence</dd></div><div><dt>Research Mode</dt><dd>Bioinformatics + Computational Biology + Protein AI</dd></div><div><dt>Location</dt><dd>{profile.location}</dd></div></dl></Card>
      <div className="narrative"><p>I started from molecular biotechnology, where biological systems are learned from the bench level: PCR, cloning, chromatography, SDS-PAGE, and molecular diagnostics. I now work on the computational side of biology, building AI-driven workflows for omics data, disease systems biology, protein dynamics, and drug discovery.</p><blockquote>How can machine learning models help us understand biological systems that are too high-dimensional, dynamic, or disordered for static interpretation?</blockquote></div>
    </div>
    <h3 className="subhead">Education timeline</h3>
    <div className="timeline">{profile.education.map((item) => <article key={item.degree}><span>{item.years}</span><div><strong>{item.degree}</strong><p>{item.institution}</p><small>{item.focus}</small></div></article>)}</div>
    <h3 className="subhead">Bench-to-model bridge</h3>
    <div className="layer-grid">{layers.map((layer, i) => <Card key={layer.name}><span>0{i + 1}</span><h4>{layer.name}</h4><p>{layer.items}</p></Card>)}</div>
  </div>;
}
