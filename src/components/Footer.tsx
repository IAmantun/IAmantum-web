import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon-light-lines.png"
              alt="IAmantum"
              width={198}
              height={220}
              className="h-11 w-auto"
            />
            <span className="font-display text-lg font-semibold text-white">
              IAmantum
            </span>
          </div>
          <p className="max-w-xs text-center text-sm text-white/50 md:text-left">
            Automatización con agentes IA, CRM de ventas y páginas web para negocios
            que quieren crecer sin trabajar más.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Servicios
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Agentes de IA</li>
            <li>CRM de Ventas</li>
            <li>Páginas Web</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Contacto
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            {/* TODO: reemplazar por los datos definitivos */}
            <li>contacto@iamantum.com</li>
            <li>WhatsApp: +00 000 000 0000</li>
          </ul>
        </div>

        <Image
          src="/kommo-partner.png"
          alt="Kommo partner"
          width={500}
          height={187}
          className="h-9 w-auto md:self-center"
        />
      </div>

      <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/30">
        © {new Date().getFullYear()} IAmantum — Todos los derechos reservados.
      </div>
    </footer>
  );
}
