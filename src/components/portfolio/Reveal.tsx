import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  return <Tag className={className}>{children}</Tag>;
}
