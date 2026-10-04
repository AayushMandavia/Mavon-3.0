"use client";

import React, { useState, useMemo } from "react";
import { Project } from "../../types/project";
import { FilterBar } from "./FilterBar";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

interface ProjectShowcaseProps {
  projects: Project[];
  categories: string[];
}

export function ProjectShowcase({
  projects,
  categories,
}: ProjectShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category.includes(selectedCategory));
  }, [projects, selectedCategory]);

  return (
    <section className="relative w-full pb-32">
      {/* Category Filter Bar */}
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        totalFiltered={filteredProjects.length}
      />

      {/* Projects Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center text-zinc-500 font-mono text-sm">
            No projects found in category &ldquo;{selectedCategory}&rdquo;.
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                viewMode="grid"
                index={idx}
                onOpenModal={setModalProject}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col border-t border-[#2f323b]/60">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                viewMode="list"
                index={idx}
                onOpenModal={setModalProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
