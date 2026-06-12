import { Minus, X } from "lucide-react";

export function WindowControls({ onMinimize, onClose }: { onMinimize: () => void; onClose: () => void }) {
  return <div className="window-controls"><button onClick={onMinimize} aria-label="Minimize window"><Minus size={13}/></button><button onClick={onClose} aria-label="Close window"><X size={13}/></button></div>;
}
