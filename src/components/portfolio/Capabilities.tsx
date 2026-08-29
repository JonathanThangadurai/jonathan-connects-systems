import { capabilities, toolingNote } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Capabilities() {
  return (
    <Section id="capabilities" label="Capabilities" title="What I bring to a team.">
      <div className="grid gap-px overflow-hidden border-y border-rule bg-rule md:grid-cols-2">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={i * 50} className="bg-background px-1 py-8 md:px-8">
            <h3 className="text-base font-semibold tracking-tight text-foreground">{c.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <p className="label-mono">Tooling note</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{toolingNote}</p>
      </Reveal>
    </Section>
  );
}
