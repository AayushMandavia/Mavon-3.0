# TRIONN Portfolio & Digital Studio — Version 3 (v3)

High-performance, modern digital studio portfolio featuring award-winning animations, interactive WebGL canvas background, GSAP motion systems, Lenis smooth scrolling, integrated audio synthesizer, and a clean modular architecture (`frontend/`, `backend/`, `database/`).

---

## 🚀 Getting Started

### Installation & Run

```bash
# Install dependencies
npm install

# Start local showcase server
npm run dev
# or
npm start
```

Open **[http://localhost:3000/work](http://localhost:3000/work)** in your browser.

> [!NOTE]
> All root requests and subpage requests (`/`, `/services`, `/about`, `/work/*`) automatically route to the primary showcase page at `/work` for a seamless 100% localhost experience.

---

## 🏗️ Clean Modular Repository Architecture

The codebase is organized into distinct, human-readable modules:

```
c:\Projects\Mavon\Trionn/
├── frontend/                        # 🎨 All Frontend Presentation, Animations & Assets
│   ├── animations/                  # Motion, physics, and interaction controllers
│   │   ├── gsap-core.js             # GSAP timeline engine, ScrollTrigger & Flip plugin
│   │   ├── webgl-canvas.js          # WebGL spark & particle canvas rendering
│   │   ├── lenis-smooth-scroll.js   # Inertial smooth scroll engine
│   │   ├── text-and-ui-animations.js# SplitText, WordShiftButton & BlurReveal
│   │   ├── route-transitions.js     # Transition animation effects
│   │   └── transition-provider.js   # Page transition coordinator
│   ├── components/                  # Modular UI Components
│   │   ├── project-showcase.js      # Main 21 project cards & canvas constellation lines
│   │   ├── header-footer.js         # Header navbar, menu drawer, live time ticker & footer
│   │   ├── contact-popup.js         # Interactive contact modal & form dialog
│   │   ├── cookie-banner.js         # Offline cookie consent banner
│   │   ├── app-layout.js            # Main application layout wrapper
│   │   └── audio-player.js          # Web Audio synthesizer & sound controller
│   ├── styles/                      # Modular stylesheets
│   │   ├── main-styles.css          # Main Tailwind tokens, studio theme & typography
│   │   └── layout-styles.css        # Grid, spacing & structural styles
│   ├── scripts/                     # Core JavaScript libraries & runtime
│   │   ├── runtime-loader.js        # Module runtime loader
│   │   ├── react-core.js            # React 19 & ReactDOM
│   │   ├── next-router.js           # Client-side routing engine
│   │   ├── app-bootstrap.js         # Application bootstrap & hydration
│   │   ├── utils.js                 # Utility helpers (clsx, twMerge)
│   │   └── polyfills.js             # Core-js polyfills
│   └── assets/                      # 100% locally hosted assets (zero external CDN)
│       ├── fonts/                   # Custom WOFF2 typography (NeueHaas, MartianMono, etc.)
│       ├── images/projects/         # High-res WebP & JPG visuals for all 21 projects
│       ├── audio/                   # Sound effects & soundtrack (work-listing.mp3)
│       └── ui/                      # UI icons, logos & offline analytics stub
│
├── backend/                         # ⚙️ Modular Backend Layer
│   ├── api/                         # API route controllers
│   │   ├── projects.controller.js   # GET /api/projects, GET /api/projects/:slug
│   │   └── contact.controller.js    # POST /api/contact
│   ├── services/                    # Business logic
│   │   ├── project.service.js       # Filtering, searching, sorting projects
│   │   └── contact.service.js       # Contact message handling
│   ├── validators/                  # Request validation
│   │   └── contact.validator.js     # Email & message validation
│   └── server.js                    # Server configuration enforcing single /work page
│
├── database/                        # 🗄️ Database & Data Access Layer
│   ├── schema/                      # Schema definitions
│   │   └── project.schema.json      # JSON schema for projects
│   ├── seed/                        # Data seeds
│   │   ├── projects.json            # All 21 complete projects dataset
│   │   └── projects-data.js         # JS dataset definition
│   └── repositories/                # Data repository
│       └── project.repository.js    # Repository methods (findAll, findBySlug, findByCategory)
│
├── public/                          # 📁 Static assets mirror for fallback
├── server.js                        # ⚡ Root server entry delegating to backend/server.js
└── package.json                     # 📦 Manifest & npm scripts
```

---

## 📐 Layouts Architecture

### 1. Hero Showcase Layout
- **Fullscreen Viewport**: Occupies `100vh` on desktop with fixed navigation and layered z-index hierarchy.
- **Floating Preview Thumbnail Canvas**: Background renders floating interactive thumbnails of projects across coordinate space.
- **Studio Typography**: Centered editorial display heading (`"Our work"`) with responsive max-width paragraph container (`"A curated showcase of branding, digital products, websites, and mobile experiences."`).
- **Interactive Action Header**:
  - Left: TRIONN brand monogram SVG mark with live pulsating indicator.
  - Right: `#sound-toggle` audio controller, `LET'S TALK` pill CTA, and `MENU = ` navigation trigger.

### 2. Staggered Project Grid Layout
- **Alternating Asymmetric Positioning**:
  - Odd projects (e.g. *MyWorker AI*, *Loftloom*, *Domus*): Left-aligned (`data-pos="left"`), occupying wide container width (`w-7/12`).
  - Even projects (e.g. *Pulse Studio*, *DFZ Watch*, *RevNet*): Right-aligned (`data-pos="right"`), creating a dynamic rhythm.
- **Card Hierarchy**:
  - Top: Rounded container with zoom-on-hover preview graphic.
  - Title: Editorial typography header.
  - Subtitle: Two-column responsive row containing the project description and `EXPLORE PROJECT →` action button.

### 3. Dynamic Constellation Connector Lines Layout
- **Full-Screen SVG & Canvas Overlay**: A dedicated fixed canvas layer (`id="line-canvas"`) spans the entire scrollable height.
- **Coordinate Anchor Points**: Dynamically calculates top header coordinates and card thumbnail centers (`dotX`, `dotY`), generating organic curved vector paths connecting elements together in a continuous architectural network.

### 4. Drawer Navigation & Header Layout
- **Fixed Glassmorphism Header**: Subtle backdrop-blur (`bg-[#040508]/40 border-b border-[#2f323b]/30`) maintaining persistent access.
- **Slide-out Navigation Drawer**: Clean modal drawer displaying index-numbered navigation items (`01 Work`, `02 Services`, `03 About`, `04 Contact`) and studio time ticker (`IST → HH:MM`).

### 5. Studio Footer Layout
- **Call-to-Action**: Hero banner (`"HAVE AN AMBITIOUS VISION? LET'S BUILD SOMETHING ICONIC."`).
- **Contact & Headquarters**: Detailed studio office location, direct inquiry links, and time zone indicator.
- **Accreditation Grid**: Award badges (*✦ Awwwards Studio*, *✦ FWA Winner*, *✦ CSSDA Special Kudos*) and social media links.

---

## 🎬 Animations & Physics

### 1. Preloader & Curtain Reveal
- **Numeric Slot Counter**: Increments smoothly from `00` to `100` before revealing the UI.
- **Curtain Split Wipe**: Top and bottom black shutter panels slide open using custom cubic-bezier ease curves (`expo.inOut`), unveiling the hero section without sudden pops.

### 2. Interactive Background Canvas Orbit
- **Multi-Element Floating Space**: 19 thumbnail previews float smoothly across a WebGL canvas background.
- **Mouse Parallax**: Thumbnails respond to cursor position with spring physics damping.
- **Scroll Inertia**: As the user scrolls, floating thumbnails adjust coordinates with depth-based parallax speed multipliers.

### 3. Curved Schematic Constellation Lines
- **Dynamic Bezier Path Calculation**: Calculates bezier control points between consecutive project cards in real time.
- **Smooth Stroke Drawing**: Lines draw progressively as the viewport scrolls, with variable stroke opacities and subtle glow halos.

### 4. 3D Card Perspective Tilt
- **Matrix 3D Transform**: Project card thumbnails calculate mouse offset relative to card center, applying subtle 3D rotational tilt (`rotateX`, `rotateY`, `scale(1.02)`).
- **Smooth Reset**: Returns smoothly to neutral resting position when the mouse leaves.

### 5. SplitText Letter Shift Buttons
- **Character Spans**: Buttons such as `LET'S TALK`, `MENU`, and `EXPLORE PROJECT` wrap individual letters in animated `<span>` elements.
- **Staggered Hover Wave**: On mouse hover, letters translate vertically with staggered delays, creating a smooth letter-by-letter wave effect.

### 6. Lenis Smooth Inertial Scrolling
- **Virtual Inertia**: Normalizes wheel and touch events, eliminating scroll stutter and providing momentum-based deceleration.
- **GSAP Sync**: Fully synchronized with GSAP `ScrollTrigger` for deterministic animation triggering.

### 7. Integrated Web Audio System
- **Ambient Soundtrack**: Plays high-fidelity background music loop (`/audio/work-listing.mp3`) with smooth volume fades.
- **Sound Controller**: Toggle in the header allows visitors to enable or disable audio with sound wave indicator.
- **Micro-Interaction SFX**: Subtle audio beeps and clicks trigger on button hover and link interactions.

---

## 🔒 100% Localhost & Offline Features

- **Zero External Telemetry**: Replaced Google Tag Manager with an offline analytics stub (`assets/gtag-mock.js`).
- **All Assets Local**: All 4 custom WOFF2 font files, 250+ project images, and audio tracks are bundled locally.
- **Single Unified Route**: All traffic resolves to **`http://localhost:3000/work`**.
