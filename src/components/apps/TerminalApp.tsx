"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { runTerminalCommand } from "@/lib/terminalEngine";
import { useWindowStore } from "@/hooks/useWindowStore";

type Line = { type: "command" | "output"; text: string };

export function TerminalApp() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([{ type: "output", text: "SinanOS Terminal\nType 'help' to list available commands." }]);
  const endRef = useRef<HTMLDivElement>(null);
  const open = useWindowStore((state) => state.openWindow);
  useEffect(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), [lines]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const command = input;
    const result = runTerminalCommand(command);
    setInput("");
    if (result.clear) setLines([]); else setLines((current) => [...current, { type: "command", text: command }, ...(result.output ? [{ type: "output" as const, text: result.output }] : [])]);
    if (result.open) open(result.open, result.projectId ? { projectId: result.projectId } : undefined);
    if (result.href) result.href.startsWith("/") ? window.open(result.href, "_self") : window.open(result.href, "_blank", "noopener,noreferrer");
  };

  return <div className="terminal-app" onClick={() => document.getElementById("terminal-input")?.focus()}>
    <div className="terminal-output" aria-live="polite">{lines.map((line, index) => <pre key={index} className={line.type}>{line.type === "command" ? `visitor@sinanos:~$ ${line.text}` : line.text}</pre>)}<div ref={endRef}/></div>
    <form onSubmit={submit}><label htmlFor="terminal-input">visitor@sinanos:~$</label><input id="terminal-input" autoComplete="off" spellCheck={false} value={input} onChange={(event) => setInput(event.target.value)} aria-label="Terminal command" /></form>
  </div>;
}
