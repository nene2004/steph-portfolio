import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Chip } from "@/components/Chip";
import { projects } from "@/lib/data";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="bg-grid vignette py-14">
      <Container>
        <Link
          href="/#projects"
          className="text-sm text-[rgba(var(--muted),1)] hover:text-[rgba(var(--fg),1)]"
        >
          ← Back to projects
        </Link>

        <div className="mt-6 rounded-3xl border border-[rgba(var(--border),1)] bg-[rgba(var(--card),0.65)] p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[rgba(var(--muted),1)]">
            {project.category}
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-[rgba(var(--muted),1)]">
            {project.blurb}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-[rgba(var(--border),1)] bg-black/20 p-5 md:col-span-2">
              <h2 className="text-lg font-semibold">Problem</h2>
              <p className="mt-2 text-sm text-[rgba(var(--muted),1)]">
                {project.problem}
              </p>

              <h2 className="mt-6 text-lg font-semibold">Solution</h2>
              <p className="mt-2 text-sm text-[rgba(var(--muted),1)]">
                {project.solution}
              </p>

              <h2 className="mt-6 text-lg font-semibold">Highlights</h2>
              <ul className="mt-2 space-y-2 text-sm text-[rgba(var(--muted),1)]">
                {project.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[rgba(var(--border),1)] bg-black/20 p-5">
              <h2 className="text-lg font-semibold">Role</h2>
              <p className="mt-2 text-sm text-[rgba(var(--muted),1)]">
                {project.role}
              </p>

              <h2 className="mt-6 text-lg font-semibold">Impact</h2>
              <p className="mt-2 text-sm text-[rgba(var(--muted),1)]">
                {project.impact}
              </p>

              <h2 className="mt-6 text-lg font-semibold">Next</h2>
              <ul className="mt-2 space-y-2 text-sm text-[rgba(var(--muted),1)]">
                {project.whatIDImprove.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {project.links.github ? (
                  <Link
                    href={project.links.github}
                    className="hover:opacity-80"
                  >
                    GitHub ↗
                  </Link>
                ) : null}
                {project.links.live ? (
                  <Link href={project.links.live} className="hover:opacity-80">
                    Live ↗
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}