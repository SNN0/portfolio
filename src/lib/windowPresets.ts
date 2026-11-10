import type { AppId } from "@/types/window";

export const appTitles: Record<AppId, string> = {
  welcome: "Welcome - SinanOS",
  about: "About_Sinan.exe",
  research: "Research_Matrix.exe",
  projects: "Research_Case_Files",
  project: "Research_Case_File.app",
  publications: "Publications_Folder",
  "model-zoo": "Model_Zoo.sys",
  "lab-notes": "Lab_Notes",
  terminal: "Terminal",
  contact: "Network_Connection.vcf",
};

export const windowPresets: Record<AppId, { width: number; height: number; x: number; y: number }> = {
  welcome: { width: 840, height: 550, x: 280, y: 50 },
  about: { width: 760, height: 590, x: 280, y: 52 },
  research: { width: 900, height: 630, x: 270, y: 30 },
  projects: { width: 980, height: 640, x: 260, y: 30 },
  project: { width: 920, height: 660, x: 280, y: 25 },
  publications: { width: 920, height: 620, x: 280, y: 40 },
  "model-zoo": { width: 860, height: 610, x: 280, y: 40 },
  "lab-notes": { width: 900, height: 620, x: 280, y: 36 },
  terminal: { width: 800, height: 500, x: 280, y: 75 },
  contact: { width: 680, height: 520, x: 300, y: 65 },
};
