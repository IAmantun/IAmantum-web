export default function NavbarShine() {
  return (
    <span
      aria-hidden="true"
      className="navbar-shine pointer-events-none absolute inset-0 select-none font-display text-xl font-semibold tracking-tight sm:text-2xl"
    >
      IAmantum
      <style>{`
        .navbar-shine {
          background-image: linear-gradient(
            100deg,
            transparent 35%,
            rgba(255, 255, 255, 0.95) 50%,
            transparent 65%
          );
          background-size: 250% 100%;
          background-repeat: no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: navbar-shine-sweep 4.5s linear infinite;
        }

        @keyframes navbar-shine-sweep {
          0% {
            background-position: -150% 0;
          }
          56% {
            background-position: 250% 0;
          }
          100% {
            background-position: 250% 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-shine {
            animation: none;
            background-image: none;
          }
        }
      `}</style>
    </span>
  );
}
