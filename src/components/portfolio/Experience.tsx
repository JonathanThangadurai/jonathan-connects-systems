import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="From production systems to product creation in applied research."
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-[5px] top-2 hidden h-[calc(100%-1rem)] w-px bg-rule sm:block"
        />
        <ol className="space-y-14 md:space-y-20">
          {experience.map((c, i) => (
            <Reveal as="li" key={c.company} delay={i * 60} className="relative sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 hidden h-[11px] w-[11px] rounded-full border border-accent-strong bg-background sm:block"
              />
              <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {c.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.meta}</p>
                </div>
                <p className="label-mono">
                  {c.location} · {c.period}
                </p>
              </header>

              <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground">
                {c.summary}
              </p>

              <div className="mt-6 space-y-4">
                {c.roles.map((r) => (
                  <details
                    key={r.title}
                    open={r === c.roles[0]}
                    className="group border-b border-rule/70 pb-4 last:border-0"
                  >
                    <summary className="flex cursor-pointer list-none flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-sm">
                      <span className="text-base font-medium text-foreground">
                        <span
                          aria-hidden="true"
                          className="mr-3 inline-block text-accent-strong transition-transform group-open:rotate-90"
                        >
                          ›
                        </span>
                        {r.title}
                      </span>
                      <span className="label-mono">{r.period}</span>
                    </summary>
                    <ul className="mt-4 space-y-2 pl-6">
                      {r.points.map((p) => (
                        <li
                          key={p}
                          className="relative text-sm leading-relaxed text-muted-foreground before:absolute before:-left-4 before:text-accent-strong before:content-['—']"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
