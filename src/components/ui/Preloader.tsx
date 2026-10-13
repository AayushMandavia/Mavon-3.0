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
                d="M47.77 79.8L43.25 83.57L42.49 456.39L43.25 466.93L45.51 469.95L49.27 470.7L87.68 439.82L121.58 409.69L123.08 262.07L228.53 362.99L234.55 361.49L290.29 313.28L291.04 307.26L95.97 121.22L52.28 81.31Z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M530.23 79.8L525.72 81.31L286.96 307.26L287.71 313.28L343.45 361.49L349.47 362.99L454.92 246.0L535.51 170.6L534.75 83.57Z"
                fill="none"
                stroke="#E5A83B"
                strokeWidth="10"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M535.51 194.6L454.92 270.0L456.42 409.69L490.32 439.82L528.73 470.7L532.49 469.95L534.75 466.93L535.51 456.39L535.51 194.6Z"
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
