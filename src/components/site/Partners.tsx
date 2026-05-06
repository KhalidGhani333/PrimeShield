const insurers = ["Aviva", "AXA", "Direct Line", "LV=", "Admiral", "Zurich", "Allianz", "RSA", "Hastings Direct", "NFU Mutual", "Legal & General", "More Than"];

export function Partners() {
  const seq = [...insurers, ...insurers];
  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h3 className="text-center text-sm font-bold tracking-[0.18em] uppercase text-muted-foreground">
          We Compare Cover From Leading Insurers
        </h3>
        <div className="mt-8 marquee">
          <div className="marquee-track">
            {seq.map((n, i) => (
              <span key={i} className="font-display font-extrabold text-xl sm:text-2xl tracking-tight grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all whitespace-nowrap"
                style={{ color: "var(--color-navy-deep)" }}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
