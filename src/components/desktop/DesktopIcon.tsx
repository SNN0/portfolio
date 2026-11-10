import type { LucideIcon } from "lucide-react";
import type { KeyboardEvent, PointerEvent } from "react";

type DesktopIconProps = {
  label: string;
  iconPath?: string;
  icon?: LucideIcon;
  selected: boolean;
  onSelect: (event: PointerEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
  onOpen: () => void;
};

export function DesktopIcon({ label, iconPath, icon: Icon, selected, onSelect, onOpen }: DesktopIconProps) {
  return <button
    className={`desktop-icon ${selected ? "selected" : ""}`}
    onPointerDown={onSelect}
    onDoubleClick={onOpen}
    onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); onOpen(); } else if (event.key === " ") { event.preventDefault(); onSelect(event); } }}
    aria-label={`Open ${label}`}
    aria-pressed={selected}
    onDragStart={(event) => event.preventDefault()}
  >
    <span>{iconPath ? <img src={iconPath} draggable={false} alt="" aria-hidden="true"/> : Icon ? <Icon aria-hidden="true"/> : null}</span>
    <strong>{label}</strong>
  </button>;
}
