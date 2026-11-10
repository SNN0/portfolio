import type { AppId } from "@/types/window";

// The desktop and terminal share one directory, so their filenames stay in sync.
export const desktopEntries: { id: string; label: string; app?: AppId; iconPath: string }[] = [
  { id: "about", label: "About.app", app: "about", iconPath: "/icons/app-about.svg" },
  { id: "research", label: "Research_Matrix.exe", app: "research", iconPath: "/icons/app-omics.svg" },
  { id: "projects", label: "Projects", app: "projects", iconPath: "/icons/app-protein.svg" },
  { id: "model-zoo", label: "Model_Zoo", app: "model-zoo", iconPath: "/icons/app-model-zoo.svg" },
  { id: "publications", label: "Publications", app: "publications", iconPath: "/icons/app-publications.svg" },
  { id: "lab-notes", label: "Lab_Notes", app: "lab-notes", iconPath: "/icons/app-lab-notes.svg" },
  { id: "terminal", label: "Terminal", app: "terminal", iconPath: "/icons/app-terminal.svg" },
  { id: "contact", label: "Contact.vcf", app: "contact", iconPath: "/icons/app-contact.svg" },
  { id: "cv", label: "Download_CV.pdf", iconPath: "" },
];
