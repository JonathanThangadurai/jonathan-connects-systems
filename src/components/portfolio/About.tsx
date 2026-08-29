import { aboutParagraphs, atAGlance, impact } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About" title="Between technical reality and stakeholder needs.">
      <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <Reveal className="space-y-6">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={80}>
          <div className="border-l border-rule pl-6 md:pl-8">
            <p className="label-mono">At a glance</p>
            <ul className="mt-5 space-y-3">
              {atAGlance.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16 md:mt-20">
        <p className="label-mono">Selected impact</p>
        <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden border-y border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((s) => (
            <div key={s.value + s.label} className="bg-background px-1 py-6 sm:px-5">
              <dt className="text-2xl font-semibold tracking-tight text-accent-strong md:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
