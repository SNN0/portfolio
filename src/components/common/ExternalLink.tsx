import { ExternalLinkIcon } from "lucide-react";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

export function ExternalLink({ children, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return <a target="_blank" rel="noreferrer" {...props}>{children}<ExternalLinkIcon aria-hidden="true" size={13} /></a>;
}
