import React from "react";

export default function FooterHQ() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-[var(--glass-border)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 border border-[var(--kinetic-teal)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[var(--kinetic-teal)]" />
              </div>
              <span className="font-mono text-xs tracking-[0.3em] text-[var(--liquid-silver)]">
                KERNEL
              </span>
            </div>
            <p className="text-sm text-[var(--neural-grey)] leading-relaxed max-w-xs">
              Digital Headquarters. Building AI-native products and cinematic
              digital experiences for the next generation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[var(--kinetic-teal)] mb-4 opacity-60">
              NAVIGATE
            </div>
            <div className="space-y-2">
              {["Nexus", "Lab", "Repository", "Team", "Stack", "Signal"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const el = document.querySelector(`#${item.toLowerCase()}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-sm text-[var(--neural-grey)] hover:text-[var(--liquid-silver)] transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[var(--kinetic-teal)] mb-4 opacity-60">
              CHANNELS
            </div>
            <div className="space-y-2">
              {[
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "X / Twitter", href: "https://x.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[var(--neural-grey)] hover:text-[var(--liquid-silver)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--glass-border)]">
          <div className="font-mono text-[10px] tracking-[0.15em] text-[var(--neural-grey)] opacity-40">
            © {year} KERNEL DIGITAL HQ. ALL SYSTEMS OPERATIONAL.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-[10px] tracking-[0.1em] text-[var(--neural-grey)] opacity-40 hover:opacity-100 hover:text-[var(--kinetic-teal)] transition-all duration-300">
              Privacy
            </a>
            <a href="#" className="font-mono text-[10px] tracking-[0.1em] text-[var(--neural-grey)] opacity-40 hover:opacity-100 hover:text-[var(--kinetic-teal)] transition-all duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}