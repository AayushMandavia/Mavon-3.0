"use client";

import React from "react";

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  viewMode: "grid" | "list";
  onToggleViewMode: (mode: "grid" | "list") => void;
  totalFiltered: number;
}

export function FilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  viewMode,
  onToggleViewMode,
  totalFiltered,
}: FilterBarProps) {
  return (
    <div className="sticky top-20 z-30 px-6 md:px-12 py-4 backdrop-blur-md bg-[#040508]/80 border-y border-[#2f323b]/50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Category Pills (Horizontally Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800/60"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle & Result Count */}
        <div className="flex items-center gap-6 self-end sm:self-auto">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
            Showing {totalFiltered}{" "}
            {totalFiltered === 1 ? "Project" : "Projects"}
          </span>

          <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
            <button
              onClick={() => onToggleViewMode("grid")}
              aria-label="Grid view"
              className={`p-1.5 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {/* Grid 4-square icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <rect x="1" y="1" width="6" height="6" rx="1" />
                <rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
            </button>

            <button
              onClick={() => onToggleViewMode("list")}
              aria-label="List view"
              className={`p-1.5 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {/* List bars icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <rect x="1" y="2" width="14" height="3" rx="1" />
                <rect x="1" y="7" width="14" height="3" rx="1" />
                <rect x="1" y="12" width="14" height="3" rx="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
