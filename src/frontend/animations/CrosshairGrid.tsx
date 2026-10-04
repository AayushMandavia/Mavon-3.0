"use client";

import React from "react";

interface CrosshairGridProps {
  className?: string;
  plusColor?: string;
  lineColor?: string;
}

export function CrosshairGrid({
  className = "",
  plusColor = "#434343",
  lineColor = "rgba(47, 50, 59, 0.3)",
}: CrosshairGridProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Corner crosshairs */}
      <svg
        className="absolute top-6 left-6 w-3 h-3"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="6.5"
          y1="0"
          x2="6.5"
          y2="13"
          stroke={plusColor}
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="6.5"
          x2="13"
          y2="6.5"
          stroke={plusColor}
          strokeWidth="1"
        />
      </svg>

      <svg
        className="absolute top-6 right-6 w-3 h-3"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="6.5"
          y1="0"
          x2="6.5"
          y2="13"
          stroke={plusColor}
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="6.5"
          x2="13"
          y2="6.5"
          stroke={plusColor}
          strokeWidth="1"
        />
      </svg>

      <svg
        className="absolute bottom-6 left-6 w-3 h-3"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="6.5"
          y1="0"
          x2="6.5"
          y2="13"
          stroke={plusColor}
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="6.5"
          x2="13"
          y2="6.5"
          stroke={plusColor}
          strokeWidth="1"
        />
      </svg>

      <svg
        className="absolute bottom-6 right-6 w-3 h-3"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="6.5"
          y1="0"
          x2="6.5"
          y2="13"
          stroke={plusColor}
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="6.5"
          x2="13"
          y2="6.5"
          stroke={plusColor}
          strokeWidth="1"
        />
      </svg>

      {/* Subtle coordinate grid lines */}
      <div
        className="w-full h-full opacity-40"
        style={{
          backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />
    </div>
  );
}
