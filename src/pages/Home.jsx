import React, { useState, useEffect } from "react";
import BootSequence from "@/components/hq/BootSequence";
import HUDFrame from "@/components/hq/HUDFrame";
import NavBar from "@/components/hq/NavBar";
import HeroSection from "@/components/hq/HeroSection";
import ServicesSection from "@/components/hq/ServicesSection";
import LabSection from "@/components/hq/LabSection";
import RepositorySection from "@/components/hq/RepositorySection";
import TeamSection from "@/components/hq/TeamSection";
import TechStackSection from "@/components/hq/TechStackSection";
import SignalSection from "@/components/hq/SignalSection";
import FooterHQ from "@/components/hq/FooterHQ";
import TerminalOverlay from "@/components/hq/TerminalOverlay";

export default function Home() {
  const [booted, setBooted] = useState(!!sessionStorage.getItem("kernel_booted"));
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global Cmd+K listener
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--obsidian)" }}>
      <BootSequence onComplete={() => setBooted(true)} />

      {booted && (
        <>
          {/* Scanline effect */}
          <div className="scanline" />

          <HUDFrame />
          <NavBar onOpenTerminal={() => setTerminalOpen(true)} />
          <TerminalOverlay
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
          />

          <main>
            <HeroSection />
            <div className="laser-border-b" />
            <ServicesSection />
            <div className="laser-border-b" />
            <LabSection />
            <div className="laser-border-b" />
            <RepositorySection />
            <div className="laser-border-b" />
            <TeamSection />
            <div className="laser-border-b" />
            <TechStackSection />
            <div className="laser-border-b" />
            <SignalSection />
          </main>

          <FooterHQ />
        </>
      )}
    </div>
  );
}