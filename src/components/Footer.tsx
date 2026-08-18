import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon-light-lines.png"
              alt="IAmantum"
              width={198}
              height={220}
              className="show-dark h-11 w-auto"
            />
            <Image
              src="/logo-icon-dark.png"
              alt="IAmantum"
              width={198}
              height={220}
              className="show-light h-11 w-auto"
            />
            <span className="font-display text-lg font-semibold text-[var(--fg)]">
              <span className="text-[var(--accent-text)]">IA</span>mantum
            </span>
          </div>
          <p className="max-w-xs text-center text-sm text-[var(--fg-50)] lg:text-left">
            Automatización con agentes IA, CRM de ventas y páginas web para negocios
            que quieren crecer sin trabajar más.
          </p>
        </div>

        <div className="text-center lg:text-left">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-40)]">
            Servicios
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-[var(--fg-60)]">
            <li>Agentes de IA</li>
            <li>CRM de Ventas</li>
            <li>Páginas Web</li>
          </ul>
        </div>

        <div className="text-center lg:text-left">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-40)]">
            Contacto
          </h4>
          <ul className="mt-3 space-y-2.5 text-sm text-[var(--fg-60)]">
            <li className="flex items-center justify-center gap-2 lg:justify-start">
              <svg
                className="h-4 w-4 shrink-0 text-[var(--accent-text)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <a href="mailto:iamantum.ai@gmail.com" className="transition hover:text-[var(--fg)]">
                iamantum.ai@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 lg:justify-start">
              <svg
                className="h-4 w-4 shrink-0 text-[var(--accent-text)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
              </svg>
              <a href="https://wa.me/5491172367861" className="transition hover:text-[var(--fg)]">
                WhatsApp: +54 9 11 7236-7861
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 lg:justify-start">
              <svg
                className="h-4 w-4 shrink-0 text-[var(--accent-text)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Buenos Aires, Argentina</span>
            </li>
          </ul>
        </div>

        <Image
          src="/kommo-partner.png"
          alt="Kommo partner"
          width={500}
          height={187}
          className="h-9 w-auto lg:self-center"
        />
      </div>

      <div className="mt-12 border-t border-[var(--border-5)] pt-6 text-center text-xs text-[var(--fg-30)]">
        © {new Date().getFullYear()} IAmantum — Todos los derechos reservados.
      </div>
    </footer>
  );
}
