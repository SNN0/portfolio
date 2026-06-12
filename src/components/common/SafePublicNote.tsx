import { ShieldCheck } from "lucide-react";
import type { PropsWithChildren } from "react";

export function SafePublicNote({ children }: PropsWithChildren) {
  return <aside className="safe-note"><ShieldCheck aria-hidden="true" size={16} /><span>{children}</span></aside>;
}
