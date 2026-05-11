"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  Layers3,
} from "lucide-react";

// =========================================
// ANIMATIONS
// =========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// =========================================
// COMPONENT
// =========================================

export default function PortafolioClient({
  proyectos,
}: {
  proyectos: any[];
}) {
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

        {/* Glow 1 */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
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

        {/* Glow 2 */}
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
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
      {/* HERO */}
      {/* ========================================= */}

      <section className="relative px-6 pt-40 pb-20">

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              text-cyan-300
              backdrop-blur-xl
            "
          >
            <Layers3 size={16} />

            <span>
              Proyectos • Ingeniería • Investigación
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            className="max-w-4xl space-y-8"
          >

            <h1
              className="
                text-6xl
                md:text-[7rem]
                leading-[0.9]
                tracking-[-0.08em]
                font-black
              "
            >
              Sistemas,
              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-indigo-500
                "
              >
                investigación
              </span>

              <br />

              y tecnología.
            </h1>

            <p
              className="
                max-w-2xl
                text-lg
                md:text-xl
                leading-relaxed
                text-slate-400
              "
            >
              Una colección de proyectos donde convergen
              software, hardware, visualización de datos,
              biomédica, inteligencia artificial y sistemas
              complejos.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================= */}
      {/* PROJECT GRID */}
      {/* ========================================= */}

      <section className="relative px-6 pb-32">

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {proyectos && proyectos.length > 0 ? (
            proyectos.map((proyecto, index) => (
              <motion.div
                key={proyecto.id}
                variants={fadeUp}
              >

                <Link
                  href={`/portafolio/${proyecto.slug}`}
                  className="
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-cyan-400/30
                    hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]
                  "
                >

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />
                  </div>

                  {/* ========================================= */}
                  {/* IMAGE */}
                  {/* ========================================= */}

                  <div
                    className="
                      relative
                      h-56
                      overflow-hidden
                      border-b
                      border-white/10
                    "
                  >

                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />

                    {proyecto.imagen_miniatura ? (
                      <img
                        src={proyecto.imagen_miniatura}
                        alt={proyecto.titulo}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="text-center space-y-4">

                          <div
                            className="
                              mx-auto
                              flex
                              h-20
                              w-20
                              items-center
                              justify-center
                              rounded-3xl
                              border
                              border-white/10
                              bg-white/[0.03]
                              backdrop-blur-xl
                            "
                          >
                            <Layers3
                              size={34}
                              className="text-cyan-400"
                            />
                          </div>

                          <div
                            className="
                              text-xs
                              uppercase
                              tracking-[0.3em]
                              text-slate-500
                            "
                          >
                            {proyecto.categoria}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Floating Gradient */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* Floating arrow */}
                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/40
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:border-cyan-400/30
                      "
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* ========================================= */}
                  {/* CONTENT */}
                  {/* ========================================= */}

                  <div className="relative z-10 flex flex-1 flex-col p-7">

                    {/* Category */}
                    <div
                      className="
                        mb-5
                        inline-flex
                        w-fit
                        items-center
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-cyan-500/10
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-cyan-300
                      "
                    >
                      {proyecto.categoria}
                    </div>

                    {/* Title */}
                    <h2
                      className="
                        mb-4
                        text-3xl
                        font-black
                        leading-tight
                        tracking-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-cyan-300
                      "
                    >
                      {proyecto.titulo}
                    </h2>

                    {/* Description */}
                    <p
                      className="
                        mb-8
                        flex-grow
                        leading-relaxed
                        text-slate-400
                      "
                    >
                      {proyecto.descripcion_corta}
                    </p>

                    {/* Divider */}
                    <div className="mb-6 h-px w-full bg-white/10" />

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">

                      {proyecto.stack_tecnologico?.map(
                        (
                          tech: string,
                          i: number
                        ) => (
                          <span
                            key={i}
                            className="
                              rounded-lg
                              border
                              border-white/10
                              bg-white/[0.03]
                              px-3
                              py-1.5
                              text-xs
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
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center">

              <div className="space-y-5">

                <div
                  className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                  "
                >
                  <Layers3
                    size={34}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    No hay proyectos disponibles
                  </h3>

                  <p className="text-slate-500">
                    La base de datos está vacía o los
                    proyectos aún no fueron cargados.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </main>
  );
}