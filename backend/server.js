const http = require('http');
const fs = require('fs');
const path = require('path');
const { handleProjectsRequest } = require('./api/projects.controller');
const { handleContactRequest } = require('./api/contact.controller');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
};

const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');

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

function resolveStaticFile(reqPath) {
  // 1. Direct match in public/
  let filePath = path.join(PUBLIC_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }

  // 2. Direct match in frontend/ (e.g. /frontend/scripts/..., /frontend/styles/...)
  if (reqPath.startsWith('/frontend/')) {
    filePath = path.join(ROOT_DIR, reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return filePath;
    }
  }

  // 3. Virtual resolution for /_next/static/chunks/
  if (reqPath.startsWith('/_next/static/chunks/')) {
    const filename = path.basename(reqPath);
    const mapped = CHUNK_TO_FRONTEND[filename];
    if (mapped) {
      filePath = path.join(FRONTEND_DIR, mapped);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return filePath;
      }
    }
  }

  // 4. Virtual resolution for /_next/static/media/ (fonts)
  if (reqPath.startsWith('/_next/static/media/')) {
    const filename = path.basename(reqPath);
    filePath = path.join(FRONTEND_DIR, 'assets', 'fonts', filename);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return filePath;
    }
    filePath = path.join(PUBLIC_DIR, 'fonts', filename);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return filePath;
    }
  }

  // 5. Fallback check in root
  filePath = path.join(ROOT_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }

  return null;
}

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const reqPath = decodeURI(urlObj.pathname);

  // 1. Root redirect to /work
  if (reqPath === '/') {
    res.writeHead(302, { Location: '/work' });
    res.end();
    return;
  }

  // 2. Any other subpage routes redirect to /work (except /work/* and /api/*)
  if (reqPath !== '/work' && !reqPath.startsWith('/work/') && !reqPath.startsWith('/api/') && !path.extname(reqPath)) {
    res.writeHead(302, { Location: '/work' });
    res.end();
    return;
  }

  // 3. Modular Backend API: Projects
  if (reqPath.startsWith('/api/projects')) {
    const slugPart = reqPath.replace(/^\/api\/projects\/?/, '');
    const pathParts = slugPart ? [slugPart] : [];
    return handleProjectsRequest(req, res, pathParts, urlObj.searchParams);
  }

  // 4. Modular Backend API: Contact
  if (reqPath.startsWith('/api/contact')) {
    return handleContactRequest(req, res);
  }

  // 5. The Showcase & Project Detail Page: /work and /work/:slug
  if (reqPath === '/work' || reqPath.startsWith('/work/')) {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      });
      fs.createReadStream(indexPath).pipe(res);
      return;
    }
  }

  // 6. Serve Static Files (styles, scripts, animations, fonts, images, audio)
  const filePath = resolveStaticFile(reqPath);
  if (filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    });
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  // 404 Not Found for missing static files
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end(`Not Found: ${reqPath}`);
});

let currentPort = Number(PORT);

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    currentPort += 1;
    console.warn(`⚠️ Port ${currentPort - 1} is busy, trying port ${currentPort}...`);
    setTimeout(() => {
      server.listen(currentPort);
    }, 100);
  } else {
    console.error('Server error:', err);
  }
});

function startServer(port = PORT) {
  currentPort = Number(port);
  server.listen(currentPort, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 MAVON Showcase Server Running!`);
    console.log(`🔗 Local URL: http://localhost:${currentPort}/work`);
    console.log(`🎯 Single Unified Showcase Page Active (Subpages Removed)`);
    console.log(`======================================================\n`);
  });
  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = { server, startServer };
