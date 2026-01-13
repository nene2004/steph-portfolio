"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Chip } from "@/components/Chip";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group rounded-3xl border border-[rgba(var(--border),1)] bg-[rgba(var(--card),0.65)] p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[rgba(var(--muted),1)]">
            {project.category}
          </p>
          <h3 className="mt-2 text-lg sm:text-xl font-semibold">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-[rgba(var(--muted),1)]">
            {project.blurb}
          </p>
        </div>
        <div className="h-10 w-10 rounded-2xl border border-[rgba(var(--border),1)] bg-black/20 grid place-items-center">
          <span className="text-sm opacity-80">↗</span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 6).map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-2xl bg-[rgba(var(--fg),1)] px-4 py-2 text-sm font-medium text-[rgba(var(--bg),1)] hover:opacity-90"
        >
          Read case study
        </Link>
        {project.links.github ? (
          <Link
            href={project.links.github}
            className="text-sm text-[rgba(var(--muted),1)] hover:text-[rgba(var(--fg),1)]"
          >
            GitHub
          </Link>
        ) : null}
        {project.links.live ? (
          <Link
            href={project.links.live}
            className="text-sm text-[rgba(var(--muted),1)] hover:text-[rgba(var(--fg),1)]"
          >
            Live demo
          </Link>
        ) : null}
      </div>

      <div className="mt-6 h-px w-full bg-[rgba(var(--border),1)]" />
      <p className="mt-4 text-xs text-[rgba(var(--muted),1)]">
        Impact: <span className="text-[rgba(var(--fg),0.85)]">{project.impact}</span>
      </p>
    </motion.div>
  );
}