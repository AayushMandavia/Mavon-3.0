"use client";

import React from "react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040508] border-t border-[#2f323b]/60 px-6 md:px-12 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-16 border-b border-[#2f323b]/40">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              Have an ambitious vision?
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white leading-none">
              Let&apos;s build <br />
              <span className="font-editorial italic font-extralight text-zinc-400">
                something iconic.
              </span>
            </h2>
          </div>

          <a
            href="mailto:hello@trionn.com"
            className="group inline-flex items-center gap-4 px-8 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all duration-300"
          >
            <span>hello@trionn.com</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Studio Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-xs font-mono text-zinc-400">
          {/* Col 1: Headquarters */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 uppercase tracking-widest">
              Studio Headquarters
            </span>
            <p className="leading-relaxed text-zinc-300">
              TRIONN Design Studio
              <br />
              Gujarat, India
              <br />
              Worldwide Client Collaborations
            </p>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 uppercase tracking-widest">
              Connect
            </span>
            <a
              href="mailto:hello@trionn.com"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              E: hello@trionn.com
            </a>
            <a
              href="tel:+919824182099"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              P: +91 98241 82099
            </a>
          </div>

          {/* Col 3: Social & Recognitions */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 uppercase tracking-widest">
              Recognition
            </span>
            <div className="flex flex-col gap-1.5 text-zinc-300">
              <a
                href="#awwwards"
                className="hover:text-white"
              >
                ✦ Awwwards Studio
              </a>
              <a
                href="#fwa"
                className="hover:text-white"
              >
                ✦ FWA Winner
              </a>
              <a
                href="#cssda"
                className="hover:text-white"
              >
                ✦ CSSDA Special Kudos
              </a>
            </div>
          </div>

          {/* Col 4: Network */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 uppercase tracking-widest">
              Follow
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-zinc-300">
              <a
                href="#dribbble"
                className="hover:text-white"
              >
                Dribbble
              </a>
              <a
                href="#behance"
                className="hover:text-white"
              >
                Behance
              </a>
              <a
                href="#instagram"
                className="hover:text-white"
              >
                Instagram
              </a>
              <a
                href="#linkedin"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 border-t border-[#2f323b]/40 text-xs font-mono text-zinc-600">
          <div>© {new Date().getFullYear()} TRIONN. All rights reserved.</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
