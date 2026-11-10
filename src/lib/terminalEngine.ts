import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import type { AppId } from "@/types/window";

export type TerminalAction = { output: string; open?: AppId; projectId?: string; href?: string; clear?: boolean };

const aliases: Record<string, string> = { pdac: "pdac-biomarker", alzheimer: "alzheimers-apoe-network", "drug-response": "drug-response-profiler", idp: "idp-dynamics", pocket: "cryptic-pocket-hunter", organoid: "multiomics-organoid-drug-resistance" };

export function runTerminalCommand(raw: string): TerminalAction {
  const command = raw.trim().toLowerCase();
  if (!command) return { output: "" };
  if (command === "help") return { output: "help\nwhoami\nopen about | projects | project <id>\ncat publications.txt\nls skills\nrun research-matrix\ndownload cv\ncontact --email | --linkedin | --github\nclear" };
  if (command === "whoami") return { output: `${profile.displayName}\nMolecular biotechnology graduate\nM.Sc. Artificial Intelligence student\nResearch focus: BioAI, omics, protein dynamics, drug discovery` };
  if (command === "ls skills") return { output: `bioinformatics/\n  ${skills.bioinformatics.join("\n  ")}\n\nprogramming/\n  ${skills.programming.join("\n  ")}\n\nmodels/\n  ${[...skills.machineLearning, ...skills.deepLearning].join("\n  ")}\n\nwetlab/\n  ${skills.wetLab.join("\n  ")}` };
  if (command === "cat publications.txt") return { output: publications.map((item, index) => `${index + 1}. [${item.status}] ${item.title}`).join("\n") };
  if (command === "run research-matrix") return { output: "Loading research matrix...\n\n[BioAI]\n|- Omics & disease systems biology\n|- AI for protein dynamics\n|- Drug response modeling\n`- Interpretable computational pipelines", open: "research" };
  if (command === "open about") return { output: "Opening About_Sinan.exe...", open: "about" };
  if (command === "open projects") return { output: "Opening Research_Case_Files...", open: "projects" };
  if (command.startsWith("open project ")) {
    const key = command.replace("open project ", "");
    const id = aliases[key] ?? key;
    if (projects.some((project) => project.id === id)) return { output: `Opening ${id}...`, open: "project", projectId: id };
    return { output: `Project not found: ${key}` };
  }
  if (command === "download cv") return { output: "Preparing public CV download...", href: profile.cvPath };
  if (command === "contact --email") return { output: `Opening email channel: ${profile.email}`, href: `mailto:${profile.email}` };
  if (command === "contact --linkedin") return { output: "Opening LinkedIn network...", href: profile.linkedin };
  if (command === "contact --github") return { output: "Opening GitHub repository network...", href: profile.github };
  if (command === "clear") return { output: "", clear: true };
  return { output: `Command not found: ${raw}\nType 'help' to list available commands.` };
}
