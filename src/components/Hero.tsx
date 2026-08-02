export default function Hero() {
  return (
    <section id="top" className="section-glow relative overflow-hidden pt-40 pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <span className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-cyan">
          Agentes IA · CRM de Ventas · Páginas Web
        </span>

        <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Automatiza tu negocio con{" "}
          <span className="gradient-text">inteligencia artificial</span> y vende sin
          soltar el celular
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Diseñamos agentes de IA, sistemas de CRM y páginas web que trabajan por vos:
          atienden clientes, organizan tus ventas y muestran tu marca de forma
          profesional, todo el tiempo.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-cyan hover:text-brand-dark"
          >
            Agenda una consultoría gratuita
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
