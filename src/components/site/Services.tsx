import { useState } from "react";
import { ArrowRight, Check } from "./Icons";
import { Pill } from "./About";
import car from "@/assets/svc-car.jpg";
import home from "@/assets/svc-home.jpg";
import landlord from "@/assets/svc-landlord.jpg";
import life from "@/assets/svc-life.jpg";
import health from "@/assets/svc-health.jpg";
import travel from "@/assets/svc-travel.jpg";
import pet from "@/assets/svc-pet.jpg";
import business from "@/assets/svc-business.jpg";

const services = [
  { n: "01", title: "Car Insurance", img: car, body: "Drive with confidence. Our car insurance covers accidents, fire, theft, third-party liability, and breakdown recovery. Compare quotes from 30+ UK providers instantly.", features: ["Comprehensive", "Third Party", "TP Fire & Theft"] },
  { n: "02", title: "Home Insurance", img: home, body: "Protect your home and contents. Covers buildings, contents, accidental damage, flooding, and personal liability for UK homeowners and tenants.", features: ["Buildings", "Contents", "Accidental Damage"] },
  { n: "03", title: "Landlord Insurance", img: landlord, body: "Specialist cover for UK buy-to-let landlords. Buildings, contents, loss of rent, legal expenses, and landlord liability — all in one policy.", features: ["Loss of Rent", "Legal Expenses", "Liability"] },
  { n: "04", title: "Life Insurance", img: life, body: "Secure your family's financial future. Term life, whole of life, and critical illness cover options. Policies from £5/month for UK residents.", features: ["Term Life", "Whole of Life", "Critical Illness"] },
  { n: "05", title: "Health Insurance", img: health, body: "Private medical insurance for faster access to UK specialists and treatment. Includes dental, optical, and mental health support options.", features: ["Inpatient", "Dental", "Mental Health"] },
  { n: "06", title: "Travel Insurance", img: travel, body: "Single trip or annual multi-trip cover. Includes medical emergencies, cancellation, lost luggage, and 24/7 emergency assistance worldwide.", features: ["Medical", "Cancellation", "Lost Luggage"] },
  { n: "07", title: "Pet Insurance", img: pet, body: "Lifetime or annual pet cover for cats and dogs. Vet fees, illness, accidents, and third-party liability for UK pet owners.", features: ["Vet Fees", "Lifetime Cover", "Third-Party"] },
  { n: "08", title: "Business Insurance", img: business, body: "Public liability, employers' liability, professional indemnity, and commercial property cover for UK businesses of all sizes.", features: ["Public Liability", "Employers' Liability", "PI"] },
];

export function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];
  return (
    <section id="insurance" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <Pill>Our Insurance Services</Pill>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold leading-[1.05] text-balance">
            Comprehensive Cover for Every Stage of Life
          </h2>
          <p className="mt-4 text-muted-foreground">
            From protecting your car to securing your family's future, ShieldWise offers tailored insurance solutions for every UK household.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <ul className="lg:col-span-4 space-y-2">
            {services.map((sv, i) => (
              <li key={sv.n}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl px-5 py-4 flex items-center gap-4 transition-all border ${
                    active === i ? "shadow-soft" : "border-transparent hover:border-border"
                  }`}
                  style={
                    active === i
                      ? {
                          background: "color-mix(in oklab, var(--color-teal) 8%, white)",
                          borderColor: "color-mix(in oklab, var(--color-teal) 25%, white)",
                          borderLeft: "4px solid var(--color-teal)",
                        }
                      : { background: "var(--color-mist)" }
                  }
                >
                  <span
                    className={`grid place-items-center h-10 w-10 rounded-xl font-display font-bold text-sm shrink-0`}
                    style={{
                      background: active === i ? "var(--color-teal)" : "white",
                      color: active === i ? "white" : "var(--color-navy-deep)",
                    }}
                  >
                    {sv.n}
                  </span>
                  <span className="font-display font-bold">{sv.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-8 relative">
            <div key={s.n} className="rounded-3xl overflow-hidden bg-white shadow-soft border border-border animate-[fadeIn_.5s_ease]">
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10,37,64,.85))" }} />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="font-display font-extrabold text-3xl" style={{ color: "var(--color-teal)" }}>{s.n}</span>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl">{s.title}</h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span key={f} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: "var(--color-mist)", color: "var(--color-navy-deep)" }}>
                      <Check className="h-3 w-3" style={{ color: "var(--color-teal)" }} /> {f}
                    </span>
                  ))}
                </div>
                <a href="#quote" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--color-teal)" }}>
                  View Details <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform:none; } }`}</style>
    </section>
  );
}
