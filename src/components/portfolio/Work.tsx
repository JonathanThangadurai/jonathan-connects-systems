import { caseStudies } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Work() {
  return (
    <Section id="work" label="Selected work" title="Three problems, three different shapes.">
      <div className="divide-y divide-rule border-y border-rule">
        {caseStudies.map((cs, i) => (
          <Reveal as="article" key={cs.title} delay={i * 60} className="py-10 md:py-14">
            <div className="grid gap-6 md:grid-cols-[0.9fr_1.6fr] md:gap-12">
              <div>
                <p className="label-mono">{cs.category}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {cs.title}
                </h3>
              </div>

              <div>
                <p className="text-base leading-relaxed text-muted-foreground">{cs.description}</p>

                {cs.focus ? (
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{cs.focus}</p>
                ) : null}

                {cs.outcome ? (
                  <p className="mt-5 border-l-2 border-accent-strong pl-4 text-base font-medium text-foreground">
                    {cs.outcome}
                  </p>
                ) : null}

                <details className="group mt-6">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-accent-strong underline-offset-4 hover:underline">
                    View details
                    <span
                      aria-hidden="true"
                      className="transition-transform group-open:rotate-90"
                    >
                      →
                    </span>
                  </summary>
                  <div className="mt-5">
                    <p className="label-mono">{cs.detailsLabel}</p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {cs.details.map((d) => (
                        <li key={d} className="text-sm text-muted-foreground">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
