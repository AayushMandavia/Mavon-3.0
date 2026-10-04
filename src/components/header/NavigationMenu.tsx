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
        <nav className="flex flex-col gap-6 py-12">
          {[
            { label: "Work", href: "/work", active: true },
            { label: "Services", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
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
        </nav>

        {/* Contact Info Footer */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span className="block text-zinc-600 uppercase mb-1">
              Business Enquiry:
            </span>
            <a
              href="mailto:hello@trionn.com"
              className="text-[#d8d8d8] hover:text-white transition-colors"
            >
              hello@trionn.com
            </a>
          </div>
          <div>
            <span className="block text-zinc-600 uppercase mb-1">
              Direct Line:
            </span>
            <a
              href="tel:+919824182099"
              className="text-[#d8d8d8] hover:text-white transition-colors"
            >
              +91 98241 82099
            </a>
          </div>
          <div className="pt-4 text-zinc-700">
            © {new Date().getFullYear()} TRIONN. Independent AI-Powered Digital
            Studio.
          </div>
        </div>
      </div>
    </div>
  );
}
