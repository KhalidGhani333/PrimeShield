import { useState } from "react";
import { ArrowRight, Check, Star, Shield } from "./Icons";

const TYPES = ["Car", "Home", "Life", "Health", "Travel", "Pet", "Business", "Landlord"];

export function QuoteCTA() {
  const [type, setType] = useState("Car");
  const [postcode, setPostcode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const valid = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(postcode.trim());

  return (
    <section id="quote" className="relative py-24 sm:py-32 overflow-hidden bg-cta-mesh text-white">
      <div className="absolute inset-0 opacity-50 bg-hero-mesh" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] text-balance">
          Ready to Find Your <span style={{ color: "var(--color-teal)" }}>Perfect Cover?</span>
        </h2>
        <p className="mt-5 text-white/80 max-w-2xl mx-auto">
          Get a free, no-obligation quote in under 2 minutes. Compare policies from 50+ FCA-regulated UK insurers.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); if (valid) setSubmitted(true); }}
          className="mt-10 mx-auto max-w-3xl rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 grid sm:grid-cols-[1fr_1fr_auto] gap-2 shadow-glow"
        >
          <select value={type} onChange={(e) => setType(e.target.value)}
            className="rounded-2xl bg-white/95 text-ink px-4 py-3.5 text-sm font-semibold focus:outline-none"
            style={{ color: "var(--color-ink)" }}>
            {TYPES.map((t) => <option key={t} value={t}>{t} Insurance</option>)}
          </select>
          <input
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.toUpperCase())}
            placeholder="Your postcode (e.g. SW1A 1AA)"
            className="rounded-2xl bg-white/95 px-4 py-3.5 text-sm font-medium focus:outline-none placeholder:text-muted-foreground"
            style={{ color: "var(--color-ink)" }}
          />
          <button type="submit"
            className="ripple inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-teal)" }}>
            Get My Free Quote <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {submitted && (
          <div className="mt-4 inline-flex items-center gap-2 text-sm rounded-full px-4 py-2"
            style={{ background: "color-mix(in oklab, var(--color-green) 30%, transparent)" }}>
            <Check className="h-4 w-4" /> Thanks! We're matching your {type.toLowerCase()} insurance quotes for {postcode}.
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/85">
          <span className="flex items-center gap-2">🔒 SSL Secure</span>
          <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> FCA Regulated</span>
          <span className="flex items-center gap-2"><Star className="h-4 w-4" style={{ color: "var(--color-green)" }} /> 4.8 Trustpilot</span>
        </div>
      </div>
    </section>
  );
}
