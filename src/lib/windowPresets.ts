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
  welcome: { width: 760, height: 520, x: 160, y: 58 },
  about: { width: 720, height: 590, x: 215, y: 76 },
  research: { width: 900, height: 630, x: 105, y: 46 },
  projects: { width: 900, height: 640, x: 120, y: 55 },
  project: { width: 920, height: 660, x: 140, y: 36 },
  publications: { width: 850, height: 620, x: 180, y: 55 },
  "model-zoo": { width: 800, height: 590, x: 205, y: 68 },
  "lab-notes": { width: 820, height: 620, x: 155, y: 52 },
  terminal: { width: 760, height: 500, x: 240, y: 98 },
  contact: { width: 620, height: 500, x: 270, y: 95 },
};
