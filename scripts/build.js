const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// 1. Clean and create dist directory
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 2. Copy public directory contents to dist
copyDirSync(path.join(ROOT_DIR, 'public'), DIST_DIR);

// 3. Copy frontend directory to dist/frontend
copyDirSync(path.join(ROOT_DIR, 'frontend'), path.join(DIST_DIR, 'frontend'));

// 4. Ensure index.html is in dist
fs.copyFileSync(path.join(ROOT_DIR, 'public', 'index.html'), path.join(DIST_DIR, 'index.html'));

// 5. Generate _next static chunks
const CHUNK_TO_FRONTEND = {
  // Styles
  '0-x39_77jza10.css': 'styles/main-styles.css',
  '0wf1gwg29cqjw.css': 'styles/layout-styles.css',
  // Animations
  '08uh6.imupez1.js': 'animations/gsap-core.js',
  '0cayk5enk9uhw.js': 'animations/lenis-smooth-scroll.js',
  '0m27tzr3c8bpa.js': 'animations/route-transitions.js',
  '0_-x7hddx_1l6.js': 'animations/text-and-ui-animations.js',
  '0t8gwekgz7loh.js': 'animations/transition-provider.js',
  '15ky3h9upk1qm.js': 'animations/webgl-canvas.js',
  // Components
  '0d3shmwh5_nmn.js': 'components/app-layout.js',
  '0_.rc2afwy26s.js': 'components/audio-player.js',
  '0z-5e_9x.n-.p.js': 'components/contact-popup.js',
  '02m2onmcd.l.g.js': 'components/cookie-banner.js',
  '0.t3mu8kba~-e.js': 'components/header-footer.js',
  '0mr3veaodr-fk.js': 'components/project-showcase.js',
  '150d1p-43jycd.js': 'components/work-process.js',
  // Scripts / Core
  '0zaia6i55l01..js': 'scripts/app-bootstrap.js',
  '0y3~cortx~or~.js': 'scripts/next-router.js',
  '03~yq9q893hmn.js': 'scripts/polyfills.js',
  '00nvzi6qb_-1r.js': 'scripts/react-core.js',
  'turbopack-0nz662b_cli3l.js': 'scripts/runtime-loader.js',
  '04srvx.z7_jun.js': 'scripts/utils.js',
};

const fontFiles = [
  'FamiljenGroteskVariable_Regular-s.p.04jxz-d23sc_e.woff2',
  'MartianMono_Light-s.p.0htes.s6weu9-.woff2',
  'NeueHaasDisplay_Roman-s.p.0ykdwddnvy5f_.woff2',
  'PPEditorialNew_Ultralight-s.p.0qe_2frr_fmiu.woff2'
];

const chunkDirs = [
  path.join(DIST_DIR, '_next', 'static', 'chunks'),
  path.join(ROOT_DIR, 'public', '_next', 'static', 'chunks'),
  path.join(ROOT_DIR, '_next', 'static', 'chunks')
];

chunkDirs.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
  for (const [chunk, relPath] of Object.entries(CHUNK_TO_FRONTEND)) {
    const src = path.join(ROOT_DIR, 'frontend', relPath);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(dir, chunk));
    }
  }
});

const mediaDirs = [
  path.join(DIST_DIR, '_next', 'static', 'media'),
  path.join(ROOT_DIR, 'public', '_next', 'static', 'media'),
  path.join(ROOT_DIR, '_next', 'static', 'media')
];

mediaDirs.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
  for (const font of fontFiles) {
    const src = path.join(ROOT_DIR, 'public', 'fonts', font);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(dir, font));
    }
  }
});

// 6. Copy projects API data
const apiDir = path.join(DIST_DIR, 'api');
fs.mkdirSync(apiDir, { recursive: true });
fs.copyFileSync(path.join(ROOT_DIR, 'src', 'data', 'projects.json'), path.join(apiDir, 'projects'));
fs.copyFileSync(path.join(ROOT_DIR, 'src', 'data', 'projects.json'), path.join(apiDir, 'projects.json'));

// 7. Copy vercel.json to dist
if (fs.existsSync(path.join(ROOT_DIR, 'vercel.json'))) {
  fs.copyFileSync(path.join(ROOT_DIR, 'vercel.json'), path.join(DIST_DIR, 'vercel.json'));
}

// 8. Generate physical static HTML files for all routes
const htmlContent = fs.readFileSync(path.join(ROOT_DIR, 'public', 'index.html'), 'utf8');

const staticRoutes = ['work', 'services', 'about', 'contact', 'mavon-story'];
staticRoutes.forEach(route => {
  const rDir = path.join(DIST_DIR, route);
  fs.mkdirSync(rDir, { recursive: true });
  fs.writeFileSync(path.join(rDir, 'index.html'), htmlContent, 'utf8');
});

// Also create work/[slug] for each of the 15 projects
const projects = require(path.join(ROOT_DIR, 'src', 'data', 'projects.json'));
projects.forEach(p => {
  if (p.slug) {
    const slugDir = path.join(DIST_DIR, 'work', p.slug);
    fs.mkdirSync(slugDir, { recursive: true });
    fs.writeFileSync(path.join(slugDir, 'index.html'), htmlContent, 'utf8');
  }
});

console.log('[BUILD] dist/ created with complete static showcase assets & all static route entrypoints for Vercel.');


