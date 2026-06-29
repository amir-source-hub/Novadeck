import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Beaker, Settings2 } from "lucide-react";

function ParticleCanvas({ speed, count, radius }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio, 2);
    let w, h;
    const resize = () => {
      w = canvas.parentElement.clientWidth;
      h = canvas.parentElement.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };
    resize();

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 245, 255, 0.6)";
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [speed, count, radius]);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

const experiments = [
  {
    id: "neural-field",
    title: "Neural Particle Field",
    description: "Real-time force-directed particle simulation with dynamic connection mapping.",
    tag: "PHYSICS",
    interactive: true,
  },
  {
    id: "data-stream",
    title: "Data Stream Processor",
    description: "Live visualization of streaming data pipelines with adaptive buffer management.",
    tag: "DATA",
    interactive: false,
  },
  {
    id: "vector-space",
    title: "Vector Space Navigator",
    description: "High-dimensional embedding space reduced to 2D manifold projections for semantic analysis.",
    tag: "AI / ML",
    interactive: false,
  },
];

export default function LabSection() {
  const [activeExperiment, setActiveExperiment] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [count, setCount] = useState(60);
  const [radius, setRadius] = useState(1.5);

  return (
    <section id="lab" className="relative py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] tracking-[0.4em] text-[var(--kinetic-teal)] mb-4">
            002 — THE LAB
          </div>
          <h2
            className="font-heading font-medium text-[var(--liquid-silver)] tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            Simulation environment
          </h2>
          <p className="mt-4 max-w-lg text-[var(--neural-grey)] text-base leading-relaxed">
            Interactive proof-of-concepts. Each experiment is a live sandbox —
            modify parameters and watch systems respond in real time.
          </p>
        </motion.div>

        {/* Experiment tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {experiments.map((exp, i) => (
            <button
              key={exp.id}
              onClick={() => setActiveExperiment(i)}
              className={`flex-shrink-0 px-4 py-2 font-mono text-[10px] tracking-[0.2em] border transition-all duration-300 ${
                i === activeExperiment
                  ? "border-[var(--kinetic-teal)] text-[var(--kinetic-teal)] teal-glow"
                  : "border-[var(--glass-border)] text-[var(--neural-grey)] hover:border-[var(--neural-grey)]"
              }`}
            >
              {exp.tag}
            </button>
          ))}
        </div>

        {/* Active experiment */}
        <motion.div
          key={activeExperiment}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-px"
        >
          {/* Viewport */}
          <div className="lg:col-span-2 glass-panel relative overflow-hidden" style={{ minHeight: 400 }}>
            <ParticleCanvas speed={speed} count={count} radius={radius} />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Beaker className="w-3 h-3 text-[var(--kinetic-teal)]" />
              <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--kinetic-teal)]">
                LIVE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--kinetic-teal)] animate-pulse-teal" />
            </div>
          </div>

          {/* Control panel */}
          <div className="glass-panel p-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Settings2 className="w-3 h-3 text-[var(--kinetic-teal)]" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--kinetic-teal)]">
                PARAMETERS
              </span>
            </div>

            <div>
              <h3 className="font-heading text-lg font-medium text-[var(--liquid-silver)] mb-2">
                {experiments[activeExperiment].title}
              </h3>
              <p className="text-sm text-[var(--neural-grey)] leading-relaxed">
                {experiments[activeExperiment].description}
              </p>
            </div>

            <div className="space-y-4 mt-auto">
              <div>
                <label className="font-mono text-[9px] tracking-[0.2em] text-[var(--neural-grey)] block mb-2">
                  VELOCITY — {speed.toFixed(1)}
                </label>
                <input
                  type="range"
                  min={0.1}
                  max={4}
                  step={0.1}
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-full h-px appearance-none bg-[var(--glass-border)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[var(--kinetic-teal)] [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>

              <div>
                <label className="font-mono text-[9px] tracking-[0.2em] text-[var(--neural-grey)] block mb-2">
                  NODES — {count}
                </label>
                <input
                  type="range"
                  min={10}
                  max={150}
                  step={5}
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                  className="w-full h-px appearance-none bg-[var(--glass-border)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[var(--kinetic-teal)] [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>

              <div>
                <label className="font-mono text-[9px] tracking-[0.2em] text-[var(--neural-grey)] block mb-2">
                  SCALE — {radius.toFixed(1)}
                </label>
                <input
                  type="range"
                  min={0.5}
                  max={4}
                  step={0.1}
                  value={radius}
                  onChange={(e) => setRadius(parseFloat(e.target.value))}
                  className="w-full h-px appearance-none bg-[var(--glass-border)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[var(--kinetic-teal)] [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}