import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NEXUS AI",
    category: "AI Platform",
    description: "Enterprise multi-agent orchestration platform with real-time cognitive routing, tool execution, and self-healing workflows.",
    tech: ["React", "Three.js", "Python", "PostgreSQL", "Redis"],
    metrics: { latency: "45ms", uptime: "99.99%", throughput: "12K req/s" },
    year: "2024",
  },
  {
    id: 2,
    title: "VOID ENGINE",
    category: "3D Runtime",
    description: "Browser-native 3D rendering engine with WebGPU acceleration, physics simulation, and real-time collaborative editing.",
    tech: ["Three.js", "WebGPU", "Rust", "WebAssembly"],
    metrics: { fps: "120", polygons: "2M", latency: "8ms" },
    year: "2024",
  },
  {
    id: 3,
    title: "SIGNAL",
    category: "Real-time Analytics",
    description: "Sub-second analytics pipeline processing 50M events/day with predictive anomaly detection and automated alerting.",
    tech: ["Go", "Kafka", "ClickHouse", "React", "D3.js"],
    metrics: { events: "50M/day", latency: "200ms", accuracy: "99.7%" },
    year: "2023",
  },
  {
    id: 4,
    title: "PHANTOM",
    category: "Security Suite",
    description: "Zero-trust security infrastructure with AI-powered threat detection, automated incident response, and compliance automation.",
    tech: ["Rust", "Python", "PostgreSQL", "Kubernetes"],
    metrics: { threats: "1.2M blocked", response: "12ms", coverage: "100%" },
    year: "2023",
  },
  {
    id: 5,
    title: "MERIDIAN",
    category: "Design System",
    description: "Enterprise-scale design system with 200+ components, AI-assisted theming, and cross-platform native rendering.",
    tech: ["React", "TypeScript", "Figma API", "Storybook"],
    metrics: { components: "200+", adoption: "40 teams", satisfaction: "4.9/5" },
    year: "2024",
  },
];

export default function RepositorySection() {
  const [selected, setSelected] = useState(null);
  const selectedProject = projects.find((p) => p.id === selected);

  return (
    <section id="repository" className="relative py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="font-mono text-[10px] tracking-[0.4em] text-[var(--kinetic-teal)] mb-4">
            003 — REPOSITORY
          </div>
          <h2
            className="font-heading font-medium text-[var(--liquid-silver)] tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            Project archive
          </h2>
          <p className="mt-4 max-w-lg text-[var(--neural-grey)] text-base leading-relaxed">
            Technical case studies from our engineering archive. Each project is a
            documented system — performance metrics, architecture decisions, and
            technology selections.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--glass-border)]">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              onClick={() => setSelected(project.id)}
              className="bg-[var(--obsidian)] p-8 text-left group hover:bg-[rgba(0,245,255,0.02)] transition-colors duration-700 relative"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[9px] tracking-[0.3em] text-[var(--neural-grey)] opacity-40">
                  {project.year}
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--kinetic-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  EXPAND →
                </span>
              </div>

              <h3 className="font-heading text-xl font-medium text-[var(--liquid-silver)] mb-1 tracking-tight">
                {project.title}
              </h3>
              <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--neural-grey)] mb-4">
                {project.category}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] tracking-wider px-2 py-1 border border-[var(--glass-border)] text-[var(--neural-grey)]"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="font-mono text-[9px] tracking-wider px-2 py-1 text-[var(--neural-grey)] opacity-50">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--kinetic-teal)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[var(--obsidian)] bg-opacity-90" onClick={() => setSelected(null)} />
            <motion.div
              className="relative glass-panel max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-12"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-[var(--neural-grey)] hover:text-[var(--kinetic-teal)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--kinetic-teal)] mb-4">
                {selectedProject.category} — {selectedProject.year}
              </div>

              <h3
                className="font-heading font-medium text-[var(--liquid-silver)] tracking-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                {selectedProject.title}
              </h3>

              <p className="text-[var(--neural-grey)] text-base leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-px bg-[var(--glass-border)] mb-8">
                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                  <div key={key} className="bg-[var(--obsidian)] p-4 text-center">
                    <div className="text-lg font-heading font-medium text-[var(--kinetic-teal)] teal-text-glow">
                      {value}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.2em] text-[var(--neural-grey)] mt-1 uppercase">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-3 h-3 text-[var(--kinetic-teal)]" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--kinetic-teal)]">
                  TECHNOLOGY
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-wider px-3 py-1.5 border border-[var(--glass-border)] text-[var(--liquid-silver)] hover:border-[var(--kinetic-teal)] transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}