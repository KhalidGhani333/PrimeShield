const ITEMS_A = [
  "🚗 Car Insurance", "🏠 Home Insurance", "🏢 Landlord Insurance",
  "❤️ Life Insurance", "🏥 Health Insurance", "🏍️ Motorcycle Insurance",
  "✈️ Travel Insurance", "🐾 Pet Insurance", "💼 Business Insurance",
  "🏔️ Income Protection",
];
const ITEMS_B = [...ITEMS_A].reverse();

export function Marquee() {
  return (
    <section className="bg-white border-y border-border py-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center gap-6">
        <span className="hidden md:inline text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground shrink-0">
          Our Coverage:
        </span>
        <div className="flex-1 space-y-3 min-w-0">
          <Row items={ITEMS_A} />
          <Row items={ITEMS_B} reverse />
        </div>
      </div>
    </section>
  );
}

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const seq = [...items, ...items];
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {seq.map((it, i) => (
          <span key={i} className="flex items-center gap-3 text-sm sm:text-base font-medium" style={{ color: "var(--color-ink)" }}>
            {it}
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-teal)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
