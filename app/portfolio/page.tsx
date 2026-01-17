"use client";
import React from "react";
import VHSGirlyOverlay from "@/components/VHSGirlyOverlay";
import { FadeInSection } from "@/components/FadeInSection";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  Linkedin,
  Github,
  Mail,
  User,
  FileText,
  GraduationCap,
  Eye,
  Briefcase,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiAmazon,
  SiNumpy,
  SiPandas,
  SiFastapi,
} from "react-icons/si";
import type { Variants } from "framer-motion";

const nav = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const skillCategories = [
  {
    title: "Frontend",
    subtitle: "UI, interaction & performance",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Sass", icon: SiSass },
    ],
  },
  {
    title: "Backend",
    subtitle: "APIs, systems & architecture",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Python", icon: SiPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Data",
    subtitle: "Analysis, visualization & insights",
    skills: [
      { name: "SQL", icon: SiPostgresql },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Data Visualization", icon: SiGithub }, // placeholder but clean
    ],
  },
  {
    title: "Cloud & Tools",
    subtitle: "Deployment & workflows",
    skills: [
      { name: "AWS", icon: SiAmazon },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

const projects = [
  {
    title: "BudgetWise – AI Budgeting Web App",
    stack: "React · APIs · Git · LLM",
    description:
      "AI-assisted budgeting web application that helps users track expenses, analyze spending behavior, and generate actionable financial insights. Integrated LLM-powered logic for intelligent transaction categorization and summaries. Built responsive React components and data visualizations to highlight trends and category breakdowns.",
    github: "https://github.com/COMP-4350-Group-6/budgetwise",
  },
  {
    title: "P2P File Sharing Server",
    stack: "Python · Sockets · TCP/IP · Distributed Systems",
    description:
      "Designed and implemented a peer-to-peer file sharing system enabling direct file exchange without centralized storage. Built socket-based networking logic, custom messaging protocols, and handled concurrent peer connections for reliable data transfer.",
    github: "https://github.com/nene2004/p2p-file-sharing",
  },
  {
    title: "OptiFit – Android Application",
    stack: "Java · HSQLDB · XML · JUnit · GitLab",
    description:
      "Android fitness application with layered architecture separating presentation, business logic, and persistence. Implemented user authentication, activity scheduling, calorie visualization, and health tracking features with clean abstractions.",
    github: "https://github.com/nene2004/Optifit",
  },
  {
    title: "Gym Ops Dashboard",
    stack: "Python · FastAPI · React · Data Visualization",
    description:
      "Operational analytics dashboard for gym usage trends. Built scalable FastAPI endpoints and translated raw operational data into interactive visualizations to surface capacity and usage patterns.",
    github: "https://github.com/nene2004/gym-ops-dashboard",
  },
  {
    title: "GEMSS – Gift Basket Web Application",
    stack: "HTML · JavaScript · CSS · LocalStorage",
    description:
      "Responsive gift basket web application allowing users to build custom baskets, manage carts and wishlists, and persist state using localStorage. Implemented multi-currency pricing and reusable UI components.",
    github: "https://github.com/nene2004/GEMMS-",
    live: "https://nene2004.github.io/GEMMS-/",
  },
];

const experiences = [
  {
    company: "NTT BPO",
    location: "Toronto, ON (Remote)",
    title: "Fraud Detection Analyst (Part-Time)",
    date: "Aug 2023 – Present",
    accent: "from-pink-600 to-violet-600",
    bullets: [
      "Analyzed customer transactions and account activity to identify anomalies and indicators of fraud.",
      "Reviewed flagged cases using transaction history, behavioral trends, and risk signals to validate legitimacy.",
      "Collaborated with risk/compliance teams to improve classification accuracy and reduce false positives.",
      "Documented investigation outcomes and trends to support prevention efforts and process improvements.",
      "Maintained strict adherence to security, privacy, and regulatory compliance standards.",
    ],
  },
  {
    company: "University of Manitoba",
    location: "Winnipeg, MB",
    title: "IT Support Analyst (Part-Time)",
    date: "May 2025 – Sep 2025",
    accent: "from-orange-500 to-pink-500",
    bullets: [
      "Resolved 30+ support tickets/day (authentication, access permissions, system errors) for 10,000+ users.",
      "Built PowerShell automation scripts for account provisioning/maintenance, reducing setup time ~40%.",
      "Created reusable documentation + automation tools, reducing recurring issue resolution time ~25%.",
      "Collaborated with cross-functional IT teams to triage incidents, meet SLA targets, and maintain service quality.",
    ],
  },
  {
    company: "UX Design Club – University of Manitoba",
    location: "Winnipeg, MB",
    title: "Software Developer Co-Lead (Volunteer)",
    date: "Jan 2024 – Aug 2024",
    accent: "from-violet-600 to-indigo-600",
    bullets: [
      "Led development of responsive, user-centered interfaces using HTML/CSS/JavaScript for better usability and consistency.",
      "Worked closely with designers/devs, demonstrating leadership, communication, and strong time management.",
      "Applied TDD practices by writing and running tests to improve reliability and maintainability.",
      "Translated Figma designs into clean, accessible front-end implementations using modern UI/UX practices.",
    ],
  },
];
const roles = [
  "Frontend Development",
  "Backend Development",
  "Android Development",
  "Web Development",
  "Data Analytics",
  "Machine Learning",
];

const lineVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

function RotatingRole() {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const full = roles[roleIndex];

    // Speeds
    const typeSpeed = 55;
    const deleteSpeed = 38;
    const pauseAfterType = 1400; // pause when fully typed
    const pauseAfterDelete = 240; // pause before typing next

    let timeout = 0;

    if (!deleting) {
      // typing
      if (text.length < full.length) {
        timeout = window.setTimeout(() => {
          setText(full.slice(0, text.length + 1));
        }, typeSpeed);
      } else {
        // fully typed -> pause then delete
        timeout = window.setTimeout(() => setDeleting(true), pauseAfterType);
      }
    } else {
      // deleting
      if (text.length > 0) {
        timeout = window.setTimeout(() => {
          setText(full.slice(0, text.length - 1));
        }, deleteSpeed);
      } else {
        // fully deleted -> next role
        timeout = window.setTimeout(() => {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }, pauseAfterDelete);
      }
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="relative inline-flex items-baseline">
      {/* subtle underline highlight (natural, not neon) */}
      <span
        aria-hidden
        className="absolute left-0 right-0 -bottom-1 h-[0.6em] rounded-sm"
        style={{
          background: "rgba(244, 114, 182, 0.18)", // soft blush
        }}
      />

      {/* natural ink text */}
      <span className="relative z-10 font-extrabold text-slate-900">
        {text}
      </span>

      {/* cursor (softer, less harsh) */}
      <motion.span
        aria-hidden
        className="ml-1 inline-block h-[1.05em] w-[2px] translate-y-[2px]"
        style={{ background: "rgba(15, 23, 42, 0.55)" }} // slate w/ opacity
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.85, repeat: Infinity }}
      />
    </span>
  );
}

function AboutWriter() {
  return (
    <motion.div
      className="max-w-xl"
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.35, once: false }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.14, delayChildren: 0.18 } },
      }}
    >
      {/* Name */}
      <motion.h3
        className="text-3xl font-extrabold text-slate-900"
        variants={lineVariant}
      >
        I’m Steph
      </motion.h3>

      {/* Role */}
      <motion.p
        className="mt-2 text-lg font-bold text-pink-700"
        variants={lineVariant}
      >
        Full Stack Web Developer
      </motion.p>

      {/* Body text */}
      <div className="mt-6 space-y-4 text-[15.5px] leading-7 text-slate-800">
        <motion.p variants={lineVariant}>
          I’m a fourth-year student at the University of Manitoba with a passion
          for machine learning and software engineering. I enjoy building clean,
          user-focused web applications and exploring how data-driven systems
          can be used to solve real-world problems.
        </motion.p>

        <motion.p variants={lineVariant}>
          I’m especially interested in frontend development, where design,
          interaction, and performance come together, as well as backend systems
          that support scalable and reliable applications. I enjoy learning new
          tools, experimenting with ideas, and continuously improving how I
          build things.
        </motion.p>

        <motion.p variants={lineVariant}>
          Outside of coursework, I like working on personal projects, refining
          my technical skills, and challenging myself to better understand how
          modern web and intelligent systems work. I’m curious, motivated, and
          excited to grow as a developer while contributing to meaningful
          products.
        </motion.p>
      </div>

      {/* Contact info */}
      <motion.div className="mt-6 space-y-2 text-[15px]" variants={lineVariant}>
        <p>
          <span className="font-semibold text-pink-700">Email:</span>{" "}
          Stepheniemike04@gmail.com
        </p>
        <p>
          <span className="font-semibold text-pink-700">Phone:</span> +1 (431)
          338-8572
        </p>
      </motion.div>

      <motion.div className="mt-6" variants={lineVariant}>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:border-pink-500 hover:text-pink-700 hover:shadow-md transition"
        >
          <FileText className="h-5 w-5 text-slate-700 transition-transform group-hover:rotate-[-3deg]" />
          View Resume
        </a>
      </motion.div>
    </motion.div>
  );
}

function ExperienceItem({
  e,
  idx,
}: {
  e: {
    company: string;
    location: string;
    title: string;
    date: string;
    accent: string;
    bullets: string[];
  };
  idx: number;
}) {
  const [open, setOpen] = React.useState(false);
  const isRight = idx % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.25, once: false }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* center node */}
      <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 md:block">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white ring-4 ring-slate-200 shadow">
          <Briefcase className="h-5 w-5 text-slate-800" />
        </div>
      </div>

      <div
        className={`grid items-start gap-6 md:grid-cols-2 ${isRight ? "" : ""}`}
      >
        {/* left column spacer on alternating sides */}
        <div
          className={`${isRight ? "md:order-1" : "md:order-0"} hidden md:block`}
        />

        {/* card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className={`relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition
          ${isRight ? "md:col-start-2" : "md:col-start-1"}
        `}
        >
          {/* little pointer toward center line */}
          <div
            className={`absolute top-8 hidden h-4 w-4 rotate-45 border border-slate-200 bg-white md:block
              ${isRight ? "-left-2" : "-right-2"}
            `}
          />

          {/* accent bar */}
          <div
            className={`absolute inset-x-0 top-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${e.accent}`}
          />

          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-extrabold text-slate-900">
                {e.company}
              </p>
              <p className="text-sm font-semibold text-slate-500">
                {e.location}
              </p>
            </div>
            <p className="text-sm font-semibold text-slate-500">{e.date}</p>
          </div>

          <p className="mt-2 text-[15.5px] font-bold text-pink-700">
            {e.title}
          </p>

          <div className="mt-5">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800 transition"
            >
              {open ? "Hide impact" : "Show impact"}
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-6 text-slate-700">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* subtle hover glow */}
          <div className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-xl transition group-hover:opacity-100" />
        </motion.div>
      </div>
    </motion.div>
  );
}
function HoverPhoto() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth spring motion
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // limit movement (very important)
    x.set(offsetX * 0.08);
    y.set(offsetY * 0.08);
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="flex justify-center md:justify-start">
      <motion.div
        className="relative w-full max-w-[420px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetPosition}
        style={{ x: springX, y: springY }}
      >
        <div className="rounded-3xl bg-white shadow-xl border border-slate-200 overflow-hidden">
          <div className="aspect-[4/5] bg-slate-100">
            <img
              src="/steph.png"
              alt="Stephenie"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
function EducationAccordionItem({
  title,
  subtitle,
  meta,
  details,
}: {
  title: string;
  subtitle: string;
  meta: string;
  details: string[];
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      variants={lineVariant}
      className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
      >
        <div>
          <p className="text-lg font-extrabold text-slate-900">{title}</p>
          <p className="mt-1 font-semibold text-pink-700">{subtitle}</p>
          <p className="mt-2 text-sm text-slate-500">{meta}</p>
        </div>

        <motion.span
          className="mt-1 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-700"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 pb-6"
          >
            <ul className="mt-1 list-disc pl-5 space-y-2 text-[15.5px] leading-7 text-slate-800">
              {details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Portfolio() {
  const [active, setActive] = React.useState("home");
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || !data.ok) {
      setStatus("error");
      setErrorMsg(data?.error || "Something went wrong. Try again.");
      return;
    }

    setStatus("sent");
    (e.currentTarget as HTMLFormElement).reset();
  }
  React.useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }

    // start at top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  React.useEffect(() => {
    // stop browser restoring scroll position on refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // remove any #hash so refresh doesn't jump to sections
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }

    // always start at top on refresh
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  React.useEffect(() => {
    const ids = nav.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        // makes "active" track the section near top-middle of screen
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.05, 0.1, 0.2, 0.3],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return (
    <main className="min-h-screen bg-[#f3f5ff] text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="font-extrabold text-xl">
            <span
              className="text-orange-500 rgb-flicker"
              data-text="Steph's Portfolio"
            >
              Steph's Portfolio
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 font-semibold">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative hover:text-pink-600 ${
                  active === n.id ? "text-pink-700" : ""
                }`}
              >
                {n.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-pink-600 transition-all duration-300 ${
                    active === n.id ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <FadeInSection>
        <section id="home" className="relative overflow-hidden bg-[#f4f6ff]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <VHSGirlyOverlay />
          </div>

          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2">
            {/* left */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
                Hello, I’m{" "}
                <span className="text-orange-400">Stephenie Michael</span>
              </h1>

              <p className="mt-5 text-2xl font-extrabold text-slate-900">
                I’m into <RotatingRole />
              </p>

              <div className="mt-8 flex flex-col items-start">
                {/* About Me button */}
                <a
                  href="#about"
                  className="relative inline-flex items-center gap-3 rounded-full bg-pink-700 px-10 py-4 text-lg font-extrabold text-white shadow-[0_18px_35px_rgba(67,56,202,0.35)] hover:bg-pink-800 transition"
                >
                  About Me
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
                    ↓
                  </span>
                </a>

                <div className="mt-5 flex items-center gap-4 pl-2">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/stepheniemichael"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full bg-[#0b0f1e] shadow hover:scale-105 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-cyan-300" />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/nene2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full bg-[#0b0f1e] shadow hover:scale-105 transition"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-cyan-300" />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:Stepheniemike04@gmail.com"
                    className="grid h-11 w-11 place-items-center rounded-full bg-[#0b0f1e] shadow hover:scale-105 transition"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-cyan-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* right (avatar) */}
            <div className="h-[320px] w-[320px] rounded-full bg-yellow-300 shadow-2xl ring-8 ring-white grid place-items-center hover:scale-[1.02] hover:rotate-[0.5deg] transition duration-300">
              <img
                src="/avatar.png"
                alt="Stephenie avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </FadeInSection>
      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">
            <span className="inline-flex items-center gap-3">
              <User className="h-8 w-8 text-slate-900" />
              About <span className="text-pink-700">Me</span>
            </span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          <HoverPhoto />

          {/* RIGHT: animated text */}
          <AboutWriter />
        </div>
      </section>
      <section id="education" className="relative mt-10 py-24 bg-pink-100">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3, once: false }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12, delayChildren: 0.12 },
              },
            }}
          >
            <motion.div variants={lineVariant} className="text-center mb-10">
              <h2 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
                <GraduationCap className="h-9 w-9 text-slate-900" />
                Education <span className="text-pink-700">Section</span>
              </h2>
              <p className="mt-3 text-slate-600">
                What I’m studying + what I’m building toward.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              <EducationAccordionItem
                title="Bachelor of Science in Computer Science (Major)"
                subtitle="University of Manitoba"
                meta="2021 – 2026"
                details={[
                  "Focused on software engineering fundamentals, data structures, and building practical projects.",
                  "Interested in machine learning, frontend engineering, and product-focused development.",
                  "Currently building portfolio-grade projects to showcase real skills.",
                ]}
              />

              <EducationAccordionItem
                title="AWS Certified Cloud Practitioner"
                subtitle="Certification (In Progress)"
                meta="Currently studying"
                details={[
                  "Learning cloud fundamentals: compute, storage, networking, IAM, and security basics.",
                  "Goal: confidently deploy and operate modern web apps in the cloud.",
                  "Building hands-on projects alongside study (deployments + simple architectures).",
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* EXPERIENCE (interactive timeline) */}
      <FadeInSection>
        <section id="experience" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-slate-900 inline-flex items-center gap-3">
                <Briefcase className="h-9 w-9 text-slate-900" />
                Experience
              </h2>
              <p className="mt-3 text-slate-600">
                Roles that shaped how I think, build, and solve problems.
              </p>
            </div>

            {/* timeline */}
            <div className="relative mt-14">
              {/* center line */}
              <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-slate-200 md:block" />

              <div className="space-y-10">
                {experiences.map((e, idx) => (
                  <ExperienceItem
                    key={`${e.company}-${e.date}`}
                    e={e}
                    idx={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      {/* WORK  */}
      <FadeInSection>
        <section id="work" className="bg-[#070b2a] py-16 text-white">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold">
                Projects <span className="text-yellow-300">Made</span>
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white">
                    {p.title}
                  </h3>

                  {/* Stack */}
                  <p className="mt-1 text-sm font-semibold text-yellow-300">
                    {p.stack}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-6 text-white/85">
                    {p.description}
                  </p>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-900 hover:bg-slate-200 transition"
                    >
                      {"</>"} GitHub
                    </a>

                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm font-bold text-white hover:bg-white/10 transition"
                      >
                        <Eye className="h-4 w-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative bg-gradient-to-br from-[#2b0057] via-[#4c0bb3] to-[#6d28d9] py-24"
      >
        <div className="mx-auto max-w-6xl px-5">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white">
              Skills & <span className="text-yellow-300">Abilities</span>
            </h2>
            <p className="mt-3 text-white/75">
              Organized by how I build, analyze, and ship software.
            </p>
          </div>

          {/* Categories */}
          <div className="grid gap-10 md:grid-cols-2">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-3xl bg-white/10 p-8 backdrop-blur shadow-2xl ring-1 ring-white/10"
              >
                {/* Category header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{cat.subtitle}</p>
                </div>

                {/* Skill grid */}
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                  {cat.skills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="group rounded-2xl bg-[#070b2a]/90 p-5 text-center shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)]"
                    >
                      <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                        <Icon className="h-7 w-7 text-white/90 group-hover:text-pink-300 transition" />
                      </div>

                      <p className="mt-3 text-sm font-semibold text-white/85">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Research & Open Source */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-8 shadow-xl ring-1 ring-white/10">
              <p className="text-xs font-bold text-pink-300">BEYOND SKILLS</p>
              <h3 className="mt-2 text-xl font-extrabold text-white">
                Research
              </h3>
              <p className="mt-2 text-white/75 leading-6">
                I enjoy reading technical papers, exploring machine learning
                concepts, and translating theory into practical, user-facing
                solutions.
              </p>
            </div>

            <a
              href="https://github.com/storybookjs/storybook/pull/33558"
              target="_blank"
              className="rounded-3xl bg-white/10 p-8 shadow-xl ring-1 ring-white/10 transition hover:-translate-y-1"
            >
              <p className="text-xs font-bold text-pink-300">COMMUNITY</p>
              <h3 className="mt-2 text-xl font-extrabold text-white">
                Open Source
              </h3>
              <p className="mt-2 text-white/75 leading-6">
                I contribute through pull requests, issues, and documentation to
                help projects stay clean, usable, and well-maintained.
              </p>
              <p className="mt-4 font-semibold text-cyan-200">Visit GitHub →</p>
            </a>
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="bg-[#e9efff] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-4xl font-extrabold">
            Get In <span className="text-pink-700">Touch</span>
          </h2>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl border border-slate-100">
            <div className="grid gap-8 md:grid-cols-2">
              {/* illustration placeholder */}
              <div className="rounded-3xl bg-[#f3f5ff] border border-slate-200 grid place-items-center p-10">
                <div className="text-7xl">📩</div>
                <p className="mt-3 text-slate-600 font-semibold">
                  Let’s build something.
                </p>
              </div>

              {/* form */}
              <form className="space-y-4" onSubmit={onSubmit}>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl ..."
                  placeholder="Name"
                />
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full rounded-xl ..."
                  placeholder="Email"
                />
                <input
                  name="phone"
                  className="w-full rounded-xl ..."
                  placeholder="Phone"
                />
                <textarea
                  name="message"
                  required
                  className="w-full rounded-xl ... h-32"
                  placeholder="Message"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="ml-auto block rounded-xl bg-pink-700 px-6 py-3 font-semibold text-white shadow hover:bg-pink-800 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Submit ↗"}
                </button>

                {status === "sent" && (
                  <p className="text-sm font-semibold text-green-700">
                    Message sent ✅
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-semibold text-red-700">
                    {errorMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#070b2a] text-white py-14">
        <div className="mx-auto max-w-6xl px-5 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-extrabold">Stephenie's Portfolio</h3>
            <p className="mt-3 text-white/70">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <p className="mt-4 font-semibold">Hope to hear from you soon! </p>
          </div>

          <div>
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-white/80">
              {nav.map((n) => (
                <li key={n.id}>
                  <a className="hover:text-white" href={`#${n.id}`}>
                    → {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Contact Info</h4>
            <div className="mt-4 space-y-2 text-white/80">
              <p>📞 +1 (431) 338-8572</p>
              <p>✉️ stepheniemike04@gmail.com</p>
              <p>📍 Winnipeg, MB, Canada</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-yellow-300 font-extrabold text-slate shadow-lg hover:scale-105 transition"
        aria-label="Scroll to top"
      >
        ↑
      </a>
      <style jsx global>{`
        .rgb-flicker {
          position: relative;
          display: inline-block;
          text-shadow: 1px 0 rgba(244, 114, 182, 0.45),
            -1px 0 rgba(167, 139, 250, 0.35);
          animation: rgbFlicker 2.6s infinite;
        }

        .rgb-flicker::before,
        .rgb-flicker::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.6;
          pointer-events: none;
        }

        .rgb-flicker::before {
          transform: translate(1px, 0);
          color: rgba(244, 114, 182, 0.35);
          mix-blend-mode: multiply;
        }

        .rgb-flicker::after {
          transform: translate(-1px, 0);
          color: rgba(167, 139, 250, 0.28);
          mix-blend-mode: multiply;
        }

        @keyframes rgbFlicker {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 1;
          }
          7% {
            transform: translate(0.5px, -0.2px);
            opacity: 0.95;
          }
          8% {
            transform: translate(-0.5px, 0.2px);
            opacity: 1;
          }
          35% {
            transform: translate(0, 0);
          }
          36% {
            transform: translate(1px, 0);
          }
          37% {
            transform: translate(0, 0);
          }
          72% {
            opacity: 0.96;
          }
        }
      `}</style>
    </main>
  );
}
