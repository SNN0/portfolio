export function MoleculeParticles() {
  return <div className="molecule-particles" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <i key={i} style={{ "--x": `${(i * 37) % 100}%`, "--y": `${(i * 61) % 100}%`, "--delay": `${(i % 5) * -.7}s` } as React.CSSProperties} />)}</div>;
}
