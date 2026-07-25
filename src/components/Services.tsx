"use client";

import { useRef } from "react";

type Service = {
  icon: string;
  title: string;
  hook: string;
  items: string[];
};

const services: Service[] = [
  {
    icon: "📊",
    title: "Data Analysis & Visualization",
    hook: "I turn raw numbers into decisions your team can act on.",
    items: [
      "SQL querying and data extraction",
      "Excel/Google Sheets dashboards and pivot tables",
      "Tableau & Power BI visualization",
      "Exploratory data analysis in Python (Pandas, NumPy)",
    ],
  },
  {
    icon: "🤖",
    title: "Applied Data Science & Machine Learning",
    hook: "From dataset to working model — I've done it end-to-end.",
    items: [
      "Data preprocessing and feature engineering",
      "Model training and evaluation (TensorFlow, scikit-learn)",
      "Clustering, classification & forecasting",
      "Model deployment into simple applications",
    ],
  },
  {
    icon: "🗂️",
    title: "Virtual Assistance & Admin Support",
    hook: "I keep your operations running while you focus on growth.",
    items: [
      "Inbox & calendar management",
      "Documentation and process mapping",
      "File organization and cloud storage systems",
      "Meeting scheduling and internet research",
    ],
  },
  {
    icon: "⌨️",
    title: "Data Entry & Data Cleaning",
    hook: "Accurate data, delivered on time, every time.",
    items: [
      "High-volume, high-accuracy data entry",
      "Data cleaning, deduplication, and formatting",
      "Database entry and validation (SQL)",
      "Report generation and template building",
    ],
  },
];

export default function Services() {
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
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  };

  const handleMouseLeave = (key: string) => {
    const card = cardRefs.current[key];
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section id="services" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono-accent text-accent-cyan uppercase tracking-widest mb-3">
          How I Can Help
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Services I Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => {
                cardRefs.current[service.title] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, service.title)}
              onMouseLeave={() => handleMouseLeave(service.title)}
              style={{
                transition: "transform 150ms ease-out",
                backgroundImage:
                  "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(0,229,255,0.08), transparent 60%)",
              }}
              className={`rounded-2xl border border-border-subtle p-8 will-change-transform hover:shadow-[0_16px_40px_rgba(0,229,255,0.15)] ${
                i < 2 ? "bg-background-secondary" : "bg-background-secondary/50"
              }`}
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-text-muted mb-4">{service.hook}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-muted flex items-start gap-2"
                  >
                    <span className="text-accent-cyan mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
