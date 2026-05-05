import why from "@/assets/why-choose.jpg";
import { Pill } from "./About";

const features = [
  { icon: "🎯", title: "Tailored Plans for Every Lifestyle", body: "We don't do one-size-fits-all. Our advisors match the right policy to your exact needs and budget." },
  { icon: "📞", title: "24/7 UK-Based Customer Support", body: "Our friendly UK-based team is available around the clock for claims, queries, and policy changes." },
  { icon: "⚡", title: "Fast and Easy Claims Process", body: "File a claim online in under 5 minutes. Most claims are processed within 48 hours." },
  { icon: "💷", title: "Competitive UK Pricing", body: "We compare 50+ FCA-regulated insurers to find you the best cover at the lowest price. Guaranteed." },
];

export function Why() {
  return (
    <section id="why" className="py-24 sm:py-32" style={{ background: "var(--color-mist)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal relative">
          <img src={why} alt="ShieldWise UK customer advisor" loading="lazy" width={1024} height={1280}
            className="rounded-3xl shadow-soft w-full object-cover aspect-[4/5]" />
          <div className="absolute bottom-8 -right-4 md:-right-8 bg-white rounded-2xl shadow-glow p-5 max-w-[220px]">
            <div className="font-display font-extrabold text-4xl" style={{ color: "var(--color-teal)" }}>99%</div>
            <div className="text-sm font-semibold mt-1">Claims Approved</div>
            <div className="text-xs text-muted-foreground mt-1">Across all UK policies in 2025</div>
          </div>
        </div>

        <div className="reveal">
          <Pill>Why ShieldWise</Pill>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold leading-[1.05] text-balance">
            Why Over 50,000 UK Customers <span style={{ color: "var(--color-teal)" }}>Choose Us</span>
          </h2>

          <div className="mt-10 space-y-5">
            {features.map((f) => (
              <div key={f.title} className="reveal flex gap-5 group">
                <div className="grid place-items-center h-14 w-14 rounded-2xl text-2xl shrink-0 transition-transform group-hover:-translate-y-1"
                  style={{ background: "white", boxShadow: "var(--shadow-soft)" }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{f.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
