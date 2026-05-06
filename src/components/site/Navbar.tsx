import { useEffect, useState } from "react";
import { Shield, Phone, Menu, Close, ArrowRight } from "./Icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#insurance", label: "Insurance" },
  // { href: "/claims", label: "Claims" }, // Removed Claims link
  { href: "#contact", label: "Contact" },
];

export function Navbar({ onQuote }: { onQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-teal transition-[width] duration-150"
          style={{ width: `${progress}%`, background: "var(--color-teal)" }}
        />
      </div>

      <header
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span
              className={`grid place-items-center h-9 w-9 rounded-xl transition-colors ${
                scrolled ? "bg-navy-deep text-white" : "bg-white/15 text-white backdrop-blur"
              }`}
              style={scrolled ? { background: "var(--color-navy-deep)" } : {}}
            >
              <Shield className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className={`font-display font-extrabold tracking-tight text-lg ${scrolled ? "text-navy-deep" : "text-white"}`} style={scrolled ? { color: "var(--color-navy-deep)" } : {}}>
                PrimeShield
              </span>
              <span className={`text-[10px] uppercase tracking-[0.18em] font-semibold ${scrolled ? "text-teal" : "text-white/70"}`} style={scrolled ? { color: "var(--color-teal)" } : {}}>
                Leading Insurance Broker
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  scrolled ? "text-ink" : "text-white/90"
                }`}
                style={{ color: scrolled ? "var(--color-ink)" : undefined }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:08001234567"
              className={`flex items-center gap-2 text-sm ${scrolled ? "text-muted-foreground" : "text-white/80"}`}
            >
              <Phone className="h-4 w-4" />
              0800 123 4567
            </a>
            <button
              onClick={onQuote}
              className="ripple group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-teal)" }}
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <button
            className={`lg:hidden grid place-items-center h-10 w-10 rounded-lg ${scrolled ? "text-ink" : "text-white"}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "var(--color-navy-deep)" }}
      >
        <div className="flex items-center justify-between p-5">
          <span className="flex items-center gap-2 text-white font-display font-bold text-lg">
            <Shield className="h-5 w-5 text-teal" style={{ color: "var(--color-teal)" }} />
            PrimeShield
          </span>
          <button onClick={() => setOpen(false)} className="text-white" aria-label="Close menu">
            <Close />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 mt-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 text-2xl font-display font-semibold text-white border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onQuote(); }}
            className="mt-8 w-full rounded-full px-6 py-4 text-base font-semibold text-white"
            style={{ background: "var(--color-teal)" }}
          >
            Get a Free Quote →
          </button>
        </nav>
      </div>
    </>
  );
}
