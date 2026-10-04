"use client";

import React, { useRef, useState } from "react";

interface Card3DTiltProps {
  children: React.ReactNode;
  maxTiltDeg?: number;
  scaleOnHover?: number;
  className?: string;
  onClick?: () => void;
}

export function Card3DTilt({
  children,
  maxTiltDeg = 8,
  scaleOnHover = 1.02,
  className = "",
  onClick,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTiltDeg;
    const rotateY = ((x - centerX) / centerX) * maxTiltDeg;

    setTransform({
      rotateX,
      rotateY,
      scale: scaleOnHover,
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 transform-gpu ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(${transform.scale}, ${transform.scale}, 1)`,
        transition:
          transform.scale === 1
            ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
            : "transform 0.15s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
