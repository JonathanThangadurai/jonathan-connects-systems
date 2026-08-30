import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-14 md:px-10 md:pb-20 md:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
        <div>
          <p className="label-mono">Product · research · systems</p>
          <h1 className="mt-5 max-w-4xl text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.045em] text-foreground sm:text-5xl md:text-[3.6rem] xl:text-[4rem]">
            I bring people, technology and product thinking together to build{" "}
            <span className="text-accent-strong">products that work in the real world.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2">
            <span className="label-mono">{profile.location}</span>
            <span className="label-mono">{profile.role}</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore my experience
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-md border border-rule px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              View my CV ↗
            </a>
          </div>

          <p className="mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Currently a Product Owner at TNO, with a production-engineering foundation from Flex and
            an international Erasmus Mundus education.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="border-y border-rule">
            <p className="py-4 label-mono">Where I work best</p>
            <dl className="divide-y divide-rule">
              {[
                ["01", "Product", "Shape value, evidence and adoption"],
                ["02", "Research", "Translate possibility into practical use"],
                ["03", "Systems", "Connect technology, people and institutions"],
                ["04", "Public innovation", "Work across organisations and mandates"],
              ].map(([number, title, description]) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
                  <span className="label-mono">{number}</span>
                  <div>
                    <dt className="text-sm font-semibold text-foreground">{title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            My role is usually at the intersections: making the whole system legible enough for a
            team to move.
          </p>
        </div>
      </div>
    </section>
  );
}
