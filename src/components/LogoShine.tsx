"use client";

import { useEffect, useState } from "react";

export default function LogoShine() {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setDelay(Math.random() * 5);
  }, []);

  return (
    <svg
      viewBox="0 0 198 220"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoShineGradient" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00BFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00BFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M99,8 L190,110 L99,212 L8,110 Z"
        fill="none"
        stroke="url(#logoShineGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        pathLength={100}
        style={{
          strokeDasharray: "20 80",
          opacity: 1,
          animation: `iamantum-logo-shine 4s linear ${delay}s infinite`,
        }}
      />
      <style>{`
        @keyframes iamantum-logo-shine {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}
