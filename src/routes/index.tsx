import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react"; // Import useEffect
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Why } from "@/components/site/Why";
import { Stats } from "@/components/site/Stats";
import { Partners } from "@/components/site/Partners";
import { Testimonials } from "@/components/site/Testimonials";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { Footer } from "@/components/site/Footer";
import { QuoteModal } from "@/components/site/QuoteModal";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimeShield — Smart Cover. Simple Choices. UK Insurance Compared" },
      { name: "description", content: "Leading UK insurance broker. Compare car, home, life, health, travel, pet & business cover from 50+ leading UK insurers in minutes." },
      { property: "og:title", content: "PrimeShield — Smart Cover. Simple Choices." },
      { property: "og:description", content: "Compare UK insurance from 50+ leading insurers. Trusted by thousands of UK customers." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (!targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calculate offset for fixed header
        const headerOffset = 100; // Adjust this value based on your navbar's height
        const elementPosition = (targetElement as HTMLElement).getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    // Select only the links within the Navbar for more specific targeting
    const navbarNav = document.querySelector('header nav'); 
    let linksToAttach: NodeListOf<HTMLAnchorElement> | null = null;

    if (navbarNav) {
      linksToAttach = navbarNav.querySelectorAll('a[href^="#"]');
    }

    // If no specific navbar links found, fall back to all anchor links
    if (!linksToAttach || linksToAttach.length === 0) {
        linksToAttach = document.querySelectorAll('a[href^="#"]');
    }

    linksToAttach.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    // Cleanup
    return () => {
      linksToAttach?.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []); // Dependency array remains empty

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
      </main>

      <QuoteCTA onOpenQuoteModal={() => setOpen(true)} /> {/* Pass setOpen handler */}
    <Footer />
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </div>);
}
