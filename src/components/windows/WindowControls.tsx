import { Copy, Minus, Square, X } from "lucide-react";

export function WindowControls({ onMinimize, onClose, onMaximize, maximized }: { onMinimize: () => void; onClose: () => void; onMaximize: () => void; maximized: boolean }) {
  return <div className="window-controls"><button onClick={onMinimize} aria-label="Minimize window"><Minus size={13}/></button><button className="maximize-control" onClick={onMaximize} aria-label={maximized ? "Restore window size" : "Maximize window"}>{maximized ? <Copy size={12}/> : <Square size={12}/>}</button><button onClick={onClose} aria-label="Close window"><X size={13}/></button></div>;
}
