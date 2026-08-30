import { capabilities, toolkit } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      label="Capabilities"
      title="How I help complex programmes move forward."
    >
      <div className="grid border-l border-t border-rule md:grid-cols-3">
        {capabilities.map((capability, index) => (
          <Reveal
            key={capability.title}
            delay={index * 50}
            className="border-b border-r border-rule p-6 md:min-h-52 md:p-8"
          >
            <span className="label-mono">0{index + 1}</span>
            <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground">
              {capability.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{capability.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="border-y border-rule py-6">
          <div>
            <p className="label-mono">The part recruiters search with Ctrl+F</p>
            <p className="mt-1 text-sm text-muted-foreground">
              The tools, platforms and delivery methods I have worked with.
            </p>
          </div>
          <dl className="mt-6 grid gap-x-10 gap-y-6 border-t border-rule pt-6 sm:grid-cols-2">
            {toolkit.map(([name, items]) => (
              <div key={name}>
                <dt className="text-sm font-medium text-foreground">{name}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
