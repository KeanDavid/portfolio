"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
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
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (key: string) => {
    const card = cardRefs.current[key];
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section id="certifications" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono-accent text-accent-cyan uppercase tracking-widest mb-3">
          Certifications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Recognized &amp; Verified
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              ref={(el) => {
                cardRefs.current[cert.title] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, cert.title)}
              onMouseLeave={() => handleMouseLeave(cert.title)}
              style={{ transition: "transform 150ms ease-out" }}
              className="rounded-2xl border border-border-subtle bg-background-secondary overflow-hidden hover:shadow-[0_16px_40px_rgba(0,229,255,0.15)] will-change-transform"
            >
              <button
                onClick={() => setActiveImage(cert.image)}
                aria-label={`View full size: ${cert.title}`}
                className="relative w-full aspect-[16/10] cursor-zoom-in group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-xs font-mono-accent text-text-primary bg-background/80 border border-border-subtle rounded-full px-3 py-1.5 transition-opacity">
                    Click to view full size
                  </span>
                </div>
              </button>
              <div className="p-6">
                <h3 className="font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-text-muted mb-2">
                  {cert.issuer} · {cert.date}
                </p>
                <p className="text-sm text-text-muted">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full size certificate view"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-text-primary text-sm font-mono-accent border border-border-subtle rounded-full px-4 py-2 hover:bg-background-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition"
          >
            Close ✕
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[85vh]">
            <Image
              src={activeImage}
              alt="Certificate"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
