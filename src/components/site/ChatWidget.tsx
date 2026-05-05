import { useState } from "react";
import { Chat, Close } from "./Icons";

export function ChatWidget({ onQuote }: { onQuote: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 left-5 z-40">
      {open && (
        <div className="mb-3 w-[300px] rounded-2xl bg-white shadow-glow border border-border overflow-hidden animate-[popIn_.3s_ease]">
          <div className="flex items-center justify-between p-4 text-white" style={{ background: "var(--color-navy-deep)" }}>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-8 w-8 rounded-full" style={{ background: "var(--color-teal)" }}>
                <Chat className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-sm">ShieldWise Support</div>
                <div className="text-[11px] text-white/70 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-green)" }} /> Online now
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white"><Close className="h-4 w-4" /></button>
          </div>
          <div className="p-4 space-y-3">
            <div className="text-sm rounded-2xl rounded-tl-sm p-3" style={{ background: "var(--color-mist)" }}>
              Hi! 👋 Welcome to ShieldWise. How can we help you today?
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={onQuote} className="text-left text-sm font-semibold rounded-xl border-2 px-3 py-2 transition hover:bg-mist" style={{ borderColor: "var(--color-teal)", color: "var(--color-teal)" }}>Get a Quote</button>
              <button className="text-left text-sm font-semibold rounded-xl border-2 px-3 py-2 transition hover:bg-mist" style={{ borderColor: "var(--color-teal)", color: "var(--color-teal)" }}>Make a Claim</button>
              <button className="text-left text-sm font-semibold rounded-xl border-2 px-3 py-2 transition hover:bg-mist" style={{ borderColor: "var(--color-teal)", color: "var(--color-teal)" }}>Speak to an Advisor</button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setOpen((v) => !v)} aria-label="Open chat"
        className="grid place-items-center h-14 w-14 rounded-full text-white shadow-glow hover:scale-105 transition-transform"
        style={{ background: "var(--color-teal)" }}>
        {open ? <Close /> : <Chat />}
      </button>
      <style>{`@keyframes popIn { from { opacity:0; transform: translateY(8px) scale(.96); } to { opacity:1; transform:none; } }`}</style>
    </div>
  );
}

export function FloatingQuote({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="fixed bottom-5 right-5 z-40 pulse-ring rounded-full px-5 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5 inline-flex items-center gap-2"
      style={{ background: "var(--color-teal)" }}>
      🛡️ Get Quote
    </button>
  );
}
