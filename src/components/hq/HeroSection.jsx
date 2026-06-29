import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ThreeKernel from "./ThreeKernel";

export default function HeroSection() {
  const [cmdInput, setCmdInput] = useState("");

  const handleCmd = (e) => {
    e.preventDefault();
    const el = document.querySelector("#lab");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setCmdInput("");
  };

  return (
    <section id="nexus" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <ThreeKernel />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian)] via-transparent to-[var(--obsidian)] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian)] via-transparent to-[var(--obsidian)] opacity-40 pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Tag */}
          <motion.div
            className="font-mono text-[10px] tracking-[0.4em] text-[var(--kinetic-teal)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            DIGITAL HEADQUARTERS — EST. 2024
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading font-medium text-[var(--liquid-silver)] leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            WE BUILD
            <br />
            <span className="text-gradient-teal">THE FUTURE</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="mt-6 max-w-md text-[var(--neural-grey)] text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A 10-person engineering collective crafting AI-native products,
            cinematic interfaces, and precision-engineered digital systems.
          </motion.p>

          {/* Terminal input */}
          <motion.form
            onSubmit={handleCmd}
            className="mt-12 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="glass-panel flex items-center px-4 py-3 group hover:border-[var(--kinetic-teal)] hover:border-opacity-20 transition-colors duration-500">
              <span className="text-[var(--kinetic-teal)] font-mono text-sm mr-3">{">"}</span>
              <input
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                placeholder="explore the lab..."
                className="flex-1 bg-transparent font-mono text-sm text-[var(--liquid-silver)] placeholder:text-[var(--neural-grey)] placeholder:opacity-40 focus:outline-none"
              />
              <span className="font-mono text-[10px] text-[var(--neural-grey)] opacity-40">ENTER</span>
            </div>
          </motion.form>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-[var(--neural-grey)] opacity-40">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-[var(--kinetic-teal)] opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}