# SinanOS — BioAI Workstation  
## Detailed Project Brief for Codex

**Project type:** Personal research portfolio website  
**Primary goal:** Build a memorable, playful, technically polished portfolio site that presents Sinan Eyüboğlu as a BioAI / computational biology researcher working across omics, protein dynamics, AI models, and drug discovery.  
**Core concept:** A retro scientific operating system where each “app” represents a part of Sinan’s research identity.

---

# 1. Executive Summary

Create a personal portfolio website called:

> **SinanOS — BioAI Workstation**

The website should feel like opening a retro scientific computer from the late 1990s, but instead of normal desktop software, every app represents a research domain: omics, protein dynamics, drug response, publications, model stack, lab notes, and contact.

The site should not look like a generic developer portfolio. It should feel like a **personal research operating system** designed for someone who bridges molecular biotechnology, bioinformatics, computational biology, and artificial intelligence.

The site should be playful and unique, but still credible enough for academic visitors, biotech companies, AI labs, computational biology groups, graduate programs, and collaborators.

The core visual metaphor:

> “A BioAI workstation where wet-lab biology, omics data, protein dynamics, and machine learning models are loaded as interactive apps.”

---

# 2. Profile Positioning

Use this positioning throughout the site:

> **I build AI-driven research pipelines for omics, protein dynamics, and drug discovery.**

Expanded version:

> Molecular biotechnology graduate and AI master’s student working at the intersection of bioinformatics, computational biology, intrinsically disordered proteins, omics-scale disease profiling, and AI-assisted therapeutic discovery.

Do not position Sinan only as a web developer, data scientist, or generic AI student. The site should clearly communicate that his niche is:

- Bioinformatics
- Omics data analysis
- Computational biology
- Protein structure and dynamics
- Intrinsically disordered proteins
- Graph neural networks and recurrent deep learning models
- AI-assisted drug discovery
- Biomarker discovery
- Disease systems biology
- Translational molecular research

---

# 3. Important Content Rules

## 3.1 Do not expose private or unpublished details

The portfolio should **not** display:

- Raw datasets
- Source code for unpublished research projects
- Full unpublished manuscripts
- Unverified metrics
- Exact confidential results
- Model weights
- Internal lab notes
- Sensitive collaborator details
- Phone number or home address

It is fine to show:

- Public-safe project summaries
- Methodology overviews
- Scientific questions
- Model types
- Data modalities
- General research signals
- Published DOI links
- GitHub link
- LinkedIn link
- Email

## 3.2 Do not invent fake results

Avoid unsupported claims such as:

- “Achieved 98% accuracy”
- “Discovered a validated biomarker”
- “Proved clinical utility”
- “Developed state-of-the-art model”
- “Outperformed all existing methods”

Use strong but scientifically honest language:

- “identified candidate biomarker signatures”
- “designed a disease-focused omics workflow”
- “modeled conformational transitions”
- “explored genotype-aware network rewiring”
- “developed a pipeline for transient pocket prediction”
- “generated interpretable molecular hypotheses”
- “linked genomic signals to therapeutic response patterns”

## 3.3 Show thinking systems, not raw files

The project pages should communicate that Sinan can take a biological problem and transform it into a computational/AI pipeline.

The portfolio should sell the **research reasoning**:

> Biological question → data layer → computational pipeline → model stack → interpretable research signal → why it matters

---

# 4. Recommended Technical Stack

Use a modern frontend stack suitable for an interactive static portfolio.

## 4.1 Core stack

- **Framework:** Next.js with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Window dragging/resizing:** `react-rnd`
- **State management:** Zustand
- **Icons:** lucide-react plus custom pixel/science SVG icons
- **Content source:** TypeScript data files in `/src/data`
- **Deployment:** Vercel, Netlify, or static export
- **No backend required**

## 4.2 Suggested dependencies

```bash
npm install next react react-dom typescript
npm install tailwindcss postcss autoprefixer
npm install framer-motion
npm install zustand
npm install react-rnd
npm install lucide-react
npm install clsx tailwind-merge
```

Optional:

```bash
npm install next-mdx-remote
```

Only use MDX if Lab Notes will become a blog. For the first version, static TypeScript content is enough.

---

# 5. Site Architecture

The site should be a single immersive desktop-style interface with shareable sections.

Recommended approach:

- Main route: `/`
- Use URL hash to open specific apps:
  - `/#about`
  - `/#projects`
  - `/#project/pdac-biomarker`
  - `/#project/idp-dynamics`
  - `/#publications`
  - `/#terminal`
  - `/#contact`

This allows a visually playful interface while still letting users share direct links.

---

# 6. File and Folder Structure

Use this structure:

```text
sinanos-bioai-workstation/
├── public/
│   ├── docs/
│   │   └── Sinan_Eyuboglu_CV.pdf
│   ├── icons/
│   │   ├── app-about.svg
│   │   ├── app-omics.svg
│   │   ├── app-protein.svg
│   │   ├── app-model-zoo.svg
│   │   ├── app-publications.svg
│   │   ├── app-terminal.svg
│   │   ├── app-contact.svg
│   │   └── app-lab-notes.svg
│   ├── og/
│   │   └── sinanos-og.png
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── boot/
│   │   │   ├── BootScreen.tsx
│   │   │   └── BootLog.tsx
│   │   │
│   │   ├── desktop/
│   │   │   ├── Desktop.tsx
│   │   │   ├── DesktopIcon.tsx
│   │   │   ├── Taskbar.tsx
│   │   │   ├── StartMenu.tsx
│   │   │   ├── SystemTray.tsx
│   │   │   └── DesktopStatusPanel.tsx
│   │   │
│   │   ├── windows/
│   │   │   ├── WindowFrame.tsx
│   │   │   ├── WindowManager.tsx
│   │   │   ├── WindowControls.tsx
│   │   │   └── WindowTitleBar.tsx
│   │   │
│   │   ├── apps/
│   │   │   ├── WelcomeApp.tsx
│   │   │   ├── AboutApp.tsx
│   │   │   ├── ResearchAreasApp.tsx
│   │   │   ├── ProjectsApp.tsx
│   │   │   ├── ProjectCaseFileApp.tsx
│   │   │   ├── PublicationsApp.tsx
│   │   │   ├── ModelZooApp.tsx
│   │   │   ├── LabNotesApp.tsx
│   │   │   ├── TerminalApp.tsx
│   │   │   └── ContactApp.tsx
│   │   │
│   │   ├── scientific/
│   │   │   ├── ProteinRibbon.tsx
│   │   │   ├── NetworkGraph.tsx
│   │   │   ├── OmicsHeatmap.tsx
│   │   │   ├── PipelineDiagram.tsx
│   │   │   ├── MoleculeParticles.tsx
│   │   │   └── DescriptorGrid.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Divider.tsx
│   │   │   ├── ScrollArea.tsx
│   │   │   └── Tooltip.tsx
│   │   │
│   │   └── common/
│   │       ├── ExternalLink.tsx
│   │       ├── SectionHeader.tsx
│   │       └── SafePublicNote.tsx
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── publications.ts
│   │   ├── skills.ts
│   │   ├── researchAreas.ts
│   │   ├── terminalCommands.ts
│   │   └── labNotes.ts
│   │
│   ├── hooks/
│   │   ├── useBootSequence.ts
│   │   ├── useHashRouter.ts
│   │   ├── useWindowStore.ts
│   │   └── useReducedMotion.ts
│   │
│   ├── lib/
│   │   ├── cn.ts
│   │   ├── windowPresets.ts
│   │   ├── terminalEngine.ts
│   │   └── seo.ts
│   │
│   ├── styles/
│   │   ├── theme.css
│   │   ├── retro-window.css
│   │   └── scientific-visuals.css
│   │
│   └── types/
│       ├── project.ts
│       ├── publication.ts
│       └── window.ts
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

---

# 7. Design Direction

## 7.1 Overall look

The design should combine:

1. **Windows 98-inspired desktop UI**
2. **Modern BioAI dashboard**
3. **Scientific visualizations**
4. **Subtle computational biology aesthetics**

The result should not be a basic nostalgia clone. It should feel like:

> “A retro operating system built for molecular AI research.”

## 7.2 Visual personality

The site should feel:

- Unique
- Intelligent
- Slightly playful
- Scientific
- Experimental
- Clean enough for academic readers
- Memorable for industry recruiters
- More “research workstation” than “gamer retro theme”

## 7.3 Color palette

Use a controlled palette.

```css
:root {
  --bg: #07111f;
  --desktop-bg: #0b1b2e;
  --window-gray: #d7d7d7;
  --window-light: #f2f2f2;
  --window-dark: #8b8b8b;
  --titlebar-blue: #1f3a5f;
  --titlebar-blue-active: #244a7c;
  --teal: #28c7b7;
  --neon-green: #75ff9e;
  --protein-purple: #9b7cff;
  --omics-red: #f05b63;
  --omics-blue: #4ea8ff;
  --text-dark: #10131a;
  --text-light: #f7fbff;
  --muted: #6d7d91;
  --warning: #ffd166;
}
```

## 7.4 Typography

Recommended fonts:

- UI retro font: `MS Sans Serif`-like fallback or a web-safe system approach
- Code/terminal font: `IBM Plex Mono`, `JetBrains Mono`, or `Fira Code`
- Body font: `Inter`, `IBM Plex Sans`, or system sans-serif

Recommended CSS:

```css
body {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.retro-ui {
  font-family: "MS Sans Serif", "Tahoma", system-ui, sans-serif;
}

.terminal {
  font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
}
```

Do not make everything pixelated. Use retro details selectively.

---

# 8. Main User Experience

## 8.1 Boot sequence

When the user opens the site, show a short boot screen.

Boot sequence should last around 2.5–4 seconds, with a skip option.

Example boot text:

```text
SinanOS v1.0 — BioAI Workstation
Initializing molecular environment...
Loading omics datasets...
Mounting TCGA/GEO volumes...
Compiling graph neural modules...
Indexing intrinsically disordered protein states...
Starting cryptic pocket scanner...
Network connection established.
Welcome, visitor.
```

After boot, transition into the desktop.

User should be able to click:

```text
[Enter Workstation]
```

Also include:

```text
Press ESC to skip boot
```

## 8.2 Desktop

The desktop contains app icons.

Suggested icons:

```text
About.app
Research_Matrix.exe
Projects
Model_Zoo
Publications
Lab_Notes
Terminal
Contact.vcf
Download_CV.pdf
```

Use custom pixel-science icons:

- About: small ID card or profile chip
- Research Matrix: network graph
- Projects: folder with molecule
- Model Zoo: neural network chip
- Publications: stacked paper icons
- Lab Notes: notebook with DNA helix
- Terminal: black terminal window
- Contact: network plug / signal icon
- CV: PDF document icon

## 8.3 Taskbar

The taskbar should include:

- Start button: `SinanOS`
- Open windows list
- Small system tray:
  - `AI Core: online`
  - `GPU: simulated`
  - Clock
  - Small molecule icon

Start menu items:

```text
Programs
├── Omics Explorer
├── Protein Dynamics Viewer
├── Model Zoo
├── Publications
├── Lab Notes
└── Terminal

Documents
├── CV.pdf
└── Research Case Files

Network
├── LinkedIn
├── GitHub
└── Email
```

## 8.4 Window behavior

Windows should be:

- Draggable
- Resizable on desktop
- Minimizable
- Closable
- Focusable with z-index
- Restorable from taskbar

Use `react-rnd` for draggable/resizable behavior.

On mobile, do not use draggable windows. Use stacked cards or full-screen app views.

---

# 9. Responsive Design

## 9.1 Desktop

Use full operating system metaphor:

- Desktop icons
- Draggable windows
- Taskbar
- Start menu
- Boot animation
- Terminal

## 9.2 Tablet

Use simplified windows:

- Windows can open centered
- Resizing optional
- Dragging optional
- Taskbar still visible

## 9.3 Mobile

Use “mobile launcher mode.”

Instead of desktop icons scattered across a screen, show:

```text
SinanOS Mobile Recovery Mode
Select an app:
[About]
[Research Areas]
[Projects]
[Publications]
[Model Zoo]
[Contact]
```

When an app opens, it should become a full-screen panel.

This is important because draggable retro windows are usually bad on small screens.

---

# 10. Information Architecture

The site should contain the following major apps.

---

## 10.1 Welcome App

Purpose: Immediate identity and strong positioning.

Window title:

```text
Welcome — SinanOS
```

Content:

```text
Sinan Eyüboğlu
BioAI / Computational Biology Researcher

I build AI-driven research pipelines for omics, protein dynamics, and drug discovery.

Molecular biotechnology background. AI master’s student. Working at the interface of bioinformatics, computational biology, intrinsically disordered proteins, and therapeutic target discovery.
```

Buttons:

```text
Open Research Matrix
View Projects
Download CV
Launch Terminal
```

Small status panel:

```text
Current focus:
AI for protein dynamics, omics-scale disease profiling, and druggable state discovery.
```

Visual:

- Mini protein ribbon on the right
- Small moving particles
- Tiny network graph in background

---

## 10.2 About App

Window title:

```text
About_Sinan.exe
```

Content structure:

```text
System Identity
Name: Sinan Eyüboğlu
Base Layer: Molecular Biotechnology
Current Module: M.Sc. Artificial Intelligence
Research Mode: Bioinformatics + Computational Biology + Protein AI
Location: Istanbul / Türkiye
```

Narrative copy:

> I started from molecular biotechnology, where biological systems are learned from the bench level: PCR, cloning, chromatography, SDS-PAGE, and molecular diagnostics. I now work on the computational side of biology, building AI-driven workflows for omics data, disease systems biology, protein dynamics, and drug discovery.

> My research interests center on the question: how can machine learning models help us understand biological systems that are too high-dimensional, dynamic, or disordered for static interpretation?

Education timeline:

```text
2021–2025
B.Sc. Molecular Biotechnology
Turkish-German University

2025–Present
M.Sc. Artificial Intelligence
Gebze Technical University
```

Wet-lab/computational bridge:

```text
Bench Layer:
PCR, SDS-PAGE, cloning, chromatography, diagnostic assays

Data Layer:
RNA-seq, TCGA/GEO, proteomics, survival data, MD simulation states

Model Layer:
SVM, Random Forest, Logistic Regression, GCN, GRU, LSTM, GNNs
```

---

## 10.3 Research Matrix App

Window title:

```text
Research_Matrix.exe
```

Purpose: Show Sinan’s research identity as a matrix of connected domains.

Display 4 research areas:

### 1. Omics & Disease Systems Biology

Copy:

> I analyze large-scale molecular datasets to study disease-associated gene expression, network rewiring, and candidate biomarkers.

Keywords:

```text
RNA-seq
TCGA
GEO
Differential expression
Co-expression networks
Survival analysis
Cancer
Alzheimer’s disease
```

### 2. AI for Protein Dynamics

Copy:

> I am interested in modeling proteins as dynamic systems rather than static structures, especially intrinsically disordered proteins whose conformational behavior is difficult to capture with classical structural snapshots.

Keywords:

```text
IDPs
MD simulations
Conformational dynamics
GCN
GRU
Temporal modeling
Protein structure-function
```

### 3. Drug Response & Therapeutic Discovery

Copy:

> I explore how genomic alterations, expression programs, and dynamic protein states may connect to therapeutic response and druggable opportunity.

Keywords:

```text
Drug response
Paclitaxel
Gemcitabine
5-FU
BRCA
PAAD
STAD
Cox regression
Cryptic pockets
```

### 4. Interpretable BioAI Pipelines

Copy:

> My work focuses not only on prediction, but on building interpretable workflows that convert complex biological data into testable molecular hypotheses.

Keywords:

```text
Feature selection
Biomarker prioritization
Graph learning
Network biology
Model interpretation
Computational pipelines
```

Visual idea:

Create a central node:

```text
BioAI
```

Connected to:

```text
Omics
Protein Dynamics
Drug Discovery
Machine Learning
```

Use SVG or CSS-only network graph. No heavy 3D required.

---

## 10.4 Projects App

Window title:

```text
Research_Case_Files
```

This is the most important section.

Projects should be shown as “classified research files” rather than basic cards.

Each project file should include:

```text
Mission
Biological Question
Data Layer
Computational Pipeline
Model Stack
Research Signal
Why It Matters
Public View Note
```

Include a note at the top:

> These case files summarize public-safe methodology and research direction. Raw datasets, source code, unpublished results, and confidential materials are intentionally not displayed.

Project list:

1. PDAC Biomarker Discovery & Machine Learning Classification
2. Unraveling Genetic Interactions in Alzheimer’s Disease
3. Genomic Predictors of Drug Response Across Cancer Cohorts
4. Predicting the Temporal Dynamics of IDPs Using Deep Learning
5. Predicting Cryptic Druggable Pockets in IDPs Using Deep Learning

---

# 11. Project Case File Content

Use this content in `/src/data/projects.ts`.

## 11.1 PDAC Biomarker Discovery & Machine Learning Classification

```ts
{
  id: "pdac-biomarker",
  title: "PDAC Biomarker Discovery & Machine Learning Classification",
  appName: "PDAC_Biomarker.app",
  institution: "Turkish-German University",
  year: "2023",
  status: "Published research foundation",
  domain: ["Cancer bioinformatics", "Biomarker discovery", "Machine learning"],
  mission: "Identify candidate molecular signatures for pancreatic ductal adenocarcinoma using public cancer genomics datasets and interpretable machine learning workflows.",
  biologicalQuestion: "Can gene expression patterns help prioritize candidate biomarkers with diagnostic and clinical relevance in PDAC?",
  dataLayer: ["TCGA/GEO-style cancer genomics cohorts", "Gene expression profiles", "Clinical and survival annotations"],
  pipeline: [
    "Public cohort curation",
    "Expression preprocessing",
    "Differential and feature-level analysis",
    "Machine learning classification",
    "Hub gene and biomarker prioritization",
    "Survival analysis for clinical relevance"
  ],
  modelStack: ["SVM", "Random Forest", "Logistic Regression", "Feature selection", "Survival analysis"],
  researchSignal: "Generated candidate biomarker signatures and clinically interpretable gene-level hypotheses for PDAC classification and prognosis.",
  whyItMatters: "PDAC is often diagnosed late. Computational biomarker discovery can help prioritize molecular signals that may support earlier detection and more interpretable disease profiling.",
  publicViewNote: "Public summary only. No raw cohort files, private scripts, or unpublished intermediate outputs are displayed."
}
```

Suggested window visual:

- Mini omics heatmap
- Feature selection funnel
- Classifier badges
- Survival curve placeholder labeled “clinical relevance analysis” but do not display fake data

---

## 11.2 Alzheimer’s APOE Co-expression Network Analysis

```ts
{
  id: "alzheimers-apoe-network",
  title: "Unraveling Genetic Interactions in Alzheimer’s Disease",
  appName: "APOE_NetworkLab.exe",
  institution: "Gebze Technical University",
  year: "2024",
  status: "Under review / manuscript-stage",
  domain: ["Alzheimer’s disease", "Omics", "Network biology"],
  mission: "Investigate how APOE genotype may reshape gene expression and co-expression architecture in Alzheimer’s disease.",
  biologicalQuestion: "Do APOE genotypes correspond to different molecular network patterns in Alzheimer’s disease transcriptomic data?",
  dataLayer: ["RNA-seq data", "APOE genotype groups", "Gene expression profiles", "Disease-relevant pathway signals"],
  pipeline: [
    "RNA-seq cohort analysis",
    "Differential expression analysis",
    "Gene correlation analysis",
    "Co-expression network construction",
    "Pathway-level interpretation"
  ],
  modelStack: ["Differential expression", "Correlation analysis", "Co-expression networks", "Network visualization"],
  researchSignal: "Built genotype-aware molecular interaction maps to explore how Alzheimer’s-associated genetic background may influence expression networks.",
  whyItMatters: "Alzheimer’s disease is molecularly heterogeneous. Genotype-aware network analysis can help reveal disease mechanisms that may be hidden in group-level comparisons.",
  publicViewNote: "Public summary only. Manuscript-stage details and full network outputs are not displayed."
}
```

Suggested window visual:

- Network graph with APOE as central highlighted node
- Three tabs: `Expression`, `Correlation`, `Network`
- Small badge: `Genotype-aware systems biology`

---

## 11.3 Genomic Predictors of Drug Response Across Cancer Cohorts

```ts
{
  id: "drug-response-profiler",
  title: "Genomic Predictors of Drug Response Across Cancer Cohorts",
  appName: "DrugResponse_Profiler.exe",
  institution: "Turkish-German University",
  year: "2025",
  status: "Research project / manuscript-stage",
  domain: ["Cancer genomics", "Drug response", "Survival modeling"],
  mission: "Explore how genomic alterations and expression programs relate to anticancer drug response across multiple cancer cohorts.",
  biologicalQuestion: "Can copy number variation, mutations, and gene expression patterns help explain sensitivity or resistance to selected anticancer therapies?",
  dataLayer: ["TCGA cancer cohorts", "Copy number variation", "Mutation profiles", "Gene expression", "Sample-level response labels", "Survival annotations"],
  pipeline: [
    "Cohort selection by cancer-drug context",
    "Genomic alteration profiling",
    "Expression-response association analysis",
    "Survival modeling",
    "Hazard ratio and C-index interpretation",
    "Response-associated molecular program prioritization"
  ],
  modelStack: ["Cox regression", "Survival modeling", "Genomic feature analysis", "Response stratification"],
  researchSignal: "Linked genomic and transcriptomic signals to response-associated molecular programs across selected cancer-drug contexts.",
  whyItMatters: "Therapeutic response is shaped by molecular context. Integrating genomic alterations with survival and response information can support more interpretable precision oncology hypotheses.",
  publicViewNote: "Public summary only. No patient-level data, raw outputs, or unpublished detailed results are displayed."
}
```

Specific cancer-drug contexts:

```text
BRCA — Paclitaxel
PAAD — Gemcitabine
STAD — 5-FU
```

Suggested visual:

- Three cohort cartridges
- Arrows to “response signal”
- Survival model chip
- No fake survival curves

---

## 11.4 Temporal Dynamics of IDPs Using Deep Learning

```ts
{
  id: "idp-dynamics",
  title: "Predicting the Temporal Dynamics of IDPs Using Deep Learning",
  appName: "IDP_Dynamics_Modeler.app",
  institution: "Turkish-German University",
  year: "2025",
  status: "Bachelor’s thesis",
  domain: ["Intrinsically disordered proteins", "Molecular dynamics", "Deep learning"],
  mission: "Model conformational changes in intrinsically disordered proteins using deep learning architectures informed by molecular dynamics simulations.",
  biologicalQuestion: "Can temporal deep learning models learn meaningful representations of disordered protein conformational transitions?",
  dataLayer: ["MD simulation-derived protein states", "Structural behavior descriptors", "Temporal conformational frames"],
  pipeline: [
    "MD simulation frame processing",
    "Protein state representation",
    "Graph-based structural encoding",
    "Temporal sequence modeling",
    "Conformational transition prediction",
    "Force-field behavior comparison"
  ],
  modelStack: ["GCN", "GRU", "Graph representation", "Temporal modeling", "Molecular dynamics analysis"],
  researchSignal: "Modeled protein conformational transitions as learnable temporal patterns rather than static structural snapshots.",
  whyItMatters: "Intrinsically disordered proteins challenge classical structure-first thinking. AI models can help describe their dynamic behavior and connect molecular motion to biological function.",
  publicViewNote: "Public summary only. Thesis-specific raw trajectories, scripts, and intermediate model outputs are not displayed."
}
```

Suggested visual:

- Protein chain animation moving between states
- Small graph nodes connected as residues/atoms
- Timeline strip: `t0 → t1 → t2 → prediction`

Important phrase to use:

> “From static structure to dynamic state modeling.”

---

## 11.5 Cryptic Druggable Pockets in IDPs Using Deep Learning

```ts
{
  id: "cryptic-pocket-hunter",
  title: "Predicting Cryptic Druggable Pockets in IDPs Using Deep Learning",
  appName: "CrypticPocket_Hunter.exe",
  institution: "Turkish-German University",
  year: "2026",
  status: "Active research prototype",
  domain: ["AI-assisted drug discovery", "IDPs", "GNNs", "Dynamic binding sites"],
  mission: "Design a deep learning pipeline to predict transient cryptic druggable pockets in dynamic and disordered protein systems.",
  biologicalQuestion: "Can dynamic, geometric, and chemical atom-level descriptors reveal temporary druggable states in proteins that are difficult to target using static structures?",
  dataLayer: ["MD simulation frames", "Atom-level descriptors", "Dynamic features", "Geometric features", "Chemical features"],
  pipeline: [
    "MD simulation frame extraction",
    "Atom-level descriptor engineering",
    "Dynamic/geometric/chemical feature integration",
    "Graph neural representation learning",
    "Temporal pocket formation modeling",
    "Candidate cryptic state prioritization"
  ],
  modelStack: ["GNN", "LSTM", "Atom-level descriptors", "Dynamic pocket modeling", "Druggability analysis"],
  researchSignal: "Reframed druggability as a time-dependent molecular event by modeling transient pocket formation in dynamic protein ensembles.",
  whyItMatters: "Some disease-relevant proteins may appear undruggable in static structures. Dynamic modeling can reveal transient therapeutic opportunities that only exist in specific conformational states.",
  publicViewNote: "Public summary only. Active project details, source code, model weights, and unpublished outputs are intentionally hidden."
}
```

Suggested visual:

- Animated pocket opening/closing
- Label: `Transient state detected`
- Pipeline: `MD frames → descriptors → GNN/LSTM → candidate pocket states`
- Badge: `Dynamic druggability`

Strong homepage teaser phrase:

> “Druggability beyond structure: modeling therapeutic opportunity as a dynamic state.”

---

# 12. Publications App

Window title:

```text
Publications_Folder
```

Use folder/file metaphor.

Tabs:

```text
Published
Under Review
Submitted
Book Chapters
In Preparation
```

Publication card fields:

```ts
type Publication = {
  title: string;
  authors: string;
  venue?: string;
  year?: string;
  status: "published" | "under-review" | "submitted" | "in-preparation";
  doi?: string;
  category: "journal" | "book-chapter" | "manuscript";
  relatedProjectIds?: string[];
};
```

Suggested publication display:

```text
[PDF-like icon] Key genes and pathways in the molecular landscape of pancreatic ductal adenocarcinoma
Computational Biology and Chemistry, 2024
Status: Published
DOI: Open link
Related app: PDAC_Biomarker.app
```

Content to include:

1. **Key genes and pathways in the molecular landscape of pancreatic ductal adenocarcinoma: A bioinformatics and machine learning study**  
   Computational Biology and Chemistry, 2024  
   DOI: `https://doi.org/10.1016/j.compbiolchem.2024.108268`

2. **How do AI ensemble pipelines treat disorder? A head-to-head comparison on α-synuclein**  
   Journal of Biomolecular Structure and Dynamics, 2026  
   DOI: `https://doi.org/10.1080/07391102.2026.2630328`

3. **Combining AI, simulation, and experiment to map protein folding**  
   Comprehensive Biophysics, 2nd ed., Elsevier, 2026  
   DOI: `https://doi.org/10.1016/B978-0-323-99507-8.00081-0`

4. **From Protection to Risk: APOE Genotypes Reshape Gene Co-Expression Networks in Alzheimer’s Disease**  
   Status: Under review

5. **Molecular programs associated with paclitaxel resistance encode prognostic information in breast cancer**  
   Status: Under review

6. **Druggability Beyond Structure: State-Centric Targeting of Intrinsically Disordered Proteins in Neurodegeneration and Cancer**  
   Status: Submitted manuscript

7. **Multi-domain and Complex Protein Structure Prediction**  
   Book chapter in preparation

8. **Mutagenesis and Protein Structure-Function Prediction**  
   Book chapter in preparation

Add note:

> Publication statuses should be manually updated before deployment.

---

# 13. Model Zoo App

Window title:

```text
Model_Zoo.sys
```

Purpose: Present technical stack as a system specification panel.

Visual format:

```text
BioAI System Specifications

Programming:
- Python
- R
- Bash
- Linux/Unix command line

Classical ML:
- SVM
- Random Forest
- Logistic Regression
- Feature selection

Deep Learning:
- GCN
- GRU
- LSTM
- GNNs

Bioinformatics:
- DESeq2
- BLAST
- Cytoscape
- ClinVar
- TCGA/GEO workflows

Statistical / Clinical:
- Differential expression
- Correlation analysis
- Co-expression networks
- Cox regression
- Survival analysis
- Hazard ratios
- C-index interpretation

Wet-lab foundation:
- PCR
- SDS-PAGE
- Cloning
- Chromatography
- Lateral flow assay concepts
- qPCR diagnostics
```

Do not make this a boring skills list. Make it look like an operating system “hardware/software specs” dialog.

Example:

```text
System Core
CPU: Molecular Biotechnology
GPU: Artificial Intelligence
Memory: Omics + Protein Dynamics
Installed Packages: DESeq2, Cytoscape, BLAST, scikit-style ML, graph learning
Experimental Drivers: PCR, SDS-PAGE, cloning, diagnostics
```

---

# 14. Lab Notes App

Window title:

```text
Lab_Notes
```

This can start as a static section with 3–5 short conceptual notes. It does not need a full blog engine initially.

Possible notes:

1. **Why intrinsically disordered proteins need dynamic AI models**
2. **From omics datasets to molecular hypotheses**
3. **Why graph neural networks make sense for proteins**
4. **What makes a cryptic pocket druggable?**
5. **Bench-to-model thinking in computational biology**

Each note should be short, 150–250 words.

Suggested note format:

```text
[NOTE_001]
Title: Why IDPs need dynamic AI models
Tags: IDPs, protein dynamics, deep learning
Summary: Unlike folded proteins, IDPs cannot be fully represented by one stable structure. Their biological function often emerges from ensembles, transitions, and transient interactions...
```

This app is useful because it shows personality and scientific communication ability.

---

# 15. Terminal App

Window title:

```text
Terminal
```

The terminal should be interactive and fun.

Initial text:

```text
SinanOS Terminal
Type 'help' to list available commands.
```

Commands:

```text
help
whoami
open about
open projects
open project pdac
open project alzheimer
open project drug-response
open project idp
open project pocket
cat publications.txt
ls skills
run research-matrix
download cv
contact --email
contact --linkedin
contact --github
clear
```

Example command outputs:

### `whoami`

```text
Sinan Eyüboğlu
Molecular biotechnology graduate
M.Sc. Artificial Intelligence student
Research focus: BioAI, omics, protein dynamics, drug discovery
```

### `ls skills`

```text
bioinformatics/
  DESeq2
  BLAST
  Cytoscape
  ClinVar

programming/
  Python
  R
  Bash
  Linux/Unix

models/
  SVM
  RandomForest
  LogisticRegression
  GCN
  GRU
  LSTM
  GNN

wetlab/
  PCR
  SDS-PAGE
  Cloning
  Chromatography
```

### `run research-matrix`

```text
Loading research matrix...

[BioAI]
├── Omics & disease systems biology
├── AI for protein dynamics
├── Drug response modeling
└── Interpretable computational pipelines
```

### `open project pocket`

Should open the CrypticPocket project window.

### `download cv`

Should trigger CV download.

### `contact --linkedin`

Should open LinkedIn in a new tab.

Terminal should be implemented locally in React, not as a real shell.

---

# 16. Contact App

Window title:

```text
Network_Connection.vcf
```

Content:

```text
Connection available.

Email: eyuboglusnn@gmail.com
LinkedIn: linkedin.com/in/sinaneyuboglu
GitHub: github.com/SNN0
Location: Istanbul, Türkiye
```

Do not display phone number or street address by default.

CTA buttons:

```text
Send Email
Open LinkedIn
Open GitHub
Download CV
```

Fun success microcopy:

```text
Signal transduced successfully.
```

If using a contact form, use Formspree, Basin, or a simple mailto link. For first version, prefer mailto link to avoid backend complexity.

---

# 17. Microcopy and Easter Eggs

Use small, memorable lines across the site.

## 17.1 Loading messages

```text
Running differential expression...
Aligning research interests...
Folding interface components...
Scanning for cryptic pockets...
Building co-expression network...
Compiling BioAI modules...
```

## 17.2 Buttons

Instead of generic labels:

```text
Open Case File
Launch App
View Pipeline
Inspect Model Stack
Download CV
Connect Network
```

## 17.3 404 page

Create a custom 404 page:

Title:

```text
404 — Protein failed to fold
```

Copy:

```text
This page adopted a non-native conformation and could not be resolved.
Return to BioAI Workstation.
```

## 17.4 Contact success

```text
Signal transduced successfully.
```

## 17.5 Project privacy note

```text
Source code hidden: active research / publication-stage project.
```

or

```text
Public view: methodology overview only.
```

---

# 18. Scientific Visual Components

Do not rely on heavy external 3D libraries in v1. Use SVG/CSS visuals that are light and fast.

## 18.1 ProteinRibbon

A stylized SVG ribbon/chain.

Use for:

- Welcome
- Protein Dynamics project
- Cryptic Pocket project

Features:

- Smooth curved path
- Small residues as circles
- Subtle moving gradient
- Optional “state transition” animation

## 18.2 NetworkGraph

Use SVG circles and lines.

Use for:

- Alzheimer’s APOE project
- Research Matrix
- Omics systems biology

Features:

- Central highlighted node
- Related nodes orbiting or pulsing gently
- Labels like `APOE`, `Expression`, `Co-expression`, `Pathways`
- Do not show fake real network data

## 18.3 OmicsHeatmap

A stylized heatmap grid.

Use for:

- PDAC project
- Drug response project
- Omics research area

Features:

- 12×8 or 16×10 grid
- Colored cells
- Labels: `samples`, `genes`, `signal`
- No fake numerical values

## 18.4 PipelineDiagram

Reusable component for every project.

Input:

```ts
steps: string[]
```

Display:

```text
Data → Features → Model → Signal → Interpretation
```

Use retro connectors and small app-like boxes.

## 18.5 DescriptorGrid

Use for cryptic pockets:

```text
Dynamic descriptors
Geometric descriptors
Chemical descriptors
Atom-level features
Temporal state
```

---

# 19. Data Files

## 19.1 `profile.ts`

```ts
export const profile = {
  name: "Sinan Eyüboğlu",
  title: "BioAI / Computational Biology Researcher",
  headline: "I build AI-driven research pipelines for omics, protein dynamics, and drug discovery.",
  shortBio:
    "Molecular biotechnology graduate and M.Sc. Artificial Intelligence student working at the intersection of bioinformatics, computational biology, protein dynamics, and therapeutic discovery.",
  location: "Istanbul, Türkiye",
  email: "eyuboglusnn@gmail.com",
  linkedin: "https://www.linkedin.com/in/sinaneyuboglu",
  github: "https://github.com/SNN0",
  cvPath: "/docs/Sinan_Eyuboglu_CV.pdf",
  education: [
    {
      degree: "B.Sc. Molecular Biotechnology",
      institution: "Turkish-German University",
      years: "2021–2025",
      focus:
        "Bioinformatics, molecular biology, biotechnology techniques, wet-lab and in silico research."
    },
    {
      degree: "M.Sc. Artificial Intelligence",
      institution: "Gebze Technical University",
      years: "2025–Present",
      focus:
        "Machine learning, deep learning, pattern recognition, statistical data analysis, big data analytics, and BioAI applications."
    }
  ]
};
```

## 19.2 `researchAreas.ts`

```ts
export const researchAreas = [
  {
    id: "omics",
    title: "Omics & Disease Systems Biology",
    description:
      "Large-scale molecular dataset analysis for disease-associated gene expression, network rewiring, candidate biomarkers, and pathway-level interpretation.",
    tags: ["RNA-seq", "TCGA", "GEO", "DESeq2", "Co-expression", "Survival analysis"]
  },
  {
    id: "protein-dynamics",
    title: "AI for Protein Dynamics",
    description:
      "Deep learning approaches for modeling protein conformational behavior, especially intrinsically disordered proteins and dynamic structural states.",
    tags: ["IDPs", "MD simulations", "GCN", "GRU", "GNN", "Temporal modeling"]
  },
  {
    id: "drug-discovery",
    title: "Drug Response & Druggability",
    description:
      "Computational workflows that connect genomic signals, dynamic protein states, and therapeutic response patterns.",
    tags: ["Drug response", "Cryptic pockets", "Cox regression", "Dynamic druggability"]
  },
  {
    id: "interpretable-bioai",
    title: "Interpretable BioAI Pipelines",
    description:
      "Research pipelines designed to transform complex biological data into interpretable and testable molecular hypotheses.",
    tags: ["Feature selection", "Model interpretation", "Network biology", "Biomarker prioritization"]
  }
];
```

## 19.3 `skills.ts`

```ts
export const skills = {
  programming: ["Python", "R", "Bash", "Linux/Unix command line"],
  bioinformatics: ["DESeq2", "ClinVar", "Cytoscape", "BLAST", "TCGA/GEO workflows"],
  machineLearning: ["SVM", "Random Forest", "Logistic Regression", "Feature selection"],
  deepLearning: ["GCN", "GRU", "LSTM", "GNNs"],
  statistics: ["Differential expression", "Correlation analysis", "Co-expression networks", "Cox regression", "Survival analysis"],
  wetLab: ["PCR", "SDS-PAGE", "Cloning", "Chromatography", "qPCR diagnostics", "Lateral flow assay concepts"],
  languages: ["English", "German", "Turkish"]
};
```

---

# 20. Window State Management

Use Zustand.

Window object:

```ts
export type AppWindow = {
  id: string;
  appId: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
  payload?: Record<string, unknown>;
};
```

Store actions:

```ts
openWindow(appId, payload?)
closeWindow(id)
minimizeWindow(id)
focusWindow(id)
restoreWindow(id)
moveWindow(id, x, y)
resizeWindow(id, width, height)
```

Important:

- Opening a project from the project list should create/open a `ProjectCaseFileApp` window with `projectId`.
- Terminal commands should call the same `openWindow` logic.
- Hash navigation should call the same `openWindow` logic.

---

# 21. Hash Routing Behavior

Implement `useHashRouter`.

Examples:

```text
/#about
```

Opens About app.

```text
/#project/cryptic-pocket-hunter
```

Opens the project case file for Cryptic Pocket Hunter.

```text
/#publications
```

Opens Publications app.

When a window opens through a click, optionally update hash.

Do not break normal browsing. If hash is invalid, open Welcome app.

---

# 22. Accessibility Requirements

Even though the site is playful, it must be accessible.

Requirements:

- All app icons must be keyboard focusable
- Pressing Enter on a focused icon opens the app
- Windows should have semantic labels
- Buttons need accessible labels
- Terminal should not trap keyboard permanently
- Respect `prefers-reduced-motion`
- Boot animation should be skippable
- Text contrast must be strong
- Do not rely on color alone for status
- All external links should indicate they open a new tab
- Provide non-window mobile view for screen readers if necessary

Reduced motion:

- Disable particle movement
- Disable long boot typing animation
- Use simple fades

---

# 23. Performance Requirements

The site should be fast and lightweight.

Targets:

- Lighthouse Performance: 90+
- Accessibility: 90+
- SEO: 90+
- First load JS should remain reasonable
- Avoid heavy 3D libraries in v1
- Use SVG/CSS for visuals
- Lazy-load less important apps if needed
- Optimize fonts

No Three.js in v1 unless explicitly requested later.

---

# 24. SEO and Metadata

Use metadata in `layout.tsx`.

Suggested title:

```text
Sinan Eyüboğlu — BioAI Workstation
```

Description:

```text
Portfolio of Sinan Eyüboğlu, a molecular biotechnology graduate and AI master's student working on bioinformatics, omics, protein dynamics, computational biology, and AI-assisted drug discovery.
```

Open Graph:

```text
Title: SinanOS — BioAI Workstation
Description: AI-driven research pipelines for omics, protein dynamics, and drug discovery.
Image: /og/sinanos-og.png
```

---

# 25. README Requirements

Create a project README with:

```text
# SinanOS — BioAI Workstation

## Run locally
npm install
npm run dev

## Build
npm run build

## Content editing
Edit files in src/data:
- profile.ts
- projects.ts
- publications.ts
- skills.ts
- researchAreas.ts

## CV
Place the public CV at:
public/docs/Sinan_Eyuboglu_CV.pdf

## Deployment
Recommended: Vercel
```

---

# 26. Deployment Notes

Recommended deployment:

- Vercel
- Connect GitHub repository
- Deploy from `main`
- Add custom domain later if available

Before deployment:

- Confirm email
- Confirm LinkedIn URL
- Confirm GitHub URL
- Confirm publication statuses
- Confirm CV file path
- Remove phone/address from public contact area
- Test mobile layout

---

# 27. Development Phases

## Phase 1 — Core website

Build:

- Boot screen
- Desktop
- Taskbar
- Start menu
- Draggable windows
- Welcome app
- About app
- Projects app
- Project case file app
- Contact app
- CV download

## Phase 2 — Research polish

Add:

- Research Matrix app
- Scientific visual components
- Model Zoo app
- Publications folder
- Terminal commands

## Phase 3 — Personality and polish

Add:

- Lab Notes app
- Easter eggs
- 404 page
- More animations
- Mobile launcher mode
- SEO image

---

# 28. Acceptance Criteria

The project is complete when:

1. The website opens with a short SinanOS boot sequence.
2. Desktop interface appears after boot.
3. App icons open draggable windows on desktop.
4. Mobile users get a simplified app launcher interface.
5. Projects are shown as research case files, not generic portfolio cards.
6. No raw code, raw datasets, fake metrics, or confidential details are shown.
7. CV can be downloaded.
8. LinkedIn, GitHub, and email links work.
9. Terminal commands work.
10. Publications are displayed with statuses and DOI links where available.
11. Site visually combines retro OS aesthetics with BioAI/scientific visuals.
12. Lighthouse scores are strong.
13. Website is deployable to Vercel.

---

# 29. Final Creative Direction

The final site should feel like this:

> A visitor lands inside a retro BioAI workstation.  
> They open research apps instead of normal portfolio sections.  
> Each app reveals a different part of Sinan’s scientific identity: omics, protein dynamics, AI models, drug response, publications, and lab notes.  
> The site is playful enough to be memorable, but scientifically serious enough to be credible.

The most important design principle:

> **Make the portfolio feel like a research system, not a résumé page.**

The most important content principle:

> **Show how Sinan thinks through biological problems computationally, without exposing private research files or inventing unsupported results.**

The most important identity phrase:

> **AI-driven research pipelines for omics, protein dynamics, and drug discovery.**
