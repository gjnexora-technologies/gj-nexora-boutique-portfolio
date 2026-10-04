import { createFileRoute, Link } from "@tanstack/react-router";
import { boutique, collections } from "@/data/boutique";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: `Collections — ${boutique.name}` },
      {
        name: "description",
        content:
          "New arrivals, traditional wear, ethnic wear, casual wear, party wear and accessories — explore the boutique's collections.",
      },
      { property: "og:title", content: `Collections — ${boutique.name}` },
      {
        property: "og:description",
        content:
          "Six collections, carried in small numbers: traditional, ethnic, casual, evening and accessories.",
      },
    ],
  }),
  component: Collections,
});

function Collections() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pt-32 pb-14 text-center sm:px-8 lg:pt-44 lg:pb-20">
        <p className="eyebrow">Collections</p>
        <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Six chapters, carried in small numbers
        </h1>
        <div className="hairline mx-auto mt-8" />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="space-y-16 lg:space-y-24">
          {collections.map((c, i) => (
            <article
              key={c.slug}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="overflow-hidden bg-cream">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="img-reveal aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                />
              </figure>
              <div className="lg:px-4">
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-5 font-serif text-3xl sm:text-4xl">{c.name}</h2>
                <div className="hairline mt-6" />
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {c.description}
                </p>
                <Link to="/contact" className="btn-outline-luxe mt-9">
                  Enquire about this edit
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 text-center lg:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <p className="eyebrow">Visit</p>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl">Try them on in store</h2>
          <div className="hairline mx-auto mt-7" />
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-luxe">
              Visit our boutique
            </Link>
            <Link to="/gallery" className="btn-outline-luxe">
              View gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
