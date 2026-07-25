"use client";

import { useRef } from "react";

export default function Testimonials() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono-accent text-accent-cyan uppercase tracking-widest mb-3">
          What People Say
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Recommendations
        </h2>

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transition: "transform 150ms ease-out",
            backgroundImage:
              "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(0,229,255,0.08), transparent 60%)",
          }}
          className="max-w-2xl mx-auto rounded-2xl border border-border-subtle bg-background-secondary p-8 text-center will-change-transform hover:shadow-[0_16px_40px_rgba(0,229,255,0.15)]"
        >
          <p className="text-text-muted italic mb-4">
            &quot;Recommendation coming soon — currently collecting a
            reference from my OVPRDE internship supervisor.&quot;
          </p>
          <p className="text-sm font-mono-accent text-text-muted">
            — Placeholder, updated shortly
          </p>
        </div>
      </div>
    </section>
  );
}
