export default function NavbarGlow() {
  const connectorPath = "M8,14 L50,6 L92,14";

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-full mt-2.5 h-5 w-full"
      viewBox="0 0 100 20"
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

      {/* static connector: nodes + lines, like a workflow mark */}
      <path d={connectorPath} fill="none" stroke="#00BFFF" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx="8" cy="14" r="2.6" fill="none" stroke="#00BFFF" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="50" cy="6" r="3.2" fill="none" stroke="#00BFFF" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="92" cy="14" r="2.6" fill="none" stroke="#00BFFF" strokeOpacity="0.5" strokeWidth="1.5" />

      {/* traveling glow along the connector */}
      <path
        d={connectorPath}
        fill="none"
        stroke="url(#navbarGlowGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={100}
        style={{
          strokeDasharray: "20 80",
          animation: "navbar-glow-sweep 4s linear infinite",
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
