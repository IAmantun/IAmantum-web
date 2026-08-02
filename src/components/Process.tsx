const steps = [
  {
    step: "1",
    title: "Diagnóstico",
    body: "Analizamos cómo vendés hoy y en qué punto se están perdiendo oportunidades.",
  },
  {
    step: "2",
    title: "Diseño de la solución",
    body: "Definimos qué combinación de agente IA, CRM y/o página web necesita tu negocio.",
  },
  {
    step: "3",
    title: "Implementación",
    body: "Construimos y conectamos todo, sin que tengas que aprender herramientas complicadas.",
  },
  {
    step: "4",
    title: "Acompañamiento",
    body: "Ajustamos y optimizamos el sistema una vez que ya está funcionando con clientes reales.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Cómo trabajamos
        </h2>
        <p className="mt-4 text-white/60">
          Un proceso simple, pensado para negocios que están empezando a
          automatizarse.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.step} className="card-border rounded-2xl bg-brand-panel/60 p-6">
            <span className="font-display text-2xl font-semibold text-brand-blue">
              {s.step}
            </span>
            <h3 className="font-display mt-3 text-base font-semibold text-white">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
