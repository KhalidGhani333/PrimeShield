import { useRef } from "react";
import { useCountUp } from "./useReveal";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience in the Insurance Industry" },
  { value: 50000, suffix: "+", label: "Satisfied Policyholders" },
  { value: 24, suffix: "/7", label: "Customer Support, Always Available" },
  { value: 99, suffix: "%", label: "Claims Approval Rate" },
];

export function Stats() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "var(--color-navy-deep)" }}>
      <div className="absolute inset-0 opacity-30 bg-hero-mesh" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-white">
        {stats.map((s, i) => <Stat key={i} {...s} divider={i < stats.length - 1} />)}
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, divider }: { value: number; suffix: string; label: string; divider?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(value, ref, 1800);
  return (
    <div className={`text-center px-4 ${divider ? "lg:border-r border-white/10" : ""}`}>
      <div className="font-display font-extrabold text-5xl sm:text-6xl tracking-tight">
        <span ref={ref}>0</span><span style={{ color: "var(--color-teal)" }}>{suffix}</span>
      </div>
      <div className="mt-3 text-sm text-white/70 max-w-[200px] mx-auto">{label}</div>
    </div>
  );
}
