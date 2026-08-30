export default function NavbarGlow() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-full -mt-1.5 h-[3px] w-full overflow-visible"
      viewBox="0 0 100 3"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="navbarGlowGradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="100"
          y2="0"
        >
          <stop offset="0%" stopColor="#00BFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00BFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1="1.5"
        x2="100"
        y2="1.5"
        stroke="url(#navbarGlowGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={100}
        style={{
          strokeDasharray: "25 75",
          animation: "navbar-glow-sweep 2s linear infinite alternate",
        }}
      />
      <style>{`
        @keyframes navbar-glow-sweep {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}
