import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Layers3,
} from "lucide-react";

import { supabase } from "../../../lib/supabase";

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

  const {
    data: proyecto,
    error,
  } = await supabase
    .from("proyectos")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !proyecto) {
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

          {/* ========================================= */}
          {/* HERO */}
          {/* ========================================= */}

          <header className="space-y-10">

            {/* Category */}
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

              <span>
                {proyecto.categoria}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-6">

              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.08em]
                  text-white
                "
              >
                {proyecto.titulo}
              </h1>

              <p
                className="
                  max-w-3xl
                  text-xl
                  leading-relaxed
                  text-slate-400
                "
              >
                {proyecto.descripcion_corta}
              </p>
            </div>

            {/* Stack + Actions */}
            <div
              className="
                flex
                flex-col
                gap-8
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-2xl
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              {/* Stack */}
              <div className="space-y-4">

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-medium
                    text-slate-400
                  "
                >
                  <Code2 size={16} />

                  <span>
                    Stack tecnológico
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">

                  {proyecto.stack_tecnologico?.map(
                    (
                      tech: string,
                      i: number
                    ) => (
                      <span
                        key={i}
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
                          backdrop-blur-xl
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Buttons */}
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
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-cyan-400/30
                      hover:bg-cyan-500/10
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
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                    "
                  >
                    Visitar proyecto

                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </header>

          {/* ========================================= */}
          {/* MAIN IMAGE */}
          {/* ========================================= */}

          <section className="mt-16">

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-indigo-500/10
                "
              />

              <div className="aspect-video">

                {proyecto.imagen_miniatura ? (
                  <img
                    src={proyecto.imagen_miniatura}
                    alt={`Captura de ${proyecto.titulo}`}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">

                    <div className="space-y-5 text-center">

                      <div
                        className="
                          mx-auto
                          flex
                          h-24
                          w-24
                          items-center
                          justify-center
                          rounded-3xl
                          border
                          border-white/10
                          bg-white/[0.03]
                        "
                      >
                        <Layers3
                          size={40}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Preview próximamente
                        </h3>

                        <p className="mt-2 text-slate-500">
                          Mockups, diagramas o capturas del sistema.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ========================================= */}
          {/* CONTENT */}
          {/* ========================================= */}

          <section className="mt-20">

            <div
              className="
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                md:p-12
                backdrop-blur-2xl
              "
            >

              {proyecto.contenido_completo ? (

                <div
                  className="
                    prose
                    prose-invert
                    prose-lg
                    max-w-none

                    prose-headings:text-white
                    prose-headings:font-black
                    prose-headings:tracking-tight

                    prose-p:text-slate-300
                    prose-p:leading-relaxed

                    prose-strong:text-cyan-300

                    prose-li:text-slate-300

                    prose-a:text-cyan-400
                    prose-a:no-underline
                    hover:prose-a:text-cyan-300

                    prose-code:text-cyan-300
                    prose-code:bg-black/40
                    prose-code:px-1.5
                    prose-code:py-1
                    prose-code:rounded-md

                    prose-pre:bg-black/60
                    prose-pre:border
                    prose-pre:border-white/10
                  "
                  dangerouslySetInnerHTML={{
                    __html:
                      proyecto.contenido_completo,
                  }}
                />

              ) : (

                <div className="space-y-8">

                  <div className="space-y-4">

                    <h2
                      className="
                        text-4xl
                        font-black
                        tracking-tight
                        text-white
                      "
                    >
                      Sobre este proyecto
                    </h2>

                    <div className="h-px w-full bg-white/10" />
                  </div>

                  <div className="space-y-6 text-lg leading-relaxed text-slate-300">

                    <p>
                      El desglose completo de la
                      arquitectura, diseño del sistema,
                      desafíos técnicos y decisiones de
                      ingeniería estará disponible
                      próximamente.
                    </p>

                    <p>
                      Este proyecto fue desarrollado
                      bajo un enfoque multidisciplinario,
                      integrando software, experiencia
                      de usuario, rendimiento y diseño
                      de sistemas escalables.
                    </p>

                    <p>
                      La intención no era solamente
                      construir una aplicación funcional,
                      sino diseñar una solución técnica
                      sólida, mantenible y visualmente
                      coherente.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}