import { Link } from "@tanstack/react-router";
import { boutique, contact, navLinks } from "@/data/boutique";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl tracking-[0.18em] uppercase">{boutique.name}</p>
            <div className="hairline mt-5" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {boutique.tagline}.
            </p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Visit</p>
            <address className="mt-5 space-y-1 text-sm leading-relaxed text-muted-foreground not-italic">
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block pt-3">{contact.phone}</span>
              <span className="block">{contact.email}</span>
            </address>
            <div className="mt-6 flex flex-wrap gap-5">
              {contact.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  className="link-luxe text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-16 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} {boutique.name}
        </p>
      </div>
    </footer>
  );
}
