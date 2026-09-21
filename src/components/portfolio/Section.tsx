import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  label,
  title,
  children,
  className = "",
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-rule ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Reveal className="mb-10 md:mb-12">
          <p className="label-mono">{label}</p>
          <h2
            id={`${id}-title`}
            className="mt-3 max-w-4xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl"
          >
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
