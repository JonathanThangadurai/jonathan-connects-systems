import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative">
        <img
          src="/images/jonathan-hero-diffused.webp"
          alt=""
          width="1672"
          height="941"
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, var(--background) 0%, var(--background) 38%, color-mix(in oklab, var(--background) 92%, transparent) 52%, color-mix(in oklab, var(--background) 18%, transparent) 62%, transparent 69%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[650px] w-full max-w-7xl items-center px-6 py-12 md:px-10 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="label-mono">Product ownership · applied AI · operational systems</p>
            <h1 className="mt-6 max-w-5xl font-display text-[3.25rem] font-semibold leading-[0.96] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[4.75rem]">
              Jonathan Thangadurai Selvaraj
            </h1>
            <p className="mt-4 text-2xl font-medium tracking-tight text-accent-strong sm:text-3xl">
              Technical Product Owner
            </p>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2">
              <span className="label-mono">{profile.location}</span>
              <span className="label-mono">{profile.role}</span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground"
              >
                Explore my experience
              </a>
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center border border-foreground px-5 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background"
              >
                View my CV ↗
              </a>
            </div>

            <p className="mt-7 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              At TNO, I led an AI market-intelligence product from discovery through beta and
              handover and evaluated an eight-year AI programme to inform reinvestment and
              successor-programme priorities. Before that, I designed and supported enterprise
              integrations for manufacturing operations at Flex.
            </p>

            <img
              src="/images/jonathan-hero-diffused.webp"
              alt="Jonathan overlooking a historic courtyard"
              width="1672"
              height="941"
              className="mt-10 aspect-[16/7] w-full border border-rule object-cover lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
