import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="relative cta-glow-border max-w-4xl mx-auto rounded-3xl border border-border-subtle bg-background-secondary p-12 md:p-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Add a Detail-Obsessed Problem Solver to Your Team?
        </h2>
        <p className="text-text-muted mb-8 max-w-xl mx-auto">
          I&apos;m actively looking for a remote Data Analyst, Data
          Scientist, Virtual Assistant, or Data Entry role — and I&apos;m
          available to start immediately.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link
            href="/resume"
            className="px-6 py-3 rounded-lg bg-accent-cyan text-background font-semibold hover:opacity-90 transition"
          >
            Download My Resume
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-lg border border-accent-cyan text-accent-cyan font-semibold hover:bg-background transition"
          >
            Send Me a Message
          </Link>
        </div>
        <p className="text-xs font-mono-accent text-text-muted">
          Usually responds within 2 hours · Remote-only · Open to contract or full-time
        </p>
      </div>
    </section>
  );
}
