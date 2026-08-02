const services = [
  {
    number: "01",
    title: "Agentes de IA",
    tag: "Automatización de atención y ventas",
    body: "Agentes que responden, califican y hacen seguimiento a tus clientes por WhatsApp y redes sociales, las 24 horas, con la voz de tu marca.",
    items: [
      "Respuesta inmediata a cada contacto",
      "Calificación automática de leads",
      "Seguimiento sin intervención manual",
    ],
  },
  {
    number: "02",
    title: "CRM de Ventas",
    tag: "Todo tu proceso comercial en un solo lugar",
    body: "Organizamos tus leads, conversaciones y oportunidades en un sistema claro, con recordatorios y flujos que no dejan pasar ninguna venta.",
    items: [
      "Visión completa de cada cliente",
      "Recordatorios y flujos automáticos",
      "Reportes simples para decidir mejor",
    ],
  },
  {
    number: "03",
    title: "Páginas Web",
    tag: "Diseño profesional que convierte",
    body: "Sitios rápidos, modernos y pensados para transformar visitas en clientes, con la identidad visual de tu marca desde el primer scroll.",
    items: [
      "Diseño a medida, no plantillas genéricas",
      "Optimizadas para conversión y velocidad",
      "Listas para conectar con tu CRM y agentes",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-glow border-y border-[var(--border-5)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--fg)] sm:text-4xl">
            Lo que construimos para vos
          </h2>
          <p className="mt-4 text-[var(--fg-60)]">
            Tres piezas que funcionan solas o combinadas, según lo que tu negocio
            necesite hoy.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.number}
              className="card-border flex flex-col rounded-2xl bg-[var(--bg-elevated)]/60 p-8 transition hover:border-brand-blue/40"
            >
              <span className="font-display text-sm font-semibold text-[var(--accent-text)]">
                {s.number}
              </span>
              <h3 className="font-display mt-3 text-2xl font-semibold text-[var(--fg)]">
                {s.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--fg-50)]">{s.tag}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--fg-60)]">{s.body}</p>
              <ul className="mt-6 space-y-2.5 border-t border-[var(--border-5)] pt-6">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-[var(--fg-70)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
