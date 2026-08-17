export default function Cta() {
  return (
    <section id="contacto" className="section-glow border-y border-[var(--border-5)] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--fg)] sm:text-4xl">
          ¿Listo para automatizar tu negocio?
        </h2>
        <p className="mt-4 text-[var(--fg-60)]">
          Agenda una consultoría de diagnóstico gratuita. Sin compromiso, 100% online.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5491172367861"
            className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-cyan hover:text-brand-dark"
          >
            Escribir por WhatsApp
          </a>
          <a
            href="mailto:iamantum.ai@gmail.com"
            className="rounded-full border border-[var(--border-15)] px-8 py-3.5 text-sm font-semibold text-[var(--fg-80)] transition hover:border-[var(--border-40)] hover:text-[var(--fg)]"
          >
            Escribir por email
          </a>
        </div>
      </div>
    </section>
  );
}
