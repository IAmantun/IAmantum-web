import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border-5)] bg-[var(--navbar-bg)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-icon-light-lines.png"
            alt="IAmantum"
            width={198}
            height={220}
            priority
            className="show-dark h-12 w-auto sm:h-14"
          />
          <Image
            src="/logo-icon-dark.png"
            alt="IAmantum"
            width={198}
            height={220}
            priority
            className="show-light h-12 w-auto sm:h-14"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-[var(--fg)] sm:text-2xl">
            IAmantum
          </span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--fg-70)] transition hover:text-[var(--fg)]"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="#contacto"
            className="rounded-full bg-brand-blue px-4 py-2 text-xs font-medium text-white transition hover:bg-brand-cyan hover:text-brand-dark sm:px-5 sm:text-sm"
          >
            <span className="sm:hidden">Consultoría</span>
            <span className="hidden sm:inline">Agenda una consultoría</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
