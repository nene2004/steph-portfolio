export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.2em] text-[rgba(var(--muted),1)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[rgba(var(--muted),1)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}