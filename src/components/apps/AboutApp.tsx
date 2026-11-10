"use client";

import { useState } from "react";
import { Download, Monitor, UserRound } from "lucide-react";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { RetroTabs } from "@/components/common/RetroTabs";

const tabs = [{ id: "general", label: "General" }, { id: "experience", label: "Experience" }, { id: "education", label: "Education" }, { id: "methods", label: "Methods" }] as const;
type TabId = typeof tabs[number]["id"];
const layers = [
  { name: "Bench layer", items: "PCR, SDS-PAGE, cloning, chromatography, diagnostic assays", description: "Understanding the experiments and physical constraints behind biological measurements." },
  { name: "Data layer", items: "RNA-seq, TCGA/GEO, proteomics, survival analysis, MD simulation states", description: "Connecting molecular datasets with disease context and interpretable biological questions." },
  { name: "Model layer", items: "PyTorch, PyTorch Geometric, scikit-learn, VAE-style models, GCN, GRU, LSTM", description: "Classification, graph and temporal modeling, and latent representations of splicing regulation." },
];
export function AboutApp() {
  const [tab, setTab] = useState<TabId>("general");
  return <div className="workstation-app about-properties">
    <header className="properties-heading"><Monitor size={22} /><div><h2>System Properties</h2><p>The person behind the workstation.</p></div><span>SinanOS / BioAI</span></header>
    <RetroTabs tabs={tabs} value={tab} onChange={setTab} label="System properties" prefix="properties" />
    <div key={tab} className="properties-panel scrollable" role="tabpanel" id="properties-panel" aria-labelledby={`properties-tab-${tab}`} tabIndex={0}>
      {tab === "general" && <><div className="identity-overview"><div className="identity-emblem" aria-hidden="true"><UserRound size={48} /><span>SE</span></div><div><p className="terminal-kicker">REGISTERED TO</p><h2>{profile.displayName}</h2><p>{profile.title}</p><small>{profile.location}</small></div></div><fieldset className="retro-fieldset"><legend>Research profile</legend><p>{profile.shortBio}</p><dl className="properties-list"><div><dt>Foundation</dt><dd>Molecular Biotechnology</dd></div><div><dt>Current training</dt><dd>M.Sc. Artificial Intelligence</dd></div><div><dt>Research interests</dt><dd>Omics, protein dynamics & drug discovery</dd></div></dl></fieldset><p className="properties-question">How can machine learning help us understand biological systems that are high-dimensional, dynamic, or disordered?</p></>}
      {tab === "experience" && <div className="properties-timeline">{experience.map((item) => <article key={item.role}><span>{item.period}</span><div><h3>{item.role}</h3><strong>{item.organization}</strong><p>{item.description}</p></div></article>)}</div>}
      {tab === "education" && <div className="properties-timeline">{[...profile.education].reverse().map((item) => <article key={item.degree}><span>{item.years}</span><div><h3>{item.degree}</h3><strong>{item.institution}</strong><p>{item.focus}</p>{item.thesis && <p><b>Thesis:</b> {item.thesis}</p>}</div></article>)}</div>}
      {tab === "methods" && <div className="properties-methods">{layers.map((layer, index) => <fieldset key={layer.name} className="retro-fieldset"><legend>0{index + 1} / {layer.name}</legend><h3>{layer.items}</h3><p>{layer.description}</p></fieldset>)}</div>}
    </div>
    <footer className="properties-footer"><span>Molecular biology at the base. AI in the loop.</span><a className="retro-button" href={profile.cvPath} download><Download size={14} />Download CV</a></footer>
  </div>;
}
