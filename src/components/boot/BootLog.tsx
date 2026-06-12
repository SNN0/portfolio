import { bootLines } from "@/hooks/useBootSequence";

export function BootLog({ visibleLines }: { visibleLines: number }) {
  return <div className="boot-log" aria-live="polite">{bootLines.slice(0, visibleLines).map((line, index) => <p key={line}><span>{index === visibleLines - 1 ? ">" : "[OK]"}</span>{line}</p>)}</div>;
}
