const cells = Array.from({ length: 96 }, (_, index) => index);

export function OmicsHeatmap() {
  return <div className="heatmap-wrap" role="img" aria-label="Conceptual omics heatmap without numerical data"><div className="heatmap-axis">genes</div><div className="heatmap">{cells.map((cell) => <i key={cell} style={{ opacity: .38 + ((cell * 7) % 60) / 100 }} />)}</div><span>samples / molecular signal</span></div>;
}
