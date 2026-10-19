"use client";

import React, { useState, useEffect } from "react";
import { SlotCounter } from "../../frontend/animations/SlotCounter";
import { CurtainReveal } from "../../frontend/animations/CurtainReveal";

export function Preloader() {
  const [complete, setComplete] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setComplete(true), 1600);
    const unmountTimer = setTimeout(() => setMounted(false), 2400);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CurtainReveal
        stripCount={8}
        durationMs={800}
        staggerMs={40}
        direction="up"
      />

      <div
        className={`fixed inset-0 z-50 flex flex-col justify-between p-8 bg-[#040508] transition-opacity duration-700 pointer-events-none select-none ${
          complete ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.85, 0, 0.15, 1)",
        }}
      >
        {/* Top Header */}
        <div className="flex justify-between items-center text-xs tracking-widest font-mono text-zinc-500 uppercase">
          <span>MAVON STUDIO</span>
          <span>EXPERIENCE 2026</span>
        </div>

        {/* Center Monogram & Tagline */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative p-8 border border-zinc-800 rounded-sm">
            {/* Corner plus icons */}
            <span className="absolute -top-1.5 -left-1.5 text-zinc-600 font-mono text-xs">
              +
            </span>
            <span className="absolute -top-1.5 -right-1.5 text-zinc-600 font-mono text-xs">
              +
            </span>
            <span className="absolute -bottom-1.5 -left-1.5 text-zinc-600 font-mono text-xs">
              +
            </span>
            <span className="absolute -bottom-1.5 -right-1.5 text-zinc-600 font-mono text-xs">
              +
            </span>

            {/* Logo SVG */}
            <svg
              width="56"
              height="56"
              viewBox="-79.5 -31.4 662 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43 79.11L46.78 72.5L52.44 69.66L59.05 71.55L338.58 351.08L276.25 413.41L128 265.16L128 451.18L52.44 516.34L46.78 513.5L43 506.89Z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M535 79.11L531.22 72.5L525.56 69.66L518.95 71.55L303.64 286.86L356.52 339.74L450 246.26L535 161.26Z"
                fill="none"
                stroke="#E5A83B"
                strokeWidth="10"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M535 201.26L450 286.26L450 451.18L525.56 516.34L531.22 513.5L535 506.89Z"
                fill="none"
                stroke="#E5A83B"
                strokeWidth="10"
              />
            </svg>
          </div>

          <div className="flex items-center gap-3 text-xs tracking-[0.3em] font-mono text-zinc-400 uppercase">
            <span>Inspire</span>
            <span>·</span>
            <span>Innovate</span>
            <span>·</span>
            <span>Impact</span>
          </div>
        </div>

        {/* Bottom Counter using modular SlotCounter */}
        <div className="flex justify-between items-end">
          <div className="text-xs font-mono text-zinc-600 uppercase">
            Crafting Digital Direction
          </div>
          <div className="text-4xl font-mono tracking-tighter text-[#d8d8d8]">
            <SlotCounter target={100} durationMs={1400} suffix="%" />
          </div>
        </div>
      </div>
    </>
  );
}
