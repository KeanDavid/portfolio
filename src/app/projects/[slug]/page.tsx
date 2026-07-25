import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import ProjectAccent from "@/components/ProjectAccent";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Kean Louise David`,
    description: project.hook,
    openGraph: {
      title: project.title,
      description: project.hook,
      images: [project.cardImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="relative overflow-hidden">
        <ProjectAccent theme={project.accentTheme} />
        <div className="relative px-6 md:px-12 lg:px-24 py-16 max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="text-sm text-accent-cyan hover:underline"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono-accent text-text-muted bg-background-secondary border border-border-subtle rounded-full px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-accent-cyan text-accent-cyan text-sm font-semibold hover:bg-background-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition inline-flex items-center gap-2"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 pb-16 max-w-4xl mx-auto">
        <div className="mt-10">
          <ScreenshotGallery
            screenshots={project.screenshots}
            layout={project.screenshotLayout}
            alt={project.title}
          />
        </div>

        <div className="space-y-12 text-text-muted text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              Overview
            </h2>
            <p>{project.overview}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              My Role
            </h2>
            <p>{project.myRole}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              The Problem
            </h2>
            <p>{project.problem}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              The Solution
            </h2>
            <p>{project.solution}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              Process &amp; Challenges
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              Results
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.results.map((result, i) => (
                <li key={i}>{result}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              Key Learnings
            </h2>
            <p className="italic">{project.keyLearnings}</p>
          </section>
        </div>

        <div className="mt-16">
          <Link
            href="/#projects"
            className="inline-block px-6 py-3 rounded-lg border border-accent-cyan text-accent-cyan font-semibold hover:bg-background-secondary transition"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
