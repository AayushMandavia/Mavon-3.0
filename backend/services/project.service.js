const projectRepo = require('../../database/repositories/project.repository');

class ProjectService {
  getAllProjects(options = {}) {
    let projects = projectRepo.findAll();

    if (options.category && options.category !== 'all') {
      projects = projectRepo.findByCategory(options.category);
    }

    if (options.limit && !isNaN(Number(options.limit))) {
      projects = projects.slice(0, Number(options.limit));
    }

    return {
      success: true,
      total: projectRepo.count(),
      returned: projects.length,
      data: projects,
    };
  }

  getProjectBySlug(slug) {
    const project = projectRepo.findBySlug(slug);
    if (!project) {
      return {
        success: false,
        statusCode: 404,
        message: `Project with slug '${slug}' not found`,
      };
    }
    return {
      success: true,
      data: project,
    };
  }
}

module.exports = new ProjectService();
