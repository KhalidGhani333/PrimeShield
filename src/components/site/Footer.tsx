import { Shield } from "./Icons";

const cols = [
  { 
    title: "Company", 
    links: [
      { label: "About Us", href: "#about" },
      { label: "How It Works", href: "#why" },
      { label: "Contact", href: "#contact" }
    ] 
  },
  { 
    title: "Insurance", 
    links: [
      { label: "Car", href: "#insurance" },
      { label: "Home", href: "#insurance" },
      { label: "Life", href: "#insurance" },
      { label: "Health", href: "#insurance" },
      { label: "Travel", href: "#insurance" },
      { label: "Pet", href: "#insurance" },
      { label: "Business", href: "#insurance" },
      { label: "Landlord", href: "#insurance" }
    ] 
  },
];

export function Footer() {
  return (
    <footer id="contact" className="text-white/80" style={{ background: "var(--color-navy-deep)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-xl" style={{ background: "var(--color-teal)" }}>
              <Shield className="h-5 w-5 text-white" />
            </span>
            <span className="font-display font-extrabold text-xl text-white">PrimeShield</span>
          </div>
          <p className="mt-4 text-sm font-semibold" style={{ color: "var(--color-teal)" }}>Smart Cover. Simple Choices.</p>
          <p className="mt-4 text-sm leading-relaxed">
            PrimeShield is a leading insurance broker helping households and businesses find the right cover at the best price. We compare 50+ leading insurers.
          </p>
          <div className="mt-6 text-sm">
            <div className="font-semibold text-white mb-1">Office Hours</div>
            <div>Mon–Fri: 8am–8pm</div>
            <div>Sat: 9am–5pm · Sun: 10am–4pm</div>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title} className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-4">{c.title}</h4>
            <ul className="space-y-2.5 text-sm">
              {c.links.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h4 className="font-display font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li>📞 0800 123 4567 <span className="text-white/50">(Freephone)</span></li>
            <li>📧 hello@primeshield.co.uk</li>
            <li>💬 Live Chat Available</li>
            <li className="leading-snug">📍 12 Finsbury Square,<br/>London, EC2A 1AS</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-white/60">
          <p className="text-center">
            Powered By <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AxisTechGroup</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
