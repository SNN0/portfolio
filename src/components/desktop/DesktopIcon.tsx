import type { LucideIcon } from "lucide-react";

type DesktopIconProps = {
  label: string;
  iconPath?: string;
  icon?: LucideIcon;
  selected: boolean;
  onSelect: () => void;
  onOpen: () => void;
};

export function DesktopIcon({ label, iconPath, icon: Icon, selected, onSelect, onOpen }: DesktopIconProps) {
  return <button
    className={`desktop-icon ${selected ? "selected" : ""}`}
    onClick={onSelect}
    onDoubleClick={onOpen}
    onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") onOpen(); }}
    aria-label={`Open ${label}`}
    aria-pressed={selected}
  >
    <span>{iconPath ? <img src={iconPath} alt="" aria-hidden="true"/> : Icon ? <Icon aria-hidden="true"/> : null}</span>
    <strong>{label}</strong>
  </button>;
}
