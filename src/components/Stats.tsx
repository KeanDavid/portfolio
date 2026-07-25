"use client";

import { useRef } from "react";

type Stat = {
  value: string;
  label: string;
  color: string;
};

const stats: Stat[] = [
  { value: "4", label: "Shipped Case Studies", color: "text-accent-cyan" },
  { value: "82.7%", label: "SalCoN Model Confidence", color: "text-accent-violet" },
  { value: "3", label: "Forecasting Models Compared", color: "text-accent-success" },
  { value: "15+", label: "ReMoTrak Prototype Screens", color: "text-accent-cyan" },
];

export default function Stats() {
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    key: string
  ) => {
    const card = cardRefs.current[key];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Gentler tilt magnitude since these chips are small — a big tilt on a
    // small element reads as jittery rather than premium.
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -3;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  };

  const handleMouseLeave = (key: string) => {
    const card = cardRefs.current[key];
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            ref={(el) => {
              cardRefs.current[stat.label] = el;
            }}
            onMouseMove={(e) => handleMouseMove(e, stat.label)}
            onMouseLeave={() => handleMouseLeave(stat.label)}
            style={{
              transition: "transform 150ms ease-out",
              backgroundImage:
                "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(0,229,255,0.08), transparent 60%)",
            }}
            className="rounded-2xl border border-border-subtle bg-background-secondary px-6 py-8 text-center will-change-transform hover:shadow-[0_12px_30px_rgba(0,229,255,0.12)]"
          >
            <p className={`text-3xl md:text-4xl font-bold font-mono-accent mb-2 ${stat.color}`}>
              {stat.value}
            </p>
            <p className="text-xs md:text-sm text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
