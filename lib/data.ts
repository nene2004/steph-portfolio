export type Project = {
  slug: string;
  title: string;
  category: "Product + Data" | "Backend Systems" | "Analytics" | "Frontend";
  blurb: string;
  impact: string;
  stack: string[];
  highlights: string[];
  problem: string;
  solution: string;
  role: string;
  whatIDImprove: string[];
  links: { github?: string; live?: string };
};

export const projects: Project[] = [
  {
    slug: "budgetwise",
    title: "BudgetWise — Smart Expense Tracking",
    category: "Product + Data",
    blurb:
      "A budgeting experience that auto-organizes transactions and turns spending into insights.",
    impact: "Clean pipeline from input → categorization → insights dashboard.",
    stack: ["Next.js", "Supabase", "Postgres", "TypeScript", "Tailwind", "SQL"],
    highlights: [
      "Designed a simple flow: capture → categorize → visualize",
      "Built queries for spend breakdowns & trends",
      "Polished UI with fast page loads and clear IA",
    ],
    problem:
      "Most budgeting tools feel heavy and don’t help users understand where money actually goes.",
    solution:
      "Built an experience centered on quick logging + automated categorization + clear dashboards (trendlines, categories, recurring spend).",
    role:
      "End-to-end: product design, database schema, queries, UI, and deployment.",
    whatIDImprove: [
      "Add bank sync and reconciliation",
      "Introduce anomaly detection for unusual spend",
      "Exportable reports (PDF/CSV) for users",
    ],
    links: { github: "https://github.com/yourhandle/budgetwise", live: "" },
  },
  {
    slug: "gym-ops-dashboard",
    title: "Gym Ops Dashboard — Usage & Performance Analytics",
    category: "Analytics",
    blurb:
      "A dashboard for understanding equipment usage, peak times, and member patterns.",
    impact: "Turns raw events into operational decisions (peaks, bottlenecks).",
    stack: ["FastAPI", "Postgres", "React", "TypeScript", "SQL", "Docker"],
    highlights: [
      "Modeled event data for time-series analysis",
      "Built endpoints optimized for dashboard queries",
      "Created UX for fast scanning & filtering",
    ],
    problem:
      "Gyms struggle to understand bottlenecks and peak usage without a clear analytics view.",
    solution:
      "Ingested usage events and built dashboards for peak hours, utilization, and trends with filterable breakdowns.",
    role:
      "Designed schema + API + dashboard UX. Focused on performance and clarity.",
    whatIDImprove: [
      "Add forecasting for peak periods",
      "Segment analysis (new vs returning)",
      "Alerting for unusually high congestion",
    ],
    links: { github: "https://github.com/yourhandle/gym-ops-dashboard", live: "" },
  },
  {
    slug: "p2p-file-share",
    title: "P2P File Sharing — Robust Peer Network",
    category: "Backend Systems",
    blurb:
      "A peer-to-peer system demonstrating networking fundamentals, reliability, and clean engineering.",
    impact: "Clear architecture + reproducible demo via Docker.",
    stack: ["Python", "Sockets", "Docker", "Compose", "CLI"],
    highlights: [
      "Peer discovery + request routing",
      "Structured logs and clear README demo steps",
      "Dockerized workflow for recruiters to run easily",
    ],
    problem:
      "P2P systems are hard to reason about: discovery, reliability, and observability matter.",
    solution:
      "Implemented a structured peer protocol, clean CLI experience, and Docker demo so anyone can run it quickly.",
    role:
      "System design + implementation + documentation + developer experience.",
    whatIDImprove: [
      "Add a lightweight DHT",
      "Implement chunked transfer with retries",
      "Add metrics dashboard (latency, throughput)",
    ],
    links: { github: "https://github.com/yourhandle/p2p-project", live: "" },
  },
  {
    slug: "retail-insights",
    title: "Retail Insights — SQL + Python Analysis",
    category: "Analytics",
    blurb:
      "A compact analytics project that answers real business questions with clean visuals and reproducible notebooks.",
    impact: "Shows decision-making: KPIs, cohort patterns, and clear recommendations.",
    stack: ["Python", "Pandas", "SQL", "Jupyter", "Matplotlib"],
    highlights: [
      "Defined KPIs and tied them to decisions",
      "Used SQL for aggregation and validation",
      "Delivered a short executive summary",
    ],
    problem:
      "Teams often have data but lack a clear, decision-ready narrative.",
    solution:
      "Built a reproducible analysis pipeline with KPI definitions, cohort breakdowns, and recommendations.",
    role:
      "Data cleaning, analysis, visualization, and communication.",
    whatIDImprove: [
      "Automate refresh with scheduled runs",
      "Add a lightweight BI dashboard",
      "Introduce data quality checks",
    ],
    links: { github: "https://github.com/yourhandle/retail-insights", live: "" },
  },
];