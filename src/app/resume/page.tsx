import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Kean Louise David",
  description:
    "Download the resume of Kean Louise David — Computer Science graduate specializing in Data Analytics and Machine Learning, available for remote work.",
};

const RESUME_PATH = "/Kean-David-Resume-2026.pdf";

export default function ResumePage() {
  return (
    <main className="px-6 md:px-12 lg:px-24 py-16 max-w-4xl mx-auto">
      <Link href="/" className="text-sm text-accent-cyan hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4">Resume</h1>
      <p className="text-text-muted mb-8">
        Computer Science graduate specializing in Data Analytics and Machine
        Learning. Available for remote work, starting immediately.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href={RESUME_PATH}
          download
          className="px-6 py-3 rounded-lg bg-accent-cyan text-background font-semibold hover:opacity-90 transition"
        >
          Download Resume (PDF)
        </a>
        <Link
          href="/#contact"
          className="px-6 py-3 rounded-lg border border-accent-cyan text-accent-cyan font-semibold hover:bg-background-secondary transition"
        >
          Contact Me Instead
        </Link>
      </div>

      <div className="w-full rounded-2xl border border-border-subtle overflow-hidden bg-background-secondary">
        <object
          data={RESUME_PATH}
          type="application/pdf"
          className="w-full"
          style={{ height: "80vh" }}
        >
          <p className="p-8 text-text-muted">
            Your browser can&apos;t preview PDFs inline.{" "}
            <a href={RESUME_PATH} className="text-accent-cyan hover:underline">
              Click here to download the resume directly.
            </a>
          </p>
        </object>
      </div>

      <div className="mt-8">
        <a
          href={RESUME_PATH}
          download
          className="px-6 py-3 rounded-lg bg-accent-cyan text-background font-semibold hover:opacity-90 transition inline-block"
        >
          Download Resume (PDF)
        </a>
      </div>
    </main>
  );
}
