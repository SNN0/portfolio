import { RotateCcw } from "lucide-react";

export function DesktopStatusPanel({ onResetLayout }: { onResetLayout: () => void }) {
  return <aside className="desktop-status"><span>WORKSTATION STATUS</span><div><i/>AI Core: online</div><div><i/>Research modules: 09</div><p>AI-driven research pipelines for omics, protein dynamics, and drug discovery.</p><button onClick={onResetLayout}><RotateCcw size={13}/>Reset icon layout</button></aside>;
}
