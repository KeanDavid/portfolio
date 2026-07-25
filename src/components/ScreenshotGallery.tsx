"use client";

import Image from "next/image";
import { useState } from "react";

export default function ScreenshotGallery({
  screenshots,
  layout,
  alt,
}: {
  screenshots: string[];
  layout: "mobile" | "default";
  alt: string;
}) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      {layout === "mobile" ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {screenshots.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveImage(src)}
              aria-label={`View full size: ${alt} screenshot ${i + 1} of ${screenshots.length}`}
              className="relative w-full aspect-[9/19.5] rounded-[1.5rem] overflow-hidden border-2 border-border-subtle bg-background cursor-zoom-in hover:border-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition-colors"
            >
              <Image
                src={src}
                alt={`${alt} — screenshot ${i + 1} of ${screenshots.length}`}
                fill
                sizes="(max-width: 768px) 40vw, 200px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : (
        <div
          className={`grid gap-4 mb-12 ${
            screenshots.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {screenshots.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveImage(src)}
              aria-label={`View full size: ${alt} screenshot ${i + 1} of ${screenshots.length}`}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle cursor-zoom-in hover:border-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition-colors"
            >
              <Image
                src={src}
                alt={`${alt} — screenshot ${i + 1} of ${screenshots.length}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full size screenshot view"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-text-primary text-sm font-mono-accent border border-border-subtle rounded-full px-4 py-2 hover:bg-background-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition"
          >
            Close ✕
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
            <Image
              src={activeImage}
              alt={alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
