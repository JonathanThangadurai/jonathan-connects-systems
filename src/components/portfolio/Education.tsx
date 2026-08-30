import { education, languages } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      label="Education"
      title="Learning across Europe: software, sustainability and systems."
    >
      <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <div className="space-y-10">
          {education.map((e, i) => (
            <Reveal
              key={e.title}
              delay={i * 60}
              className={`border-l pl-6 ${i === 0 ? "border-accent-strong" : "border-rule"}`}
            >
              {i === 0 ? (
                <p className="mb-3 text-xs font-medium text-accent-strong">
                  Fully funded Erasmus Mundus scholar
                </p>
              ) : null}
              <p className="label-mono">{e.period}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                {e.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.subtitle}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {e.note}
              </p>
              {e.items.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {e.items.map((it) => (
                    <li key={it} className="text-sm text-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="label-mono">Languages</p>
          <dl className="mt-5 divide-y divide-rule border-y border-rule">
            {languages.map((l) => (
              <div key={l.name} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-sm font-medium text-foreground">{l.name}</dt>
                <dd className="text-right text-sm text-muted-foreground">{l.level}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
