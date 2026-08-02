import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-icon-light-lines.png"
            alt="IAmantum"
            width={198}
            height={220}
            priority
            className="h-12 w-auto sm:h-14"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            IAmantum
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="shrink-0 rounded-full bg-brand-blue px-4 py-2 text-xs font-medium text-white transition hover:bg-brand-cyan hover:text-brand-dark sm:px-5 sm:text-sm"
        >
          <span className="sm:hidden">Consultoría</span>
          <span className="hidden sm:inline">Agenda una consultoría</span>
        </a>
      </nav>
    </header>
  );
}
