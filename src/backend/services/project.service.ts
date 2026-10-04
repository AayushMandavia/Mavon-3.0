import {
  projectRepository,
  IProjectRepository,
} from "../repositories/project.repository";
import { Project } from "../../types/project";
import { ProjectQueryParams, ApiResponse } from "../../types/api";

export class ProjectService {
  constructor(private repo: IProjectRepository = projectRepository) {}

  async getProjects(
    params: ProjectQueryParams = {},
  ): Promise<ApiResponse<Project[]>> {
    try {
      const projects = await this.repo.query(params);
      const categories = await this.repo.getCategories();

      return {
        success: true,
        data: projects,
        meta: {
          total: projects.length,
          categories,
        },
      };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || "Failed to retrieve projects",
      };
    }
  }

  async getProjectBySlug(slug: string): Promise<ApiResponse<Project>> {
    try {
      if (!slug || typeof slug !== "string") {
        return { success: false, error: "Valid slug required" };
      }

      const project = await this.repo.getBySlug(slug);
      if (!project) {
        return { success: false, error: `Project '${slug}' not found` };
      }

      return { success: true, data: project };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || "Failed to retrieve project details",
      };
    }
  }

  async getCategories(): Promise<string[]> {
    return this.repo.getCategories();
  }
}

export const projectService = new ProjectService();
