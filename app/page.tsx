import Link from "next/link";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { redirect } from "next/navigation";


function BigCTA({
  href,
  title,
  desc,
  icon,
}: {
  href: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl bg-[rgba(var(--card),0.42)] p-7 ring-1 ring-white/10 transition hover:bg-[rgba(var(--card),0.50)] hover:shadow-[0_0_0_1px_rgba(255,166,201,0.22)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
          {icon}
        </div>
        <ArrowRight className="h-5 w-5 opacity-50 transition group-hover:opacity-90" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[rgba(var(--muted),1)]">{desc}</p>
    </Link>
  );
}

export default function Home() {
  redirect("/portfolio");
}