"use client";

import { useEffect, useState } from "react";

const items = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const topMost = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (topMost?.target?.id) setActive(topMost.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.1, 0.2, 0.35] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          Stephenie<span className="text-indigo-600">Michael</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-semibold text-slate-800">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={`relative pb-1 transition hover:text-indigo-600 ${
                active === i.id ? "text-indigo-600" : ""
              }`}
            >
              {i.label}
              {active === i.id ? (
                <span className="absolute left-0 right-0 -bottom-[6px] mx-auto h-[3px] w-8 rounded-full bg-indigo-600" />
              ) : null}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-700"
        >
        </a>
      </div>
    </header>
  );
}