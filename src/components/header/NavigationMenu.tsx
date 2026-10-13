"use client";

import React from "react";
import Link from "next/link";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300">
      <div className="relative w-full max-w-md bg-[#0a0c10] border-l border-zinc-800 h-full p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
        {/* Close Button Header */}
        <div className="flex justify-between items-center pb-8 border-b border-zinc-900">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            Menu Navigation
          </span>
          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            [Close ✕]
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 py-8">
          {[
            { label: "Work", href: "#projects-grid", active: true },
            { label: "Services", href: "#projects-grid" },
            { label: "About", href: "#page-header" },
            { label: "Contact", href: "#site-footer" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={onClose}
              className={`text-4xl md:text-5xl font-display uppercase tracking-wide transition-all duration-300 flex items-center justify-between group ${
                item.active ? "text-white" : "text-zinc-500 hover:text-white"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-sm font-mono text-zinc-600 group-hover:text-white transition-colors">
                0{idx + 1}
              </span>
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/mavon-story"
              onClick={onClose}
              className="inline-block px-4 py-2 rounded-full border border-zinc-700 hover:border-white text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
            >
              ✦ THE MAVON NAME STORY
            </Link>
          </div>
        </nav>

        {/* Contact Info Footer */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span className="block text-zinc-600 uppercase mb-1">
              Business Enquiry:
            </span>
            <a
              href="mailto:mavontechsolutions@gmail.com"
              className="text-[#d8d8d8] hover:text-white transition-colors"
            >
              mavontechsolutions@gmail.com
            </a>
          </div>
          <div>
            <span className="block text-zinc-600 uppercase mb-1">
              Direct Line:
            </span>
            <div className="flex flex-col gap-1">
              <a
                href="tel:+917678046520"
                className="text-[#d8d8d8] hover:text-white transition-colors"
              >
                +91 76780 46520
              </a>
              <a
                href="tel:+917977457097"
                className="text-[#d8d8d8] hover:text-white transition-colors"
              >
                +91 79774 57097
              </a>
            </div>
          </div>
          <div>
            <span className="block text-zinc-600 uppercase mb-1">
              Social:
            </span>
            <a
              href="https://www.instagram.com/_mavon_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d8d8d8] hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
          <div className="pt-2 text-zinc-700">
            © {new Date().getFullYear()} MAVON. Independent AI-Powered Digital
            Studio.
          </div>
        </div>
      </div>
    </div>
  );
}
