import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { CTA } from "@/components/CTA";
import { Metric } from "@/components/Metric";
import { Chip } from "@/components/Chip";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { projects } from "@/lib/data";



export default function HomePage() {
  return (
    <main className="bg-grid vignette">
      {/* Hero */}
      <section className="pt-14 sm:pt-20">
        <Container>
          <div className="rounded-3xl border border-[rgba(var(--border),1)] bg-[rgba(var(--card),0.55)] p-7 sm:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[rgba(var(--muted),1)]">
              Hybrid • Data Analyst + Software Developer
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold leading-[1.08]">
              I build{" "}
              <span className="text-[rgba(var(--fg),1)]">
                data-driven products
              </span>{" "}
              that ship fast and measure impact.
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base text-[rgba(var(--muted),1)]">
              I combine strong engineering with analytics — dashboards, SQL, pipelines,
              and polished web apps. Based in Winnipeg, open to opportunities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Magnetic>
              <Link
                href="/#projects"
                className="rounded-2xl bg-[rgba(var(--fg),1)] px-5 py-3 text-sm font-medium text-[rgba(var(--bg),1)] hover:opacity-90"
              >
                View projects
              </Link>
              </Magnetic>
              <Link
                href="https://github.com/yourhandle"
                className="rounded-2xl border border-[rgba(var(--border),1)] bg-transparent px-5 py-3 text-sm font-medium hover:bg-[rgba(var(--card),0.7)]"
              >
                GitHub
              </Link>
              <Link
                href="mailto:your.email@example.com"
                className="rounded-2xl border border-[rgba(var(--border),1)] bg-transparent px-5 py-3 text-sm font-medium hover:bg-[rgba(var(--card),0.7)]"
              >
                Contact
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Chip>SQL</Chip>
              <Chip>Python</Chip>
              <Chip>Next.js</Chip>
              <Chip>FastAPI</Chip>
              <Chip>Postgres</Chip>
              <Chip>Dashboards</Chip>
              <Chip>ETL / Pipelines</Chip>
            </div>
          </div>
        </Container>
      </section>

      {/* Metrics */}
      <section className="mt-10 sm:mt-14">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Metric label="Focus" value="Product + Data" />
            <Metric label="Core stack" value="SQL • Python • TS" />
            <Metric label="Strength" value="Ship + Explain" />
          </div>
        </Container>
      </section>

      {/* Projects */}
      <Reveal>
      <section id="projects" className="mt-16 sm:mt-20">
        <Container>
          <SectionHeader
            eyebrow="Selected work"
            title="Case studies that show real skills"
            subtitle="A few projects that demonstrate engineering quality, analytics thinking, and clean UX."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>
      </Reveal>

      {/* Data section */}
      <section id="data" className="mt-16 sm:mt-20">
        <Container>
          <SectionHeader
            eyebrow="Data & analytics"
            title="I don’t just build — I measure"
            subtitle="KPIs, trends, segmentation, and dashboards that connect to decisions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-3xl border border-[rgba(var(--border),1)] bg-[rgba(var(--card),0.65)] p-6 md:col-span-2">
              <h3 className="text-lg font-semibold">Analytics toolkit</h3>
              <p className="mt-2 text-sm text-[rgba(var(--muted),1)]">
                I work comfortably across SQL + Python, and I’m careful about
                definitions so metrics stay trustworthy.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Chip>SQL modeling</Chip>
                <Chip>EDA</Chip>
                <Chip>Cohorts</Chip>
                <Chip>Time-series</Chip>
                <Chip>Dashboards</Chip>
                <Chip>Data quality</Chip>
                <Chip>Experiment thinking</Chip>
              </div>
            </div>

            <div className="rounded-3xl border border-[rgba(var(--border),1)] bg-[rgba(var(--card),0.65)] p-6">
              <h3 className="text-lg font-semibold">What you’ll see</h3>
              <ul className="mt-3 space-y-2 text-sm text-[rgba(var(--muted),1)]">
                <li>• KPI definitions + business narrative</li>
                <li>• Clean visuals and executive summary</li>
                <li>• Reproducible notebooks / queries</li>
                <li>• Product metrics & instrumentation</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="mt-16 sm:mt-20">
        <Container>
          <SectionHeader
            eyebrow="About"
            title="Hybrid on purpose"
            subtitle="I like building the product and the measurement system behind it."
          />
          <div className="rounded-3xl border border-[rgba(var(--border),1)] bg-[rgba(var(--card),0.65)] p-7 sm:p-10">
            <p className="max-w-3xl text-[rgba(var(--muted),1)]">
              I’m Steph — I combine software engineering and analytics to ship
              features that are measurable, reliable, and easy to use. I care a lot
              about clean architecture, thoughtful UX, and dashboards that tell the truth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="rounded-2xl border border-[rgba(var(--border),1)] px-5 py-3 text-sm font-medium hover:bg-[rgba(var(--card),0.7)]"
              >
                See case studies
              </Link>
              <Link
                href="mailto:your.email@example.com"
                className="rounded-2xl border border-[rgba(var(--border),1)] px-5 py-3 text-sm font-medium hover:bg-[rgba(var(--card),0.7)]"
              >
                Reach out
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="mt-16 sm:mt-20 pb-16">
        <Container>
          <CTA />
        </Container>
      </section>
    </main>
  );
}