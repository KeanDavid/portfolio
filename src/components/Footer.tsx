export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>© {new Date().getFullYear()} Kean Louise B. David. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="mailto:keanlouisedavid@gmail.com"
            className="hover:text-accent-cyan transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/kean-david"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-cyan transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/KeanDavid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-cyan transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
