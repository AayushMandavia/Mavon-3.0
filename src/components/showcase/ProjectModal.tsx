"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Project } from "../../types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<string>("challenge");

  useEffect(() => {
    if (!project) return;
    if (project.tabs && project.tabs.length > 0) {
      setActiveTab(project.tabs[0].id);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentTab =
    project.tabs?.find((t) => t.id === activeTab) || project.tabs?.[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#090b0e] border border-zinc-800 rounded-2xl overflow-hidden my-auto shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-900 bg-[#090b0e]">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Case Study · {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="px-3 py-1 rounded-full border border-zinc-800 text-xs font-mono uppercase text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
          >
            Close ✕
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 md:p-10 flex flex-col gap-8">
          {/* Main Hero Banner in Modal */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="900px"
              priority
            />
          </div>

          {/* Title & Subtitle */}
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-wide text-white">
              {project.title}
            </h2>
            <p className="text-base md:text-lg text-zinc-300 font-light leading-relaxed">
              {project.subTitle}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.category.map((cat, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Tabs */}
          {project.tabs && project.tabs.length > 0 && (
            <div className="flex flex-col gap-6 pt-4 border-t border-zinc-900">
              {/* Tab Selector */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-900">
                {project.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                      activeTab === tab.id
                        ? "bg-zinc-800 text-white font-bold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Active Tab Narrative */}
              {currentTab && (
                <div
                  className="text-sm md:text-base leading-relaxed text-zinc-300 space-y-4 prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: currentTab.content }}
                />
              )}
            </div>
          )}

          {/* Project Gallery Images (if any) */}
          {project.content && project.content.length > 0 && (
            <div className="flex flex-col gap-4 pt-6 border-t border-zinc-900">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Visual Showcase Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.content.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 ${
                      item.layout === "single"
                        ? "md:col-span-2 aspect-[16/9]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={`${project.title} detail ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
