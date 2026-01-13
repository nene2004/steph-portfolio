"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.animate(
        { transform: `translate(${e.clientX - 140}px, ${e.clientY - 140}px)` },
        { duration: 250, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[280px] w-[280px] rounded-full blur-3xl opacity-60"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,105,180,0.55), transparent 55%), radial-gradient(circle at 70% 60%, rgba(176,120,255,0.45), transparent 55%)",
      }}
    />
  );
}