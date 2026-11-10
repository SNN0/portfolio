"use client";

type Tab<T extends string> = { id: T; label: string; count?: number };
export function RetroTabs<T extends string>({ tabs, value, onChange, label, prefix }: {
  tabs: readonly Tab<T>[]; value: T; onChange: (value: T) => void; label: string; prefix: string;
}) {
  return <div className="retro-tabs" role="tablist" aria-label={label}>
    {tabs.map((tab, index) => <button key={tab.id} id={`${prefix}-tab-${tab.id}`} type="button" role="tab" aria-label={tab.label} aria-selected={value === tab.id} aria-controls={`${prefix}-panel`} tabIndex={value === tab.id ? 0 : -1} onClick={() => onChange(tab.id)} onKeyDown={(event) => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault(); onChange(tabs[next].id);
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
    }}>{tab.label}{tab.count !== undefined && <span aria-hidden="true">{tab.count}</span>}</button>)}
  </div>;
}
