export type AppId = "welcome" | "about" | "research" | "projects" | "project" | "publications" | "model-zoo" | "lab-notes" | "terminal" | "contact";

export type AppWindow = {
  id: string;
  appId: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized?: boolean;
  zIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
  payload?: { projectId?: string };
};
