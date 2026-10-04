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

function resolveStaticFile(reqPath) {
  // Check in public/
  let filePath = path.join(PUBLIC_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }
  // Check in root
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

  // 2. Any subpage under /work/ or other routes redirect to /work
  if (reqPath !== '/work' && !reqPath.startsWith('/api/') && !path.extname(reqPath)) {
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

  // 5. The Single Showcase Page: /work
  if (reqPath === '/work') {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
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
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    });
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  // 404 Not Found for missing static files
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end(`Not Found: ${reqPath}`);
});

function startServer(port = PORT) {
  server.listen(port, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 TRIONN Showcase Server Running!`);
    console.log(`🔗 Local URL: http://localhost:${port}/work`);
    console.log(`🎯 Single Unified Showcase Page Active (Subpages Removed)`);
    console.log(`======================================================\n`);
  });
  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = { server, startServer };
