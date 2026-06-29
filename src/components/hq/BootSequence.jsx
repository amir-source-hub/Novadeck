import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "KERNEL.SYS — DIGITAL HEADQUARTERS v2.0", delay: 0 },
  { text: "Initializing neural mesh...", delay: 200 },
  { text: "Loading cognitive subsystems...", delay: 400 },
  { text: "Binding agent orchestrator...", delay: 600 },
  { text: "Rendering viewport matrix...", delay: 800 },
  { text: "Calibrating motion physics...", delay: 1000 },
  { text: "THREE.JS kernel: ACTIVE", delay: 1200 },
  { text: "System ready.", delay: 1500 },
];

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("kernel_booted");
    if (seen) {
      onComplete?.();
      return;
    }

    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line.text]);
        if (i === bootLines.length - 1) {
          setTimeout(() => {
            setDone(true);
            sessionStorage.setItem("kernel_booted", "1");
            setTimeout(() => onComplete?.(), 600);
          }, 700);
        }
      }, line.delay);
    });
  }, []);

  const seen = sessionStorage.getItem("kernel_booted");
  if (seen) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "var(--obsidian)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-lg w-full px-8">
            <div className="font-mono text-xs space-y-1">
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={
                    i === visibleLines.length - 1 && line === "System ready."
                      ? "text-[var(--kinetic-teal)]"
                      : "text-[var(--neural-grey)]"
                  }
                >
                  <span className="text-[var(--kinetic-teal)] mr-2">{">"}</span>
                  {line}
                  {i === visibleLines.length - 1 && (
                    <span className="inline-block w-2 h-3 bg-[var(--kinetic-teal)] ml-1 animate-pulse" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6 h-px bg-[var(--glass-border)] overflow-hidden">
              <motion.div
                className="h-full bg-[var(--kinetic-teal)]"
                initial={{ width: "0%" }}
                animate={{ width: `${(visibleLines.length / bootLines.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}