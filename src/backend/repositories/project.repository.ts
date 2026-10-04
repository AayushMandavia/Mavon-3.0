import { Project } from "../../types/project";
import { PROJECTS, ALL_CATEGORIES } from "../../data/projects";
import { ProjectQueryParams } from "../../types/api";

export interface IProjectRepository {
  getAll(): Promise<Project[]>;
  getBySlug(slug: string): Promise<Project | null>;
  getCategories(): Promise<string[]>;
  query(params: ProjectQueryParams): Promise<Project[]>;
}

export class ProjectRepository implements IProjectRepository {
  async getAll(): Promise<Project[]> {
    return PROJECTS;
  }

  async getBySlug(slug: string): Promise<Project | null> {
    const project = PROJECTS.find(
      (p) => p.slug.toLowerCase() === slug.toLowerCase(),
    );
    return project || null;
  }

  async getCategories(): Promise<string[]> {
    return ALL_CATEGORIES;
  }

  async query(params: ProjectQueryParams): Promise<Project[]> {
    let result = [...PROJECTS];

    if (params.category && params.category !== "All") {
      result = result.filter((p) => p.category.includes(params.category!));
    }

    if (params.featuredOnly) {
      result = result.filter((p) => p.visibleInHome);
    }

    if (params.search) {
      const q = params.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subTitle.toLowerCase().includes(q) ||
          p.category.some((c) => c.toLowerCase().includes(q)),
      );
    }

    if (params.limit && params.limit > 0) {
      result = result.slice(0, params.limit);
    }

    return result;
  }
}

export const projectRepository = new ProjectRepository();
