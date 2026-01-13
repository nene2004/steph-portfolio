import Link from "next/link";

export function CTA() {
  return (
    <div className="rounded-3xl border border-[rgba(var(--border),1)] bg-[rgba(var(--card),0.7)] p-6 sm:p-10">
      <h3 className="text-xl sm:text-2xl font-semibold">
        Want someone who can ship + measure impact?
      </h3>
      <p className="mt-3 max-w-2xl text-[rgba(var(--muted),1)]">
        I build polished products and the data layer behind them — dashboards,
        analytics, pipelines, and backend systems.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="mailto:your.email@example.com"
          className="rounded-2xl bg-[rgba(var(--fg),1)] px-5 py-3 text-sm font-medium text-[rgba(var(--bg),1)] hover:opacity-90"
        >
          Email me
        </Link>
        <Link
          href="/#projects"
          className="rounded-2xl border border-[rgba(var(--border),1)] bg-transparent px-5 py-3 text-sm font-medium text-[rgba(var(--fg),1)] hover:bg-[rgba(var(--card),0.7)]"
        >
          View projects
        </Link>
      </div>
    </div>
  );
}