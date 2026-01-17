"use client";

import React from "react";

export default function VHSGirlyOverlay() {
  const [boost, setBoost] = React.useState(false);

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${boost ? "vhs-boost" : ""}`}
      aria-hidden
      onMouseEnter={() => setBoost(true)}
      onMouseLeave={() => setBoost(false)}
    >
      {/* Soft base (so it still feels luxe, not neon) */}
      <div className="absolute inset-0 vhs-base" />

      {/* Scanlines */}
      <div className="absolute inset-0 vhs-scanlines pointer-events-none" />

      {/* Moving noise */}
      <div className="absolute inset-0 vhs-noise pointer-events-none" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 vhs-vignette pointer-events-none" />

      {/* Hover-only glitch band (noticeable) */}
      <div className="absolute inset-0 vhs-glitchband pointer-events-none" />

      <style>{`
        /* ---- Base palette: soft luxury ---- */
        .vhs-base{
          background:
            radial-gradient(circle at 18% 20%, rgba(252,231,243,0.85), transparent 55%),
            radial-gradient(circle at 85% 22%, rgba(237,233,254,0.90), transparent 55%),
            radial-gradient(circle at 58% 88%, rgba(255,247,237,0.92), transparent 60%),
            linear-gradient(180deg, #fbfbff, #f6f3ff);
        }

        /* ---- Scanlines ---- */
        .vhs-scanlines{
          opacity: .20;
          mix-blend-mode: multiply;
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(0,0,0,0.08) 0px,
            rgba(0,0,0,0.08) 1px,
            rgba(255,255,255,0.00) 4px,
            rgba(255,255,255,0.00) 7px
          );
          animation: scanScroll 1.2s linear infinite;
        }
        @keyframes scanScroll{
          from{ transform: translateY(0px); }
          to{ transform: translateY(10px); }
        }

        /* ---- Noise (animated) ---- */
        .vhs-noise{
          opacity: .12;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.40'/%3E%3C/svg%3E");
          animation: noiseJitter .22s steps(2) infinite;
        }
        @keyframes noiseJitter{
          0%{ transform: translate(0,0); }
          25%{ transform: translate(-2px, 1px); }
          50%{ transform: translate(2px, -1px); }
          75%{ transform: translate(1px, 2px); }
          100%{ transform: translate(0,0); }
        }

        /* ---- Vignette ---- */
        .vhs-vignette{
          background: radial-gradient(circle at 50% 40%, rgba(255,255,255,0), rgba(15,23,42,0.14) 88%);
        }

        /* ---- Hover boost: noticeable ---- */
        .vhs-boost{
          animation: screenShake .18s steps(2) infinite;
          filter: saturate(1.10) contrast(1.08);
        }
        @keyframes screenShake{
          0%{ transform: translate(0,0); }
          25%{ transform: translate(-1px, 1px); }
          50%{ transform: translate(1px, -1px); }
          75%{ transform: translate(2px, 1px); }
          100%{ transform: translate(0,0); }
        }

        /* ---- Hover glitch band (only visible while boosted) ---- */
        .vhs-glitchband{
          opacity: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255,255,255,0.06) 40%,
            rgba(244,114,182,0.10) 50%,
            rgba(167,139,250,0.10) 55%,
            transparent 75%
          );
          transform: translateY(-80%);
        }
        .vhs-boost .vhs-glitchband{
          opacity: 1;
          animation: glitchSweep 1.1s ease-in-out infinite;
        }
        @keyframes glitchSweep{
          0%{ transform: translateY(-90%); }
          60%{ transform: translateY(10%); }
          100%{ transform: translateY(110%); }
        }
      `}</style>
    </div>
  );
}