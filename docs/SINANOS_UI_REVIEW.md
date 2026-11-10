# SinanOS desktop review — 10 November 2026

The visual direction remains a retro scientific desktop: navy title bars, beveled controls, file icons, property sheets, inset document areas, and a taskbar. All content stays inside the existing workstation.

## Changes by application

| Application | Review finding | Change |
| --- | --- | --- |
| Welcome | Oversized identity text and uneven space usage | Balanced two-column welcome dialog, compact shortcuts, readable text, and counts derived from portfolio data |
| About | Narrow profile table and a long combined page | System Properties with General, Experience, Education, and Methods tabs |
| Projects | Selecting a project immediately opened another window | Research Explorer with folders, search, file selection, a preview, and explicit open action; Enter and double-click also open files |
| Research Matrix | Small text and an overly tall diagram panel | Readable modules, a bounded diagram, and links to related case files |
| Model Zoo | Small type and misaligned grid sections | Larger skill rows, consistent spacing, and clearer summary labels |
| Publications | Empty status tabs appeared blank; author details were absent | Six counted tabs, author metadata, search, copyable citations, and explicit empty states |
| Lab Notes | Dense single-paragraph documents | Notepad with a file list, search, word wrap, readable paragraphs, word count, and UTF-8 text downloads |
| Contact | Small contact details and an unconditional success message | Clear contact channels, email copy feedback, and consistent actions |
| Terminal | Existing effect fix required regression coverage | Retained scoped output scrolling; tested commands and window lifecycle |
| Case files | Dense metadata and uneven section alignment | Readable metadata, consistent result panels, and a distinct incoming-appointment view |

Shared improvements include app-specific title-bar icons, maximize/restore controls, correct active-window styling after closing a window, an Escape/outside-click dismissal for the Start menu, quieter scan lines, classic scrollbars, and a two-column default desktop icon layout. Existing saved icon positions remain supported.

## Browser validation

- Opened all ten application types and all six research case files.
- Opened all four About tabs and checked keyboard tab navigation.
- Opened all six publication tabs: All 8, Published 3, In Press 2, Under Review 3, Submitted 0, In Preparation 0.
- Opened all five notes; checked search, empty results, word wrap, and a text download.
- Checked Explorer selection, folder filtering, preview updates, and opening a selected case file.
- Checked citation copying, email copying, Matrix-to-case navigation, terminal commands, minimize/restore, maximize/restore, and Start-menu dismissal.
- Opened every main application at 390 × 844; checked the six core document/utility layouts at 320 × 740 and Explorer at 768 × 1024. No horizontal content overflow was measured in these checks.
- Development and production consoles contained no errors during the final interaction checks.
- TypeScript validation and the final production build passed. The production build used an isolated temporary copy, which was removed after verification.

Source checks use the working files because the graph generation predates these edits.

## Terminal and desktop interaction follow-up

- Shared desktop directory powers both icons and terminal listings; added paths, directory navigation, file opening/reading, command history and completion.
- Blue selection rectangle supports intersection selection in either drag direction, modifier selection, select all, Escape, group movement and persistent layout. Disabled native browser image dragging to keep icon movement reliable.
- Browser checks: nine desktop entries and six project files listed; project opened from terminal; history and completion verified; reverse rectangle selected six icons; Ctrl-click added a seventh; group movement translated all six selected icons by the same delta; Ctrl+A selected nine; Escape cleared selection; positions survived reload. Mobile terminal at 390px had no horizontal overflow. Console had no errors.
- Five Node regression tests cover desktop listing, path navigation, all app/CV mappings, all project open/read mappings, completion, shortcuts and errors.
- Graph service was unavailable during this follow-up; exact source files were used.
