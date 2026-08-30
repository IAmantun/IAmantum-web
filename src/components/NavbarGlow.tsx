export default function NavbarGlow() {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-full -mt-1.5 h-[2px] w-[38%] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #00BFFF, #007BFF, transparent)",
          animation: "navbar-glow-bounce 2s linear infinite alternate",
        }}
      />
      <style>{`
        @keyframes navbar-glow-bounce {
          0% { left: 0%; }
          100% { left: 62%; }
        }
      `}</style>
    </>
  );
}
