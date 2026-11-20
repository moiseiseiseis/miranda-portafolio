"use client";

import { grupos, type Proyecto } from "../../data/proyectos";
import {
  ProyectoCardCompacta,
  ProyectoCardGrande,
} from "../../components/ProyectoCard";

import {
  motion,
  Variants,
} from "framer-motion";

import { Layers3 } from "lucide-react";

// =========================================
// ANIMATIONS
// =========================================

const fadeUp: Variants = {
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

const staggerContainer: Variants = {
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
  proyectos: Proyecto[];
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
      {/* SECCIONES POR GRUPO */}
      {/* ========================================= */}

      <div className="relative space-y-28 px-6 pb-32">
        {grupos.map((grupo) => {
          const lista = proyectos.filter((p) => p.grupo === grupo.id);
          if (lista.length === 0) return null;

          const principal = grupo.id === "principal";

          return (
            <motion.section
              key={grupo.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mx-auto max-w-7xl"
            >
              <motion.div variants={fadeUp} className="mb-10 max-w-3xl space-y-3">
                <h2
                  className={
                    principal
                      ? "text-4xl font-black tracking-tight md:text-5xl"
                      : "text-3xl font-black tracking-tight"
                  }
                >
                  {grupo.titulo}
                </h2>
                <p className="text-lg text-slate-400">{grupo.texto}</p>
              </motion.div>

              <div
                className={
                  principal
                    ? "grid grid-cols-1 gap-8 md:grid-cols-2"
                    : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                }
              >
                {lista.map((proyecto) => (
                  <motion.div key={proyecto.slug} variants={fadeUp}>
                    {principal ? (
                      <ProyectoCardGrande proyecto={proyecto} />
                    ) : (
                      <ProyectoCardCompacta proyecto={proyecto} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </main>
  );
}