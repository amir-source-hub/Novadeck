import React from "react";
import { motion } from "framer-motion";

const stackCategories = [
  {
    label: "FRONTEND",
    items: ["React", "Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Python", "Rust", "Go", "GraphQL", "gRPC"],
  },
  {
    label: "DATA",
    items: ["PostgreSQL", "Redis", "ClickHouse", "Kafka", "Elasticsearch"],
  },
  {
    label: "AI / ML",
    items: ["GPT-4", "Claude", "LangChain", "Vector DB", "RAG Pipelines"],
  },
  {
    label: "INFRA",
    items: ["Kubernetes", "Terraform", "AWS", "Cloudflare", "Docker"],
  },
  {
    label: "TOOLING",
    items: ["GitHub", "Linear", "Figma", "Storybook", "Playwright"],
  },
];

export default function TechStackSection() {
  return (
    <section id="stack" className="relative py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="font-mono text-[10px] tracking-[0.4em] text-[var(--kinetic-teal)] mb-4">
            005 — TECHNOLOGY
          </div>
          <h2
            className="font-heading font-medium text-[var(--liquid-silver)] tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            System architecture
          </h2>
          <p className="mt-4 max-w-lg text-[var(--neural-grey)] text-base leading-relaxed">
            The tools and technologies we deploy. Each selected for a reason,
            battle-tested in production, and mastered by our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--glass-border)]">
          {stackCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-[var(--obsidian)] p-8"
            >
              <div className="font-mono text-[9px] tracking-[0.3em] text-[var(--kinetic-teal)] mb-6 opacity-60">
                {cat.label}
              </div>
              <div className="space-y-3">
                {cat.items.map((item, itemIdx) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 group cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-1 h-1 bg-[var(--kinetic-teal)] opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm text-[var(--neural-grey)] group-hover:text-[var(--liquid-silver)] transition-colors duration-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}