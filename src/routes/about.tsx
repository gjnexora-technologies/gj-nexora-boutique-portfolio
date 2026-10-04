import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { aboutSections, boutique, images } from "@/data/boutique";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `Our Story — ${boutique.name}` },
      {
        name: "description",
        content:
          "The story behind the boutique: our philosophy, our approach to fashion, craftsmanship and the in-store experience.",
      },
      { property: "og:title", content: `Our Story — ${boutique.name}` },
      {
        property: "og:description",
        content: "Restraint over excess — the philosophy and craftsmanship behind the boutique.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pt-32 pb-16 sm:px-8 lg:pt-44 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">About</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            A boutique built on restraint
          </h1>
          <div className="hairline mx-auto mt-8" />
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {boutique.intro}
          </p>
        </div>
      </section>

      <section className="overflow-hidden bg-cream">
        <img
          src={images.storeInterior}
          alt="The boutique interior in warm daylight"
          loading="lazy"
          width={1600}
          height={1200}
          className="h-[45vh] w-full object-cover lg:h-[70vh]"
        />
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="space-y-16 lg:space-y-20">
          {aboutSections.map((s, i) => (
            <div key={s.title} className="grid gap-5 lg:grid-cols-[auto_1fr] lg:gap-16">
              <p className="font-serif text-3xl text-gold-soft lg:pt-1">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl">{s.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Next"
            title="See the collections in person"
            intro="Browse the current edit online, then come and feel the cloth."
          />
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/collections" className="btn-luxe">
              Explore collection
            </Link>
            <Link to="/contact" className="btn-outline-luxe">
              Visit our boutique
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
