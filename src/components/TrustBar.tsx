const tools = [
  "Python",
  "SQL",
  "Tableau",
  "VS Code",
  "Excel",
  "Figma",
  "R",
  "GitHub",
  "Colab",
  "Power BI",
  "Nodejs",
  "Java",
  "Looker",
  "Slack",
  "Microsoft Office"
];

export default function TrustBar() {
  return (
    <section className="border-y border-border-subtle bg-background-secondary/40">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-8">
        <p className="text-center text-xs font-mono-accent text-text-muted uppercase tracking-widest mb-6">
          Tools &amp; Technologies I Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-text-muted text-lg font-medium hover:text-accent-cyan transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
