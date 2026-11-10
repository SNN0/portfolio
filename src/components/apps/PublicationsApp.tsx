"use client";

import { useMemo, useState } from "react";
import { Check, Copy, FileText, Link2, Search } from "lucide-react";
import { publications } from "@/data/publications";
import { useWindowStore } from "@/hooks/useWindowStore";
import { ExternalLink } from "@/components/common/ExternalLink";
import { RetroTabs } from "@/components/common/RetroTabs";
import type { PublicationStatus } from "@/types/publication";

const categories: { id: PublicationStatus | "all"; label: string }[] = [
  { label: "All", id: "all" }, { label: "Published", id: "published" }, { label: "In Press", id: "in-press" }, { label: "Under Review", id: "under-review" }, { label: "Submitted", id: "submitted" }, { label: "In Preparation", id: "in-preparation" },
];
export function PublicationsApp() {
  const [active, setActive] = useState<PublicationStatus | "all">("all");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState("");
  const [message, setMessage] = useState("");
  const open = useWindowStore((state) => state.openWindow);
  const list = useMemo(() => publications.filter((item) => (active === "all" || item.status === active) && [item.title, item.authors, item.venue].join(" ").toLowerCase().includes(query.toLowerCase().trim())), [active, query]);
  const tabs = categories.map((tab) => ({ ...tab, count: tab.id === "all" ? publications.length : publications.filter((item) => item.status === tab.id).length }));
  const copyCitation = async (item: typeof publications[number]) => {
    const citation = [item.authors, item.year, item.title, item.venue, item.status.replaceAll("-", " "), item.doi].filter(Boolean).join(". ");
    try { await navigator.clipboard.writeText(citation); setCopied(item.title); setMessage("Citation copied to clipboard."); }
    catch { setMessage("Copy unavailable. The citation details are shown in the record."); }
  };
  return <div className="workstation-app publications-folder">
    <div className="app-toolbar"><span className="toolbar-label"><FileText size={16} />Publications Library</span><label className="retro-search"><Search size={14} /><input aria-label="Search publications" placeholder="Find a title, author or journal…" value={query} onChange={(event) => setQuery(event.target.value)} /></label></div>
    <RetroTabs tabs={tabs} value={active} onChange={setActive} label="Publication status" prefix="publications" />
    <div key={`${active}-${query}`} className="publication-panel scrollable" id="publications-panel" role="tabpanel" aria-labelledby={`publications-tab-${active}`} tabIndex={0}>
      <div className="publication-list">{list.map((item) => <article key={item.title} className="publication-card"><FileText aria-hidden="true" /><div><span>{item.category.replaceAll("-", " ")} / {item.status.replaceAll("-", " ")}</span><h3>{item.title}</h3>{item.authors && <p className="publication-authors">{item.authors}</p>}<p>{[item.venue, item.year].filter(Boolean).join(", ")}</p><div className="publication-actions">{item.doi && <ExternalLink href={item.doi}><Link2 size={13} />Open DOI</ExternalLink>}<button onClick={() => copyCitation(item)} aria-label={`Copy citation: ${item.title}`}>{copied === item.title ? <Check size={13} /> : <Copy size={13} />}{copied === item.title ? "Copied" : "Copy citation"}</button>{item.relatedProjectIds?.map((id) => <button key={id} onClick={() => open("project", { projectId: id })}>Related case file</button>)}</div></div></article>)}</div>
      {list.length === 0 && <div className="retro-empty"><FileText size={36} /><h3>{query ? "No matching publications" : "No records in this folder"}</h3><p>{query ? "Try another title, author or journal." : "The current CV has no publications with this status."}</p><button className="retro-button" onClick={() => { setQuery(""); setActive("all"); }}>Show all publications</button></div>}
    </div>
    <footer className="app-statusbar"><span role="status">{message || `${list.length} of ${publications.length} records`}</span><span>Statuses from current CV</span></footer>
  </div>;
}
