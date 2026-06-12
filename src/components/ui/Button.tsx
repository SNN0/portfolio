import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

export function Button({ children, className, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <button className={cn("retro-button", className)} {...props}>{children}</button>;
}
