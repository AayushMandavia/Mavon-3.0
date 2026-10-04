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
          <span>TRIONN STUDIO</span>
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
                d="M269.431 257.019C268.708 258.271 268.717 259.816 269.455 261.06L286.98 290.611C288.54 293.241 292.355 293.219 293.885 290.57L327.284 232.72C328.825 230.052 332.677 230.054 334.215 232.724L425.279 390.875C425.982 392.095 427.275 392.856 428.682 392.878L463.65 393.434C466.755 393.483 468.73 390.129 467.18 387.438L353.861 190.681C353.148 189.444 353.149 187.921 353.863 186.685L388.264 127.101C388.965 125.885 388.979 124.391 388.299 123.163L371.368 92.5833C369.861 89.8615 365.96 89.8265 364.404 92.5208L269.431 257.019Z"
                fill="none"
                stroke="#e5e5df"
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
