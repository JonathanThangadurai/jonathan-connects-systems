import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-rule" aria-labelledby="contact-title">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Reveal className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16">
          <div>
            <p className="label-mono">Contact</p>
            <h2
              id="contact-title"
              className="mt-3 max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-foreground md:text-6xl"
            >
              Contact
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I am always interested in thoughtful conversations about product creation, applied AI,
              research-to-product work, public innovation and complex systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground"
              >
                Write to me
              </a>
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center border border-foreground px-5 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background"
              >
                Read my CV ↗
              </a>
            </div>
          </div>

          <dl className="divide-y divide-rule border-y border-rule">
            {[
              ["Email", profile.email, `mailto:${profile.email}`],
              ["Telephone", profile.phone, profile.phoneHref],
              ["LinkedIn", "/in/jonathanthangadurai", profile.linkedin],
              ["GitHub", "/JonathanThangadurai", profile.github],
              ["CV", "Download PDF", profile.cv],
              ["Location", profile.location, ""],
            ].map(([label, value, href]) => (
              <div key={label} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                <dt className="label-mono">{label}</dt>
                <dd className="text-right text-sm text-foreground">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="link-inline"
                    >
                      {value}
                      {href.startsWith("http") ? " ↗" : ""}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-7">
          <p className="label-mono">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top" className="label-mono transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
