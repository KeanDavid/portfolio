"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border-subtle px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Kean Louise David
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-accent-cyan focus-visible:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-primary text-sm font-mono-accent border border-border-subtle rounded-full px-3 py-1.5"
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-4 max-w-6xl mx-auto pb-6 border-t border-border-subtle">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-text-muted hover:text-accent-cyan focus-visible:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded transition-colors pt-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
