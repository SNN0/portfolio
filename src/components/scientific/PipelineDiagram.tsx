export function PipelineDiagram({ steps }: { steps: string[] }) {
  return <div className="pipeline" aria-label={`Pipeline: ${steps.join(" to ")}`}>{steps.map((step, index) => <div key={`${step}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}</div>;
}
