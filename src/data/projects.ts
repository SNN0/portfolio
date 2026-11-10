import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "pdac-biomarker", title: "PDAC Biomarker Discovery & Machine Learning Classification", appName: "PDAC_Biomarker.app", institution: "Turkish-German University", year: "2023", status: "Published research foundation", domain: ["Cancer bioinformatics", "Biomarker discovery", "Machine learning"],
    mission: "Identify candidate molecular signatures for pancreatic ductal adenocarcinoma using public cancer genomics datasets and interpretable machine learning workflows.", biologicalQuestion: "Can gene expression patterns help prioritize candidate biomarkers with diagnostic and clinical relevance in PDAC?", dataLayer: ["TCGA/GEO-style cancer genomics cohorts", "Gene expression profiles", "Clinical and survival annotations"], pipeline: ["Public cohort curation", "Expression preprocessing", "Differential and feature-level analysis", "Machine learning classification", "Hub gene and biomarker prioritization", "Survival analysis for clinical relevance"], modelStack: ["SVM", "Random Forest", "Logistic Regression", "Feature selection", "Survival analysis"], researchSignal: "Generated candidate biomarker signatures and clinically interpretable gene-level hypotheses for PDAC classification and prognosis.", whyItMatters: "PDAC is often diagnosed late. Computational biomarker discovery can help prioritize molecular signals that may support earlier detection and more interpretable disease profiling.", publicViewNote: "Public summary only. No raw cohort files, private scripts, or unpublished intermediate outputs are displayed."
  },
  {
    id: "alzheimers-apoe-network", title: "Unraveling Genetic Interactions in Alzheimer's Disease", appName: "APOE_NetworkLab.exe", institution: "Gebze Technical University", year: "2024", status: "Under review / manuscript-stage", domain: ["Alzheimer's disease", "Omics", "Network biology"],
    mission: "Investigate how APOE genotype may reshape gene expression and co-expression architecture in Alzheimer's disease.", biologicalQuestion: "Do APOE genotypes correspond to different molecular network patterns in Alzheimer's disease transcriptomic data?", dataLayer: ["RNA-seq data", "APOE genotype groups", "Gene expression profiles", "Disease-relevant pathway signals"], pipeline: ["RNA-seq cohort analysis", "Differential expression analysis", "Gene correlation analysis", "Co-expression network construction", "Pathway-level interpretation"], modelStack: ["Differential expression", "Correlation analysis", "Co-expression networks", "Network visualization"], researchSignal: "Built genotype-aware molecular interaction maps to explore how Alzheimer's-associated genetic background may influence expression networks.", whyItMatters: "Alzheimer's disease is molecularly heterogeneous. Genotype-aware network analysis can help reveal disease mechanisms that may be hidden in group-level comparisons.", publicViewNote: "Public summary only. Manuscript-stage details and full network outputs are not displayed."
  },
  {
    id: "drug-response-profiler", title: "Genomic Predictors of Drug Response Across Cancer Cohorts", appName: "DrugResponse_Profiler.exe", institution: "Turkish-German University", year: "2025", status: "Research project / manuscript-stage", domain: ["Cancer genomics", "Drug response", "Survival modeling"],
    mission: "Explore how genomic alterations and expression programs relate to anticancer drug response across multiple cancer cohorts.", biologicalQuestion: "Can copy number variation, mutations, and gene expression patterns help explain sensitivity or resistance to selected anticancer therapies?", dataLayer: ["TCGA cancer cohorts", "Copy number variation", "Mutation profiles", "Gene expression", "Sample-level response labels", "Survival annotations"], pipeline: ["Cohort selection by cancer-drug context", "Genomic alteration profiling", "Expression-response association analysis", "Survival modeling", "Hazard ratio and C-index interpretation", "Response-associated molecular program prioritization"], modelStack: ["Cox regression", "Survival modeling", "Genomic feature analysis", "Response stratification"], researchSignal: "Linked genomic and transcriptomic signals to response-associated molecular programs across selected cancer-drug contexts: BRCA-paclitaxel, PAAD-gemcitabine, and STAD-5-FU.", whyItMatters: "Therapeutic response is shaped by molecular context. Integrating genomic alterations with survival and response information can support more interpretable precision oncology hypotheses.", publicViewNote: "Public summary only. No patient-level data, raw outputs, or unpublished detailed results are displayed."
  },
  {
    id: "idp-dynamics", title: "Predicting the Temporal Dynamics of IDPs Using Deep Learning", appName: "IDP_Dynamics_Modeler.app", institution: "Turkish-German University", year: "2025", status: "Bachelor's thesis", domain: ["Intrinsically disordered proteins", "Molecular dynamics", "Deep learning"],
    mission: "Model conformational changes in intrinsically disordered proteins using deep learning architectures informed by molecular dynamics simulations.", biologicalQuestion: "Can temporal deep learning models learn meaningful representations of disordered protein conformational transitions?", dataLayer: ["MD simulation-derived protein states", "Structural behavior descriptors", "Temporal conformational frames"], pipeline: ["MD simulation frame processing", "Protein state representation", "Graph-based structural encoding", "Temporal sequence modeling", "Conformational transition prediction", "Force-field behavior comparison"], modelStack: ["GCN", "GRU", "Graph representation", "Temporal modeling", "Molecular dynamics analysis"], researchSignal: "Modeled protein conformational transitions as learnable temporal patterns rather than static structural snapshots.", whyItMatters: "Intrinsically disordered proteins challenge classical structure-first thinking. AI models can help describe their dynamic behavior and connect molecular motion to biological function.", publicViewNote: "Public summary only. Thesis-specific raw trajectories, scripts, and intermediate model outputs are not displayed."
  },
  {
    id: "cryptic-pocket-hunter", title: "Predicting Cryptic Druggable Pockets in IDPs Using Deep Learning", appName: "CrypticPocket_Hunter.exe", institution: "Turkish-German University", year: "2026", status: "Active research prototype", domain: ["AI-assisted drug discovery", "IDPs", "GNNs", "Dynamic binding sites"],
    mission: "Design a deep learning pipeline to predict transient cryptic druggable pockets in dynamic and disordered protein systems.", biologicalQuestion: "Can dynamic, geometric, and chemical atom-level descriptors reveal temporary druggable states in proteins that are difficult to target using static structures?", dataLayer: ["MD simulation frames", "Atom-level descriptors", "Dynamic features", "Geometric features", "Chemical features"], pipeline: ["MD simulation frame extraction", "Atom-level descriptor engineering", "Dynamic/geometric/chemical feature integration", "Graph neural representation learning", "Temporal pocket formation modeling", "Candidate cryptic state prioritization"], modelStack: ["GNN", "LSTM", "Atom-level descriptors", "Dynamic pocket modeling", "Druggability analysis"], researchSignal: "Reframed druggability as a time-dependent molecular event by modeling transient pocket formation in dynamic protein ensembles.", whyItMatters: "Some disease-relevant proteins may appear undruggable in static structures. Dynamic modeling can reveal transient therapeutic opportunities that only exist in specific conformational states.", publicViewNote: "Public summary only. Active project details, source code, model weights, and unpublished outputs are intentionally hidden."
  },
  {
    id: "multiomics-organoid-drug-resistance",
    title: "Multi-omics Integration, AI, and Organoid Technologies for Investigating Cancer Drug Efficacy and Resistance",
    appName: "Organoid_Research.app",
    institution: "Dokuz Eylül University",
    year: "Incoming",
    status: "Incoming Researcher / BAP Scholarship",
    domain: ["Multi-omics", "Artificial intelligence", "Organoids", "Cancer drug resistance"],
    mission: "Investigating cancer drug efficacy and resistance through multi-omics integration, AI, and organoid technologies.",
    biologicalQuestion: "How can multi-omics, AI, and organoid technologies be integrated to investigate cancer drug efficacy and resistance?",
    dataLayer: [],
    pipeline: [],
    modelStack: [],
    researchSignal: "Incoming researcher appointment with BAP scholarship support.",
    whyItMatters: "Connecting molecular data and organoid technologies to the study of cancer drug efficacy and resistance.",
    publicViewNote: "Incoming research appointment. Project scope and appointment status follow the CV.",
    appointment: {
      role: "Incoming Researcher (BAP Scholarship)",
      funding: "Dokuz Eylül University Scientific Research Projects (BAP)",
      projectNumber: "4109",
      principalInvestigator: "Prof. Dr. Şerife Esra Erdal Bağrıyanık",
    },
  },
];

export const projectContributions: Record<string, string> = {
  "cryptic-pocket-hunter": "Designed dynamic, geometric, and chemical atom-level descriptors and a pipeline combining GNNs with LSTM networks.",
  "idp-dynamics": "Developed GCN and GRU models for conformational prediction and compared force-field behavior in structural analysis.",
  "pdac-biomarker": "Developed classification models, selected features and hub genes, and evaluated biomarker relevance through survival analysis.",
  "alzheimers-apoe-network": "Analyzed RNA-seq data, investigated genotype-expression correlations, and built gene co-expression networks.",
  "drug-response-profiler": "Investigated CNV, mutation, and expression signals; performed Cox regression and interpreted hazard ratios and C-indices.",
};
