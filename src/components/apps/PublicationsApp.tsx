"use client";

import { useMemo, useState } from "react";
import { FileText, Link2 } from "lucide-react";
import { publications } from "@/data/publications";
import { useWindowStore } from "@/hooks/useWindowStore";
import { ExternalLink } from "@/components/common/ExternalLink";
import type { PublicationStatus } from "@/types/publication";

const tabs: { label: string; value: PublicationStatus | "all" }[] = [
  { label: "All", value: "all" }, { label: "Published", value: "published" }, { label: "Under Review", value: "under-review" }, { label: "Submitted", value: "submitted" }, { label: "In Preparation", value: "in-preparation" },
];

export function PublicationsApp() {
  const [active, setActive] = useState<PublicationStatus | "all">("all");
  const open = useWindowStore((state) => state.openWindow);
  const list = useMemo(() => active === "all" ? publications : publications.filter((item) => item.status === active), [active]);
  return <div className="app-shell scrollable">
    <div className="folder-tabs" role="tablist" aria-label="Publication status">{tabs.map((tab) => <button role="tab" aria-selected={active === tab.value} key={tab.value} onClick={() => setActive(tab.value)}>{tab.label}</button>)}</div>
    <div className="publication-list">{list.map((item) => <article key={item.title} className="publication-card"><FileText aria-hidden="true"/><div><span>{item.category.replace("-", " ")} / {item.status.replace("-", " ")}</span><h3>{item.title}</h3><p>{[item.venue, item.year].filter(Boolean).join(", ")}</p><div className="publication-actions">{item.doi && <ExternalLink href={item.doi}><Link2 size={13}/>Open DOI</ExternalLink>}{item.relatedProjectIds?.map((id) => <button key={id} onClick={() => open("project", { projectId: id })}>Related case file</button>)}</div></div></article>)}</div>
    <p className="manual-note">Publication statuses should be manually confirmed before deployment.</p>
  </div>;
}
