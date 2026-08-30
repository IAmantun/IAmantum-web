"use client";

import { useEffect, useRef } from "react";

const TAIL_LENGTH = 38; // % of container width
const LEG_DURATION_MS = (2000 * 100) / 62; // keep the original travel speed

export default function NavbarGlow() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let frame = 0;
    const period = LEG_DURATION_MS * 2;

    const tick = (t: number) => {
      const cycle = t % period;
      const theta = (cycle / period) * Math.PI * 2;

      // smooth sinusoidal easing: zero velocity right at each edge, matching
      // the classic scanner's soft turnaround instead of a sharp triangle wave
      const headPercent = 50 - 50 * Math.cos(theta);
      const goingRight = cycle < period / 2;
      const direction: 1 | -1 = goingRight ? 1 : -1;

      el.style.transform = direction === 1 ? "scaleX(1)" : "scaleX(-1)";
      const boxLeft = direction === 1 ? headPercent - TAIL_LENGTH : headPercent;
      el.style.left = `${boxLeft}%`;

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute top-full -mt-1.5 h-[2px] rounded-full"
      style={{
        width: `${TAIL_LENGTH}%`,
        background:
          "linear-gradient(90deg, transparent 0%, rgba(0,191,255,0.15) 25%, #00BFFF 75%, #eaf9ff 100%)",
        boxShadow: "0 0 6px 1px rgba(0,191,255,0.8)",
        transform: "scaleX(1)",
        transition: "transform 0.3s ease-in-out",
      }}
    />
  );
}
