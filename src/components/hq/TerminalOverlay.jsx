import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const commandResponses = {
  help: [
    "Available commands:",
    "  ls projects     — List all projects",
    "  whois team      — Team member dossiers",
    "  status          — System status report",
    "  stack           — Technology overview",
    "  contact         — Contact information",
    "  clear           — Clear terminal",
    "  about           — About KERNEL",
  ],
  "ls projects": [
    "┌─────────────────────────────────────────┐",
    "│ PROJECT ARCHIVE                          │",
    "├─────────────────────────────────────────┤",
    "│ NEXUS AI        AI Platform       2024  │",
    "│ VOID ENGINE     3D Runtime        2024  │",
    "│ SIGNAL          Analytics         2023  │",
    "│ PHANTOM         Security Suite    2023  │",
    "│ MERIDIAN        Design System     2024  │",
    "└─────────────────────────────────────────┘",
  ],
  "whois team": [
    "KERNEL PERSONNEL — 10 ACTIVE MEMBERS",
    "",
    "  Alex Reeves     Chief Architect    [L5]",
    "  Jordan Mori     AI Lead            [L5]",
    "  Sana Patel      Frontend Director  [L4]",
    "  Marcus Voss     Backend Lead       [L4]",
    "  Yuki Tanaka     DevOps Engineer    [L4]",
    "  Elena Roche     Product Designer   [L3]",
    "  Kai Brennan     Security Engineer  [L4]",
    "  Priya Sharma    Data Engineer      [L3]",
    "  Liam Chen       Full-Stack Dev     [L3]",
    "  Ava Dossetti    QA Lead            [L3]",
  ],
  status: [
    "SYSTEM STATUS REPORT",
    "─────────────────────",
    "  Core Systems:    ONLINE ●",
    "  AI Agents:       ACTIVE ●",
    "  Lab Environment: RUNNING ●",
    "  Edge Network:    OPTIMAL ●",
    "  Latency:         42ms",
    "  Uptime:          99.99%",
  ],
  stack: [
    "TECHNOLOGY MATRIX",
    "─────────────────",
    "  Frontend:  React · Next.js · Three.js · Framer Motion",
    "  Backend:   Node.js · Python · Rust · Go",
    "  Data:      PostgreSQL · Redis · ClickHouse · Kafka",
    "  AI/ML:     GPT-4 · Claude · LangChain · Vector DB",
    "  Infra:     Kubernetes · Terraform · AWS · Cloudflare",
  ],
  contact: [
    "CONTACT SIGNAL",
    "──────────────",
    "  Email:     hello@kernel.dev",
    "  Location:  San Francisco, CA",
    "  Status:    Open for new projects Q1 2025",
  ],
  about: [
    "KERNEL — DIGITAL HEADQUARTERS",
    "──────────────────────────────",
    "  A 10-person engineering collective building",
    "  AI-native products, cinematic interfaces, and",
    "  precision-engineered digital systems.",
    "",
    "  Established 2024. San Francisco.",
  ],
};

export default function TerminalOverlay({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: "system", text: "KERNEL TERMINAL v2.0 — Type 'help' for commands." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "input", text: cmd }];

    if (cmd === "clear") {
      setHistory([{ type: "system", text: "Terminal cleared." }]);
      setInput("");
      return;
    }

    const response = commandResponses[cmd];
    if (response) {
      response.forEach((line) => {
        newHistory.push({ type: "output", text: line });
      });
    } else {
      newHistory.push({
        type: "error",
        text: `Command not found: '${cmd}'. Type 'help' for available commands.`,
      });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[var(--obsidian)] bg-opacity-80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-2xl glass-panel overflow-hidden"
            initial={{ y: -20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--glass-border)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--kinetic-teal)] animate-pulse-teal" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--kinetic-teal)]">
                  KERNEL TERMINAL
                </span>
              </div>
              <button onClick={onClose} className="text-[var(--neural-grey)] hover:text-[var(--kinetic-teal)] transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Output */}
            <div
              ref={scrollRef}
              className="px-4 py-4 h-80 overflow-y-auto font-mono text-xs leading-relaxed"
            >
              {history.map((entry, i) => (
                <div
                  key={i}
                  className={`mb-1 ${
                    entry.type === "input"
                      ? "text-[var(--liquid-silver)]"
                      : entry.type === "error"
                      ? "text-[var(--critical-amber)]"
                      : entry.type === "system"
                      ? "text-[var(--kinetic-teal)]"
                      : "text-[var(--neural-grey)]"
                  }`}
                >
                  {entry.type === "input" && (
                    <span className="text-[var(--kinetic-teal)] mr-2">{">"}</span>
                  )}
                  {entry.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-[var(--glass-border)] flex items-center">
              <span className="text-[var(--kinetic-teal)] font-mono text-xs mr-2">{">"}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent font-mono text-xs text-[var(--liquid-silver)] focus:outline-none placeholder:text-[var(--neural-grey)] placeholder:opacity-30"
                placeholder="enter command..."
                autoComplete="off"
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}