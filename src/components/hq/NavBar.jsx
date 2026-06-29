import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "NEXUS", href: "#nexus" },
  { label: "LAB", href: "#lab" },
  { label: "REPOSITORY", href: "#repository" },
  { label: "TEAM", href: "#team" },
  { label: "STACK", href: "#stack" },
  { label: "SIGNAL", href: "#signal" },
];

export default function NavBar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "glass-panel" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="w-6 h-6 border border-[var(--kinetic-teal)] flex items-center justify-center relative group-hover:teal-glow transition-shadow duration-500">
            <div className="w-2 h-2 bg-[var(--kinetic-teal)]" />
          </div>
          <span className="font-mono text-xs tracking-[0.3em] text-[var(--liquid-silver)]">
            KERNEL
          </span>
        </button>

        {/* Links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="font-mono text-[10px] tracking-[0.2em] text-[var(--neural-grey)] hover:text-[var(--kinetic-teal)] transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--kinetic-teal)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
        </div>

        {/* Terminal trigger */}
        <button
          onClick={onOpenTerminal}
          className="flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-[var(--neural-grey)] hover:text-[var(--kinetic-teal)] transition-colors duration-300"
        >
          <span className="hidden sm:inline">⌘K</span>
          <div className="w-4 h-4 border border-current flex items-center justify-center">
            <span className="text-[8px]">{">"}</span>
          </div>
        </button>
      </div>
    </motion.nav>
  );
}