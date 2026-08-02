const points = [
  {
    title: "Leads que se enfrían",
    body: "Cada minuto sin responder es una venta que se va con la competencia. Sin un sistema, el seguimiento depende de que alguien se acuerde de contestar.",
  },
  {
    title: "Ventas desorganizadas",
    body: "Clientes en WhatsApp, notas en el celular, pedidos en una libreta. Sin un lugar único, es imposible saber qué oportunidades se están perdiendo.",
  },
  {
    title: "Una imagen que no genera confianza",
    body: "Sin una página web profesional, el cliente duda antes de comprar. Tu presencia digital también vende, o también resta.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          ¿Te suena familiar?
        </h2>
        <p className="mt-4 text-white/60">
          Estos son los tres frenos más comunes que le impiden crecer a un negocio que
          ya tiene demanda.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {points.map((p) => (
          <div
            key={p.title}
            className="card-border rounded-2xl bg-brand-panel/60 p-7"
          >
            <h3 className="font-display text-lg font-semibold text-white">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
