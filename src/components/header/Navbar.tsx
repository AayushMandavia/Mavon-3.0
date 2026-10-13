"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSiteSound } from "../audio/SoundContext";
import { NavigationMenu } from "./NavigationMenu";
import { Magnetic } from "../../frontend/animations/Magnetic";

export function Navbar() {
  const { soundEnabled, toggleSound, playSfx } = useSiteSound();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300 backdrop-blur-xs bg-[#040508]/40 border-b border-[#2f323b]/30">
        {/* Logo */}
        <Link
          href="/work"
          className="flex items-center gap-3 group"
          onMouseEnter={() => playSfx("beep")}
        >
          {/* MAVON Wordmark / Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black tracking-[0.25em] text-[#d8d8d8] group-hover:text-white transition-colors duration-300 font-display">
              MAVON
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d8d8d8] group-hover:bg-white animate-pulse" />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-mono text-zinc-400">
          <a
            href="#projects-grid"
            className="text-white hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
          >
            Work
          </a>
          <a
            href="#projects-grid"
            className="hover:text-white transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#page-header"
            className="hover:text-white transition-colors py-1"
          >
            About
          </a>
          <a
            href="#site-footer"
            className="hover:text-white transition-colors py-1"
          >
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Sound Toggle with Magnetic Pull */}
          <Magnetic strength={0.25}>
            <button
              onClick={toggleSound}
              aria-label="Toggle ambient soundtrack"
              className="flex items-center gap-2.5 px-3 py-1.5 border border-zinc-800 rounded-full text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300"
            >
              <span className="flex items-end gap-[3px] h-3.5 w-3.5 pb-0.5">
                <span
                  className={`w-[2px] bg-current transition-all duration-300 ${
                    soundEnabled ? "h-full animate-bounce" : "h-1"
                  }`}
                />
                <span
                  className={`w-[2px] bg-current transition-all duration-300 ${
                    soundEnabled
                      ? "h-3 animate-bounce [animation-delay:0.15s]"
                      : "h-2"
                  }`}
                />
                <span
                  className={`w-[2px] bg-current transition-all duration-300 ${
                    soundEnabled
                      ? "h-2 animate-bounce [animation-delay:0.3s]"
                      : "h-1"
                  }`}
                />
              </span>
              <span className="hidden sm:inline">
                {soundEnabled ? "Sound On" : "Sound Off"}
              </span>
            </button>
          </Magnetic>

          {/* Menu Hamburger Button with Magnetic Pull */}
          <Magnetic strength={0.35}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
              className="flex flex-col justify-center items-center w-9 h-9 border border-zinc-800 rounded-full hover:border-zinc-500 transition-colors p-2 gap-1.5"
            >
              <span
                className={`block w-4 h-[1.5px] bg-[#d8d8d8] transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-[#d8d8d8] transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              />
            </button>
          </Magnetic>
        </div>
      </header>

      {/* Slide-out Menu Overlay */}
      <NavigationMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
