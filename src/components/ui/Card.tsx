import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("panel-card", className)}>{children}</div>;
}
