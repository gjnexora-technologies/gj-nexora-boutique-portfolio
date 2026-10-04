import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/boutique";

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const item = testimonials[i]!;
  const step = (dir: number) => setI((v) => (v + dir + testimonials.length) % testimonials.length);

  return (
    <div className="mx-auto max-w-3xl text-center">
      <blockquote className="font-serif text-2xl leading-relaxed sm:text-3xl lg:text-4xl">
        “{item.quote}”
      </blockquote>
      <p className="mt-8 text-[11px] tracking-[0.22em] uppercase">{item.name}</p>
      <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous testimonial"
          className="p-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((t, idx) => (
            <button
              key={t.name + idx}
              type="button"
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px w-8 transition-colors ${idx === i ? "bg-gold" : "bg-border"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next testimonial"
          className="p-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
