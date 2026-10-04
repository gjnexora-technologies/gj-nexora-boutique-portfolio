import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lightbox } from "@/components/site/Lightbox";
import { boutique, gallery } from "@/data/boutique";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery — ${boutique.name}` },
      {
        name: "description",
        content:
          "Store interiors, collection photography, product detail and seasonal edits from the boutique.",
      },
      { property: "og:title", content: `Gallery — ${boutique.name}` },
      {
        property: "og:description",
        content: "A visual walk through the boutique: interiors, collections and product detail.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pt-32 pb-14 text-center sm:px-8 lg:pt-44 lg:pb-20">
        <p className="eyebrow">Gallery</p>
        <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Inside the boutique
        </h1>
        <div className="hairline mx-auto mt-8" />
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Interiors, collection photography and small details. Tap any image to view it larger.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="columns-2 gap-4 lg:columns-3 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
          {gallery.map((g, i) => (
            <button
              key={g.caption}
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden bg-cream text-left"
              aria-label={`View ${g.caption}`}
            >
              <span className="relative block overflow-hidden">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="img-reveal w-full object-cover"
                />
                <span className="absolute inset-0 flex items-end bg-charcoal/0 p-4 opacity-0 transition-all duration-500 group-hover:bg-charcoal/25 group-hover:opacity-100">
                  <span className="text-[11px] tracking-[0.22em] text-ivory uppercase">
                    {g.category} — {g.caption}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <Lightbox items={gallery} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />

      <section className="border-t border-border bg-secondary py-20 text-center lg:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <p className="eyebrow">Come by</p>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl">The room is nicer in person</h2>
          <div className="hairline mx-auto mt-7" />
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-luxe">
              Visit our boutique
            </Link>
            <Link to="/contact" className="btn-outline-luxe">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
