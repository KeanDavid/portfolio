"use client";

import { useEffect, useRef } from "react";

type Theme = "scan" | "cluster" | "wave" | "flow";

export default function ProjectAccent({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (theme === "scan" || theme === "wave") return; // these are pure CSS, no canvas needed

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let animationId: number;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    if (theme === "cluster") {
      const colors = ["#00E5FF", "#7C4DFF", "#3DDC97"];
      const centroids = [
        { x: width * 0.22, y: height * 0.5, color: colors[0] },
        { x: width * 0.5, y: height * 0.35, color: colors[1] },
        { x: width * 0.78, y: height * 0.6, color: colors[2] },
      ];
      const points = centroids.flatMap((c, ci) =>
        Array.from({ length: 12 }, () => ({
          angle: Math.random() * Math.PI * 2,
          radius: 20 + Math.random() * 45,
          speed: 0.002 + Math.random() * 0.003,
          centroid: c,
          colorIndex: ci,
        }))
      );

      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        for (const p of points) {
          if (!prefersReducedMotion) p.angle += p.speed;
          const x = p.centroid.x + Math.cos(p.angle) * p.radius;
          const y = p.centroid.y + Math.sin(p.angle) * p.radius;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = p.centroid.color;
          ctx.globalAlpha = 0.5;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
        if (!prefersReducedMotion) animationId = requestAnimationFrame(draw);
      };
      draw();
    }

    if (theme === "flow") {
      const nodeCount = 22;
      const nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      }));

      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        if (!prefersReducedMotion) {
          for (const n of nodes) {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;
          }
        }
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 110) {
              ctx.strokeStyle = `rgba(124, 77, 255, ${0.15 * (1 - dist / 110)})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
        for (const n of nodes) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = "#7C4DFF";
          ctx.globalAlpha = 0.5;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
        if (!prefersReducedMotion) animationId = requestAnimationFrame(draw);
      };
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [theme]);

  if (theme === "scan") {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
        <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-accent-cyan/25 to-transparent animate-[scan_4s_ease-in-out_infinite]" />
      </div>
    );
  }

  if (theme === "wave") {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-25" aria-hidden="true">
        <svg
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50"
            fill="none"
            stroke="#3DDC97"
            strokeWidth="1.5"
            className="animate-[wave-drift_6s_ease-in-out_infinite]"
          />
          <path
            d="M0,60 Q50,80 100,60 T200,60 T300,60 T400,60"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1.5"
            className="animate-[wave-drift_8s_ease-in-out_infinite]"
          />
        </svg>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full opacity-40"
    />
  );
}
