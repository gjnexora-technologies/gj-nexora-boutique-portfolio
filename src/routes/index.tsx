import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import {
  boutique,
  collections,
  contact,
  featuredCollectionSlugs,
  gallery,
  images,
  whyChooseUs,
} from "@/data/boutique";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${boutique.name} — Boutique Fashion House` },
      {
        name: "description",
        content:
          "A boutique of considered clothing: handwoven traditional wear, ethnic and casual edits, evening pieces and accessories. Visit us or send an enquiry.",
      },
      { property: "og:title", content: `${boutique.name} — Boutique Fashion House` },
      {
        property: "og:description",
        content:
          "Quiet luxury, thoughtfully curated. Explore our collections and visit the boutique.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = collections.filter((c) => featuredCollectionSlugs.includes(c.slug));
  const newArrivals = collections.filter((c) => c.slug !== "accessories").slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="grid lg:min-h-screen lg:grid-cols-2">
          <div className="order-2 flex items-center bg-background px-5 py-16 sm:px-10 lg:order-1 lg:px-16 lg:py-24">
            <div className="max-w-lg">
              <p className="eyebrow">Boutique fashion house</p>
              <h1 className="mt-6 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                {boutique.name}
              </h1>
              <div className="hairline mt-7" />
              <p className="mt-7 font-serif text-xl text-muted-foreground italic sm:text-2xl">
                {boutique.tagline}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {boutique.intro}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link to="/collections" className="btn-luxe">
                  Explore collection
                </Link>
                <Link to="/contact" className="btn-outline-luxe">
                  Visit our store
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1 overflow-hidden bg-cream lg:order-2">
            <img
              src={images.hero}
              alt="Editorial photograph of a draped ivory silk ensemble"
              width={1600}
              height={1920}
              className="h-[62vh] w-full object-cover object-center sm:h-[78vh] lg:h-full"
            />
          </div>
        </div>
      </section>

      {/* Featured collection */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Featured"
          title="The current edit"
          intro="Three quiet chapters from the rail this season, each carried in small numbers."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {featured.map((c) => (
            <Link key={c.slug} to="/collections" className="group block">
              <div className="overflow-hidden bg-cream">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="img-reveal aspect-[4/5] w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{c.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              <span className="link-luxe mt-5 inline-block text-gold">Explore</span>
            </Link>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Just in"
            title="New arrivals"
            intro="Newly landed pieces, photographed as they arrived in store."
          />
          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
            {newArrivals.map((c) => (
              <div key={c.slug}>
                <div className="overflow-hidden bg-cream">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    width={1200}
                    height={1504}
                    className="img-reveal aspect-[3/4] w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-[11px] tracking-[0.22em] uppercase">{c.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/collections" className="btn-outline-luxe">
              View all collections
            </Link>
          </div>
        </div>
      </section>

      {/* About the boutique */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden bg-cream">
            <img
              src={images.storeInterior}
              alt="The boutique interior with arched mirror and oak fitting room"
              loading="lazy"
              width={1600}
              height={1200}
              className="img-reveal aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="The boutique"
              title="A small room, generous light"
              align="left"
              intro="We built the space to slow visitors down — so fabric can be touched, held against the light and properly considered before it is chosen."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Styling is unhurried and personal. Whether you are looking for one piece or rebuilding
              a wardrobe, you will be met with honest guidance and time.
            </p>
            <Link to="/about" className="link-luxe mt-9 inline-block text-gold">
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-border bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Why choose us" title="How we work" />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {whyChooseUs.map((w, i) => (
              <div key={w.title}>
                <p className="font-serif text-3xl text-gold-soft">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-xl">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <p className="eyebrow">In their words</p>
        </div>
        <div className="mt-12">
          <TestimonialCarousel />
        </div>
        <div className="mt-12 text-center">
          <Link to="/testimonials" className="link-luxe text-gold">
            All testimonials
          </Link>
        </div>
      </section>

      {/* Social gallery */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={contact.socials[0]?.label ?? "Instagram"}
            title="From the boutique"
            intro="Everyday moments, new arrivals and styling notes."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {gallery.slice(0, 6).map((g) => (
              <div key={g.caption} className="overflow-hidden bg-cream">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="img-reveal aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery" className="btn-outline-luxe">
              View gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-32">
        <p className="eyebrow">Come and see</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
          Every piece deserves to be seen in person
        </h2>
        <div className="hairline mx-auto mt-8" />
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="btn-luxe">
            Visit our boutique
          </Link>
          <Link to="/contact" className="btn-outline-luxe">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
