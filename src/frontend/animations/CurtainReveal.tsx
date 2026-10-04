"use client";

import React, { useEffect, useState } from "react";

interface CurtainRevealProps {
  stripCount?: number;
  durationMs?: number;
  staggerMs?: number;
  direction?: "up" | "down";
  color?: string;
  onFinished?: () => void;
  className?: string;
}

export function CurtainReveal({
  stripCount = 10,
  durationMs = 700,
  staggerMs = 35,
  direction = "up",
  color = "#040508",
  onFinished,
  className = "",
}: CurtainRevealProps) {
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
    }, 100);

    const totalTime = durationMs + stripCount * staggerMs + 150;
    const hideTimer = setTimeout(() => {
      setHidden(true);
      if (onFinished) onFinished();
    }, totalTime);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [durationMs, stripCount, staggerMs, onFinished]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none flex flex-col ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: stripCount }).map((_, index) => {
        const delay = index * staggerMs;
        const transformStyle = closing
          ? direction === "up"
            ? "scaleY(0)"
            : "scaleY(0)"
          : "scaleY(1)";

        return (
          <div
            key={index}
            className="flex-1 w-full -mb-[1px]"
            style={{
              backgroundColor: color,
              transform: transformStyle,
              transformOrigin: direction === "up" ? "top" : "bottom",
              transition: `transform ${durationMs}ms cubic-bezier(0.85, 0, 0.15, 1) ${delay}ms`,
              willChange: "transform",
            }}
          />
        );
      })}
    </div>
  );
}
