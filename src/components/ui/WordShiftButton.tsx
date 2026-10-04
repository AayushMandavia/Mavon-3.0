"use client";

import React from "react";
import { useSiteSound } from "../audio/SoundContext";

interface WordShiftButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "underline" | "outline" | "pill";
}

export function WordShiftButton({
  text,
  onClick,
  href,
  className = "",
  variant = "underline",
}: WordShiftButtonProps) {
  const { playSfx } = useSiteSound();

  const handleMouseEnter = () => {
    playSfx("beep");
  };

  const content = (
    <div
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-3 cursor-pointer py-1.5 transition-colors duration-300 ${className}`}
    >
      <span className="relative overflow-hidden inline-flex text-xs uppercase tracking-[0.2em] font-mono text-[#d8d8d8] group-hover:text-white transition-colors duration-300">
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-white font-bold">
          {text}
        </span>
      </span>

      <span className="relative flex items-center justify-center w-5 h-5 overflow-hidden">
        <svg
          width="12"
          height="12"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M5.47372 8.652V6.552L8.32972 3.752V4.9L5.47372 2.1V-3.09944e-06L9.32372 3.836V4.816L5.47372 8.652ZM-0.000281237 5.11V3.542H8.60972V5.11H-0.000281237Z"
            fill="currentColor"
            className="text-[#d8d8d8] group-hover:text-white transition-colors duration-300"
          />
        </svg>
      </span>

      {variant === "underline" && (
        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#2f323b] overflow-hidden">
          <span className="absolute inset-0 bg-[#d8d8d8] -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
