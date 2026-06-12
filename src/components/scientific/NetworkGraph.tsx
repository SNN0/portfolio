const nodes = [{ x: 50, y: 50, label: "APOE" }, { x: 17, y: 24, label: "RNA" }, { x: 81, y: 22, label: "Pathways" }, { x: 83, y: 74, label: "Network" }, { x: 21, y: 78, label: "Expression" }, { x: 50, y: 10, label: "Genotype" }];

export function NetworkGraph() {
  return <svg className="network-graph" viewBox="0 0 100 100" role="img" aria-label="Conceptual APOE-centered network graph">
    {nodes.slice(1).map((node) => <line key={node.label} x1="50" y1="50" x2={node.x} y2={node.y} />)}
    {nodes.map((node, index) => <g key={node.label} className={index === 0 ? "central-node" : "graph-node"}><circle cx={node.x} cy={node.y} r={index === 0 ? 9 : 6}/><text x={node.x} y={node.y + (index === 0 ? 2 : 10)} textAnchor="middle">{node.label}</text></g>)}
  </svg>;
}
