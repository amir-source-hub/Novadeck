import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const team = [
  {
    name: "Alex Reeves",
    role: "Chief Architect",
    tag: "SYSTEMS",
    specialty: "Distributed systems, system design, and architectural decision-making across the full stack.",
    clearance: "L5",
  },
  {
    name: "Jordan Mori",
    role: "AI Lead",
    tag: "COGNITIVE",
    specialty: "Multi-agent architectures, LLM orchestration, retrieval-augmented generation, and AI safety protocols.",
    clearance: "L5",
  },
  {
    name: "Sana Patel",
    role: "Frontend Director",
    tag: "VISUAL",
    specialty: "Cinematic UI engineering, Three.js experiences, motion systems, and design system architecture.",
    clearance: "L4",
  },
  {
    name: "Marcus Voss",
    role: "Backend Lead",
    tag: "INFRA",
    specialty: "High-throughput data pipelines, edge computing, database optimization, and serverless architecture.",
    clearance: "L4",
  },
  {
    name: "Yuki Tanaka",
    role: "DevOps Engineer",
    tag: "OPS",
    specialty: "CI/CD pipelines, Kubernetes orchestration, zero-downtime deployments, and infrastructure as code.",
    clearance: "L4",
  },
  {
    name: "Elena Roche",
    role: "Product Designer",
    tag: "DESIGN",
    specialty: "Interaction design, design systems, user research, and accessibility-first design methodology.",
    clearance: "L3",
  },
  {
    name: "Kai Brennan",
    role: "Security Engineer",
    tag: "FORTIFY",
    specialty: "Zero-trust architecture, penetration testing, compliance automation, and threat modeling.",
    clearance: "L4",
  },
  {
    name: "Priya Sharma",
    role: "Data Engineer",
    tag: "DATA",
    specialty: "Real-time analytics, streaming data pipelines, data warehousing, and ML feature engineering.",
    clearance: "L3",
  },
  {
    name: "Liam Chen",
    role: "Full-Stack Developer",
    tag: "BUILD",
    specialty: "Rapid prototyping, API design, React architecture, and end-to-end feature delivery.",
    clearance: "L3",
  },
  {
    name: "Ava Dossetti",
    role: "QA Lead",
    tag: "VERIFY",
    specialty: "Test automation, performance testing, chaos engineering, and quality process design.",
    clearance: "L3",
  },
];

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState(null);
  const selected = team.find((_, i) => i === activeMember);

  return (
    <section id="team" className="relative py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="font-mono text-[10px] tracking-[0.4em] text-[var(--kinetic-teal)] mb-4">
            004 — THE TEAM
          </div>
          <h2
            className="font-heading font-medium text-[var(--liquid-silver)] tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            Personnel dossiers
          </h2>
          <p className="mt-4 max-w-lg text-[var(--neural-grey)] text-base leading-relaxed">
            Ten specialists. Each one a master of their domain. Together, a
            collective that builds systems the world hasn't seen yet.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--glass-border)]">
          {team.map((member, i) => (
            <motion.button
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-40px" }}
              onClick={() => setActiveMember(i)}
              className="bg-[var(--obsidian)] p-6 text-left group hover:bg-[rgba(0,245,255,0.02)] transition-colors duration-700 relative"
            >
              {/* Avatar placeholder */}
              <div className="w-10 h-10 border border-[var(--glass-border)] flex items-center justify-center mb-4 group-hover:border-[var(--kinetic-teal)] transition-colors duration-500">
                <span className="font-mono text-[10px] text-[var(--kinetic-teal)] opacity-60">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>

              <div className="font-mono text-[9px] tracking-[0.2em] text-[var(--kinetic-teal)] opacity-50 mb-2">
                {member.tag}
              </div>

              <h3 className="font-heading text-sm font-medium text-[var(--liquid-silver)] mb-0.5">
                {member.name}
              </h3>
              <p className="font-mono text-[10px] text-[var(--neural-grey)]">
                {member.role}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--kinetic-teal)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[var(--obsidian)] bg-opacity-90" onClick={() => setActiveMember(null)} />
            <motion.div
              className="relative glass-panel max-w-md w-full p-8"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
            >
              <button
                onClick={() => setActiveMember(null)}
                className="absolute top-4 right-4 text-[var(--neural-grey)] hover:text-[var(--kinetic-teal)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-[9px] tracking-[0.3em] text-[var(--kinetic-teal)]">
                  CLASSIFIED — CLEARANCE {selected.clearance}
                </span>
              </div>

              <div className="w-16 h-16 border border-[var(--kinetic-teal)] flex items-center justify-center mb-6 teal-glow">
                <span className="font-mono text-lg text-[var(--kinetic-teal)]">
                  {selected.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-medium text-[var(--liquid-silver)] mb-1">
                {selected.name}
              </h3>
              <p className="font-mono text-[11px] tracking-[0.15em] text-[var(--kinetic-teal)] mb-6">
                {selected.role}
              </p>

              <p className="text-sm text-[var(--neural-grey)] leading-relaxed">
                {selected.specialty}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}