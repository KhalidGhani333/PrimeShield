import { ArrowRight, Check } from "./Icons";
import about1 from "@/assets/about-family.jpg";
import about2 from "@/assets/about-2.jpg";

const ticks = [
  "FCA Authorised & Regulated",
  "Compare 50+ UK Insurers",
  "No Hidden Fees or Charges",
  "Award-Winning UK Customer Support",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32" style={{ background: "var(--color-mist)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="absolute -top-6 -left-6 h-40 w-40 rounded-3xl rotate-6 -z-10" style={{ background: "var(--color-teal)", opacity: 0.18 }} />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl -rotate-6 -z-10" style={{ background: "var(--color-green)", opacity: 0.18 }} />
          <img src={about1} alt="UK family in front of their home" loading="lazy" width={1024} height={1024}
            className="rounded-3xl shadow-soft w-full object-cover aspect-[4/5]" />
          <img src={about2} alt="Couple with new home keys" loading="lazy" width={768} height={1024}
            className="hidden md:block absolute -bottom-12 -right-8 w-56 rounded-2xl shadow-glow border-4 border-white" />

          <div className="absolute top-6 -right-4 md:right-8 bg-white rounded-2xl shadow-soft px-5 py-4 flex items-center gap-3">
            <div className="grid place-items-center h-10 w-10 rounded-xl text-white" style={{ background: "var(--color-teal)" }}>
              <Check className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-extrabold leading-none">50,000+</div>
              <div className="text-xs text-muted-foreground mt-1">Happy UK Customers</div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <Pill>About ShieldWise</Pill>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold leading-[1.05] text-balance">
            Your Trusted UK <span style={{ color: "var(--color-teal)" }}>Insurance Partner</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            ShieldWise is an FCA-authorised insurance broker helping UK residents find the right cover at the right price. With over 20 years of experience, we compare policies from leading UK insurers so you get the best deal — without the confusion.
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

          <p className="mt-6 text-xs text-muted-foreground">
            ShieldWise is authorised and regulated by the Financial Conduct Authority (FCA No. 987654).
          </p>
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
