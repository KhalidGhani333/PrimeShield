import { Shield } from "./Icons";

const cols = [
  { title: "Company", links: ["About Us", "How It Works", "Careers", "Press", "Contact"] },
  { title: "Insurance", links: ["Car", "Home", "Life", "Health", "Travel", "Pet", "Business", "Landlord"] },
  { title: "Help", links: ["Claims", "FAQs", "Blog", "Policy Documents", "Accessibility", "Sitemap"] },
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
            <span className="font-display font-extrabold text-xl text-white">ShieldWise</span>
          </div>
          <p className="mt-4 text-sm font-semibold" style={{ color: "var(--color-teal)" }}>Smart Cover. Simple Choices.</p>
          <p className="mt-4 text-sm leading-relaxed">
            ShieldWise is an FCA-authorised insurance broker helping UK households and businesses find the right cover at the best price. We compare 50+ leading UK insurers.
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
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h4 className="font-display font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li>📞 0800 123 4567 <span className="text-white/50">(Freephone)</span></li>
            <li>📧 hello@shieldwise.co.uk</li>
            <li>💬 Live Chat Available</li>
            <li className="leading-snug">📍 12 Finsbury Square,<br/>London, EC2A 1AS</li>
          </ul>
          <div className="mt-5 flex gap-2">
            {["F", "X", "in", "Ig"].map((s) => (
              <a key={s} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold transition">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="text-center sm:text-left max-w-3xl">
            © 2026 ShieldWise Ltd. Authorised and regulated by the Financial Conduct Authority (FCA No. 987654). Registered in England &amp; Wales No. 12345678. Complaints handled under the Financial Ombudsman Service.
          </p>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded border border-white/20 font-bold tracking-wider">FCA</span>
            <span className="font-bold" style={{ color: "var(--color-green)" }}>★★★★★ Trustpilot</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
