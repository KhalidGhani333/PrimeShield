import { ArrowRight } from "./Icons";
import { Pill } from "./About";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { img: b1, tag: "Safety", date: "March 2026", title: "Protecting Your Family's Future with Life Insurance" },
  { img: b2, tag: "Guides", date: "March 2026", title: "The Top Benefits of Comprehensive Car Cover" },
  { img: b3, tag: "Claims", date: "March 2026", title: "How to File an Insurance Claim Without the Hassle" },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32" style={{ background: "var(--color-mist)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Pill>Latest Insights</Pill>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold leading-[1.05]">Our Latest Guides &amp; News</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Expert advice on insurance, claims, and getting the best cover for your money.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-5 py-3 border-2"
            style={{ borderColor: "var(--color-navy-deep)", color: "var(--color-navy-deep)" }}>
            Visit All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="reveal group rounded-3xl bg-white shadow-soft overflow-hidden border border-border hover:-translate-y-1 transition-transform">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ background: "color-mix(in oklab, var(--color-teal) 12%, white)", color: "var(--color-teal)" }}>{p.tag}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-4 font-display font-bold text-xl leading-snug">{p.title}</h3>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--color-teal)" }}>
                  Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
