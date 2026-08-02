import Image from "next/image";

export default function Founder() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-blue/25 to-brand-cyan/25 blur-2xl" />
          <div className="card-border overflow-hidden rounded-3xl">
            <Image
              src="/victor-mata.jpg"
              alt="Victor Mata, Desarrollador de Soluciones con IA"
              width={900}
              height={1200}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-4 text-center lg:text-left">
            <p className="font-display text-lg font-semibold text-[var(--fg)]">
              Victor Mata
            </p>
            <p className="text-sm text-[var(--fg-60)]">
              Desarrollador de Soluciones con IA
            </p>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-text)]">
            Quién está detrás
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold text-[var(--fg)] sm:text-4xl">
            La persona que diseña y construye cada solución
          </h2>
          <p className="mt-4 text-[var(--fg-60)]">
            Sin intermediarios ni equipos genéricos: cada agente de IA, cada CRM y cada
            página web se piensa y se desarrolla a medida, acompañando el proyecto de
            principio a fin.
          </p>
        </div>
      </div>
    </section>
  );
}
