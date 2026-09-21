import { aboutParagraphs, systemsLens } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About" title="Background and approach">
      <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
        <Reveal className="space-y-5">
          {aboutParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 28)}
              className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={80}>
          <p className="label-mono">Areas I consider in product decisions</p>
          <dl className="mt-4 divide-y divide-rule border-y border-rule">
            {systemsLens.map((item, index) => (
              <div key={item.title} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
                <span className="label-mono">0{index + 1}</span>
                <div>
                  <dt className="text-sm font-semibold text-foreground">{item.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
