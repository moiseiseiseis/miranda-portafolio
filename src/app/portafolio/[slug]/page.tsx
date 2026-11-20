import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  Layers3,
} from "lucide-react";

import { getProyecto, proyectos } from "../../../data/proyectos";

export const dynamicParams = false;

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

// =========================================
// PAGE
// =========================================

export default async function ProyectoDetalle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  // =========================================
  // FETCH PROJECT
  // =========================================

  const proyecto = getProyecto(slug);

  if (!proyecto) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ========================================= */}
      {/* GLOBAL BACKGROUND */}
      {/* ========================================= */}

      <div className="fixed inset-0 -z-50 overflow-hidden">

        {/* Base */}
        <div className="absolute inset-0 bg-black" />

        {/* Grid */}
        <div
          className="
            absolute inset-0 opacity-[0.08]
            bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            top-[-20%]
            left-[-10%]
            h-[900px]
            w-[900px]
            rounded-full
            bg-cyan-500/20
            blur-3xl
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-indigo-500/20
            blur-3xl
          "
        />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <article className="relative z-10 px-6 pb-32 pt-40">

        <div className="mx-auto max-w-5xl">

          {/* ========================================= */}
          {/* BACK BUTTON */}
          {/* ========================================= */}

          <Link
            href="/portafolio"
            className="
              mb-12
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-3
              text-sm
              font-medium
              text-slate-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-500/10
              hover:text-cyan-300
            "
          >
            <ArrowLeft size={16} />

            <span>
              Volver al portafolio
            </span>
          </Link>

          <header className="space-y-8">

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-5
                py-2
                text-sm
                text-cyan-300
                backdrop-blur-xl
              "
            >
              <Layers3 size={15} />
              <span>{proyecto.categoria}</span>
            </div>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                text-white
              "
            >
              {proyecto.titulo}
            </h1>

            <p className="max-w-3xl text-xl leading-relaxed text-slate-300">
              {proyecto.descripcion_corta}
            </p>

            {(proyecto.url_repositorio || proyecto.url_demo || proyecto.url_instagram) && (
              <div className="flex flex-wrap gap-4">
                {proyecto.url_repositorio && (
                  <a
                    href={proyecto.url_repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-6
                      py-3
                      font-semibold
                      text-white
                      transition-colors
                      hover:border-cyan-400/30
                      hover:text-cyan-300
                    "
                  >
                    Ver código
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {proyecto.url_demo && (
                  <a
                    href={proyecto.url_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-cyan-400
                      px-7
                      py-3
                      font-semibold
                      text-black
                      transition-colors
                      hover:bg-cyan-300
                    "
                  >
                    Visitar proyecto
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {proyecto.url_instagram && (
                  <a
                    href={proyecto.url_instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-6
                      py-3
                      font-semibold
                      text-white
                      transition-colors
                      hover:border-cyan-400/30
                      hover:text-cyan-300
                    "
                  >
                    Ver en Instagram
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            )}
          </header>

          <section
            className="
              mt-16
              divide-y
              divide-white/10
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.03]
              px-8
              md:px-12
              backdrop-blur-2xl
            "
          >
            {proyecto.problema && (
              <Bloque titulo="Problema">
                <p>{proyecto.problema}</p>
              </Bloque>
            )}

            {proyecto.rol && (
              <Bloque titulo="Mi rol">
                <p>{proyecto.rol}</p>
              </Bloque>
            )}

            {proyecto.trabajo && proyecto.trabajo.length > 0 && (
              <Bloque titulo="Qué hice">
                <ul className="space-y-3">
                  {proyecto.trabajo.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Bloque>
            )}

            {proyecto.estado && (
              <Bloque titulo="Estado">
                <p>{proyecto.estado}</p>
              </Bloque>
            )}

            <Bloque titulo="Stack">
              <div className="flex flex-wrap gap-3">
                {proyecto.stack_tecnologico.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-black/40
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Bloque>

            {proyecto.colaboradores && proyecto.colaboradores.length > 0 && (
              <Bloque titulo="Colaboradores">
                <ul className="space-y-2">
                  {proyecto.colaboradores.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Bloque>
            )}
          </section>

          {proyecto.imagen_miniatura && (
            <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={proyecto.imagen_miniatura}
                alt={`Captura de ${proyecto.titulo}`}
                className="w-full object-cover"
              />
            </section>
          )}
        </div>
      </article>
    </main>
  );
}

function Bloque({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-3 py-8 md:grid-cols-[11rem_1fr] md:gap-10">
      <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300 md:pt-1">
        {titulo}
      </h2>
      <div className="text-lg leading-relaxed text-slate-300">{children}</div>
    </div>
  );
}
