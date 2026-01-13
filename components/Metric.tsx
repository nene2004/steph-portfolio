export function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[rgba(var(--border),1)] bg-[rgba(var(--card),0.7)] p-5">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-[rgba(var(--muted),1)]">{label}</div>
    </div>
  );
}