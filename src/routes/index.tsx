import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Why } from "@/components/site/Why";
import { Stats } from "@/components/site/Stats";
import { Partners } from "@/components/site/Partners";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { Footer } from "@/components/site/Footer";
import { QuoteModal } from "@/components/site/QuoteModal";
import { ChatWidget, FloatingQuote } from "@/components/site/ChatWidget";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShieldWise — Smart Cover. Simple Choices. UK Insurance Compared" },
      { name: "description", content: "FCA-authorised UK insurance broker. Compare car, home, life, health, travel, pet & business cover from 50+ leading UK insurers in minutes." },
      { property: "og:title", content: "ShieldWise — Smart Cover. Simple Choices." },
      { property: "og:description", content: "Compare UK insurance from 50+ FCA-regulated insurers. Trusted by 50,000+ UK customers." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onQuote={() => setOpen(true)} />
      <main>
        <Hero onQuote={() => setOpen(true)} />
        <Marquee />
        <About />
        <Services />
        <Why />
        <Stats />
        <Partners />
        <Testimonials />
        <Blog />
        <section id="claims" />
        <QuoteCTA />
      </main>
      <Footer />
      <FloatingQuote onClick={() => setOpen(true)} />
      <ChatWidget onQuote={() => setOpen(true)} />
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
