import React, { useState, useEffect } from "react";

export default function HUDFrame() {
  const [time, setTime] = useState(new Date());
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;
    const measure = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measure);
    };
    animId = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(animId);
  }, []);

  const utc = time.toISOString().slice(11, 19);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Top-left */}
      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[var(--neural-grey)] opacity-60 space-y-1">
        <div>SYS.STATUS: <span className="text-[var(--kinetic-teal)]">ONLINE</span></div>
        <div>UTC {utc}</div>
      </div>

      {/* Top-right */}
      <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-[var(--neural-grey)] opacity-60 space-y-1 text-right">
        <div>{fps} FPS</div>
        <div>KERNEL v2.0</div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-[var(--kinetic-teal)] opacity-20" />
      <div className="absolute top-2 right-2 w-6 h-6 border-r border-t border-[var(--kinetic-teal)] opacity-20" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-l border-b border-[var(--kinetic-teal)] opacity-20" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-[var(--kinetic-teal)] opacity-20" />
    </div>
  );
}