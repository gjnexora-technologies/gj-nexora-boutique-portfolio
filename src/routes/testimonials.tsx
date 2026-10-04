import { createFileRoute, Link } from "@tanstack/react-router";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { boutique, images } from "@/data/boutique";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: `Testimonials — ${boutique.name}` },
      {
        name: "description",
        content: "What visitors say about the boutique, the fabrics and the styling experience.",
      },
      { property: "og:title", content: `Testimonials — ${boutique.name}` },
      {
        property: "og:description",
        content: "Words from visitors to the boutique.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pt-32 pb-14 text-center sm:px-8 lg:pt-44 lg:pb-20">
        <p className="eyebrow">Testimonials</p>
        <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          In their words
        </h1>
        <div className="hairline mx-auto mt-8" />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="border-y border-border py-16 lg:py-20">
          <TestimonialCarousel />
        </div>
      </section>

      <section className="overflow-hidden bg-cream">
        <img
          src={images.storeInterior}
          alt="The boutique fitting area"
          loading="lazy"
          width={1600}
          height={1200}
          className="h-[38vh] w-full object-cover lg:h-[58vh]"
        />
      </section>

      <section className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <p className="eyebrow">Your turn</p>
        <h2 className="mt-6 font-serif text-3xl sm:text-4xl">Come and see for yourself</h2>
        <div className="hairline mx-auto mt-7" />
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="btn-luxe">
            Visit our boutique
          </Link>
          <Link to="/collections" className="btn-outline-luxe">
            Explore collection
          </Link>
        </div>
      </section>
    </div>
  );
}
