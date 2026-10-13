"use client";

import React from "react";
import { BlurReveal } from "../../frontend/animations/BlurReveal";
import { CrosshairGrid } from "../../frontend/animations/CrosshairGrid";
import { SlotCounter } from "../../frontend/animations/SlotCounter";
import { SplitText } from "../../frontend/animations/SplitText";

export function WorkHero({ projectCount }: { projectCount: number }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Decorative Crosshair Grid */}
      <CrosshairGrid />

      {/* Radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-radial from-zinc-900/40 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      {/* Top Status Pill */}
      <BlurReveal delay={100} duration={600}>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-[#0a0c10]/80 text-[11px] font-mono tracking-widest uppercase text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            ✦ Est. 2012 · Award-Winning AI Studio
          </span>
        </div>
      </BlurReveal>

      {/* Hero Headline with Staggered SplitText and BlurReveal */}
      <BlurReveal delay={250} duration={800} yOffset={25}>
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-display uppercase tracking-tight text-[#d8d8d8] leading-[0.9]">
            <SplitText text="Selected" staggerMs={35} /> <br />
            <span className="font-editorial italic font-extralight text-white">
              <SplitText text="Works." staggerMs={45} initialDelayMs={300} />
            </span>
          </h1>
        </div>
      </BlurReveal>

      {/* Hero Narrative Grid */}
      <BlurReveal delay={450} duration={700}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-[#2f323b]/60">
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              Portfolio Archive
            </span>
            <span className="text-3xl font-display text-white flex items-center gap-2">
              <SlotCounter target={projectCount} durationMs={1200} suffix="" />{" "}
              Showcased Projects
            </span>
          </div>

          <div className="md:col-span-8 text-sm md:text-base leading-relaxed text-zinc-400 font-normal">
            MAVON is an independent AI-powered digital studio crafting
            award-winning websites, WebGL interactions, branding systems, and
            immersive digital experiences for ambitious brands worldwide.
          </div>
        </div>
      </BlurReveal>
    </section>
  );
}
