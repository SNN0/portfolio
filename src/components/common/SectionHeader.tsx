export function SectionHeader({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return <header className="section-header">{eyebrow && <span>{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</header>;
}
