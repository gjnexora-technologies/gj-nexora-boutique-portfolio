import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxItem = { src: string; caption: string };

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const isOpen = index !== null;

  const step = useCallback(
    (dir: number) => {
      if (index === null) return;
      onIndexChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, step]);

  if (index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[60] flex flex-col bg-charcoal/95 p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image"
          className="p-2 text-ivory/80 transition-colors hover:text-ivory"
        >
          <X className="size-6" />
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center gap-2 sm:gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous image"
          className="shrink-0 p-2 text-ivory/70 transition-colors hover:text-ivory"
        >
          <ChevronLeft className="size-7" />
        </button>
        <img
          src={item.src}
          alt={item.caption}
          className="max-h-full max-w-full object-contain"
        />
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next image"
          className="shrink-0 p-2 text-ivory/70 transition-colors hover:text-ivory"
        >
          <ChevronRight className="size-7" />
        </button>
      </div>

      <p className="pt-5 text-center text-[11px] tracking-[0.22em] text-ivory/70 uppercase">
        {item.caption}
      </p>
    </div>
  );
}
