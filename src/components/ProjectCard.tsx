"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <Link
      ref={cardRef}
      href={`/projects/${project.slug}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 150ms ease-out",
        backgroundImage:
          "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(0,229,255,0.08), transparent 60%)",
      }}
      className="group flex flex-col rounded-2xl border border-border-subtle bg-background-secondary overflow-hidden hover:shadow-[0_16px_40px_rgba(0,229,255,0.18)] will-change-transform"
    >
      {project.cardImageStyle === "icon" ? (
        <div className="relative w-full aspect-[16/10] bg-background flex items-center justify-center overflow-hidden">
          <div className="absolute w-1/2 h-1/2 rounded-full bg-accent-cyan/10 blur-2xl" />
          <div className="relative w-2/5 h-2/5">
            <Image
              src={project.cardImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 40vw, 20vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="relative w-full aspect-[16/10] bg-background">
          <Image
            src={project.cardImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-text-muted mb-4 flex-1">{project.hook}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono-accent text-text-muted bg-background border border-border-subtle rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm font-semibold text-accent-cyan group-hover:underline">
          View Case Study →
        </span>
      </div>
    </Link>
  );
}
