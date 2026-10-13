(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  88943,
  (e) => {
    "use strict";
    var t = e.i(43476),
      o = e.i(59087),
      r = e.i(71645),
      n = e.i(83495),
      i = e.i(61604),
      l = e.i(42936);
    e.i(83390);
    var a = e.i(90782),
      s = e.i(19442);
    e.i(48062);
    var c = e.i(11846);
    e.i(52819);
    var d = e.i(54090),
      u = e.i(70221);
    e.i(11303);
    var h = e.i(31462),
      m = e.i(62749),
      p = e.i(36894),
      f = e.i(32009),
      g = e.i(42163),
      y = e.i(65747);
    let w = [0xffffff, 8969727, 4500223, 26367, 52479, 0xaaddff, 17612],
      x = [
        { color: 3379, radius: 12, maxOpacity: 0.045 },
        { color: 6758, radius: 7.8, maxOpacity: 0.09 },
        { color: 13226, radius: 4.8, maxOpacity: 0.14 },
        { color: 21998, radius: 2.6, maxOpacity: 0.23 },
        { color: 4500223, radius: 1.2, maxOpacity: 0.43 },
        { color: 0xbbddff, radius: 0.4, maxOpacity: 0.63 },
      ],
      v = [
        { color: 13260, maxOpacity: 0.13 },
        { color: 3381759, maxOpacity: 0.27 },
        { color: 0x99ddff, maxOpacity: 0.49 },
      ],
      b = [
        "/images/projects/loftloom/loftloom.jpg",
        "/images/projects/pulse-studio/pulse-studio.jpg",
        "/images/projects/myworker/myworker.jpg",
        "/images/projects/dfz/dfz.jpg",
        "/images/projects/domus/domus.jpg",
        "/images/projects/revnet/revnet.jpg",
        "/images/projects/finora/finora.jpg",
        "/images/projects/crowd-mouth/crowd-mouth.jpg",
        "/images/projects/technis/technis.jpg",
        "/images/projects/enterra/enterra.jpg",
        "/images/projects/8octa/8octa.jpg",
        "/images/projects/onedot/onedot.jpg",
        "/images/projects/imusic/imusic.jpg",
        "/images/projects/techno/techno.jpg",
        "/images/projects/z1-flux-solar/z1-flux-solar.jpg",
        "/images/projects/novaglam/novaglam.jpg",
        "/images/projects/reyden/reyden.jpg",
        "/images/projects/shore/shore.jpg",
        "/images/projects/stuffosome/stuffosome.jpg",
        "/images/projects/first-ground/first-ground.jpg",
        "/images/projects/reelix/reelix.jpg",
      ],
      j = [
        "/images/projects/loftloom/loftloom.jpg",
        "/images/projects/pulse-studio/pulse-studio.jpg",
        "/images/projects/myworker/myworker.jpg",
        "/images/projects/dfz/dfz.jpg",
        "/images/projects/domus/domus.jpg",
        "/images/projects/revnet/revnet.jpg",
        "/images/projects/finora/finora.jpg",
        "/images/projects/crowd-mouth/crowd-mouth.jpg",
        "/images/projects/technis/technis.jpg",
        "/images/projects/enterra/enterra.jpg",
        "/images/projects/8octa/8octa.jpg",
        "/images/projects/onedot/onedot.jpg",
        "/images/projects/imusic/imusic.jpg",
        "/images/projects/techno/techno.jpg",
        "/images/projects/z1-flux-solar/z1-flux-solar.jpg",
        "/images/projects/novaglam/novaglam.jpg",
        "/images/projects/reyden/reyden.jpg",
        "/images/projects/shore/shore.jpg",
        "/images/projects/stuffosome/stuffosome.jpg",
        "/images/projects/first-ground/first-ground.jpg",
        "/images/projects/reelix/reelix.jpg",
      ];
    e.s([
      "default",
      0,
      function () {
        let { soundEnabled: M } = (0, l.useSiteSound)(),
          L = (0, r.useRef)(M),
          T = (0, r.useRef)(null),
          A = (0, r.useRef)(null),
          _ = (0, r.useRef)(null),
          C = (0, r.useRef)(!1),
          S = (0, r.useRef)(null);
        function F(e, t, o) {
          let r = _.current;
          if (!r) return;
          S.current && cancelAnimationFrame(S.current);
          let n = performance.now(),
            i = r.volume,
            l = () => {
              let a = Math.min((performance.now() - n) / t, 1);
              ((r.volume =
                i +
                (e - i) *
                  (a < 0.5 ? 2 * a * a : 1 - Math.pow(-2 * a + 2, 2) / 2)),
                a < 1
                  ? (S.current = requestAnimationFrame(l))
                  : ((S.current = null), o?.()));
            };
          S.current = requestAnimationFrame(l);
        }
        function E() {
          let e = _.current;
          e &&
            (L.current && !C.current
              ? (e.paused && ((e.volume = 0), e.play().catch(() => {})),
                F(0.6, 600))
              : F(0, 800, () => {
                  (!L.current || C.current) && e.pause();
                }));
        }
        ((0, r.useEffect)(() => {
          ((L.current = M), E());
        }, [M]),
          (0, r.useEffect)(() => {
            let e = new Audio("/audio/work-listing.mp3");
            return (
              (e.loop = !0),
              (e.preload = "auto"),
              (e.volume = 0.6),
              (_.current = e),
              () => {
                (S.current && cancelAnimationFrame(S.current),
                  e.pause(),
                  (_.current = null));
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            let e = () => {
              if (document.hidden) {
                S.current &&
                  (cancelAnimationFrame(S.current), (S.current = null));
                let e = _.current;
                e && ((e.volume = 0), e.pause());
              }
            };
            return (
              document.addEventListener("visibilitychange", e),
              () => document.removeEventListener("visibilitychange", e)
            );
          }, []));
        let [R, Y] = (0, r.useState)(!1),
          k = (0, m.useTransitionReady)(),
          [activeSlug, setActiveSlug] = (0, r.useState)(null),
          [activeTab, setActiveTab] = (0, r.useState)("challenge");
        return (
          (0, r.useEffect)(() => {
            let onPop = () => {
              let p = window.location.pathname;
              if (p.startsWith("/work/")) {
                let s = p.replace(/^\/work\/?/, "").split("?")[0].split("#")[0];
                if (s && g.projects.some((pr) => pr.slug === s)) {
                  setActiveSlug(s);
                  document.body.style.overflow = "hidden";
                  return;
                }
              }
              setActiveSlug(null);
              document.body.style.overflow = "";
            };
            window.addEventListener("popstate", onPop);
            onPop();
            return () => window.removeEventListener("popstate", onPop);
          }, []),
          (0, r.useEffect)(() => {
            if (!k) return;
            let e = document.querySelector(".site-footer");
            if (!e) return;
            let t = new IntersectionObserver(
              ([e]) => {
                ((C.current = e.isIntersecting), E());
              },
              { threshold: 0.05 },
            );
            return (t.observe(e), () => t.disconnect());
          }, [k]),
          (0, y.useGSAP)(
            () => {
              if (!k) return;
              let t = {
                  left: { ml: "4%", mr: "auto" },
                  right: { ml: "auto", mr: "4%" },
                  center: { ml: "auto", mr: "auto" },
                },
                o = {
                  small: { w: "29%", ar: "812/568" },
                  medium: { w: "36%", ar: "812/568" },
                  large: { w: "41%", ar: "812/568" },
                  xlarge: { w: "46%", ar: "812/568" },
                };
              document.querySelectorAll(".project-card").forEach((e) => {
                e.removeAttribute("style");
                let r = t[e.dataset.pos || "left"] || t.left,
                  n = o[e.dataset.size || "medium"] || o.medium;
                ((e.style.marginLeft = r.ml),
                  (e.style.marginRight = r.mr),
                  (e.style.width = n.w));
                let i = e.querySelector(".card-thumb img");
                i && (i.style.aspectRatio = n.ar);
              });
              let r = (e) => Math.max(0, Math.min(1, e)),
                l = (e) => 1 - Math.pow(1 - e, 3),
                a = (e) =>
                  e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
                s = 220;
              function c() {
                s = Math.floor(0.26 * window.innerWidth);
                let e = 0.36 * window.innerHeight;
                (0.49757104789172696 * s > e &&
                  (s = Math.floor(e / 0.49757104789172696)),
                  s < 80 && (s = 80));
              }
              let d = [],
                u = 0,
                h = 0,
                m = !1,
                p = 0,
                g = 0,
                y = 0,
                j = 0,
                M = 0,
                A = 0,
                _ = 0,
                C = 0,
                S = !1,
                F = 0,
                E = [],
                R = 0,
                X = 0,
                P = 0,
                W = 0,
                q = 0,
                H = 0,
                N = !1,
                O = null,
                $ = null,
                D = null,
                z = () => ({
                  t1: document.querySelector("#t1"),
                  t2: document.querySelector("#t2"),
                  t3: document.querySelector("#t3"),
                  pg1: document.querySelector("#particles1"),
                  pg2: document.querySelector("#particles2"),
                  pg3: document.querySelector("#particles3"),
                  lg1: document.querySelector("#lightning1"),
                  lg2: document.querySelector("#lightning2"),
                  lg3: document.querySelector("#lightning3"),
                });
              function B(e, t) {
                let o = 1.2 + ((0.37 * t) % 0.8),
                  r = 8 + ((0.61 * t) % 14),
                  n = (1.7 * t) % (2 * Math.PI),
                  i = `M -10 ${e.toFixed(1)}`;
                for (let t = 1; t <= 60; t++) {
                  let l = (t / 60) * 598 - 10,
                    a = r * Math.sin((l / 578) * o * Math.PI + n);
                  i += ` L ${l.toFixed(1)} ${(e + a).toFixed(1)}`;
                }
                return i;
              }
              function I(e) {
                return Array.from({ length: 28 }, (t, o) => {
                  let r = 3.14159 * o + 1.618;
                  if ("t1-bottom-up" === e || "bottom-up" === e) {
                    let y = 475 - (o + 0.5) * (400 / 28);
                    let h = 400 / 28 + 2;
                    return {
                      path: B(y, r),
                      delay: 0.026 * o,
                      fillX: -10,
                      fillY: y,
                      fillW: 600,
                      fillH: h,
                      axis: "h",
                    };
                  }
                  if ("t2-left-right" === e || "left-right" === e) {
                    let n = 260 + (o + 0.5) * (205 / 28);
                    let w = 205 / 28 + 2;
                    return {
                      path: (function (e, t) {
                        let o = 1.2 + ((0.37 * t) % 0.8),
                          r = 8 + ((0.61 * t) % 14),
                          n = (1.7 * t) % (2 * Math.PI),
                          i = `M ${e.toFixed(1)} -10`;
                        for (let t = 1; t <= 60; t++) {
                          let l = (t / 60) * 606 - 10,
                            a = r * Math.sin((l / 586) * o * Math.PI + n);
                          i += ` L ${(e + a).toFixed(1)} ${l.toFixed(1)}`;
                        }
                        return i;
                      })(n, r),
                      delay: 0.026 * o,
                      fillX: n - w / 2,
                      fillY: -10,
                      fillW: w,
                      fillH: 610,
                      axis: "v",
                    };
                  }
                  let y = 190 + (o + 0.5) * (310 / 28);
                  let h = 310 / 28 + 2;
                  return {
                    path: B(y, r),
                    delay: 0.026 * o,
                    fillX: -10,
                    fillY: y,
                    fillW: 600,
                    fillH: h,
                    axis: "h",
                  };
                });
              }
              function V() {
                let e = z();
                return e.t1 && e.t2 && e.t3
                  ? (N ||
                      ([e.lg1, e.lg2, e.lg3].forEach((e) => {
                        e && (e.style.display = "block");
                      }),
                      [e.t1, e.t2, e.t3].forEach((e) => {
                        e &&
                          ((e.style.opacity = "0"),
                          (e.style.transformOrigin = "50% 50%"));
                      }),
                      (O = I("t1-bottom-up")),
                      ($ = I("t2-left-right")),
                      (D = I("t3-top-down")),
                      (N = !0)),
                    e)
                  : null;
              }
              function G(e, t, o, n, c = "#FFFFFF", sc = "#FFFFFF") {
                if (!e || !t) return;
                if (n <= 0) {
                  ((e.innerHTML = ""), (t.innerHTML = ""));
                  return;
                }
                let i = "",
                  l = "";
                (o.forEach((e) => {
                  let t = r((n - e.delay) / 0.18);
                  if (t <= 0) return;
                  let o = a(r((n - e.delay) / 0.252));
                  o > 0 &&
                    ("h" === e.axis
                      ? (l += `<rect x="${e.fillX}" y="${e.fillY.toFixed(1)}" width="${e.fillW}" height="${(e.fillH * o + 2).toFixed(1)}" fill="${c}"/>`)
                      : (l += `<rect x="${e.fillX.toFixed(1)}" y="-10" width="${(e.fillW * o + 2).toFixed(1)}" height="610" fill="${c}"/>`));
                  let s = Math.max(0, 1 - a(r((n - e.delay) / 0.396)));
                  if (s > 0.01) {
                    let o = (1 - a(t)).toFixed(4);
                    i += `<path d="${e.path}" fill="none" stroke="${sc}" stroke-width="1.5" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="${o}" opacity="${s.toFixed(3)}"/>`;
                  }
                }),
                  (t.innerHTML = l),
                  (e.innerHTML = i));
              }
              let Z = -1,
                U = !1;
              function J(e, t) {
                let o = V();
                if (o) {
                  if ((!W && t && (W = t), e <= 0.001)) {
                    let o;
                    (Z > 0.001 &&
                      [
                        (o = z()).pg1,
                        o.pg2,
                        o.pg3,
                        o.lg1,
                        o.lg2,
                        o.lg3,
                      ].forEach((e) => {
                        e && (e.innerHTML = "");
                      }),
                      U ||
                        (U = (function (e) {
                          let t = V();
                          if (!t) return !0;
                          let o = W || e,
                            n = [
                              {
                                el: t.t3,
                                delay: 0,
                                x: -120,
                                y: 0,
                                rot: -60,
                                axis: "Y",
                                z: 28,
                              },
                              {
                                el: t.t1,
                                delay: 200,
                                x: 120,
                                y: 0,
                                rot: 60,
                                axis: "Y",
                                z: -32,
                              },
                              {
                                el: t.t2,
                                delay: 400,
                                x: 0,
                                y: 80,
                                rot: -50,
                                axis: "X",
                                z: -24,
                              },
                            ],
                            i = e || performance.now();
                          return (
                            n.forEach((e) => {
                              let t = l(r((i - o - e.delay) / 700)),
                                n = 1 - t,
                                a = 1.5 + -0.5 * t;
                              ((e.el.style.opacity = t.toFixed(3)),
                                (e.el.style.transform = `translate(${(e.x * n).toFixed(2)}px,${(e.y * n).toFixed(2)}px) rotate${e.axis}(${(e.rot * n).toFixed(2)}deg) rotateZ(${(e.z * n).toFixed(2)}deg) scale(${a.toFixed(4)})`));
                            }),
                            i - o >= 1100
                          );
                        })(t ?? performance.now())),
                      (Z = e));
                    return;
                  }
                  ((U = !1),
                    5e-4 > Math.abs(e - Z) ||
                      ((Z = e),
                      [o.t1, o.t2, o.t3].forEach((e) => {
                        e &&
                          ((e.style.opacity = "1"),
                          (e.style.transform = "translate(0,0) scale(1)"));
                      }),
                      G(o.lg1, o.pg1, O || I("t1-bottom-up"), e, "#FFFFFF", "#FFFFFF"),
                      G(o.lg2, o.pg2, $ || I("t2-left-right"), e, "#E5A83B", "#FAD261"),
                      G(o.lg3, o.pg3, D || I("t3-top-down"), e, "#E5A83B", "#FAD261")));
                }
              }
              function K(e) {
                let t = window.innerWidth,
                  o = window.innerHeight;
                ((e.floatX = Math.random() * (t + e.TW) - e.TW),
                  (e.floatY = Math.random() * (o + e.TH) - e.TH));
                let r = 18 + 28 * Math.random(),
                  n = Math.random() * Math.PI * 2;
                ((e.floatVX = Math.cos(n) * r),
                  (e.floatVY = Math.sin(n) * r),
                  (e.floatScale = 0.35 + 0.65 * Math.random()),
                  (e.floatAlpha = 0),
                  (e.floatAge = 0),
                  (e.floatLife = 6 + 6 * Math.random()));
              }
              function Q() {
                c();
                let e = document.querySelector("#page-header");
                if (!e) return;
                let t = Array.from(e.querySelectorAll(".ft")),
                  o = [...b, ...b, ...b, ...b].slice(0, t.length);
                for (let e = o.length - 1; e > 0; e--) {
                  let t = Math.floor(Math.random() * (e + 1));
                  [o[e], o[t]] = [o[t], o[e]];
                }
                ((d = []),
                  t.forEach((e, r) => {
                    e.style.cssText =
                      "position:absolute;width:170px;height:114px;opacity:0;visibility:visible;left:0px;top:0px;transform-origin:center center;border-radius:8px;overflow:hidden;will-change:transform,opacity,left,top;box-shadow:none;";
                    let n = e.querySelector("img");
                    n &&
                      ((n.src = o[r % o.length]),
                      (n.style.cssText =
                        "width:100%;height:100%;object-fit:cover;display:block;"));
                    let i = {
                      el: e,
                      TW: 170,
                      TH: 114,
                      warpAngle: 0,
                      warpPhase: 0,
                      warpSpeed: 0,
                      floatX: 0,
                      floatY: 0,
                      floatVX: 0,
                      floatVY: 0,
                      floatScale: 0.7,
                      floatAlpha: 0,
                      floatAge: 0,
                      floatLife: 8,
                      R: s,
                      slotAngle: 0,
                      direction: 1,
                      tilt: 1.05,
                      cyOffset: 0,
                      isOuter: !1,
                      flyInDone: !0,
                      flyInStartTs: null,
                      flyInStarted: !0,
                      _introStart: performance.now() + 70 * r,
                      _introDone: !1,
                      fromX: 0,
                      fromY: 0,
                      curX: 0,
                      curY: 0,
                      flyInProgress: 1,
                      curRotX: 0,
                      curRotY: 0,
                    };
                    ((i.floatAge = (r / t.length) * 8),
                      K(i),
                      (i.floatAge = 0.9 + (r / Math.max(1, t.length)) * 0.15),
                      (d[r] = i));
                  }));
                let r =
                  0.19999999999999996 *
                  (F = 1 / (1 + (d.length - 1) * 0.19999999999999996));
                ((E = d.map((e, t) => t * r)), (j = 0), (M = 0));
              }
              function ee() {
                let e = document.querySelector("#page-header");
                if (
                  ((u = window.innerWidth / 2), (h = window.innerHeight / 2), e)
                ) {
                  let t = e.getBoundingClientRect();
                  ((u -= t.left), (h -= t.top));
                }
              }
              let et = 0;
              function eo(e) {
                if (((et = requestAnimationFrame(eo)), m)) return;
                let t = Math.min((e - y) / 1e3, 0.05);
                y = e;
                let o = 1 - Math.pow(0.001, +t);
                ((p += (g - p) * o), 0.5 > Math.abs(g - p) && (p = g));
                let n = C;
                ((M = Math.min(1, p / 1600)) < 1e-4 &&
                  ((M = 0), (p = 0), (g = 0)),
                  (A = M),
                  M > 1e-4 && (_ = Math.max(_, e + 1)));
                let i = M > 1e-4 && !S,
                  s = M <= 1e-4 && S;
                j += t;
                let c = d.length > 0 && d.every((e) => e.flyInDone);
                window._orbitReady = c;
                let f = M - n,
                  w = f > 1e-4 ? 1 : f < -1e-4 ? -1 : H;
                (w !== H && (H = w), 0 === M && (H = 0));
                let x = A * A * A,
                  v = document.querySelector("#header-dot");
                v &&
                  ((v.style.visibility = "visible"),
                  (v.style.transition = ""),
                  (v.style.opacity = x >= 0.999 ? "0" : "1"));
                {
                  let e = window._mouseTilt,
                    t = document.querySelector("#logo-circle"),
                    o = window.innerWidth / 2,
                    r = window.innerHeight / 2,
                    n = (e.mx - o) / (window.innerWidth / 2),
                    i = (e.my - r) / (window.innerHeight / 2);
                  ((X += (-(13 * i) - X) * 0.07),
                    (P += (18 * n - P) * 0.07),
                    t &&
                      ((t.style.opacity = "1"),
                      (t.style.transform = `perspective(800px) rotateX(${X.toFixed(2)}deg) rotateY(${P.toFixed(2)}deg)`)),
                    v &&
                      (v.style.transform = `translate3d(-50%, -50%, 0) scale(1) perspective(800px) rotateX(${X.toFixed(2)}deg) rotateY(${P.toFixed(2)}deg)`));
                }
                ((R += t), J(A, e));
                let { cx: b, cy: L } = (function () {
                  let e = document.querySelector("#page-header");
                  if (!e)
                    return {
                      cx: window.innerWidth / 2,
                      cy: window.innerHeight / 2,
                    };
                  let t = e.getBoundingClientRect(),
                    o = 0.16 * window.innerHeight;
                  return {
                    cx: window.innerWidth / 2 - t.left,
                    cy: window.innerHeight / 2 - t.top - o,
                  };
                })();
                for (let o = 0; o < d.length; o++) {
                  let n = d[o];
                  ((n.floatX += n.floatVX * t),
                    (n.floatY += n.floatVY * t),
                    (n.floatAge += t));
                  let i = window.innerWidth,
                    s = window.innerHeight,
                    c =
                      n.floatX < -(2 * n.TW) ||
                      n.floatX > i + 2 * n.TW ||
                      n.floatY < -(2 * n.TH) ||
                      n.floatY > s + 2 * n.TH;
                  if (
                    (M <= 0.001 &&
                      e >= _ &&
                      (n.floatAge >= n.floatLife || c)) ||
                    n._respawnState
                  ) {
                    if (!n._respawnState) {
                      let t = "number" == typeof n._lastA ? n._lastA : 1;
                      n._respawnState = {
                        phase: "out",
                        start: e,
                        fromAlpha: t,
                      };
                    }
                    let t = n._respawnState;
                    if ("out" === t.phase) {
                      let o = r((e - t.start) / 420);
                      ((n._alphaOverride = t.fromAlpha * (1 - a(o))),
                        o >= 1 &&
                          ((n.el.style.opacity = "0"),
                          (n._lastA = 0),
                          K(n),
                          (n.floatAge = 0),
                          (n._respawnState = { phase: "in", start: e }),
                          (n._alphaOverride = 0)));
                    } else if ("in" === t.phase) {
                      let o = r((e - t.start) / 720);
                      ((n._alphaOverride = l(o)),
                        o >= 1 &&
                          (delete n._respawnState, delete n._alphaOverride));
                    }
                  } else
                    (delete n._alphaOverride,
                      n.floatX < -(2 * n.TW)
                        ? (n.floatX = i + n.TW)
                        : n.floatX > i + 2 * n.TW && (n.floatX = -n.TW),
                      n.floatY < -(2 * n.TH)
                        ? (n.floatY = s + n.TH)
                        : n.floatY > s + 2 * n.TH && (n.floatY = -n.TH));
                }
                let T = d.map((e) => {
                  let t, o, n, i, l, a, s;
                  return (
                    (t = e.floatScale || 0.7),
                    (o = e.floatAge || 0),
                    (n = e.floatLife || 8),
                    (i =
                      performance.now() < _
                        ? 1
                        : o < 0.8
                          ? o / 0.8
                          : o > n - 1.2
                            ? Math.max(0, (n - o) / 1.2)
                            : 1),
                    (l =
                      "number" == typeof e._alphaOverride
                        ? r(e._alphaOverride)
                        : i),
                    (a = (e.floatX || 0) + e.TW / 2),
                    (s = (e.floatY || 0) + e.TH / 2),
                    {
                      x: e.floatX || 0,
                      y: e.floatY || 0,
                      screenX: a,
                      screenY: s,
                      Z3: 0,
                      depthN: t,
                      depthScale: t,
                      depthAlpha: l,
                    }
                  );
                });
                if (
                  (i &&
                    (d.forEach((e, t) => {
                      let o = T[t];
                      ((e._moveFromX = o.x),
                        (e._moveFromY = o.y),
                        (e._moveFromScale = o.depthScale),
                        (e._moveFromAlpha = o.depthAlpha),
                        (e._moveFromDepth = o.depthN),
                        (e._lockFloatX = e.floatX),
                        (e._lockFloatY = e.floatY));
                    }),
                    (S = !0)),
                  s)
                ) {
                  _ = e + 1400;
                  let t = Math.max(1, d.length);
                  (d.forEach((e, o) => {
                    e._convInit = !1;
                    let r = e.floatLife || 8;
                    ((e.floatAge = (o / t) * r * 0.72),
                      delete e._moveFromX,
                      delete e._moveFromY,
                      delete e._moveFromScale,
                      delete e._moveFromAlpha,
                      delete e._moveFromDepth,
                      delete e._lockFloatX,
                      delete e._lockFloatY,
                      delete e._respawnState,
                      delete e._alphaOverride);
                  }),
                    (S = !1));
                }
                (d.forEach((t, o) => {
                  var n, i;
                  let s, c, d, m, p, f, g, y, w, x, v, j;
                  if (
                    ("hidden" === t.el.style.visibility &&
                      ((t.el.style.visibility = "visible"),
                      (t.el.style.transition = "")),
                    !t.flyInStarted)
                  ) {
                    t.el.style.opacity = "0";
                    return;
                  }
                  let _ = T[o];
                  if (M > 0) {
                    let e = a(r((A - E[o]) / F)),
                      n = u - t.TW / 2,
                      i = h - t.TH / 2,
                      l =
                        "number" == typeof t._lockFloatX
                          ? t.floatX - t._lockFloatX
                          : 0,
                      s =
                        "number" == typeof t._lockFloatY
                          ? t.floatY - t._lockFloatY
                          : 0,
                      c =
                        "number" == typeof t._moveFromX
                          ? t._moveFromX + l
                          : _.x,
                      d =
                        "number" == typeof t._moveFromY
                          ? t._moveFromY + s
                          : _.y,
                      m =
                        "number" == typeof t._moveFromScale
                          ? t._moveFromScale
                          : _.depthScale,
                      p =
                        "number" == typeof t._moveFromAlpha
                          ? t._moveFromAlpha
                          : _.depthAlpha,
                      f =
                        "number" == typeof t._moveFromDepth
                          ? t._moveFromDepth
                          : _.depthN,
                      g = c + (n - c) * e,
                      y = d + (i - d) * e;
                    ((t.curX = g), (t.curY = y));
                    let w = 1 - e,
                      x = (_.screenX - b) / t.R,
                      v = (_.screenY - L) / t.R,
                      j = window._mouseTilt || {
                        mx: window.innerWidth / 2,
                        my: window.innerHeight / 2,
                      },
                      M = g + t.TW / 2,
                      T = y + t.TH / 2,
                      C = (j.mx - M) / (window.innerWidth / 2),
                      S = (j.my - T) / (window.innerHeight / 2);
                    ((t.curRotY =
                      t.curRotY +
                      (-(32 * x) * w * 0.4 + 14 * C * 0.6 * w - t.curRotY) *
                        0.1),
                      (t.curRotX =
                        t.curRotX +
                        (22 * v * w * 0.4 + -(10 * S * 0.6) * w - t.curRotX) *
                          0.1),
                      (t._curScale = m * (1 - 0.92 * e)),
                      (t.el.style.transform = `translate3d(${g}px,${y}px,0) scale(${Math.max(0.01, t._curScale)}) perspective(600px) rotateY(${t.curRotY.toFixed(3)}deg) rotateX(${t.curRotX.toFixed(3)}deg)`));
                    let R = Math.max(
                      0,
                      p * (e > 0.85 ? 1 - (e - 0.85) / 0.15 : 1),
                    );
                    t._lastA !== R &&
                      ((t.el.style.opacity = String(R)), (t._lastA = R));
                    let Y = Math.round(20 * f + 1);
                    t._lastZ !== Y &&
                      ((t.el.style.zIndex = String(Y)), (t._lastZ = Y));
                    return;
                  }
                  ((t.curX = _.x), (t.curY = _.y), (t._convInit = !1));
                  let C = (function (e, t) {
                      if (e._introDone) return { alpha: 1, scale: 1, y: 0 };
                      let o = r((t - (e._introStart || 0)) / 760),
                        n = l(o);
                      return (
                        o >= 1 && (e._introDone = !0),
                        { alpha: n, scale: 0.86 + 0.14 * n, y: (1 - n) * 22 }
                      );
                    })(t, e),
                    S = C.y ? Object.assign({}, _, { y: _.y + C.y }) : _;
                  ((n = C.scale),
                    (i = C.alpha),
                    (s = S.depthScale * (void 0 !== n ? n : 1)),
                    (c = S.depthAlpha * (void 0 !== i ? i : 1)),
                    (m =
                      (d = Math.sqrt(
                        (t.floatVX || 0) ** 2 + (t.floatVY || 0) ** 2,
                      )) > 0
                        ? (-(t.floatVX || 0) / d) * 8
                        : 0),
                    (p = d > 0 ? ((t.floatVY || 0) / d) * 5 : 0),
                    (f = window._mouseTilt || {
                      mx: window.innerWidth / 2,
                      my: window.innerHeight / 2,
                    }),
                    (g = S.x + t.TW / 2),
                    (y = S.y + t.TH / 2),
                    (w = (f.mx - g) / (window.innerWidth / 2)),
                    (x = (f.my - y) / (window.innerHeight / 2)),
                    (t.curRotY =
                      t.curRotY + (0.3 * m + 14 * w * 0.7 - t.curRotY) * 0.06),
                    (t.curRotX =
                      t.curRotX +
                      (0.3 * p + -(10 * x * 0.7) - t.curRotX) * 0.06),
                    (t.el.style.transform = `translate3d(${S.x}px,${S.y}px,0) scale(${Math.max(0.01, s)}) perspective(600px) rotateY(${t.curRotY.toFixed(3)}deg) rotateX(${t.curRotX.toFixed(3)}deg)`),
                    (v = r(c)),
                    t._lastA !== v &&
                      ((t.el.style.opacity = String(v)), (t._lastA = v)),
                    (j = Math.round(15 * S.depthN + 1)),
                    t._lastZ !== j &&
                      ((t.el.style.zIndex = String(j)), (t._lastZ = j)));
                }),
                  (C = M));
              }
              let er = !1;
              function en(e) {
                g = 1600 * (e = Math.max(0, Math.min(1, e)));
                let t = window._thumbAnimDone;
                if (
                  (e >= 0.9995
                    ? ((window._thumbAnimDone = !0), (m = !1), Y(!0))
                    : e <= 0.985 && (window._thumbAnimDone = !1),
                  window._thumbAnimDone &&
                    !t &&
                    !er &&
                    window._initPageLines &&
                    ((er = !0), window._initPageLines()),
                  !window._thumbAnimDone && t)
                ) {
                  let e = document.querySelector("#logo-circle");
                  (e &&
                    (e.classList.remove("lines-started"), (e.style.top = "")),
                    window.PageLines &&
                      "function" == typeof window.PageLines.resetProg &&
                      window.PageLines.resetProg());
                }
              }
              let ei = null,
                el = () => {
                  let e = i.ScrollSmoother.get();
                  return e ? e.scrollTop() : window.scrollY;
                },
                ea = (e) => Math.max(0, Math.min(1, e)),
                es = null,
                ec = null,
                ed = 0,
                eu = 0,
                eh = null,
                em = null,
                ep = null,
                ef = null,
                eg = 0,
                ey = [],
                ew = 0,
                ex = 0,
                ev = !1,
                eb = !0,
                ej = !1,
                eM = [],
                eL = [],
                eT = [],
                eA = [],
                e_ = 0,
                eC = 0,
                eS = 0,
                eF = [],
                eE = 0,
                eR = 0,
                eY = [],
                ek = [],
                eX = [],
                eP = [],
                eW = null,
                eq = null,
                eH = !1,
                eN = !1,
                eO = null,
                e$ = null;
              function eD() {
                if (!eW && !eN) {
                  eN = !0;
                  try {
                    ((T.current = eW =
                      new (window.AudioContext || window.webkitAudioContext)()),
                      fetch("/assets/hero-spark.mp3")
                        .then((e) => {
                          if (!e.ok) throw Error("fetch failed");
                          return e.arrayBuffer();
                        })
                        .then((e) => eW.decodeAudioData(e))
                        .then((e) => {
                          ((eq = e), (eH = !0));
                        })
                        .catch((e) =>
                          console.warn("spark audio buffer load failed:", e),
                        ));
                  } catch (e) {
                    console.warn("AudioContext failed:", e);
                  }
                }
              }
              function ez(e = 0.035) {
                let t = eO,
                  o = e$;
                if (((eO = null), (e$ = null), t && eW))
                  try {
                    (o &&
                      e > 0 &&
                      (o.gain.cancelScheduledValues(eW.currentTime),
                      o.gain.setValueAtTime(o.gain.value, eW.currentTime),
                      o.gain.linearRampToValueAtTime(1e-4, eW.currentTime + e)),
                      setTimeout(
                        () => {
                          try {
                            t.stop();
                          } catch (e) {}
                        },
                        Math.max(20, 1e3 * e + 20),
                      ));
                  } catch (e) {
                    try {
                      t.stop();
                    } catch (e) {}
                  }
              }
              let eB = () => {
                L.current &&
                  (eD(),
                  eW && "suspended" === eW.state && eW.resume().catch(() => {}),
                  [
                    "pointerdown",
                    "mousedown",
                    "click",
                    "wheel",
                    "keydown",
                    "touchstart",
                  ].forEach((e) => document.removeEventListener(e, eB)));
              };
              function eI(e, t, o, r, n, i, l) {
                if (1e-10 > Math.abs(i - n)) return [e, t];
                let a = (l - n) / (i - n);
                return [e + a * (o - e), t + a * (r - t)];
              }
              function eV(e) {
                let t = [],
                  o = e.length - 1,
                  r = [0];
                for (let t = 0; t < o; t++) {
                  let o = e[t + 1].x - e[t].x,
                    n = e[t + 1].y - e[t].y;
                  r.push(r[t] + Math.sqrt(o * o + n * n));
                }
                for (let n = 0; n < o; n++) {
                  let i = e[Math.max(0, n - 1)],
                    l = e[n],
                    a = e[n + 1],
                    s = e[Math.min(o, n + 2)],
                    c = r[Math.max(0, n - 1)],
                    d = r[n],
                    u = r[n + 1],
                    h = r[Math.min(o, n + 2)];
                  for (let e = 0; e <= 200; e++) {
                    if (0 === e && t.length) continue;
                    let o = d + (e / 200) * (u - d),
                      [r, n] = eI(i.x, i.y, l.x, l.y, c, d, o),
                      [m, p] = eI(l.x, l.y, a.x, a.y, d, u, o),
                      [f, g] = eI(a.x, a.y, s.x, s.y, u, h, o),
                      [y, w] = eI(r, n, m, p, c, u, o),
                      [x, v] = eI(m, p, f, g, d, h, o),
                      [b, j] = eI(y, w, x, v, d, u, o);
                    t.push({ x: b, y: j, nx: 0, ny: 1, t: 0 });
                  }
                }
                let n = 0,
                  i = [0];
                for (let e = 1; e < t.length; e++) {
                  let o = t[e].x - t[e - 1].x,
                    r = t[e].y - t[e - 1].y;
                  ((n += Math.sqrt(o * o + r * r)), i.push(n));
                }
                let l = n || 1;
                for (let e = 0; e < t.length; e++) t[e].t = i[e] / l;
                for (let e = 0; e < t.length; e++) {
                  let o = t[Math.max(0, e - 1)],
                    r = t[Math.min(t.length - 1, e + 1)],
                    n = r.x - o.x,
                    i = r.y - o.y,
                    l = Math.sqrt(n * n + i * i) || 1;
                  ((t[e].nx = -i / l), (t[e].ny = n / l));
                }
                return t;
              }
              function eG(e, t) {
                let o = 0.022 * ed,
                  r = 0.5 * eg + 2.1 * t;
                return e.map((e) => {
                  let t = 1;
                  for (let o = 0; o < eF.length; o++) {
                    let r = Math.abs(e.t - eF[o]);
                    r < 0.03 && (t = Math.min(t, r / 0.03));
                  }
                  let n = e.t * Math.PI * 32 + r,
                    i = Math.cos(n) * o * t,
                    l = Math.sin(n) * o * 0.35 * t,
                    a = -e.ny,
                    s = e.nx;
                  return {
                    x: e.x + e.nx * i + a * l,
                    y: e.y + e.ny * i + s * l,
                    t: e.t,
                  };
                });
              }
              function eZ() {
                let e,
                  t = Array.from(document.querySelectorAll(".project-card"));
                if (!t.length) return;
                let o = el(),
                  r = ed / 2;
                ((e_ =
                  ((e = document.querySelector("#page-header"))
                    ? Math.max(
                        0,
                        e.getBoundingClientRect().top +
                          el() +
                          e.offsetHeight -
                          window.innerHeight,
                      )
                    : Math.max(0, window.innerHeight)) +
                  0.5 * eu),
                  (eC = (eA = t.map((e) => {
                    let t = (
                      e.querySelector(".card-thumb") || e
                    ).getBoundingClientRect();
                    return {
                      el: e,
                      dotX: t.left + t.width / 2,
                      dotY: t.top + o,
                      lineT: 0,
                      opacity: 0,
                      phase: Math.random() * Math.PI * 2,
                    };
                  }))[eA.length - 1].dotY),
                  eA.forEach((e) => {
                    ((e.lineT = 0), (e._touched = !1));
                  }));
                let n = document.querySelector("#contact-btn"),
                  i = n ? n.getBoundingClientRect() : null,
                  l = i ? i.left + i.width / 2 : r;
                eS = i ? i.top + o : eC + 0.4 * eu;
                let a = (e, t) => e + Math.random() * (t - e),
                  s = a(0.15, 0.28),
                  c = Array.from({ length: eA.length }, () => {
                    let e = a(0.25, 0.7),
                      t = Math.max(0.05, Math.min(0.9, e + a(-s, s))),
                      o = Math.max(0.05, Math.min(0.9, e + a(-s, s))),
                      r = Math.max(0.05, Math.min(0.9, e + a(-s, s)));
                    return (
                      ([t, o, r] = [t, o, r].sort((e, t) => e - t)),
                      o - t < 0.12 && (o = t + 0.12),
                      r - o < 0.12 && (r = o + 0.12),
                      r > 0.92 &&
                        (t = Math.min(
                          t,
                          (o = Math.min(o, (r = 0.92) - 0.12)) - 0.12,
                        )),
                      [t, o, r]
                    );
                  }),
                  d = [{ x: r, y: e_ }],
                  u = [{ x: r, y: e_ }],
                  h = [{ x: r, y: e_ }],
                  m = e_;
                eA.forEach((e, t) => {
                  let o = e.dotX,
                    r = e.dotY,
                    n = c[t % c.length],
                    i = m + (r - m) * 0.5,
                    l = ed * n[0],
                    a = ed * n[1],
                    s = ed * n[2];
                  (d.push({ x: l + (o - l) * 0.3, y: i }),
                    u.push({ x: a + (o - a) * 0.3, y: i }),
                    h.push({ x: s + (o - s) * 0.3, y: i }),
                    d.push({ x: o, y: r }),
                    u.push({ x: o, y: r }),
                    h.push({ x: o, y: r }),
                    (m = r));
                });
                let p = eS - 0.55 * eu,
                  f = eS - 0.28 * eu;
                (d.push({ x: 0.08 * ed, y: p }),
                  u.push({ x: 0.18 * ed, y: p }),
                  h.push({ x: 0.3 * ed, y: p }),
                  d.push({ x: 0.12 * ed, y: f }),
                  u.push({ x: 0.22 * ed, y: f }),
                  h.push({ x: 0.34 * ed, y: f }));
                let g = eS - 0.07 * eu;
                (d.push({ x: l - 40, y: g }),
                  u.push({ x: l, y: g }),
                  h.push({ x: l + 40, y: g }),
                  d.push({ x: l, y: eS }),
                  u.push({ x: l, y: eS }),
                  h.push({ x: l, y: eS }),
                  (eM = eV(d)),
                  (eL = eV(u)),
                  (eT = eV(h)));
                let y = eA.map((e) => e.dotY).concat([eS]),
                  w = Math.max(1, eS - e_),
                  x = [{ y: e_, t: 0 }];
                function v(e) {
                  let t = 0;
                  for (let o = 0; o < e.length; o++) {
                    let r = e[o].y;
                    for (; t < x.length - 2 && r > x[t + 1].y;) t++;
                    let n = x[t],
                      i = x[t + 1],
                      l = i.y - n.y,
                      a = l < 1 ? 0 : Math.max(0, Math.min(1, (r - n.y) / l));
                    e[o].t = n.t + a * (i.t - n.t);
                  }
                }
                (y.forEach((e) => {
                  x.push({ y: e, t: ea((e - e_) / w) });
                }),
                  x.push({ y: eS + 1, t: 1 }),
                  v(eM),
                  v(eL),
                  v(eT),
                  (eF = [0]),
                  y.forEach((e) => {
                    eF.push(ea((e - e_) / w));
                  }),
                  eF.push(1));
              }
              function eU(e, t, o) {
                if (!e.length || t <= 0 || !ec) return;
                (ec.save(),
                  (ec.strokeStyle = "rgba(48,54,64,1)"),
                  (ec.lineWidth = 1),
                  (ec.lineCap = "round"),
                  (ec.lineJoin = "round"),
                  (ec.globalAlpha = 1),
                  ec.beginPath());
                let r = !1;
                for (let n = 0; n < e.length && !(e[n].t > t); n++) {
                  let t = e[n].x,
                    i = e[n].y - o;
                  if (t < -10 || t > ed + 10) {
                    r = !1;
                    continue;
                  }
                  r ? ec.lineTo(t, i) : (ec.moveTo(t, i), (r = !0));
                }
                (r && ec.stroke(), ec.restore());
              }
              function eJ(e) {
                let t = new f.MeshBasicMaterial({
                    color: e.color,
                    transparent: !0,
                    opacity: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    blending: f.AdditiveBlending,
                  }),
                  o = new f.CylinderGeometry(e.radius, e.radius, 1, 8, 1, !0),
                  r = new f.Group();
                ((r.renderOrder = 996), (r.visible = !1));
                let n = [];
                for (let e = 0; e < 9; e++) {
                  let e = new f.Mesh(o, t);
                  ((e.renderOrder = 996),
                    (e.visible = !1),
                    r.add(e),
                    n.push(e));
                }
                return (
                  ep && ep.add(r),
                  { group: r, segments: n, material: t, layer: e }
                );
              }
              function eK(e = !1) {
                let t = x.map((e) => eJ(e)),
                  o = v.map((e) => {
                    var t;
                    let o, r, n, i;
                    return (
                      (t = e.color),
                      (o = new Float32Array(30)),
                      (r = new f.BufferGeometry()).setAttribute(
                        "position",
                        new f.BufferAttribute(o, 3),
                      ),
                      r.setDrawRange(0, 10),
                      (n = new f.LineBasicMaterial({
                        color: t,
                        transparent: !0,
                        opacity: 0,
                        depthTest: !1,
                        depthWrite: !1,
                        blending: f.AdditiveBlending,
                      })),
                      ((i = new f.Line(r, n)).renderOrder = 998),
                      ep && ep.add(i),
                      {
                        line: i,
                        pts: o,
                        maxOpacity: v.find((e) => e.color === t).maxOpacity,
                      }
                    );
                  }),
                  r = x.map((e) => eJ(e)),
                  n = new f.PointLight(0xaaccff, 0, 14);
                ep && ep.add(n);
                let i = new Float32Array(30),
                  l = new f.BufferGeometry();
                (l.setAttribute("position", new f.BufferAttribute(i, 3)),
                  l.setDrawRange(0, 10));
                let a = new f.LineBasicMaterial({
                    color: 8965375,
                    transparent: !0,
                    opacity: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    blending: f.AdditiveBlending,
                    toneMapped: !1,
                  }),
                  s = new f.Line(l, a);
                ((s.renderOrder = 999), ep && ep.add(s));
                let c = new f.BufferGeometry();
                (c.setAttribute(
                  "position",
                  new f.BufferAttribute(new Float32Array(18), 3),
                ),
                  c.setDrawRange(0, 6));
                let d = new f.Line(c, a);
                return (
                  (d.renderOrder = 999),
                  ep && ep.add(d),
                  {
                    pts: [],
                    branch: null,
                    glowTubes: t,
                    glowLines: o,
                    branchGlowTubes: r,
                    travelLight: n,
                    coreLine: s,
                    branchCoreLine: d,
                    life: 0,
                    max: 0,
                    on: !1,
                    col: 8965375,
                    isCluster: e,
                  }
                );
              }
              [
                "pointerdown",
                "mousedown",
                "click",
                "wheel",
                "keydown",
                "touchstart",
              ].forEach((e) =>
                document.addEventListener(e, eB, { passive: !0 }),
              );
              let eQ = [];
              function e0(e, t, o, r, n) {
                let i = r - t,
                  l = n - o,
                  a = Math.sqrt(i * i + l * l) || 0.001,
                  s = -l / a,
                  c = i / a,
                  d = Math.random() > 0.5 ? 1 : -1,
                  u = [{ x: t, y: o }];
                for (let e = 1; e <= 9; e++) {
                  let r = e / 9,
                    n =
                      Math.min(0.18 * a, 10) *
                      (0.5 + 0.8 * Math.random()) *
                      Math.sin(r * Math.PI),
                    h = Math.min(0.08 * a, 5) * Math.sin(r * Math.PI) * d,
                    m = t + i * r + (Math.random() - 0.5) * n * 1.4 + s * h,
                    p =
                      o +
                      l * r +
                      (Math.random() - 0.5) * n +
                      c * h * (0.6 + 0.8 * Math.random());
                  u.push({ x: m, y: p });
                }
                (u.push({ x: r, y: n }),
                  (e.pts = u),
                  (e.branch = null),
                  (e.max = 0.07 + 0.08 * Math.random()),
                  (e.life = e.max),
                  (e.on = !0));
                let h = w[Math.floor(Math.random() * w.length)];
                (e.coreLine.material.color.setHex(h),
                  e.branchCoreLine &&
                    e.branchCoreLine.material.color.setHex(h));
                let m = new f.Vector3(),
                  p = new f.Vector3(),
                  g = new f.Vector3(),
                  y = new f.Vector3(),
                  x = new f.Quaternion(),
                  v = new f.Vector3(0, 1, 0);
                (e.glowTubes.forEach((t) => {
                  t.group.visible = !0;
                  for (let o = 0; o < 9; o++) {
                    (m.set(e.pts[o].x, -e.pts[o].y, 0),
                      p.set(e.pts[o + 1].x, -e.pts[o + 1].y, 0));
                    let r = m.distanceTo(p),
                      n = t.segments[o];
                    if (r < 1e-4) {
                      n.visible = !1;
                      continue;
                    }
                    (g.copy(m).lerp(p, 0.5),
                      y.copy(p).sub(m).normalize(),
                      x.setFromUnitVectors(v, y),
                      n.position.copy(g),
                      n.quaternion.copy(x),
                      n.scale.set(1, r, 1),
                      (n.visible = !0));
                  }
                }),
                  e.glowLines.forEach((t) => {
                    let o = t.line.geometry.attributes.position;
                    for (let o = 0; o <= 9; o++)
                      ((t.pts[3 * o] = e.pts[o].x),
                        (t.pts[3 * o + 1] = -e.pts[o].y),
                        (t.pts[3 * o + 2] = 0));
                    (o.array.set(t.pts), (o.needsUpdate = !0));
                  }));
              }
              function e2(e, t) {
                let o = e.life / e.max,
                  r = 0.7 + 0.3 * Math.random(),
                  n = e.isCluster ? 1 : 1.5;
                (e.glowTubes.forEach((e) => {
                  e.group.position.y = t;
                  let i = 0.9 + 0.1 * Math.random();
                  e.material.opacity = e.layer.maxOpacity * o * r * i * n;
                }),
                  e.glowLines.forEach((e) => {
                    e.line.position.y = t;
                    let i = 0.9 + 0.1 * Math.random();
                    e.line.material.opacity = e.maxOpacity * o * r * i * n;
                  }),
                  (e.coreLine.material.opacity = Math.min(1, 1.5 * o * r)));
                let i = e.coreLine.geometry.getAttribute("position");
                for (let o = 0; o < e.pts.length; o++)
                  i.setXYZ(o, e.pts[o].x, -(e.pts[o].y - t), 0);
                (e.coreLine.geometry.setDrawRange(0, e.pts.length),
                  (i.needsUpdate = !0));
                let l = Math.floor((1 - o) * (e.pts.length - 1));
                e.pts[l] &&
                  (e.travelLight.position.set(e.pts[l].x, -(e.pts[l].y - t), 0),
                  (e.travelLight.intensity = (12 + 8 * Math.random()) * o));
              }
              let e1 = -9999,
                e3 = -9999,
                e8 = !1,
                e9 = (e) => {
                  ((e1 = e.clientX), (e3 = e.clientY), (e8 = !1));
                };
              document.addEventListener("mousemove", e9);
              let e5 = (e) => {
                  "touch" === e.pointerType &&
                    ((e1 = e.clientX), (e3 = e.clientY), (e8 = !0), (ev = !1));
                },
                e4 = (e) => {
                  "touch" === e.pointerType &&
                    ((e1 = e.clientX), (e3 = e.clientY), (e8 = !0));
                },
                e6 = (e) => {
                  "touch" === e.pointerType && ((e1 = -9999), (e3 = -9999));
                };
              (document.addEventListener("pointerdown", e5),
                document.addEventListener("pointermove", e4),
                document.addEventListener("pointerup", e6),
                document.addEventListener("pointercancel", e6));
              let e7 = 0,
                te = null,
                tt = !1;
              function to(e) {
                te = requestAnimationFrame(to);
                let t = Math.min((e - e7) / 1e3, 0.05);
                ((e7 = e),
                  (eg += t),
                  (function () {
                    let e = el();
                    if (!eM.length) {
                      ((eE = 0), (eR = 0));
                      return;
                    }
                    let t = Math.max(0, e_ - 0.5 * eu),
                      o = Math.max(t + 1, eS - 0.5 * eu),
                      r = ea((e - t) / (o - t));
                    ((eR += (r - eR) * 0.14), 0 === r && (eR = 0), (eE = eR));
                  })());
                let o = el(),
                  r = ey.some((e) => e.on) || eQ.some((e) => e.on),
                  n = eY.length > 0,
                  i = eA.some((e) => e.opacity > 0.001);
                if (!(eE > 5e-4 || r || n || i)) {
                  !tt &&
                    ec &&
                    (ec.clearRect(0, 0, ed, eu), em && em.clear(), (tt = !0));
                  return;
                }
                if (
                  ((tt = !1),
                  (ek = eG(eM, 1)),
                  (eX = eG(eL, 2.3)),
                  (eP = eG(eT, 3.7)),
                  ec)
                ) {
                  let e, r;
                  (ec.clearRect(0, 0, ed, eu),
                    ec.save(),
                    ec.beginPath(),
                    ec.rect(0, 0, ed, eu),
                    ec.clip(),
                    eU(ek, eE, o),
                    eU(eX, eE, o),
                    eU(eP, eE, o),
                    ec &&
                      eA.forEach((e) => {
                        let t = e.dotY - o;
                        t < -20 ||
                          t > eu + 20 ||
                          (ec.save(),
                          (ec.fillStyle = "rgba(215,215,205,1)"),
                          (ec.globalAlpha = 0.55),
                          ec.beginPath(),
                          ec.arc(e.dotX, t, 1.5, 0, 2 * Math.PI),
                          ec.fill(),
                          ec.restore());
                      }),
                    !(eE <= 0.005) &&
                      ec &&
                      [ek, eX, eP].forEach((e) => {
                        if (!e.length) return;
                        let t = e[0];
                        for (let o = e.length - 1; o >= 0; o--)
                          if (e[o].t <= eE) {
                            t = e[o];
                            break;
                          }
                        let r = t.y - o;
                        r < -10 ||
                          r > eu + 10 ||
                          t.x < 0 ||
                          t.x > ed ||
                          (ec.save(),
                          (ec.fillStyle = "rgba(200,200,200,1)"),
                          (ec.globalAlpha = 0.85),
                          ec.beginPath(),
                          ec.arc(t.x, r, 1.5, 0, 2 * Math.PI),
                          ec.fill(),
                          ec.restore());
                      }),
                    ec.restore(),
                    (e = e_),
                    [ek, eX, eP].forEach((t) => {
                      for (let o = t.length - 1; o >= 0; o--)
                        if (t[o].t <= eE) {
                          t[o].y > e && (e = t[o].y);
                          break;
                        }
                    }),
                    (r = e),
                    eA.forEach((e) => {
                      let t = +(r >= e.dotY);
                      (e._touched ||
                        1 !== t ||
                        ((e._touched = !0),
                        (function (e, t) {
                          let o = Math.random() > 0.5 ? 1 : 2;
                          for (let r = 0; r < o; r++) {
                            let o = Math.random() * Math.PI * 2,
                              r = 30 + 30 * Math.random(),
                              n = e + Math.cos(o) * r,
                              i = t + Math.sin(o) * r;
                            for (let o = 0; o < 5; o++) {
                              let o =
                                eQ.find((e) => !e.on) ||
                                eQ[Math.floor(8 * Math.random())];
                              (e0(o, e, t, n, i),
                                (o.life += 0.03 * Math.random()),
                                (o.max = o.life));
                            }
                          }
                          eY.push({
                            flash: !0,
                            x: e,
                            y: t,
                            life: 0.1,
                            maxLife: 0.1,
                          });
                        })(e.dotX, e.dotY),
                        (function () {
                          if (!L.current) return;
                          eD();
                          let e = () => {
                            if (eH && eW && eq)
                              try {
                                let e = eW.createGain();
                                e.gain.setValueAtTime(0.22, eW.currentTime);
                                let t = eW.createBufferSource();
                                ((t.buffer = eq),
                                  (t.playbackRate.value = 1),
                                  t.connect(e),
                                  e.connect(eW.destination),
                                  t.start(0),
                                  setTimeout(() => {
                                    try {
                                      (e.gain.cancelScheduledValues(
                                        eW.currentTime,
                                      ),
                                        e.gain.setValueAtTime(
                                          e.gain.value,
                                          eW.currentTime,
                                        ),
                                        e.gain.linearRampToValueAtTime(
                                          1e-4,
                                          eW.currentTime + 0.04,
                                        ),
                                        setTimeout(() => {
                                          try {
                                            t.stop();
                                          } catch (e) {}
                                        }, 60));
                                    } catch (e) {}
                                  }, 180));
                              } catch (e) {}
                          };
                          eW && "suspended" === eW.state
                            ? eW
                                .resume()
                                .then(e)
                                .catch(() => {})
                            : e();
                        })()),
                        0 === t && (e._touched = !1),
                        (e.opacity += (t - e.opacity) * 0.09),
                        (e.el.style.opacity = Math.min(
                          1,
                          Math.max(0, e.opacity),
                        ).toFixed(3)));
                    }),
                    (function (e) {
                      if (eE < 0.01) return;
                      let t = [ek, eX, eP],
                        o = -1,
                        r = null;
                      for (let n = 0; n < 3; n++) {
                        let i = (function (e, t, o, r) {
                          let n = null,
                            i = 324;
                          for (let l = 0; l < e.length && !(e[l].t > eE); l++) {
                            let a = e[l].y - r - o,
                              s = e[l].x - t,
                              c = s * s + a * a;
                            c < i && ((i = c), (n = e[l]));
                          }
                          return n;
                        })(t[n], e1, e3, e);
                        if (i) {
                          ((o = n), (r = i));
                          break;
                        }
                      }
                      if (r) {
                        if (
                          (!ev &&
                            eb &&
                            ((ev = !0),
                            (ex = 5 + Math.floor(2 * Math.random())),
                            (ej = !1),
                            (eb = !1)),
                          ew <= 0 && ex > 0)
                        ) {
                          let e = [0, 1, 2]
                            .filter((e) => e !== o)
                            .map((e) => t[e]);
                          (ey.forEach((t) => {
                            let o = e[Math.floor(Math.random() * e.length)],
                              n = null,
                              i = 1 / 0;
                            for (
                              let e = 0;
                              e < o.length && !(o[e].t > eE);
                              e++
                            ) {
                              let t = o[e].x - r.x,
                                l = o[e].y - r.y,
                                a = t * t + l * l;
                              a < i && ((i = a), (n = o[e]));
                            }
                            n && e0(t, r.x, r.y, n.x, n.y);
                          }),
                            ej ||
                              (!(function () {
                                if (!L.current) return;
                                eD();
                                let e = () => {
                                  if (eH && eW && eq)
                                    try {
                                      ez(0.015);
                                      let e = eW.createGain();
                                      e.gain.setValueAtTime(
                                        0.22,
                                        eW.currentTime,
                                      );
                                      let t = eW.createBufferSource();
                                      ((t.buffer = eq),
                                        (t.playbackRate.value = 1),
                                        t.connect(e),
                                        e.connect(eW.destination),
                                        (eO = t),
                                        (e$ = e),
                                        t.start(0),
                                        (t.onended = () => {
                                          eO === t &&
                                            ((eO = null), (e$ = null));
                                        }));
                                    } catch (e) {}
                                };
                                eW && "suspended" === eW.state
                                  ? eW
                                      .resume()
                                      .then(e)
                                      .catch(() => {})
                                  : e();
                              })(),
                              (ej = !0)),
                            --ex <= 0 && ez(0.05),
                            (ew = 0.04 + 0.06 * Math.random()));
                        }
                      } else {
                        let e = ev;
                        ((ev = !1),
                          (eb = !0),
                          e8 || (e && ez(0.05), (ex = 0), (ej = !1)));
                      }
                    })(o),
                    (ew = Math.max(0, ew - t)),
                    ec &&
                      ey.forEach((e) => {
                        if (!e.on) {
                          (e.glowTubes.forEach((e) => {
                            ((e.group.visible = !1), (e.material.opacity = 0));
                          }),
                            e.branchGlowTubes &&
                              e.branchGlowTubes.forEach((e) => {
                                ((e.group.visible = !1),
                                  (e.material.opacity = 0));
                              }),
                            (e.travelLight.intensity = 0),
                            (e.coreLine.material.opacity = 0),
                            e.branchCoreLine &&
                              (e.branchCoreLine.material.opacity = 0));
                          return;
                        }
                        if (((e.life -= t), e.life <= 0)) {
                          ((e.on = !1),
                            e.glowTubes.forEach((e) => {
                              ((e.group.visible = !1),
                                (e.material.opacity = 0));
                            }),
                            e.branchGlowTubes &&
                              e.branchGlowTubes.forEach((e) => {
                                ((e.group.visible = !1),
                                  (e.material.opacity = 0));
                              }),
                            (e.travelLight.intensity = 0),
                            (e.coreLine.material.opacity = 0),
                            e.branchCoreLine &&
                              (e.branchCoreLine.material.opacity = 0));
                          return;
                        }
                        e2(e, o);
                      }),
                    ec &&
                      ((eY = eY.filter((e) => {
                        if (((e.life -= t), e.life <= 0)) return !1;
                        let r = e.life / e.maxLife,
                          n = 13 * (1 - r),
                          i = 0.75 * r;
                        ec.save();
                        let l = ec.createRadialGradient(
                          e.x,
                          e.y - o,
                          0,
                          e.x,
                          e.y - o,
                          Math.max(0.1, n),
                        );
                        return (
                          l.addColorStop(0, `rgba(200,230,255,${i})`),
                          l.addColorStop(0.5, `rgba(40,120,255,${0.5 * i})`),
                          l.addColorStop(1, "rgba(0,0,0,0)"),
                          (ec.fillStyle = l),
                          ec.beginPath(),
                          ec.arc(
                            e.x,
                            e.y - o,
                            Math.max(0.1, n),
                            0,
                            2 * Math.PI,
                          ),
                          ec.fill(),
                          ec.restore(),
                          !0
                        );
                      })),
                      eQ.forEach((e) => {
                        if (!e.on) {
                          (e.glowTubes.forEach((e) => {
                            ((e.group.visible = !1), (e.material.opacity = 0));
                          }),
                            e.branchGlowTubes &&
                              e.branchGlowTubes.forEach((e) => {
                                ((e.group.visible = !1),
                                  (e.material.opacity = 0));
                              }),
                            (e.travelLight.intensity = 0),
                            (e.coreLine.material.opacity = 0),
                            e.branchCoreLine &&
                              (e.branchCoreLine.material.opacity = 0));
                          return;
                        }
                        if (((e.life -= t), e.life <= 0)) {
                          ((e.on = !1),
                            e.glowTubes.forEach((e) => {
                              ((e.group.visible = !1),
                                (e.material.opacity = 0));
                            }),
                            e.branchGlowTubes &&
                              e.branchGlowTubes.forEach((e) => {
                                ((e.group.visible = !1),
                                  (e.material.opacity = 0));
                              }),
                            (e.travelLight.intensity = 0),
                            (e.coreLine.material.opacity = 0),
                            e.branchCoreLine &&
                              (e.branchCoreLine.material.opacity = 0));
                          return;
                        }
                        e2(e, o);
                      })),
                    em && ep && ef && em.render(ep, ef));
                }
              }
              function tr() {
                ((ed = window.innerWidth),
                  (eu = window.innerHeight),
                  document.documentElement.scrollHeight,
                  es && ((es.width = ed), (es.height = eu)),
                  em &&
                    ef &&
                    (em.setSize(ed, eu),
                    (ef.left = 0),
                    (ef.right = ed),
                    (ef.top = 0),
                    (ef.bottom = -eu),
                    ef.updateProjectionMatrix()),
                  eZ());
              }
              let tn = null,
                ti = 0,
                tl = null,
                ta = null,
                ts = null,
                tc = null;
              function td() {
                if (
                  ((es = document.querySelector("#line-canvas")),
                  (eh = document.querySelector("#spark-webgl-canvas")),
                  es && eh)
                ) {
                  (es.parentNode !== document.body &&
                    ((tl = es.parentNode),
                    (ta = es.nextSibling),
                    document.body.appendChild(es)),
                    eh.parentNode !== document.body &&
                      ((ts = eh.parentNode),
                      (tc = eh.nextSibling),
                      document.body.appendChild(eh)),
                    em ||
                      ((em = new f.WebGLRenderer({
                        canvas: eh,
                        antialias: !0,
                        alpha: !0,
                        powerPreference: "high-performance",
                      })).setPixelRatio(Math.min(window.devicePixelRatio, 1.5)),
                      (em.toneMapping = f.ACESFilmicToneMapping),
                      (em.toneMappingExposure = 1.1),
                      (ep = new f.Scene()),
                      ((ef = new f.OrthographicCamera(
                        0,
                        window.innerWidth,
                        0,
                        -window.innerHeight,
                        0.1,
                        100,
                      )).position.z = 10)),
                    (ec = es.getContext("2d")),
                    te && (cancelAnimationFrame(te), (te = null)),
                    tn && window.removeEventListener("resize", tn),
                    (eQ = []));
                  for (let e = 0; e < 8; e++) eQ.push(eK(!0));
                  ey = [];
                  for (let e = 0; e < 6; e++) ey.push(eK(!1));
                  (document.querySelectorAll(".project-card").forEach((e) => {
                    ((e.style.opacity = "0"), (e.style.transition = "none"));
                  }),
                    (ti = window.innerWidth),
                    tr(),
                    (tn = ((e, t = 200) => {
                      let o = null;
                      return (...r) => {
                        (o && clearTimeout(o),
                          (o = setTimeout(() => e(...r), t)));
                      };
                    })(() => {
                      window.innerWidth !== ti &&
                        ((ti = window.innerWidth), tr());
                    }, 200)),
                    window.addEventListener("resize", tn),
                    (te = requestAnimationFrame((e) => {
                      ((e7 = e), (te = requestAnimationFrame(to)));
                    })));
                }
              }
              ((window.PageLines = {
                init: td,
                rebuild: eZ,
                resetProg: function () {
                  ((eE = 0), (eR = 0));
                },
              }),
                (window._initPageLines = td),
                (window._mouseTilt = {
                  mx: window.innerWidth / 2,
                  my: window.innerHeight / 2,
                }));
              let tu = (e) => {
                ((window._mouseTilt.mx = e.clientX),
                  (window._mouseTilt.my = e.clientY));
              };
              function th() {
                let e;
                ((document.body.style.backgroundColor = "#040508"),
                  V(),
                  c(),
                  J(0),
                  (W = performance.now()));
                let t = document.querySelector("#logo-circle");
                (t &&
                  ((t.style.opacity = "1"),
                  (t.style.visibility = "visible"),
                  (t.style.transform = "perspective(800px)")),
                  (window._thumbAnimReady = !0),
                  (window._thumbAnimDone = !1),
                  ee(),
                  Q(),
                  requestAnimationFrame((e) => {
                    ((y = e), (et = requestAnimationFrame(eo)));
                  }),
                  (e = document.querySelector("#page-header-pin")) &&
                    (ei = n.ScrollTrigger.create({
                      trigger: e,
                      start: "top top",
                      end: "+=100%",
                      pin: !0,
                      pinSpacing: !0,
                      scrub: !0,
                      markers: !1,
                      invalidateOnRefresh: !0,
                      onUpdate: (e) => en(e.progress),
                      onRefresh: (e) => {
                        (q && cancelAnimationFrame(q),
                          (q = requestAnimationFrame(() => {
                            ((q = 0), en(e.progress));
                          })));
                      },
                    })).refresh());
              }
              document.addEventListener("mousemove", tu);
              let tm = window.innerWidth,
                tp = () => {
                  window.innerWidth !== tm &&
                    ((tm = window.innerWidth),
                    ee(),
                    !0 !== window._thumbAnimDone && Q(),
                    ei?.refresh());
                },
                tf = setTimeout(() => {
                  window._thumbAnimReady || td();
                }, 200);
              "complete" === document.readyState
                ? th()
                : window.addEventListener("load", th, { once: !0 });
              let tg = null,
                ty = !1;
              return (
                e
                  .A(80927)
                  .then((e) => {
                    ty || (tg = e.initFlagwave(document.body));
                  })
                  .catch((e) => console.warn("flagwave init failed", e)),
                () => {
                  if (
                    ((ty = !0),
                    tg && tg.dispose(),
                    window.removeEventListener("resize", tp),
                    tn && window.removeEventListener("resize", tn),
                    window.removeEventListener("load", th),
                    document.removeEventListener("mousemove", e9),
                    document.removeEventListener("pointerdown", e5),
                    document.removeEventListener("pointermove", e4),
                    document.removeEventListener("pointerup", e6),
                    document.removeEventListener("pointercancel", e6),
                    document.removeEventListener("mousemove", tu),
                    [
                      "pointerdown",
                      "mousedown",
                      "click",
                      "wheel",
                      "keydown",
                      "touchstart",
                    ].forEach((e) => document.removeEventListener(e, eB)),
                    (m = !0),
                    et && cancelAnimationFrame(et),
                    te && cancelAnimationFrame(te),
                    q && cancelAnimationFrame(q),
                    clearTimeout(tf),
                    ei && ei.kill(),
                    es && ec)
                  )
                    try {
                      ec.clearRect(0, 0, es.width, es.height);
                    } catch {}
                  if (es && tl) {
                    try {
                      tl.insertBefore(es, ta);
                    } catch {
                      es.parentNode?.removeChild(es);
                    }
                    ((tl = null), (ta = null));
                  }
                  if (eh && ts) {
                    try {
                      ts.insertBefore(eh, tc);
                    } catch {
                      eh.parentNode?.removeChild(eh);
                    }
                    ((ts = null), (tc = null));
                  }
                  if (
                    (em &&
                      (em.dispose(),
                      eh &&
                        eh.parentNode === document.body &&
                        document.body.removeChild(eh)),
                    [...ey, ...eQ].forEach((e) => {
                      e.glowTubes &&
                        (e.glowTubes.forEach((e) => {
                          (ep && ep.remove(e.group),
                            e.segments &&
                              e.segments.length > 0 &&
                              (e.segments[0].geometry.dispose(),
                              e.material.dispose()));
                        }),
                        e.glowLines &&
                          e.glowLines.forEach((e) => {
                            (ep && ep.remove(e.line),
                              e.line.geometry.dispose(),
                              e.line.material.dispose());
                          }),
                        e.branchGlowTubes &&
                          e.branchGlowTubes.forEach((e) => {
                            (ep && ep.remove(e.group),
                              e.segments &&
                                e.segments.length > 0 &&
                                (e.segments[0].geometry.dispose(),
                                e.material.dispose()));
                          }),
                        ep && ep.remove(e.travelLight),
                        ep && ep.remove(e.coreLine),
                        e.coreLine &&
                          (e.coreLine.geometry.dispose(),
                          e.coreLine.material.dispose()),
                        ep && e.branchCoreLine && ep.remove(e.branchCoreLine),
                        e.branchCoreLine &&
                          e.branchCoreLine.geometry.dispose());
                    }),
                    delete window._mouseTilt,
                    delete window._thumbAnimReady,
                    delete window._thumbAnimDone,
                    delete window._orbitReady,
                    delete window._initPageLines,
                    delete window.PageLines,
                    ez(0),
                    eW)
                  )
                    try {
                      eW.close();
                    } catch {}
                }
              );
            },
            { scope: A, dependencies: [k] },
          ),
          (0, t.jsxs)("div", {
            ref: A,
            className:
              "bg-[#040508] text-light-font relative overflow-hidden font-sans",
            children: [
              (0, t.jsx)("div", { id: "header-dot" }),
              (0, t.jsx)("div", {
                id: "page-header",
                className: "relative",
                children: (0, t.jsxs)("div", {
                  id: "page-header-pin",
                  className:
                    "h-[100svh] w-full flex flex-col items-center justify-center text-center gap-0",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "absolute inset-0 overflow-hidden z-5 pointer-events-none",
                      children: j.map((e, o) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className:
                              "ft absolute w-43 rounded-sm overflow-hidden opacity-0",
                            children: (0, t.jsx)("img", {
                              src: e,
                              alt: "",
                              className:
                                "w-full aspect-4/3 object-cover block opacity-100",
                            }),
                          },
                          o,
                        ),
                      ),
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "tr__container w-full flex flex-col items-center",
                      children: [
                        (0, t.jsx)("div", {
                          id: "logo-circle",
                          className:
                            "relative w-80 h-80 flex items-center justify-center pointer-events-none z-20 shrink-0 transform-3d will-change-transform",
                          children: (0, t.jsxs)("div", {
                            id: "logo-svg-wrap",
                            className:
                              "absolute inset-0 w-full h-full z-1 pointer-events-none perspective-midrange transform-3d translate-x-[5%]",
                            children: [
                              (0, t.jsxs)("svg", {
                                className: "logo-t-path",
                                id: "t1",
                                style: { opacity: 0 },
                                viewBox: "0 0 578 586",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  (0, t.jsx)("defs", {
                                    children: (0, t.jsx)("clipPath", {
                                      id: "clip1",
                                      children: (0, t.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M47.77 79.8L43.25 83.57L42.49 456.39L43.25 466.93L45.51 469.95L49.27 470.7L87.68 439.82L121.58 409.69L123.08 262.07L228.53 362.99L234.55 361.49L290.29 313.28L291.04 307.26L95.97 121.22L52.28 81.31Z",
                                      }),
                                    }),
                                  }),
                                  (0, t.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M47.77 79.8L43.25 83.57L42.49 456.39L43.25 466.93L45.51 469.95L49.27 470.7L87.68 439.82L121.58 409.69L123.08 262.07L228.53 362.99L234.55 361.49L290.29 313.28L291.04 307.26L95.97 121.22L52.28 81.31Z",
                                    fill: "none",
                                    stroke: "#FFFFFF",
                                    strokeWidth: "1.5",
                                    strokeOpacity: "0.85",
                                  }),
                                  (0, t.jsx)("g", {
                                    clipPath: "url(#clip1)",
                                    id: "particles1",
                                  }),
                                  (0, t.jsx)("g", {
                                    clipPath: "url(#clip1)",
                                    id: "lightning1",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("svg", {
                                className: "logo-t-path",
                                id: "t2",
                                style: { opacity: 0 },
                                viewBox: "0 0 578 586",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  (0, t.jsx)("defs", {
                                    children: (0, t.jsx)("clipPath", {
                                      id: "clip2",
                                      children: (0, t.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M458.25 82.06L453.73 81.31L265.43 243.24L265.43 250.77L304.6 287.68L310.62 288.43L459.75 159.64L460.51 85.07Z",
                                      }),
                                    }),
                                  }),
                                  (0, t.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M458.25 82.06L453.73 81.31L265.43 243.24L265.43 250.77L304.6 287.68L310.62 288.43L459.75 159.64L460.51 85.07Z",
                                    fill: "none",
                                    stroke: "#E5A83B",
                                    strokeWidth: "1.5",
                                    strokeOpacity: "0.9",
                                  }),
                                  (0, t.jsx)("g", {
                                    clipPath: "url(#clip2)",
                                    id: "particles2",
                                  }),
                                  (0, t.jsx)("g", {
                                    clipPath: "url(#clip2)",
                                    id: "lightning2",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("svg", {
                                className: "logo-t-path",
                                id: "t3",
                                style: { opacity: 0 },
                                viewBox: "0 0 578 586",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  (0, t.jsx)("defs", {
                                    children: (0, t.jsx)("clipPath", {
                                      id: "clip3",
                                      children: (0, t.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M453.73 191.27L360.33 271.86L358.83 274.87L358.83 408.18L364.85 415.72L452.22 494.8L457.49 494.8L460.51 490.28L460.51 194.28L457.49 191.27Z",
                                      }),
                                    }),
                                  }),
                                  (0, t.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M453.73 191.27L360.33 271.86L358.83 274.87L358.83 408.18L364.85 415.72L452.22 494.8L457.49 494.8L460.51 490.28L460.51 194.28L457.49 191.27Z",
                                    fill: "none",
                                    stroke: "#E5A83B",
                                    strokeWidth: "1.5",
                                    strokeOpacity: "0.9",
                                  }),
                                  (0, t.jsx)("g", {
                                    clipPath: "url(#clip3)",
                                    id: "particles3",
                                  }),
                                  (0, t.jsx)("g", {
                                    clipPath: "url(#clip3)",
                                    id: "lightning3",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)(a.BlurTextReveal, {
                          as: "h1",
                          text: "Beyond Ordinary",
                          animationType: "chars",
                          stagger: 0.08,
                          className: "z-2 mb-6",
                          once: !0,
                        }),
                        (0, t.jsx)("div", {
                          id: "line-origin",
                          className:
                            "absolute w-0 h-0 top-1/2 left-1/2 pointer-events-none invisible",
                        }),
                        (0, t.jsxs)(s.FadeInOnScroll, {
                          className: "small",
                          delay: 0.5,
                          children: [
                            "Distinctive brands, intelligent software, ",
                            (0, t.jsx)("br", {}),
                            "limitless possibilities.",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "flex items-center absolute bottom-14 left-0 w-full justify-center text-light-font opacity-50 pointer-events-none banner-scroll",
                      children: (0, t.jsx)(p.default, {}),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("canvas", {
                id: "line-canvas",
                className:
                  "fixed top-0 left-0 pointer-events-none z-2 will-change-contents",
              }),
              (0, t.jsx)("canvas", {
                id: "spark-webgl-canvas",
                className:
                  "fixed top-0 left-0 pointer-events-none z-3 will-change-contents",
              }),
              (0, t.jsx)("main", {
                id: "projects-grid",
                className: "relative py-10 lg:py-20 z-10 flex flex-col gap-20",
                children: g.projects.map((e, r) =>
                  (0, t.jsxs)(
                    "article",
                    {
                      className: "project-card",
                      "data-pos": e.pos,
                      "data-size": e.size,
                      "data-slug": e.slug,
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "card-thumb overflow-hidden mb-6 rounded-sm relative",
                          children: (0, t.jsx)("a", {
                            href: "#",
                            "data-slug": e.slug,
                            onClick: (ev) => {
                              ev.preventDefault();
                              ev.stopPropagation();
                              setActiveSlug(e.slug);
                              setActiveTab("challenge");
                              document.body.style.overflow = "hidden";
                              history.pushState(null, "", "/work/" + e.slug);
                            },
                            className: "thumb-link cursor-pointer block",
                            "aria-label": `Open ${e.title}`,
                            children: (0, t.jsx)("img", {
                              src: e.image,
                              alt: e.title,
                              className: "rounded-sm",
                            }),
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "card-info flex flex-col gap-4",
                          children: [
                            (0, t.jsx)("div", {
                              className: "flex justify-between",
                              children: (0, t.jsx)("h2", {
                                className: "h3 w-7/12",
                                children: e.title,
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex flex-col sm:flex-row justify-between gap-10",
                              children: [
                                (0, t.jsx)("p", {
                                  className:
                                    "text-light-font/60 w-full sm:w-7/12 small max-w-80 4xl:max-w-75",
                                  children: (0, o.default)(
                                    Array.isArray(e.subTitle)
                                      ? e.subTitle.join("")
                                      : e.subTitle,
                                  ),
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "w-full sm:w-5/12 flex sm:justify-end",
                                  children: (0, t.jsx)(c.WordShiftButton, {
                                    text: "EXPLORE PROJECT",
                                    label: e.slug,
                                    type: "button",
                                    "data-slug": e.slug,
                                    onClick: (ev) => {
                                      ev.preventDefault();
                                      ev.stopPropagation();
                                      setActiveSlug(e.slug);
                                      setActiveTab("challenge");
                                      document.body.style.overflow = "hidden";
                                      history.pushState(null, "", "/work/" + e.slug);
                                    },
                                    styleVars: {
                                      buttonWrapperColor: "#D8D8D8",
                                    },
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    r,
                  ),
                ),
              }),
              (0, t.jsx)("div", {
                id: "contact-section",
                className: "py-20 lg:py-37.5",
                children: (0, t.jsxs)("div", {
                  className: "tr__container flex flex-col gap-10 items-center",
                  children: [
                    (0, t.jsx)("div", {
                      id: "contact-btn",
                      children: (0, t.jsx)(d.ContactCTA, {
                        text: "Contact Us",
                        styleVars: { buttonWrapperColor: "#D8D8D8" },
                      }),
                    }),
                    (0, t.jsx)("h3", {
                      className: "text-center text-light-font max-w-258",
                      children:
                        "Over the years, we have delivered successful projects for clients worldwide, and if you would like to explore work related to your requirements, we would be happy to share relevant examples.",
                    }),
                  ],
                }),
              }),
              R &&
                (0, t.jsx)("div", {
                  className: "tr__container",
                  children: (0, t.jsx)(u.default, {
                    lineClass: "bg-[#2F323B] left-1/2! -translate-x-1/2",
                    plusClass: "col-span-12 mx-auto",
                    iconColor: "#D8D8D8",
                  }),
                }),
              (() => {
                if (!activeSlug) return null;
                let activeProject = g.projects.find((p) => p.slug === activeSlug);
                if (!activeProject) return null;
                let idx = g.projects.findIndex((p) => p.slug === activeSlug);
                let prevProject = g.projects[(idx - 1 + g.projects.length) % g.projects.length];
                let nextProject = g.projects[(idx + 1) % g.projects.length];
                let prevSlug = prevProject.slug;
                let nextSlug = nextProject.slug;
                let closeModal = () => {
                  setActiveSlug(null);
                  document.body.style.overflow = "";
                  if (window.location.pathname !== "/work") history.pushState(null, "", "/work");
                };
                let navigateTo = (slug) => {
                  setActiveSlug(slug);
                  setActiveTab("challenge");
                  history.pushState(null, "", "/work/" + slug);
                  let overlay = document.getElementById("project-detail-overlay");
                  if (overlay) overlay.scrollTo({ top: 0, behavior: "smooth" });
                };
                let challengeContent = (activeProject.tabs || []).find((tb) => tb.id === "challenge")?.content || "";
                let approachContent = (activeProject.tabs || []).find((tb) => tb.id === "approach")?.content || "";
                let outcomeContent = (activeProject.tabs || []).find((tb) => tb.id === "outcome")?.content || "";
                let currentTabContent = (activeProject.tabs || []).find((tb) => tb.id === activeTab)?.content || (activeProject.tabs && activeProject.tabs[0]?.content) || "";
                return (0, t.jsxs)("div", {
                  id: "project-detail-overlay",
                  className: "is-active",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "cs-header",
                      children: [
                        (0, t.jsxs)("button", {
                          type: "button",
                          className: "cs-back-link",
                          onClick: closeModal,
                          children: [
                            (0, t.jsx)("span", { children: "←" }),
                            (0, t.jsx)("span", { children: "BACK TO WORK" })
                          ]
                        }),
                        (0, t.jsxs)("div", {
                          style: { display: "flex", alignItems: "center", gap: "1rem" },
                          children: [
                            (0, t.jsxs)("a", {
                              href: activeProject.buttonUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "cs-header-live-btn",
                              children: [
                                (0, t.jsx)("span", { children: "LIVE SITE" }),
                                (0, t.jsx)("span", { children: "↗" })
                              ]
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              className: "cs-close-btn",
                              onClick: closeModal,
                              "aria-label": "Close",
                              children: "✕"
                            })
                          ]
                        })
                      ]
                    }),
                    (0, t.jsx)("div", {
                      className: "cs-container",
                      children: (0, t.jsxs)("div", {
                        className: "cs-grid",
                        children: [
                          /* LEFT STICKY COLUMN */
                          (0, t.jsxs)("div", {
                            className: "cs-left-sticky",
                            children: [
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "cs-breadcrumb",
                                    children: [
                                      (0, t.jsx)("span", { children: "✦ MAVON" }),
                                      (0, t.jsx)("span", { style: { opacity: 0.4 }, children: "/" }),
                                      (0, t.jsx)("span", { children: "CASE STUDY" })
                                    ]
                                  }),
                                  (0, t.jsx)("h1", {
                                    className: "cs-title",
                                    children: activeProject.title
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "cs-subtitle",
                                    children: Array.isArray(activeProject.subTitle) ? activeProject.subTitle.join("") : activeProject.subTitle
                                  }),
                                  (0, t.jsx)("ul", {
                                    className: "cs-categories",
                                    children: (activeProject.category || []).map((cat, ci) => (0, t.jsx)("li", { children: cat }, ci))
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "cs-tabs-section",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "cs-tabs-bar",
                                        children: [
                                          { id: "challenge", label: "THE CHALLENGE" },
                                          { id: "approach", label: "APPROACH" },
                                          { id: "outcome", label: "OUTCOME" },
                                          { id: "wedid", label: "WHAT WE DID" }
                                        ].map((tb) => (0, t.jsx)("button", {
                                          type: "button",
                                          className: "cs-tab-btn " + (activeTab === tb.id ? "active" : ""),
                                          onClick: () => setActiveTab(tb.id),
                                          children: tb.label
                                        }, tb.id))
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "cs-tab-content",
                                        dangerouslySetInnerHTML: { __html: currentTabContent }
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, t.jsxs)("div", {
                                className: "cs-actions-row",
                                children: [
                                  (0, t.jsxs)("a", {
                                    href: activeProject.buttonUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "cs-live-cta",
                                    children: [
                                      (0, t.jsx)("span", { children: "EXPLORE LIVE SITE" }),
                                      (0, t.jsx)("span", { children: "↗" })
                                    ]
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "cs-nav-btns",
                                    children: [
                                      (0, t.jsx)("button", {
                                        type: "button",
                                        className: "cs-nav-btn",
                                        onClick: () => navigateTo(prevSlug),
                                        children: "← PREV"
                                      }),
                                      (0, t.jsx)("span", { style: { color: "rgba(255,255,255,0.2)" }, children: "/" }),
                                      (0, t.jsx)("button", {
                                        type: "button",
                                        className: "cs-nav-btn",
                                        onClick: () => navigateTo(nextSlug),
                                        children: "NEXT →"
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          }),
                          /* RIGHT SCROLLABLE SHOWCASE COLUMN */
                          (0, t.jsxs)("div", {
                            className: "cs-right-scroll",
                            children: [
                              /* Hero Browser Card */
                              (0, t.jsxs)("div", {
                                className: "cs-gallery-card",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "cs-gallery-topbar",
                                    children: [
                                      (0, t.jsx)("span", { className: "cs-dot red" }),
                                      (0, t.jsx)("span", { className: "cs-dot yellow" }),
                                      (0, t.jsx)("span", { className: "cs-dot green" }),
                                      (0, t.jsx)("span", { className: "cs-url-bar", children: activeProject.buttonUrl })
                                    ]
                                  }),
                                  (0, t.jsx)("img", {
                                    src: activeProject.image,
                                    alt: activeProject.title,
                                    className: "cs-gallery-img"
                                  })
                                ]
                              }),
                              /* Dual Experience Spotlight Cards */
                              (0, t.jsxs)("div", {
                                className: "cs-gallery-dual",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "cs-feature-card",
                                    children: [
                                      (0, t.jsx)("div", { className: "cs-feature-badge", children: "OVERVIEW" }),
                                      (0, t.jsx)("h3", { className: "cs-feature-title", children: "Architectural Intent" }),
                                      (0, t.jsx)("p", { className: "cs-feature-desc", children: challengeContent })
                                    ]
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "cs-feature-card gold-border",
                                    children: [
                                      (0, t.jsx)("div", { className: "cs-feature-badge gold", children: "EXECUTION" }),
                                      (0, t.jsx)("h3", { className: "cs-feature-title", children: "Craft & Innovation" }),
                                      (0, t.jsx)("p", { className: "cs-feature-desc", children: approachContent })
                                    ]
                                  })
                                ]
                              }),
                              /* Outcome Banner */
                              outcomeContent ? (0, t.jsxs)("div", {
                                className: "cs-feature-card",
                                style: { background: "linear-gradient(135deg, #101216 0%, #171510 100%)", border: "1px solid rgba(229, 168, 59, 0.2)" },
                                children: [
                                  (0, t.jsx)("div", { className: "cs-feature-badge gold", children: "IMPACT & OUTCOME" }),
                                  (0, t.jsx)("h3", { className: "cs-feature-title", children: "Digital Distinction" }),
                                  (0, t.jsx)("p", { className: "cs-feature-desc", children: outcomeContent })
                                ]
                              }) : null,
                              /* Next Project Teaser Banner */
                              (0, t.jsxs)("div", {
                                className: "cs-next-teaser",
                                onClick: () => navigateTo(nextSlug),
                                children: [
                                  (0, t.jsx)("div", { className: "cs-next-label", children: "NEXT PROJECT →" }),
                                  (0, t.jsx)("div", { className: "cs-next-title", children: nextProject.title }),
                                  (0, t.jsx)("div", { className: "cs-next-sub", children: Array.isArray(nextProject.subTitle) ? nextProject.subTitle.join("") : nextProject.subTitle }),
                                  (0, t.jsx)("div", {
                                    className: "cs-next-thumb-wrap",
                                    children: (0, t.jsx)("img", {
                                      src: nextProject.image,
                                      alt: nextProject.title,
                                      className: "cs-next-thumb"
                                    })
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    })
                  ]
                });})(),
            ],
          })
        );
      },
    ]);
  },
]);
