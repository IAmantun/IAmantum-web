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
            transparent 30%,
            rgba(0, 0, 0, 0.35) 44%,
            rgba(0, 191, 255, 0.9) 48%,
            #ffffff 50%,
            rgba(0, 191, 255, 0.9) 52%,
            rgba(0, 0, 0, 0.35) 56%,
            transparent 70%
          );
          background-size: 250% 100%;
          background-repeat: no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 6px rgba(0, 191, 255, 0.55));
          animation: navbar-shine-sweep 4.5s linear infinite alternate;
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
