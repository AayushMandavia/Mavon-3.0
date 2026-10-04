"use client";

import { useState, useMemo } from "react";
import { Project } from "../../types/project";

interface UseProjectsOptions {
  initialProjects: Project[];
  initialCategory?: string;
}

export function useProjects({
  initialProjects,
  initialCategory = "All",
}: UseProjectsOptions) {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    null,
  );

  const filteredProjects = useMemo(() => {
    let list = initialProjects;

    if (selectedCategory && selectedCategory !== "All") {
      list = list.filter((p) => p.category.includes(selectedCategory));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subTitle.toLowerCase().includes(q) ||
          p.category.some((c) => c.toLowerCase().includes(q)),
      );
    }

    return list;
  }, [initialProjects, selectedCategory, searchQuery]);

  return {
    projects: filteredProjects,
    totalCount: filteredProjects.length,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    activeModalProject,
    openModal: setActiveModalProject,
    closeModal: () => setActiveModalProject(null),
  };
}
