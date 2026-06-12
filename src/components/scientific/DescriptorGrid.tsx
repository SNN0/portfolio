const descriptors = ["Dynamic descriptors", "Geometric descriptors", "Chemical descriptors", "Atom-level features", "Temporal state"];

export function DescriptorGrid() {
  return <div className="descriptor-grid">{descriptors.map((item) => <div key={item}><i />{item}</div>)}</div>;
}
