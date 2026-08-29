import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-rule" aria-labelledby="contact-title">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="label-mono">Contact</p>
          <h2
            id="contact-title"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Have a complex problem worth untangling?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm always interested in thoughtful conversations about technical products, enterprise
            integration, data-driven systems and multidisciplinary delivery.
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <dl className="divide-y divide-rule border-y border-rule">
            <div className="flex flex-wrap items-baseline justify-between gap-2 py-4">
              <dt className="label-mono">Email</dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-foreground underline-offset-4 hover:underline"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 py-4">
              <dt className="label-mono">LinkedIn</dt>
              <dd>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-foreground underline-offset-4 hover:underline"
                >
                  /in/jonathanthangadurai
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 py-4">
              <dt className="label-mono">Telephone</dt>
              <dd>
                <a
                  href="tel:+31630573697"
                  className="text-sm text-foreground underline-offset-4 hover:underline"
                >
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 py-4">
              <dt className="label-mono">Location</dt>
              <dd className="text-sm text-foreground">{profile.location}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap items-start gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send an email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-md border border-rule px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8">
          <p className="label-mono">© {new Date().getFullYear()} {profile.name}</p>
          <a href="#top" className="label-mono transition-colors hover:text-foreground">
            Back to top
          </a>
        </footer>
      </div>
    </section>
  );
}
