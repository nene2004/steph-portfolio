export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[rgba(var(--border),1)] bg-[rgba(var(--card),0.9)] px-3 py-1 text-xs text-[rgba(var(--muted),1)]">
      {children}
    </span>
  );
}