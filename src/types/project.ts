export type Project = {
  id: string;
  title: string;
  appName: string;
  institution: string;
  year: string;
  status: string;
  domain: string[];
  mission: string;
  biologicalQuestion: string;
  dataLayer: string[];
  pipeline: string[];
  modelStack: string[];
  researchSignal: string;
  whyItMatters: string;
  publicViewNote: string;
  appointment?: {
    role: string;
    funding: string;
    projectNumber: string;
    principalInvestigator: string;
  };
};
