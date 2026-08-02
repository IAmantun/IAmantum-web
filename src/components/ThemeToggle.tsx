"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const isLight = root.classList.toggle("light");
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar entre modo oscuro y claro"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-10)] text-[var(--fg)] transition hover:border-[var(--border-40)]"
    >
      <svg
        className="show-dark h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg className="show-light h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    </button>
  );
}
