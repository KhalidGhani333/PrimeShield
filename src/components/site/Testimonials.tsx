import { useEffect, useState } from "react";
import { Star } from "./Icons";
import { Pill } from "./About";

const reviews = [
  { name: "James Whitfield", role: "Homeowner, London", text: "ShieldWise made finding home insurance so easy and hassle-free. Their comparison saved me over £200 on last year's premium. Highly recommend!" },
  { name: "Priya Sharma", role: "Driver, Birmingham", text: "Found comprehensive car insurance at a great price. The platform is user-friendly and the team was incredibly helpful throughout." },
  { name: "Thomas Grant", role: "Landlord, Manchester", text: "As a landlord with three properties, I needed specialist cover. ShieldWise sorted everything perfectly and saved me significant money." },
  { name: "Sarah Thompson", role: "Business Owner, Leeds", text: "ShieldWise simplified my business insurance search entirely. I appreciated their transparent process and brilliant UK support team." },
  { name: "Mohammed Al-Rashid", role: "Family Man, Edinburgh", text: "Got our life insurance sorted within a day. The advisor was knowledgeable and helped us find the right level of cover for our family." },
  { name: "Emma Clarke", role: "Pet Owner, Bristol", text: "Pet insurance comparison on ShieldWise is brilliant. Found lifetime cover for my labrador at half the price I was paying before!" },
  { name: "Daniel Roberts", role: "Traveller, London", text: "Annual travel insurance sorted in minutes. When I had to make a claim abroad, the process was smooth and stress-free." },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const visible = [reviews[idx], reviews[(idx + 1) % reviews.length]];

  return (
    <section className="py-24 sm:py-32 bg-white" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <Pill>Client Testimonials</Pill>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold leading-[1.05]">What Our Clients Say</h2>
          <div className="mt-5 inline-flex items-center gap-2">
            <div className="flex gap-1" style={{ color: "var(--color-green)" }}>
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5" />)}
            </div>
            <span className="text-sm font-semibold">4.8/5 based on 2,847 reviews</span>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 min-h-[280px]">
          {visible.map((r, i) => (
            <article key={`${idx}-${i}`} className="rounded-3xl bg-white border border-border p-7 shadow-soft animate-[fadeUp_.6s_ease]">
              <div className="flex gap-1 mb-4" style={{ color: "var(--color-green)" }}>
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4" />)}
              </div>
              <p className="text-lg font-display leading-snug" style={{ color: "var(--color-navy-deep)" }}>"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-full text-white font-bold"
                  style={{ background: "var(--color-navy-deep)" }}>
                  {r.name.split(" ").map(n => n[0]).join("").slice(0,2)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === idx ? 28 : 8,
                background: i === idx ? "var(--color-teal)" : "color-mix(in oklab, var(--color-teal) 25%, white)",
              }}
              aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="font-bold" style={{ color: "var(--color-green)" }}>★ Trustpilot</span>
          <span>·</span>
          <span>Excellent · 4.8 / 5</span>
        </div>
      </div>

      <style>{`@keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform:none; } }`}</style>
    </section>
  );
}
