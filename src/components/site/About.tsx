import React from "react";
import { ArrowRight, Check } from "./Icons";
const about1 = "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1954&auto=format&fit=crop";
const about2 = "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop";

const ticks = [
  "Comprehensive Coverage",
  "Compare 50+ Leading Insurers",
  "No Hidden Fees or Charges",
  "Award-Winning Customer Support",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32" style={{ background: "var(--color-mist)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative max-w-md mx-auto lg:mx-0">
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-3xl rotate-6 -z-10" style={{ background: "var(--color-teal)", opacity: 0.18 }} />
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-3xl -rotate-6 -z-10" style={{ background: "var(--color-green)", opacity: 0.18 }} />
          <img src={about1} alt="Happy family in front of their home" loading="lazy" width={1024} height={1024}
            className="rounded-3xl shadow-soft w-full object-cover aspect-square" />
          <img src={about2} alt="Couple with new home keys" loading="lazy" width={768} height={1024}
            className="hidden md:block absolute -bottom-10 -right-6 w-48 rounded-2xl shadow-glow border-4 border-white" />
        </div>

        <div className="">
          <Pill>About PrimeShield</Pill>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold leading-[1.05] text-balance">
            Your Trusted <span style={{ color: "var(--color-teal)" }}>Insurance Partner</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            PrimeShield is a leading insurance broker helping residents find the right cover at the right price. With over 10 years of experience, we compare policies from leading insurers so you get the best deal — without the confusion.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {ticks.map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-soft">
                <span className="grid place-items-center h-6 w-6 rounded-full text-white shrink-0" style={{ background: "var(--color-teal)" }}>
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#why" className="ripple inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-soft" style={{ background: "var(--color-teal)" }}>
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#insurance" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2" style={{ borderColor: "var(--color-navy-deep)", color: "var(--color-navy-deep)" }}>
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase"
      style={{ background: "color-mix(in oklab, var(--color-teal) 15%, white)", color: "var(--color-teal)" }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-teal)" }} />
      {children}
    </span>
  );
}
