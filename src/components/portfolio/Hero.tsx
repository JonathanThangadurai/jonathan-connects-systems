import { profile } from "@/data/portfolio";
import { SystemsMotif } from "./SystemsMotif";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16 md:px-10 md:pb-28 md:pt-24">
        <div>
          <p className="label-mono">{profile.name}</p>
          <h1 className="mt-6 text-[2rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.08]">
            I help turn complex technology and applied research into{" "}
            <span className="text-accent-strong">products people can use, trust and scale</span>.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.intro}
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 label-mono">
            <li>{profile.location}</li>
            <li className="hidden sm:block" aria-hidden="true">
              /
            </li>
            <li>{profile.role}</li>
            <li className="hidden sm:block" aria-hidden="true">
              /
            </li>
            <li>{profile.availability}</li>
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-rule px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <SystemsMotif />
        </div>
      </div>
    </section>
  );
}
