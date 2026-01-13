import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[rgba(var(--border),1)]">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-10 text-sm text-[rgba(var(--muted),1)]">
          <p>© {new Date().getFullYear()} Steph. Built with Next.js.</p>
          <div className="flex gap-4">
            <a className="hover:text-[rgba(var(--fg),1)]" href="https://github.com/yourhandle">
              GitHub
            </a>
            <a className="hover:text-[rgba(var(--fg),1)]" href="https://www.linkedin.com/in/yourhandle/">
              LinkedIn
            </a>
            <a className="hover:text-[rgba(var(--fg),1)]" href="mailto:your.email@example.com">
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}