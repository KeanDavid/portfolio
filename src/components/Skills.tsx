type SkillCategory = {
  label: string;
  skills: string[];
  emphasis?: boolean;
};

const categories: SkillCategory[] = [
  {
    label: "Data & Analytics",
    emphasis: true,
    skills: [
      "Python (Pandas, NumPy)",
      "SQL",
      "R",
      "Excel",
      "Google Sheets",
      "Tableau",
      "Power BI",
      "Data Cleaning",
      "Data Visualization",
      "Machine Learning",
      "TensorFlow",
    ],
  },
  {
    label: "Programming & Development",
    skills: ["Python", "Java", "Kotlin", "SQL", "HTML/CSS", "Android Studio", "Node.js"],
  },
  {
    label: "Admin & Operations",
    skills: [
      "Google Workspace",
      "Microsoft Office",
      "Email Management",
      "Calendar Management",
      "Documentation",
      "Data Entry",
      "File Organization",
    ],
  },
  {
    label: "Design & Prototyping",
    skills: ["Figma", "Canva", "UI/UX Design", "ERD & Flowcharts"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono-accent text-accent-cyan uppercase tracking-widest mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What I Bring to the Table
        </h2>
        <p className="text-text-muted max-w-2xl mb-12">
          A technical foundation in data and machine learning, backed by
          the operational discipline to execute reliably.
        </p>

        <div className="space-y-8">
          {categories.map((category) => (
            <div
              key={category.label}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 items-start border-b border-border-subtle pb-8 last:border-b-0"
            >
              <h3
                className={`text-base font-semibold ${
                  category.emphasis ? "text-accent-cyan" : "text-text-primary"
                }`}
              >
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-mono-accent text-text-muted bg-background-secondary border border-border-subtle rounded-full px-4 py-1.5 hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
