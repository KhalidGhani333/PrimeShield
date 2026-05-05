import { useEffect, useState } from "react";
import { Close, Shield, ArrowRight, Check } from "./Icons";

const TILES = [
  { e: "🚗", t: "Car" }, { e: "🏠", t: "Home" }, { e: "🏢", t: "Landlord" }, { e: "❤️", t: "Life" },
  { e: "🏥", t: "Health" }, { e: "✈️", t: "Travel" }, { e: "🐾", t: "Pet" }, { e: "💼", t: "Business" },
];

export function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [type, setType] = useState("");
  const [form, setForm] = useState({ name: "", postcode: "", dob: "" });

  useEffect(() => {
    if (!open) { setStep(0); setType(""); setForm({ name: "", postcode: "", dob: "" }); }
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 2400);
      return () => clearTimeout(t);
    }
  }, [step]);

  if (!open) return null;
  const progress = ((step + 1) / 4) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[fadeIn_.2s_ease]" style={{ background: "rgba(10,37,64,.65)", backdropFilter: "blur(6px)" }}>
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-glow overflow-hidden animate-[popIn_.35s_cubic-bezier(.2,.7,.2,1)]">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 grid place-items-center h-10 w-10 rounded-full hover:bg-mist" style={{ color: "var(--color-ink)" }}>
          <Close />
        </button>

        <div className="h-1.5 bg-mist">
          <div className="h-full transition-all duration-500" style={{ width: `${progress}%`, background: "var(--color-teal)" }} />
        </div>

        <div className="p-8 sm:p-10 min-h-[420px]">
          {step === 0 && (
            <Step title="What would you like to insure?" subtitle="Select a category to begin your free quote.">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                {TILES.map((t) => (
                  <button key={t.t}
                    onClick={() => { setType(t.t); setStep(1); }}
                    className="aspect-square rounded-2xl border-2 border-border bg-white flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-all"
                    style={{ borderColor: type === t.t ? "var(--color-teal)" : undefined }}>
                    <span className="text-3xl">{t.e}</span>
                    <span className="text-xs font-bold">{t.t}</span>
                  </button>
                ))}
              </div>
            </Step>
          )}

          {step === 1 && (
            <Step title="Just a few details" subtitle={`We'll use these to find the best ${type.toLowerCase()} insurance for you.`}>
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="mt-6 space-y-3">
                <Input label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Input label="UK postcode" value={form.postcode} onChange={(v) => setForm({ ...form, postcode: v.toUpperCase() })} required pattern="^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$" />
                <Input label="Date of birth" type="date" value={form.dob} onChange={(v) => setForm({ ...form, dob: v })} required />
                <button type="submit" className="ripple w-full rounded-full px-6 py-3.5 text-sm font-bold text-white inline-flex items-center justify-center gap-2 mt-4" style={{ background: "var(--color-teal)" }}>
                  Find My Quotes <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </Step>
          )}

          {step === 2 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="grid place-items-center h-20 w-20 rounded-full text-white animate-spin" style={{ background: "var(--color-teal)", animationDuration: "2s" }}>
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="mt-6 font-display font-extrabold text-2xl">We're finding your best quotes…</h3>
              <p className="mt-2 text-sm text-muted-foreground">Comparing 50+ FCA-regulated UK insurers.</p>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="grid place-items-center h-20 w-20 rounded-full text-white" style={{ background: "var(--color-green)" }}>
                <Check className="h-10 w-10" />
              </div>
              <h3 className="mt-6 font-display font-extrabold text-3xl">Great news!</h3>
              <p className="mt-3 text-muted-foreground max-w-sm">
                We found <strong className="text-foreground">23 quotes</strong> matching your needs. A ShieldWise advisor will call you within 15 minutes.
              </p>
              <button onClick={onClose} className="mt-8 rounded-full px-7 py-3 text-sm font-bold text-white" style={{ background: "var(--color-navy-deep)" }}>
                Done
              </button>
            </div>
          )}
        </div>

        <div className="px-8 sm:px-10 pb-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>Step {Math.min(step + 1, 4)} of 4</span>
          <span className="flex items-center gap-1.5"><Shield className="h-3 w-3" style={{ color: "var(--color-teal)" }} /> FCA Regulated · SSL Secure</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes popIn { from { opacity:0; transform: translateY(20px) scale(.96); } to { opacity:1; transform:none; } }
      `}</style>
    </div>
  );
}

function Step({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="animate-[slideIn_.4s_ease]">
      <h3 className="font-display font-extrabold text-2xl sm:text-3xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      {children}
      <style>{`@keyframes slideIn { from { opacity:0; transform: translateX(20px); } to { opacity:1; transform:none; } }`}</style>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", required, pattern }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; pattern?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} pattern={pattern}
        className="mt-1.5 w-full rounded-xl border-2 border-border px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
        style={{ borderColor: undefined }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-teal)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "")} />
    </label>
  );
}
