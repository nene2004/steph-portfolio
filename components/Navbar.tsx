import Link from "next/link";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="mx-auto flex h-12 max-w-3xl items-center justify-between rounded-full border border-[rgba(var(--border),1)] bg-black/35 px-4 backdrop-blur">
          <Link href="/" className="font-semibold tracking-tight">
            Steph<span className="opacity-70">.dev</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-5 text-sm text-[rgba(var(--muted),1)]">
            <Link className="hover:text-[rgba(var(--fg),1)]" href="/#projects">
              Projects
            </Link>
            <Link className="hover:text-[rgba(var(--fg),1)]" href="/#data">
              Data
            </Link>
            <Link className="hover:text-[rgba(var(--fg),1)]" href="/#about">
              About
            </Link>
          </nav>

          <Link
            className="rounded-full border border-[rgba(var(--border),1)] px-3 py-1.5 text-sm hover:bg-[rgba(var(--card),0.7)]"
            href="mailto:your.email@example.com"
          >
            Let’s talk ✨
          </Link>
        </div>
      </Container>
    </header>
  );
}