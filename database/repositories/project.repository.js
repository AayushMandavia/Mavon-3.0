const path = require('path');
const fs = require('fs');

const DATA_FILE = path.join(__dirname, '../../database/seed/projects.json');

class ProjectRepository {
  constructor() {
    this._projects = [];
    this._load();
  }

  _load() {
    try {
      if (fs.existsSync(DATA_FILE)) {
        const raw = fs.readFileSync(DATA_FILE, 'utf8');
        this._projects = JSON.parse(raw);
      }
    } catch (e) {
      console.error('[ProjectRepository] Error loading projects:', e.message);
    }
  }

  findAll() {
    return this._projects;
  }

  findBySlug(slug) {
    if (!slug) return null;
    const lower = slug.toLowerCase();
    return this._projects.find((p) => p.slug && p.slug.toLowerCase() === lower) || null;
  }

  findByCategory(category) {
    if (!category || category.toLowerCase() === 'all') return this._projects;
    const lower = category.toLowerCase();
    return this._projects.filter((p) =>
      p.category && p.category.some((c) => c.toLowerCase() === lower)
    );
  }

  count() {
    return this._projects.length;
  }
}

module.exports = new ProjectRepository();
