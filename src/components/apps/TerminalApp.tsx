"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { desktopPath, runTerminalCommand, terminalCompletions, terminalPrompt } from "@/lib/terminalEngine";
import { useWindowStore } from "@/hooks/useWindowStore";

type Line = { type: "command" | "output"; text: string };

export function TerminalApp() {
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState(desktopPath);
  const [history, setHistory] = useState<string[]>([]);
  const historyIndex = useRef(0);
  const draft = useRef("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [lines, setLines] = useState<Line[]>([{ type: "output", text: "SinanOS Terminal\nType 'help' to list available commands." }]);
  const outputRef = useRef<HTMLDivElement>(null);
  const open = useWindowStore((state) => state.openWindow);
  useEffect(() => {
    // Scroll only this terminal. Never return a browser API result as an effect cleanup.
    const output = outputRef.current;
    if (output) output.scrollTop = output.scrollHeight;
  }, [lines]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const command = input;
    if (!command.trim()) return;
    const result = command.trim().toLowerCase() === "history" ? { output: [...history, command].map((item, i) => `${i + 1}  ${item}`).join("\n") } : runTerminalCommand(command, cwd);
    setHistory((current) => [...current, command]);
    historyIndex.current = history.length + 1;
    draft.current = "";
    setInput("");
    if (result.clear) setLines([]); else setLines((current) => [...current, { type: "command", text: `${terminalPrompt(cwd)} ${command}` }, ...(result.output ? [{ type: "output" as const, text: result.output }] : [])]);
    if (result.cwd) setCwd(result.cwd);
    if (result.open) open(result.open, result.projectId ? { projectId: result.projectId } : undefined);
    if (result.href) window.open(result.href, "_blank", "noopener,noreferrer");
  };

  return <div className="terminal-app" onClick={() => { if (!window.getSelection()?.toString()) inputRef.current?.focus(); }}>
    <div ref={outputRef} className="terminal-output" aria-live="polite">{lines.map((line, index) => <pre key={index} className={line.type}>{line.text}</pre>)}</div>
    <form onSubmit={submit}><label htmlFor="terminal-input">{terminalPrompt(cwd)}</label><input ref={inputRef} id="terminal-input" autoComplete="off" autoCapitalize="off" spellCheck={false} value={input} onChange={(event) => setInput(event.target.value)} aria-label="Terminal command" onKeyDown={(event) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        if (historyIndex.current === history.length) draft.current = input;
        historyIndex.current = Math.max(0, Math.min(history.length, historyIndex.current + (event.key === "ArrowUp" ? -1 : 1)));
        setInput(history[historyIndex.current] ?? draft.current);
      } else if (event.key === "Tab") {
        event.preventDefault();
        const matches = terminalCompletions(input, cwd);
        if (matches.length === 1) setInput(matches[0]);
        else if (matches.length > 1) setLines((current) => [...current, { type: "output", text: matches.join("\n") }]);
      } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "l") {
        event.preventDefault(); setLines([]);
      } else if (event.ctrlKey && event.key.toLowerCase() === "c" && !window.getSelection()?.toString()) {
        event.preventDefault(); setLines((current) => [...current, { type: "command", text: `${terminalPrompt(cwd)} ${input}^C` }]); setInput(""); historyIndex.current = history.length; draft.current = "";
      }
    }}/></form>
  </div>;
}
