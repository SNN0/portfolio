# SinanOS - BioAI Workstation

An interactive research portfolio for Sinan Eyüboğlu, built as a retro scientific operating system. The workstation presents public-safe research case files spanning omics, protein dynamics, drug response, publications, BioAI methods, and lab notes.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run typecheck
npm run build
```

## Content editing

Primary content lives in `src/data`:

- `profile.ts`
- `projects.ts`
- `publications.ts`
- `skills.ts`
- `researchAreas.ts`
- `labNotes.ts`
- `experience.ts` (research, industry experience, and incoming appointments)

## CV

The public CV is available at:

```text
public/docs/Sinan_Eyuboglu_CV.pdf
```

Replace that file while keeping the filename stable to update the download.

## Shareable routes

The desktop uses URL hashes, including `/#about`, `/#projects`, `/#publications`, and `/#project/cryptic-pocket-hunter`.

## Desktop interface

Projects uses a Research Explorer: select a file to preview it, then double-click, press Enter, or use Open case file. About has four System Properties tabs. Lab Notes includes word wrap, search, and text downloads. Windows support maximize/restore through the title-bar button or a title-bar double-click.

Visual changes are in `src/styles/workstation.css`. The per-application review and browser checks are recorded in `docs/SINANOS_UI_REVIEW.md`.

## Deployment

Vercel is recommended. Import the repository, use the default Next.js settings, and deploy from the production branch. Before launch, confirm publication statuses, contact links, CV content, and the canonical domain in `src/app/layout.tsx` and `src/app/sitemap.ts`.

## Public research policy

The site intentionally excludes raw datasets, unpublished results, model weights, private scripts, internal lab notes, and sensitive collaborator information.
