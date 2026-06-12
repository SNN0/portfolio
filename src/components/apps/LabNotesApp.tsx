"use client";

import { useState } from "react";
import { BookOpenText } from "lucide-react";
import { labNotes } from "@/data/labNotes";
import { Badge } from "@/components/ui/Badge";

export function LabNotesApp() {
  const [selected, setSelected] = useState(labNotes[0].id);
  const note = labNotes.find((item) => item.id === selected) ?? labNotes[0];
  return <div className="app-shell notes-layout">
    <nav aria-label="Lab notes">{labNotes.map((item) => <button className={selected === item.id ? "active" : ""} key={item.id} onClick={() => setSelected(item.id)}><span>{item.id}</span>{item.title}</button>)}</nav>
    <article className="note-paper scrollable"><BookOpenText aria-hidden="true"/><span>{note.id} / CONCEPT NOTE</span><h2>{note.title}</h2><div>{note.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div><p>{note.body}</p><footer>Public research thinking note. No unpublished results or internal lab records.</footer></article>
  </div>;
}
