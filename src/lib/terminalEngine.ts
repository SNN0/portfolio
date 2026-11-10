import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { desktopEntries } from "@/data/desktop";
import type { AppId } from "@/types/window";

export type TerminalAction = { output: string; cwd?: string; open?: AppId; projectId?: string; href?: string; clear?: boolean };

const aliases: Record<string, string> = { pdac: "pdac-biomarker", alzheimer: "alzheimers-apoe-network", "drug-response": "drug-response-profiler", idp: "idp-dynamics", pocket: "cryptic-pocket-hunter", organoid: "multiomics-organoid-drug-resistance" };

function runShortcut(raw: string): TerminalAction {
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

export const desktopPath = "/Users/visitor/Desktop";
type Entry = { name: string; directory?: boolean; open?: AppId; projectId?: string; href?: string; text?: string };
function directory(path: string): Entry[] | undefined {
  switch (path.toLowerCase()) {
    case "/": return [{ name: "Users", directory: true }];
    case "/users": return [{ name: "visitor", directory: true }];
    case "/users/visitor": return [{ name: "Desktop", directory: true }, { name: "skills", directory: true }];
    case desktopPath.toLowerCase(): return desktopEntries.map((entry) => ({ name: entry.label, directory: entry.id === "projects", open: entry.app, href: entry.id === "cv" ? profile.cvPath : undefined, text: entry.id === "publications" ? runShortcut("cat publications.txt").output : entry.id === "about" ? `${profile.displayName}\n${profile.shortBio}` : entry.id === "contact" ? `${profile.email}\n${profile.github}\n${profile.linkedin}` : undefined }));
    case `${desktopPath}/projects`.toLowerCase(): return projects.map((project) => ({ name: project.appName, open: "project", projectId: project.id, text: `${project.title}\n${project.institution} · ${project.year}\n\n${project.mission}\n\n${project.researchSignal}` }));
    case "/users/visitor/skills": return Object.entries(skills).filter(([, value]) => Array.isArray(value)).map(([key, value]) => ({ name: `${key}.txt`, text: (value as string[]).join("\n") }));
    default: return undefined;
  }
}

export function resolveTerminalPath(value: string, cwd = desktopPath): string {
  const path = value.replace(/\\/g, "/").replace(/^C:/i, "").replace(/^~/, "/Users/visitor");
  const result: string[] = [];
  for (const segment of (path.startsWith("/") ? path : `${cwd}/${path}`).split("/")) {
    if (segment === "..") result.pop();
    else if (segment && segment !== ".") result.push(segment);
  }
  return `/${result.join("/")}`;
}
function lookup(value: string, cwd: string): Entry | undefined {
  const path = resolveTerminalPath(value, cwd);
  const slash = path.lastIndexOf("/");
  return directory(path.slice(0, slash) || "/")?.find((entry) => entry.name.toLowerCase() === path.slice(slash + 1).toLowerCase());
}
export function terminalPrompt(cwd: string) { return `C:${cwd.replace(/\//g, "\\")}>`; }
export function terminalCompletions(input: string, cwd: string): string[] {
  const split = input.lastIndexOf(" ");
  if (split < 0) return ["help", "ls", "dir", "pwd", "cd", "open", "start", "cat", "type", "whoami", "echo", "clear", "cls", "history", "download", "contact", "run"].filter((name) => name.startsWith(input.toLowerCase()));
  const prefix = input.slice(0, split + 1), value = input.slice(split + 1);
  const slash = Math.max(value.lastIndexOf("/"), value.lastIndexOf("\\"));
  const folder = value.slice(0, slash + 1), partial = value.slice(slash + 1).toLowerCase();
  return (directory(resolveTerminalPath(folder || ".", cwd)) ?? []).filter((entry) => entry.name.toLowerCase().startsWith(partial)).map((entry) => `${prefix}${folder}${entry.name}${entry.directory ? "/" : ""}`);
}

export function runTerminalCommand(raw: string, cwd = desktopPath): TerminalAction {
  const tokens = raw.trim().match(/"[^"]*"|'[^']*'|\S+/g)?.map((token) => token.replace(/^(["'])(.*)\1$/, "$2")) ?? [];
  const [verb = "", ...args] = tokens;
  const command = verb.toLowerCase(), target = args.join(" ");
  if (command === "help") return { output: "SinanOS portfolio filesystem\n\nls / dir [path]       List files\ncd <folder> / cd ..   Change directory\npwd / cd             Show current directory\nopen / start <file>   Open an app, project, or CV\ncat / type <file>     Read a text file\necho <text>           Print text\nhistory               Show command history\nclear / cls           Clear screen\n\n↑/↓ history · Tab autocomplete · Ctrl+L clear · Ctrl+C cancel\n\n" + runShortcut("help").output + "\n\nThis shell operates on portfolio files inside your browser." };
  if (command === "cls") return { output: "", clear: true };
  if (command === "echo") return { output: target };
  if (command === "pwd" || (command === "cd" && !target)) return { output: terminalPrompt(cwd).slice(0, -1) };
  if (command === "cd" || command === "chdir") {
    const path = resolveTerminalPath(target, cwd);
    return directory(path) ? { output: "", cwd: path } : { output: `The system cannot find the directory: ${target}` };
  }
  if ((command === "ls" || command === "dir") && target.toLowerCase() === "skills") return runShortcut("ls skills");
  if (command === "ls" || command === "dir") {
    const path = resolveTerminalPath(target || ".", cwd), entries = directory(path);
    if (!entries) { const file = lookup(target, cwd); return { output: file ? file.name : `File or directory not found: ${target}` }; }
    return { output: `Directory of ${terminalPrompt(path).slice(0, -1)}\n\n${entries.map((entry) => `${entry.directory ? "<DIR> " : "      "}${entry.name}`).join("\n")}\n\n${entries.length} item(s)` };
  }
  if (command === "open" || command === "start" || command === "explorer") {
    if (!target) return { output: "Usage: open <file or directory>" };
    if (args[0]?.toLowerCase() === "project") return runShortcut(`open ${target}`);
    const shortcut = desktopEntries.find((entry) => entry.id === target.toLowerCase() || entry.label.toLowerCase() === target.toLowerCase());
    const file = lookup(target, cwd);
    if (file) return { output: `Opening ${file.name}...`, open: file.open, projectId: file.projectId, href: file.href };
    if (shortcut) return { output: `Opening ${shortcut.label}...`, open: shortcut.app, href: shortcut.id === "cv" ? profile.cvPath : undefined };
    if (directory(resolveTerminalPath(target, cwd))) return { output: "Opening Research Explorer...", open: "projects" };
    return { output: `File not found: ${target}` };
  }
  if (command === "cat" || command === "type") {
    if (target.toLowerCase() === "publications.txt") return runShortcut("cat publications.txt");
    const file = lookup(target, cwd);
    return { output: !target ? `Usage: ${command} <file>` : file?.text ?? (file ? `Cannot display this file as text. Use: open ${target}` : `File not found: ${target}`) };
  }
  const executable = lookup(verb, cwd);
  if (!args.length && (executable?.open || executable?.href)) return { output: `Opening ${executable.name}...`, open: executable.open, projectId: executable.projectId, href: executable.href };
  return runShortcut(raw);
}
