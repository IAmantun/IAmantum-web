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
              IAmantum
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
          <ul className="mt-3 space-y-2 text-sm text-[var(--fg-60)]">
            <li>
              <a href="mailto:iamantum.ai@gmail.com" className="transition hover:text-[var(--fg)]">
                iamantum.ai@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/5491124549051" className="transition hover:text-[var(--fg)]">
                WhatsApp: +54 9 11 2454-9051
              </a>
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
