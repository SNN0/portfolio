"use client";

import { BookOpenText, Contact, FileDown, FileText, FlaskConical, FolderLock, Network, TerminalSquare } from "lucide-react";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useHashRouter } from "@/hooks/useHashRouter";
import { useWindowStore } from "@/hooks/useWindowStore";
import { useDesktopLayout } from "@/hooks/useDesktopLayout";
import { profile } from "@/data/profile";
import { desktopEntries } from "@/data/desktop";
import { DesktopIcon } from "@/components/desktop/DesktopIcon";
import { DraggableDesktopItem } from "@/components/desktop/DraggableDesktopItem";
import { DesktopStatusPanel } from "@/components/desktop/DesktopStatusPanel";
import { WindowManager } from "@/components/windows/WindowManager";
import { Taskbar } from "@/components/desktop/Taskbar";
import { CvAnalytics, trackCvDownload } from "@/components/common/CvAnalytics";
import type { AppId } from "@/types/window";

const mobileIcons: Partial<Record<AppId, typeof Network>> = { about: Contact, research: Network, projects: FolderLock, "model-zoo": FlaskConical, publications: FileText, "lab-notes": BookOpenText, terminal: TerminalSquare, contact: Contact };
type Selection = { x: number; y: number; width: number; height: number };

export function Desktop() {
  const open = useWindowStore((state) => state.openWindow);
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);
  const [selection, setSelection] = useState<Selection | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const selectionDrag = useRef<{ x: number; y: number; base: string[]; previous: string[]; pointerId: number } | null>(null);
  const { positions, moveIcons, resetLayout } = useDesktopLayout();
  useHashRouter(true);
  const downloadCv = () => {
    trackCvDownload();
    const link = document.createElement("a");
    link.href = profile.cvPath;
    link.download = "Sinan_Eyuboglu_CV.pdf";
    link.click();
  };
  const selectIcon = (id: string, event: PointerEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
    if ("button" in event && event.button !== 0) return;
    setSelectedIcons((current) => event.ctrlKey || event.metaKey ? current.includes(id) ? current.filter((key) => key !== id) : [...current, id] : event.shiftKey ? [...new Set([...current, id])] : current.includes(id) ? current : [id]);
  };
  const moveSelection = (id: string, position: { x: number; y: number }) => {
    const ids = selectedIcons.includes(id) ? selectedIcons : [id];
    const grid = gridRef.current;
    if (!grid) return;
    const dx = Math.max(-Math.min(...ids.map((key) => positions[key].x)), Math.min(position.x - positions[id].x, grid.clientWidth - 110 - Math.max(...ids.map((key) => positions[key].x))));
    const dy = Math.max(-Math.min(...ids.map((key) => positions[key].y)), Math.min(position.y - positions[id].y, grid.clientHeight - 100 - Math.max(...ids.map((key) => positions[key].y))));
    moveIcons(Object.fromEntries(ids.map((key) => [key, { x: positions[key].x + dx, y: positions[key].y + dy }])));
  };
  const updateSelection = (event: PointerEvent<HTMLDivElement>) => {
    const drag = selectionDrag.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - bounds.left, bounds.width));
    const y = Math.max(0, Math.min(event.clientY - bounds.top, bounds.height));
    const box = { x: Math.min(drag.x, x), y: Math.min(drag.y, y), width: Math.abs(x - drag.x), height: Math.abs(y - drag.y) };
    setSelection(box);
    const hits = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>(".desktop-icon")).flatMap((button, index) => {
      const rect = button.getBoundingClientRect();
      return box.width > 3 && box.height > 3 && rect.left < bounds.left + box.x + box.width && rect.right > bounds.left + box.x && rect.top < bounds.top + box.y + box.height && rect.bottom > bounds.top + box.y ? [desktopEntries[index].id] : [];
    });
    setSelectedIcons([...new Set([...drag.base, ...hits])]);
  };

  return <main className="desktop">
    <CvAnalytics />
    <div ref={gridRef} className="desktop-grid" aria-label="SinanOS applications" tabIndex={0} onPointerDown={(event) => {
      if (event.target !== event.currentTarget || event.button !== 0 || event.pointerType === "touch") return;
      event.preventDefault(); event.currentTarget.focus();
      const bounds = event.currentTarget.getBoundingClientRect();
      const base = event.ctrlKey || event.metaKey || event.shiftKey ? selectedIcons : [];
      selectionDrag.current = { x: event.clientX - bounds.left, y: event.clientY - bounds.top, base, previous: selectedIcons, pointerId: event.pointerId };
      setSelectedIcons(base);
      setSelection({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, width: 0, height: 0 });
      event.currentTarget.setPointerCapture(event.pointerId);
    }} onPointerMove={(event) => {
      updateSelection(event);
      if (event.pointerType !== "mouse" || event.buttons || event.target !== event.currentTarget) return;
      const grid = event.currentTarget;
      grid.style.setProperty("--pointer-drift-x", `${(event.clientX / grid.clientWidth - 0.5) * 18}px`);
      grid.style.setProperty("--pointer-drift-y", `${(event.clientY / grid.clientHeight - 0.5) * 18}px`);
    }} onPointerLeave={(event) => {
      event.currentTarget.style.removeProperty("--pointer-drift-x");
      event.currentTarget.style.removeProperty("--pointer-drift-y");
    }} onPointerUp={(event) => {
      if (!selectionDrag.current || selectionDrag.current.pointerId !== event.pointerId) return;
      updateSelection(event); selectionDrag.current = null; setSelection(null);
      event.currentTarget.releasePointerCapture(event.pointerId);
    }} onLostPointerCapture={() => { selectionDrag.current = null; setSelection(null); }} onPointerCancel={() => { if (selectionDrag.current) setSelectedIcons(selectionDrag.current.previous); selectionDrag.current = null; setSelection(null); }} onKeyDown={(event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "a") { event.preventDefault(); setSelectedIcons(desktopEntries.map((entry) => entry.id)); }
      if (event.key === "Escape") { selectionDrag.current = null; setSelection(null); setSelectedIcons([]); }
    }}>
      <div className="desktop-motes" aria-hidden="true" />
      {desktopEntries.map((item) => <DraggableDesktopItem key={item.id} position={positions[item.id]} onMove={(position) => moveSelection(item.id, position)} onSelect={() => {}}><DesktopIcon label={item.label} iconPath={item.iconPath || undefined} icon={item.id === "cv" ? FileDown : undefined} selected={selectedIcons.includes(item.id)} onSelect={(event) => selectIcon(item.id, event)} onOpen={() => item.app ? open(item.app) : downloadCv()}/></DraggableDesktopItem>)}
      {selection && <div className="desktop-selection" aria-hidden="true" style={{ left: selection.x, top: selection.y, width: selection.width, height: selection.height }}/>}
      <span className="sr-only" role="status">{selectedIcons.length} desktop items selected</span>
    </div>
    <DesktopStatusPanel onResetLayout={() => { resetLayout(); setSelectedIcons([]); }}/>
    <div className="mobile-launcher"><span>SINANOS / RESEARCH WORKSTATION</span><h1>Explore the research</h1><div>{desktopEntries.filter((item) => item.app).map(({ label, app }) => { const Icon = mobileIcons[app!] ?? Contact; return <button key={label} onClick={() => open(app!)}><Icon/>{label}</button>; })}<a href={profile.cvPath} download><FileDown/>Download CV</a></div></div>
    <WindowManager/>
    <Taskbar/>
  </main>;
}
