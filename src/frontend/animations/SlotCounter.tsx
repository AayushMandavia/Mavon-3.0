"use client";

import React, { useEffect, useState } from "react";

interface SlotCounterProps {
  target?: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  padLength?: number;
  className?: string;
  onComplete?: () => void;
}

export function SlotCounter({
  target = 100,
  durationMs = 1500,
  prefix = "",
  suffix = "%",
  padLength = 2,
  className = "",
  onComplete,
}: SlotCounterProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out quartic
      const ease = 1 - Math.pow(1 - progress, 4);
      const val = Math.floor(ease * target);

      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setCurrent(target);
        if (onComplete) onComplete();
      }
    };

    const handle = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(handle);
  }, [target, durationMs, onComplete]);

  return (
    <span
      className={`inline-flex font-mono tabular-nums select-none ${className}`}
    >
      {prefix}
      {String(current).padStart(padLength, "0")}
      {suffix}
    </span>
  );
}
