"use client";

import React from "react";
import Image from "next/image";
import { Project } from "../../types/project";
import { WordShiftButton } from "../ui/WordShiftButton";
import { useSiteSound } from "../audio/SoundContext";
import { Card3DTilt } from "../../frontend/animations/Card3DTilt";
import { BlurReveal } from "../../frontend/animations/BlurReveal";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  viewMode: "grid" | "list";
  index?: number;
}

export function ProjectCard({
  project,
  onOpenModal,
  viewMode,
  index = 0,
}: ProjectCardProps) {
  const { playSfx } = useSiteSound();

  const handleCardClick = () => {
    playSfx("spark");
    onOpenModal(project);
  };

  if (viewMode === "list") {
    return (
      <BlurReveal delay={(index % 10) * 40} duration={500}>
        <div
          onClick={handleCardClick}
          onMouseEnter={() => playSfx("beep")}
          className="group relative flex items-center justify-between py-6 px-4 md:px-8 border-b border-[#2f323b]/60 hover:bg-zinc-900/40 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-8 md:gap-16">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest w-12">
              {project.year}
            </span>
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-display uppercase tracking-wide text-zinc-300 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <span className="text-xs font-mono text-zinc-500 mt-1">
                {project.category.join(" · ")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Small thumbnail preview */}
            <div className="relative w-16 h-10 md:w-24 md:h-14 overflow-hidden rounded border border-zinc-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="96px"
              />
            </div>

            <WordShiftButton text="View" onClick={handleCardClick} />
          </div>
        </div>
      </BlurReveal>
    );
  }

  // Grid View with 3D Tilt and Blur Reveal
  return (
    <BlurReveal delay={(index % 6) * 60} duration={600}>
      <Card3DTilt maxTiltDeg={6} scaleOnHover={1.015}>
        <article
          onClick={handleCardClick}
          onMouseEnter={() => playSfx("beep")}
          className="group flex flex-col gap-5 p-4 rounded-xl border border-[#2f323b]/40 hover:border-zinc-700 bg-zinc-950/40 hover:bg-zinc-900/30 transition-all duration-500 cursor-pointer h-full justify-between"
        >
          <div className="flex flex-col gap-5">
            {/* Thumbnail Container */}
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800/80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Year Badge */}
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono tracking-wider text-zinc-400 border border-white/10 uppercase">
                {project.year}
              </span>
            </div>

            {/* Content Details */}
            <div className="flex flex-col gap-2.5 px-1">
              <h2 className="text-2xl md:text-3xl font-display uppercase tracking-wide text-[#d8d8d8] group-hover:text-white transition-colors duration-300">
                {project.title}
              </h2>

              <p className="text-xs md:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                {project.subTitle}
              </p>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.category.slice(0, 3).map((cat, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-500"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-3 px-1 border-t border-zinc-900/60 mt-2">
            <WordShiftButton text="Explore Project" onClick={handleCardClick} />
          </div>
        </article>
      </Card3DTilt>
    </BlurReveal>
  );
}
