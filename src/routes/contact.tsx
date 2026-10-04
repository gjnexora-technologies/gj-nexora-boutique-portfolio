import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { boutique, contact } from "@/data/boutique";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${boutique.name}` },
      {
        name: "description",
        content:
          "Visit the boutique, check opening hours, or send an enquiry — we'd love to help you find your next piece.",
      },
      { property: "og:title", content: `Contact — ${boutique.name}` },
      {
        property: "og:description",
        content:
          "Visit the boutique, check opening hours, or send an enquiry — we'd love to help you find your next piece.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const socialIcons: Record<string, typeof Instagram> = {
  Instagram,
  Facebook,
  WhatsApp: MessageCircle,
};

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="pt-28 lg:pt-36">
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Visit or write to us"
          intro="Whether you're planning a visit or have a question about a piece, we're happy to hear from you."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Enquiry form */}
          <div>
            <h2 className="font-serif text-2xl">Send an enquiry</h2>
            <div className="hairline mt-4" />
            {sent ? (
              <div className="mt-8 border border-border bg-secondary p-8 text-center">
                <p className="font-serif text-xl">Thank you</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Your message has been noted. We'll be in touch shortly — or feel free to
                  call us during opening hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow">Name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow">Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="eyebrow">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-2 w-full resize-none border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-charcoal bg-charcoal px-8 py-3 text-xs uppercase tracking-luxe text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </div>

          {/* Store details */}
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-2xl">The boutique</h2>
              <div className="hairline mt-4" />
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="leading-relaxed text-muted-foreground">
                    {contact.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-muted-foreground">{contact.phone}</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-muted-foreground">{contact.email}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-serif text-xl">
                <Clock className="h-4 w-4 text-gold" /> Opening hours
              </h3>
              <dl className="mt-4 divide-y divide-border border-y border-border">
                {contact.hours.map((h) => (
                  <div key={h.day} className="flex justify-between py-3 text-sm">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-serif text-xl">Follow along</h3>
              <div className="mt-4 flex gap-4">
                {contact.socials.map((s) => {
                  const Icon = socialIcons[s.label] ?? MessageCircle;
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="overflow-hidden border border-border">
          <iframe
            title={`Map to ${boutique.name}`}
            src={contact.mapsEmbedUrl}
            className="h-[380px] w-full grayscale-[35%]"
            loading="lazy"
          />
        </div>
        <a
          href={contact.mapsLinkUrl}
          target="_blank"
          rel="noreferrer"
          className="link-luxe mt-4 inline-block text-muted-foreground transition-colors hover:text-foreground"
        >
          Open in Google Maps
        </a>
      </section>
    </main>
  );
}
