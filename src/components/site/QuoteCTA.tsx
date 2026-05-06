import { ArrowRight } from "./Icons";

// Removed unused imports and states
// Removed TYPES as it's not used in QuoteCTA anymore

export function QuoteCTA({ onOpenQuoteModal }: { onOpenQuoteModal: () => void }) { // Added prop

  return (
    <section id="quote" className="relative py-24 sm:py-32 overflow-hidden bg-cta-mesh text-white">
      <div className="absolute inset-0 opacity-50 bg-hero-mesh" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] text-balance">
          Ready to Find Your <span style={{ color: "var(--color-teal)" }}>Perfect Cover?</span>
        </h2>
        <p className="mt-5 text-white/80 max-w-2xl mx-auto">
          Get a free, no-obligation quote in under 2 minutes. Compare policies from 50+ leading insurers.
        </p>

        {/* Simplified form to just contain the button and call onOpenQuoteModal */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            onOpenQuoteModal(); // Call the prop to open the modal
          }}
          className="mt-10 mx-auto max-w-3xl rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 flex justify-center items-center gap-2 shadow-glow"
        >
          <button type="submit"
            className="ripple inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-teal)" }}>
            Get My Free Quote <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Removed the submitted confirmation message */}

      </div>
    </section>
  );
}
