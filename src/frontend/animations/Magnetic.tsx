"use client";

import React, { useRef, useState } from "react";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number; // 0.1 to 0.6
  className?: string;
}

export function Magnetic({
  children,
  strength = 0.3,
  className = "",
}: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition:
          position.x === 0 && position.y === 0
            ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
            : "transform 0.1s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
