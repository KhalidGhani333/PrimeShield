import { useEffect, useState } from "react";
import { ArrowRight } from "./Icons";

const HEADLINE = ["Protect", "What", "Matters", "Most", "to"];
const FINAL = "You.";

export function Hero({ onQuote }: { onQuote: () => void }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCount((c) => (c < HEADLINE.length + 1 ? c + 1 : c)), 220);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 md:pt-36 pb-20 overflow-hidden bg-hero-mesh text-white">
      {/* subtle grid noise */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <h1 className="mt-6 font-display font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.02] text-balance">
            <span className="block">{HEADLINE.slice(0, Math.min(count, 2)).join(" ")}{count > 0 && count < 3 && <i className="not-italic cursor-blink" />}</span>
            <span className="block">
              {count >= 3 && HEADLINE.slice(2, Math.min(count, 4)).join(" ")}
              {count >= 3 && count < 5 && <i className="not-italic cursor-blink" />}
            </span>
            <span className="block">
              {count >= 5 && (
                <>
                  {HEADLINE[4]}{" "}
                  <span style={{ color: "var(--color-teal)" }}>{count >= 6 ? FINAL : ""}{count === 5 || count === 6 ? <i className="not-italic cursor-blink" /> : null}</span>
                </>
              )}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            Explore comprehensive insurance plans designed to safeguard your health, home, car, and life - tailored to meet your unique needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onQuote}
              className="ripple group inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-teal)" }}
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#insurance"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold border border-white/30 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              Compare Plans
            </a>
          </div>
        </div>

        {/* Floating cards */}
        <div className="lg:col-span-5 relative h-[460px] hidden lg:block">
          <FloatCard className="float-y absolute top-2 right-8 w-72" emoji="🚗" title="Car Insurance" price="From £189/yr" tag="Comprehensive" />
          <FloatCard className="float-y-2 absolute top-40 left-2 w-72" emoji="🏠" title="Home Insurance" price="From £129/yr" tag="Buildings + Contents" highlight />
          <FloatCard className="float-y-3 absolute bottom-4 right-4 w-72" emoji="❤️" title="Life Insurance" price="From £8/mo" tag="Term Life Cover" />
        </div>
      </div>
    </section>
  );
}

function FloatCard({ className, emoji, title, price, tag, highlight }: { className?: string; emoji: string; title: string; price: string; tag: string; highlight?: boolean }) {
  return (
    <div className={`${className} rounded-2xl bg-white/95 text-ink p-5 shadow-glow border border-white/40`}
      style={{ color: "var(--color-ink)" }}>
      <div className="flex items-start justify-between">
        <div className="text-3xl">{emoji}</div>
        {highlight && <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full text-white" style={{ background: "var(--color-green)" }}>Popular</span>}
      </div>
      <div className="mt-4 font-display font-bold text-lg">{title}</div>
      <div className="text-sm text-muted-foreground">{tag}</div>
      <div className="mt-4 flex items-end justify-between">
        <span className="font-display font-extrabold text-xl" style={{ color: "var(--color-navy-deep)" }}>{price}</span>
        <span className="text-xs font-semibold inline-flex items-center gap-1" style={{ color: "var(--color-teal)" }}>
          Quote <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}
