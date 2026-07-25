import Image from "next/image";
import DataField from "@/components/DataField";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
      <DataField />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-secondary px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            <span className="text-sm text-text-muted font-mono-accent">
              Available for remote work
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            From Spreadsheets to Machine Learning Models —{" "}
            <span className="text-accent-cyan">
              I Turn Raw Data Into Decisions You Can Act On.
            </span>
          </h1>

          <p className="text-lg text-text-muted max-w-xl mb-8">
            Computer Science graduate specializing in Data Analytics and
            Machine Learning, backed by research experience and operational
            precision. I clean the data, build the model or dashboard, and
            hand you something you can actually use.
          </p>

          <p className="text-sm font-mono-accent text-text-muted mb-8">
            Junior Data Analyst | Aspiring Data Scientist | Computer Science Graduate
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent-cyan text-background font-semibold hover:opacity-90 transition"
            >
              View My Work
            </a>
            <a
              href="/resume"
              className="px-6 py-3 rounded-lg border border-accent-cyan text-accent-cyan font-semibold hover:bg-background-secondary transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative w-full aspect-square max-w-sm mx-auto">
          <div className="absolute inset-0 rounded-2xl bg-accent-cyan/10 blur-2xl" />
          <Image
            src="/headshot.jpg"
            alt="Kean Louise David - Data Analyst and Data Scientist"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            priority
            className="relative rounded-2xl object-cover border border-border-subtle"
          />
        </div>
      </div>
    </section>
  );
}
