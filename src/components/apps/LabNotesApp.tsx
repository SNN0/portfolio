"use client";

import { useState } from "react";
import { Check, Download, FileText, Search, WrapText } from "lucide-react";
import { labNotes } from "@/data/labNotes";

export function LabNotesApp() {
  const [selected, setSelected] = useState(labNotes[0].id);
  const [query, setQuery] = useState("");
  const [wrap, setWrap] = useState(true);
  const note = labNotes.find((item) => item.id === selected) ?? labNotes[0];
  const visible = labNotes.filter((item) => `${item.title} ${item.tags.join(" ")} ${item.body}`.toLowerCase().includes(query.toLowerCase().trim()));
  const sentences = note.body.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [note.body];
  const paragraphs = Array.from({ length: Math.ceil(sentences.length / 2) }, (_, index) => sentences.slice(index * 2, index * 2 + 2).join("").trim());
  const saveNote = () => {
    const file = new Blob([`${note.title}\n${note.tags.join(" / ")}\n\n${note.body}\n`], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url; link.download = `${note.id.toLowerCase()}.txt`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return <div className="workstation-app notepad-app">
    <div className="app-toolbar notepad-toolbar"><span className="toolbar-label"><FileText size={14} />{note.id.toLowerCase()}.txt — Notepad</span><button className="toolbar-button" onClick={saveNote}><Download size={14} />Save .txt</button><button className="toolbar-button" aria-pressed={wrap} onClick={() => setWrap(!wrap)}><WrapText size={14} />Word wrap{wrap && <Check size={12} />}</button></div>
    <div className="notepad-layout"><nav className="notepad-files" aria-label="Lab notes"><label className="retro-search"><Search size={13} /><input aria-label="Find a lab note" placeholder="Find a note…" value={query} onChange={(event) => setQuery(event.target.value)} /></label><p>RESEARCH NOTES / {labNotes.length} FILES</p>{visible.map((item) => <button key={item.id} aria-current={selected === item.id ? "page" : undefined} onClick={() => setSelected(item.id)}><FileText size={17} /><span><small>{item.id.toLowerCase()}.txt</small>{item.title}</span></button>)}{visible.length === 0 && <div className="notepad-no-results">No matching notes.<button className="toolbar-button" onClick={() => setQuery("")}>Clear search</button></div>}</nav>
      <article key={note.id} className={`notepad-document scrollable ${wrap ? "" : "no-wrap"}`} aria-label="Selected research note"><p className="notepad-document-meta">{note.id} / CONCEPT NOTE</p><h2>{note.title}</h2><p className="notepad-tags">{note.tags.join(" / ")}</p><div className="notepad-text">{paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div><footer>Public research thinking note.</footer></article>
    </div>
    <footer className="app-statusbar"><span>{note.body.trim().split(/\s+/).length} words</span><span>Read-only · UTF-8 · {wrap ? "Word wrap on" : "Word wrap off"}</span></footer>
  </div>;
}
