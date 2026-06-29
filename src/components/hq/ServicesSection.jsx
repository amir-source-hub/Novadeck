import React from "react";
import { motion } from "framer-motion";
import { Brain, Layers, Cpu, Zap, Eye, Shield } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Engineering",
    description: "Multi-agent systems, LLM orchestration, and intelligent automation frameworks built for production scale.",
    tag: "COGNITIVE",
  },
  {
    icon: Layers,
    title: "Product Architecture",
    description: "Full-stack systems designed from first principles. Database to pixel, every layer engineered with intent.",
    tag: "STRUCTURAL",
  },
  {
    icon: Cpu,
    title: "Performance Systems",
    description: "Sub-100ms latency infrastructure. Edge computing, real-time data pipelines, and optimized runtimes.",
    tag: "VELOCITY",
  },
  {
    icon: Eye,
    title: "Cinematic Interfaces",
    description: "Three.js experiences, physics-based motion, and award-worthy interaction design that converts visitors.",
    tag: "VISUAL",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "From concept to functional prototype in days. Validated ideas shipped fast with production-grade code.",
    tag: "ACCELERATE",
  },
  {
    icon: Shield,
    title: "Security & Scale",
    description: "Enterprise-grade security architecture, SOC2-ready infrastructure, and systems that scale from 10 to 10 million.",
    tag: "FORTIFY",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="font-mono text-[10px] tracking-[0.4em] text-[var(--kinetic-teal)] mb-4">
            001 — CAPABILITIES
          </div>
          <h2
            className="font-heading font-medium text-[var(--liquid-silver)] tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            Engineering pillars
          </h2>
          <p className="mt-4 max-w-lg text-[var(--neural-grey)] text-base leading-relaxed">
            Six core disciplines that define how we build. Each one refined through
            hundreds of projects and thousands of production hours.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--glass-border)]">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="bg-[var(--obsidian)] p-8 md:p-10 group hover:bg-[rgba(0,245,255,0.02)] transition-colors duration-700 relative"
              >
                {/* Tag */}
                <div className="font-mono text-[9px] tracking-[0.3em] text-[var(--neural-grey)] opacity-40 mb-6">
                  {svc.tag}
                </div>

                <Icon
                  className="w-5 h-5 text-[var(--kinetic-teal)] opacity-60 group-hover:opacity-100 transition-opacity duration-500 mb-4"
                  strokeWidth={1.5}
                />

                <h3 className="font-heading text-lg font-medium text-[var(--liquid-silver)] mb-3">
                  {svc.title}
                </h3>

                <p className="text-sm text-[var(--neural-grey)] leading-relaxed">
                  {svc.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--kinetic-teal)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}