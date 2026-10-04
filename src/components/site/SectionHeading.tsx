export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      <div className={`hairline mt-6 ${centered ? "mx-auto" : ""}`} />
      {intro && (
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
      )}
    </div>
  );
}
