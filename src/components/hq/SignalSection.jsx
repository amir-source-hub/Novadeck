import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function SignalSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setSending(false);
  };

  return (
    <section id="signal" className="relative py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="font-mono text-[10px] tracking-[0.4em] text-[var(--kinetic-teal)] mb-4">
              006 — SIGNAL
            </div>
            <h2
              className="font-heading font-medium text-[var(--liquid-silver)] tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
            >
              Initiate contact
            </h2>
            <p className="text-[var(--neural-grey)] text-base leading-relaxed mb-8">
              Ready to build something extraordinary? Send a signal.
              We respond within 24 hours to every transmission.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-[var(--kinetic-teal)]" />
                <span className="text-sm text-[var(--neural-grey)]">
                  hello@kernel.dev
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-[var(--kinetic-teal)]" />
                <span className="text-sm text-[var(--neural-grey)]">
                  San Francisco, CA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-[var(--kinetic-teal)]" />
                <span className="text-sm text-[var(--neural-grey)]">
                  Open for new projects Q1 2025
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {sent ? (
              <div className="glass-panel p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <CheckCircle2 className="w-8 h-8 text-[var(--kinetic-teal)] mb-4" />
                <h3 className="font-heading text-lg font-medium text-[var(--liquid-silver)] mb-2">
                  Signal received
                </h3>
                <p className="text-sm text-[var(--neural-grey)]">
                  Expect a response within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-[9px] tracking-[0.2em] text-[var(--neural-grey)] block mb-2">
                    DESIGNATION
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 text-sm text-[var(--liquid-silver)] focus:outline-none focus:border-[var(--kinetic-teal)] transition-colors duration-300 placeholder:text-[var(--neural-grey)] placeholder:opacity-30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] tracking-[0.2em] text-[var(--neural-grey)] block mb-2">
                    FREQUENCY
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 text-sm text-[var(--liquid-silver)] focus:outline-none focus:border-[var(--kinetic-teal)] transition-colors duration-300 placeholder:text-[var(--neural-grey)] placeholder:opacity-30"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] tracking-[0.2em] text-[var(--neural-grey)] block mb-2">
                    TRANSMISSION
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 text-sm text-[var(--liquid-silver)] focus:outline-none focus:border-[var(--kinetic-teal)] transition-colors duration-300 resize-none placeholder:text-[var(--neural-grey)] placeholder:opacity-30"
                    placeholder="Describe your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center gap-3 px-6 py-3 border border-[var(--kinetic-teal)] text-[var(--kinetic-teal)] font-mono text-[11px] tracking-[0.2em] hover:bg-[var(--kinetic-teal)] hover:text-[var(--obsidian)] transition-all duration-500 disabled:opacity-40"
                >
                  {sending ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>SEND SIGNAL</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}