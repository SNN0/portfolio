import type { Publication } from "@/types/publication";

export const publications: Publication[] = [
  { title: "Key genes and pathways in the molecular landscape of pancreatic ductal adenocarcinoma: A bioinformatics and machine learning study", venue: "Computational Biology and Chemistry", year: "2024", status: "published", doi: "https://doi.org/10.1016/j.compbiolchem.2024.108268", category: "journal", relatedProjectIds: ["pdac-biomarker"] },
  { title: "How do AI ensemble pipelines treat disorder? A head-to-head comparison on alpha-synuclein", venue: "Journal of Biomolecular Structure and Dynamics", year: "2026", status: "published", doi: "https://doi.org/10.1080/07391102.2026.2630328", category: "journal", relatedProjectIds: ["idp-dynamics"] },
  { title: "Combining AI, simulation, and experiment to map protein folding", venue: "Comprehensive Biophysics, 2nd ed., Elsevier", year: "2026", status: "published", doi: "https://doi.org/10.1016/B978-0-323-99507-8.00081-0", category: "book-chapter", relatedProjectIds: ["idp-dynamics"] },
  { title: "From Protection to Risk: APOE Genotypes Reshape Gene Co-Expression Networks in Alzheimer's Disease", status: "under-review", category: "manuscript", relatedProjectIds: ["alzheimers-apoe-network"] },
  { title: "Molecular programs associated with paclitaxel resistance encode prognostic information in breast cancer", status: "under-review", category: "manuscript", relatedProjectIds: ["drug-response-profiler"] },
  { title: "Druggability Beyond Structure: State-Centric Targeting of Intrinsically Disordered Proteins in Neurodegeneration and Cancer", status: "submitted", category: "manuscript", relatedProjectIds: ["cryptic-pocket-hunter"] },
  { title: "Multi-domain and Complex Protein Structure Prediction", status: "in-preparation", category: "book-chapter" },
  { title: "Mutagenesis and Protein Structure-Function Prediction", status: "in-preparation", category: "book-chapter" },
];
