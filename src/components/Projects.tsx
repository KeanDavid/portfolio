import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono-accent text-accent-cyan uppercase tracking-widest mb-3">
          Featured Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Projects That Prove It
        </h2>
        <p className="text-text-muted max-w-2xl mb-12">
          Two projects covering the full data lifecycle — from raw data and
          modeling to a deployed application and a research-grade analysis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
