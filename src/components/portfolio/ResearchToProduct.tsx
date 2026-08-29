import { researchToProduct } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function ResearchToProduct() {
  const { label, heading, body, stages, quote } = researchToProduct;

  return (
    <Section id="research" label={label} title={heading}>
      <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <Reveal className="space-y-6">
          {body.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={80} className="self-start">
          <blockquote className="border-l-2 border-accent-strong pl-6 text-lg font-medium leading-relaxed tracking-tight text-foreground md:text-xl">
            “{quote}”
          </blockquote>
        </Reveal>
      </div>

      <Reveal className="mt-16 md:mt-20">
        <p className="label-mono">How the work moves</p>
        <ol className="mt-6 grid grid-cols-1 gap-px overflow-hidden border-y border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <li key={s.title} className="relative bg-background px-1 py-7 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-rule" />
                {i < stages.length - 1 ? (
                  <span aria-hidden="true" className="text-accent-strong">
                    →
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="h-[7px] w-[7px] rounded-full bg-accent-strong"
                  />
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
