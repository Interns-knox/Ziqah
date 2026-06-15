export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto mb-14" : "max-w-2xl mb-14"}>
      {eyebrow && <span className="ornament">{eyebrow}</span>}
      <h2 className="mt-4 text-4xl md:text-5xl font-display">
        <span className="gold-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}