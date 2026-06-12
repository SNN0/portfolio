import { Cpu, Database, FlaskConical, MemoryStick, Terminal } from "lucide-react";
import { skills } from "@/data/skills";

const groups = [
  { key: "programming", title: "Programming", icon: Terminal },
  { key: "bioinformatics", title: "Bioinformatics", icon: Database },
  { key: "machineLearning", title: "Classical ML", icon: Cpu },
  { key: "deepLearning", title: "Deep Learning", icon: MemoryStick },
  { key: "statistics", title: "Statistical / Clinical", icon: Database },
  { key: "wetLab", title: "Wet-lab Foundation", icon: FlaskConical },
] as const;

export function ModelZooApp() {
  return <div className="app-shell scrollable specs-app">
    <header><p>BioAI System Specifications</p><h2>SinanOS Hardware / Software Profile</h2></header>
    <div className="spec-summary"><div><span>CPU</span><strong>Molecular Biotechnology</strong></div><div><span>GPU</span><strong>Artificial Intelligence</strong></div><div><span>MEMORY</span><strong>Omics + Protein Dynamics</strong></div><div><span>MODE</span><strong>Interpretable Research</strong></div></div>
    <div className="spec-grid">{groups.map(({ key, title, icon: Icon }) => <section key={key}><h3><Icon aria-hidden="true" size={17}/>{title}</h3><ul>{skills[key].map((skill) => <li key={skill}><i/>{skill}<span>installed</span></li>)}</ul></section>)}</div>
  </div>;
}
