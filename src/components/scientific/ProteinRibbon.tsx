export function ProteinRibbon({ compact = false }: { compact?: boolean }) {
  return <svg className="protein-ribbon" viewBox="0 0 420 220" role="img" aria-label="Stylized dynamic protein ribbon">
    <defs><linearGradient id="ribbon" x1="0" x2="1"><stop stopColor="#28c7b7"/><stop offset=".5" stopColor="#9b7cff"/><stop offset="1" stopColor="#4ea8ff"/></linearGradient></defs>
    <path className="ribbon-shadow" d="M20 135 C70 30,130 205,185 90 S285 20,400 120" />
    <path className="ribbon-main" d="M20 135 C70 30,130 205,185 90 S285 20,400 120" />
    {!compact && [45,94,146,205,260,316,374].map((x, i) => <circle key={x} className="residue" cx={x} cy={[95,106,142,72,96,77,103][i]} r="5" />)}
  </svg>;
}
