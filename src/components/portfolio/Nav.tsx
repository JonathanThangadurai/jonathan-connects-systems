import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";

const externalLinks = [
  { label: "CV", href: profile.cv },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-rule bg-background/90 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5 md:px-10"
      >
        <a href="#top" className="text-sm font-semibold tracking-tight text-foreground">
          Jonathan
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="h-4 w-px bg-rule" />
          <ul className="flex items-center gap-2">
            {externalLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={
                    index === 0
                      ? "inline-flex rounded border border-rule px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent-strong hover:text-accent-strong"
                      : "px-1.5 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-rule text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="text-base leading-none">
            {open ? "×" : "≡"}
          </span>
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-rule bg-background lg:hidden">
        <ul className="mx-auto flex w-full max-w-7xl flex-col px-6 py-2 md:px-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-rule/60 py-3 text-sm text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          {externalLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="block border-b border-rule/60 py-3 text-sm text-foreground last:border-0"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
