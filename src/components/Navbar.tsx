"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import LogoShine from "./LogoShine";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border-5)] bg-[var(--navbar-bg)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-10)] text-[var(--fg)] transition hover:border-[var(--border-40)] lg:hidden"
        >
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>

        <div className="flex flex-1 justify-center lg:flex-none lg:justify-start">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center gap-3"
          >
            <span
              className="relative block h-11 sm:h-12 lg:h-14"
              style={{ aspectRatio: "9 / 10" }}
            >
              <Image
                src="/logo-icon-light-lines.png"
                alt="IAmantum"
                width={198}
                height={220}
                priority
                className="show-dark absolute inset-0 h-full w-full"
              />
              <Image
                src="/logo-icon-dark.png"
                alt="IAmantum"
                width={198}
                height={220}
                priority
                className="show-light absolute inset-0 h-full w-full"
              />
              <LogoShine />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-[var(--fg)] sm:text-2xl">
              <span className="text-brand-blue">IA</span>mantum
            </span>
          </a>
        </div>

        <div className="h-10 w-10 shrink-0 lg:hidden" aria-hidden="true" />

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

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href="#contacto"
            className="rounded-full bg-brand-blue px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-cyan hover:text-brand-dark"
          >
            Agenda una consultoría
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96 border-[var(--border-5)]" : "max-h-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-[var(--fg-70)] transition hover:bg-[var(--bg-5)] hover:text-[var(--fg)]"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-1 flex items-center justify-between px-3 py-2.5">
            <span className="text-sm text-[var(--fg-70)]">Modo oscuro / claro</span>
            <ThemeToggle />
          </div>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-blue px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-brand-cyan hover:text-brand-dark"
          >
            Agenda una consultoría
          </a>
        </div>
      </div>
    </header>
  );
}
