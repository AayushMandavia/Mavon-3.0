const fs = require('fs');
const path = require('path');

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

['public/_next/static/chunks', '_next/static/chunks'].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
  for (const [chunk, relPath] of Object.entries(CHUNK_TO_FRONTEND)) {
    const src = path.join(__dirname, '..', 'frontend', relPath);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(dir, chunk));
    }
  }
  console.log(`[BUILD] Generated chunks in ${dir}`);
});

['public/_next/static/media', '_next/static/media'].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
  for (const font of fontFiles) {
    const src = path.join(__dirname, '..', 'public', 'fonts', font);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(dir, font));
    }
  }
  console.log(`[BUILD] Generated fonts in ${dir}`);
});

console.log('[BUILD] Static assets ready.');
