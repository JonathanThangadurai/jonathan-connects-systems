import { featuredWork, selectedProjects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Work() {
  return (
    <Section id="work" label="Selected work" title="Things that made it past the whiteboard.">
      <div className="divide-y divide-rule border-y border-rule">
        {featuredWork.map((project, index) => (
          <Reveal as="article" key={project.title} delay={index * 60} className="py-10 md:py-14">
            <div className="grid gap-7 md:grid-cols-[0.72fr_1.28fr] md:gap-14">
              <header>
                <div className="flex items-center gap-3">
                  <span className="label-mono">0{index + 1}</span>
                  <span aria-hidden="true" className="h-px w-8 bg-rule" />
                  <span className="label-mono">{project.status}</span>
                </div>
                <p className="mt-5 label-mono">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-accent-strong">
                  {project.strapline}
                </p>
              </header>

              <div>
                <p className="text-base leading-relaxed text-foreground md:text-lg">
                  {project.summary}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.contribution}
                </p>
                {project.outcome ? (
                  <p className="mt-6 border-l-2 border-accent-strong pl-4 text-base font-medium leading-relaxed text-foreground">
                    {project.outcome}
                  </p>
                ) : null}
                <ul className="mt-7 grid gap-x-8 gap-y-2 border-t border-rule pt-5 sm:grid-cols-2">
                  {project.evidence.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mr-2 text-accent-strong">
                        ↗
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 md:mt-16">
        <div className="max-w-2xl">
          <p className="label-mono">Other projects</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            A few worthwhile side quests.
          </h3>
        </div>

        <div className="mt-8 grid border-l border-t border-rule md:grid-cols-3">
          {selectedProjects.map((project, index) => (
            <article
              key={project.title}
              className="flex min-h-72 flex-col border-b border-r border-rule p-6 md:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="label-mono">0{index + 3}</span>
                <span className="label-mono">{project.role}</span>
              </div>
              <p className="mt-7 label-mono">{project.category}</p>
              <h4 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <p className="mt-auto border-t border-rule pt-5 text-xs leading-relaxed text-foreground">
                {project.detail}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
