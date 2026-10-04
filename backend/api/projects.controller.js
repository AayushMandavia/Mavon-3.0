const projectService = require('../services/project.service');

function handleProjectsRequest(req, res, pathParts, queryParams) {
  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  });

  // /api/projects/:slug
  const slug = pathParts[0];
  if (slug) {
    const result = projectService.getProjectBySlug(slug);
    if (!result.success) {
      res.writeHead(result.statusCode || 404, { 'Content-Type': 'application/json' });
    }
    res.end(JSON.stringify(result));
    return;
  }

  // /api/projects?category=...&limit=...
  const options = {
    category: queryParams.get('category') || undefined,
    limit: queryParams.get('limit') || undefined,
  };

  const result = projectService.getAllProjects(options);
  res.end(JSON.stringify(result));
}

module.exports = { handleProjectsRequest };
