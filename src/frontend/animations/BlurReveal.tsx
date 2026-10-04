"use client";

import React, { useEffect, useRef, useState } from "react";

interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  initialBlur?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  threshold?: number;
}

export function BlurReveal({
  children,
  delay = 0,
  duration = 800,
  yOffset = 20,
  initialBlur = 12,
  className = "",
  as: Component = "div",
  threshold = 0.1,
}: BlurRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const Tag = Component as any;

  return (
    <Tag
      ref={elementRef}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : `blur(${initialBlur}px)`,
        transform: isVisible ? "translateY(0)" : `translateY(${yOffset}px)`,
        willChange: "filter, opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
