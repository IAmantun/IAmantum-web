export default function NavbarGlow() {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-full mt-0 h-[3px] w-1/3 rounded-full blur-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, #00BFFF, transparent)",
          animation: "navbar-glow-sweep 3.5s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes navbar-glow-sweep {
          0% { left: 0%; }
          100% { left: 66%; }
        }
      `}</style>
    </>
  );
}
