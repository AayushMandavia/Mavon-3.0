"use client";

import React from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  staggerMs?: number;
  initialDelayMs?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function SplitText({
  text,
  className = "",
  charClassName = "",
  staggerMs = 30,
  initialDelayMs = 0,
  as: Component = "span",
}: SplitTextProps) {
  const characters = text.split("");
  const Tag = Component as any;

  return (
    <Tag className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {characters.map((char, index) => {
        const isSpace = char === " ";
        return (
          <span
            key={index}
            className={`inline-block transition-all duration-700 ${charClassName}`}
            style={{
              transitionDelay: `${initialDelayMs + index * staggerMs}ms`,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {isSpace ? "\u00A0" : char}
          </span>
        );
      })}
    </Tag>
  );
}
