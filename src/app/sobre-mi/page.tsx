"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

import {
  Code2,
  Cpu,
  Database,
  ArrowRight,
  BrainCircuit,
  Layers3,
  Sparkles,
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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// =========================================
// PAGE
// =========================================

export default function SobreMi() {

  const skills = [
    {
      icon: <Code2 size={26} />,
      title: "Frontend & Web",
      items: [
        "Next.js & React",
        "Tailwind CSS",
        "TypeScript",
        "Arquitectura UI/UX",
      ],
    },
    {
      icon: <Cpu size={26} />,
      title: "Móvil & Hardware",
      items: [
        "Flutter",
        "IoT & Sensores",
        "ESP32 & Arduino",
        "Prototipado electrónico",
      ],
    },
    {
      icon: <Database size={26} />,
      title: "Backend & Datos",
      items: [
        "Supabase & PostgreSQL",
        "Node.js & Flask",
        "Python",
        "Procesamiento de señales",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ========================================= */}
      {/* BACKGROUND */}
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
            top-[-15%]
            left-[-10%]
            h-[800px]
            w-[800px]
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
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <div className="relative z-10 px-6 pb-32 pt-40">

        <div className="mx-auto max-w-6xl space-y-32">

          {/* ========================================= */}
          {/* HERO */}
          {/* ========================================= */}

          <motion.section
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="space-y-16"
          >

            {/* Badge */}
            <motion.div
              variants={fadeUp}
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
              <Sparkles size={15} />

              <span>
                Ingeniería • Software • Investigación
              </span>
            </motion.div>

            {/* Hero Grid */}
            <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">

              {/* LEFT */}
              <motion.div
                variants={fadeUp}
                className="space-y-10"
              >

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
                    Mucho más
                    <br />
                    que código.
                  </h1>

                  <p
                    className="
                      max-w-2xl
                      text-xl
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    Me obsesiona entender sistemas complejos:
                    desde arquitecturas web y hardware hasta
                    dinámica cerebral y procesamiento de señales.
                  </p>
                </div>

                {/* Floating cards */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-2xl
                    "
                  >
                    <BrainCircuit
                      size={28}
                      className="mb-5 text-cyan-400"
                    />

                    <h3 className="mb-3 text-xl font-bold text-white">
                      Neurociencia Computacional
                    </h3>

                    <p className="leading-relaxed text-slate-400">
                      EEG, microestados cerebrales,
                      HMMs y análisis de dinámica neural.
                    </p>
                  </div>

                  <div
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-2xl
                    "
                  >
                    <Layers3
                      size={28}
                      className="mb-5 text-indigo-400"
                    />

                    <h3 className="mb-3 text-xl font-bold text-white">
                      Sistemas Full Stack
                    </h3>

                    <p className="leading-relaxed text-slate-400">
                      Interfaces modernas, APIs,
                      bases de datos y arquitectura escalable.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                variants={fadeUp}
                className="relative"
              >

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[3rem]
                    bg-cyan-500/10
                    blur-3xl
                  "
                />

                {/* Photo card */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[2.5rem]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                  "
                >

                  {/* Gradient overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-cyan-500/10
                      via-transparent
                      to-indigo-500/10
                      z-10
                    "
                  />

                  <div className="aspect-[4/5] overflow-hidden">

                    <img
                      src="/images/tu-foto.jpeg"
                      alt="Moisés García"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-1000
                        hover:scale-105
                      "
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* ========================================= */}
          {/* STORY */}
          {/* ========================================= */}

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >

            <motion.div
              variants={fadeUp}
              className="space-y-4"
            >
              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  tracking-tight
                  text-white
                "
              >
                Cómo terminé aquí
              </h2>

              <div className="h-px w-full bg-white/10" />
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-3">

              {[
                {
                  title: "Ingeniería Biomédica",
                  text:
                    "Mi formación me enseñó a pensar en sistemas completos: hardware, software, fisiología y análisis matemático trabajando juntos.",
                },
                {
                  title: "Desarrollo Multidisciplinario",
                  text:
                    "No me interesa quedarme atrapado en una sola área. Disfruto moverme entre frontend, backend, hardware, ciencia de datos y diseño.",
                },
                {
                  title: "Creatividad Técnica",
                  text:
                    "También soy músico, lector compulsivo y obsesivo del detalle. Curiosamente, mucho de eso termina filtrándose en cómo diseño software.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-cyan-400/20
                    hover:bg-cyan-500/[0.04]
                  "
                >
                  <h3 className="mb-5 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ========================================= */}
          {/* SKILLS */}
          {/* ========================================= */}

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-14"
          >

            <motion.div
              variants={fadeUp}
              className="space-y-4"
            >
              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  tracking-tight
                  text-white
                "
              >
                Herramientas del oficio
              </h2>

              <p className="max-w-2xl text-lg text-slate-400">
                Tecnologías que uso para convertir ideas
                complejas en sistemas reales.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">

              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/20
                  "
                >

                  {/* Hover glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      bg-gradient-to-br
                      from-cyan-500/10
                      via-transparent
                      to-indigo-500/10
                    "
                  />

                  <div className="relative z-10">

                    <div
                      className="
                        mb-6
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/30
                        text-cyan-400
                      "
                    >
                      {skill.icon}
                    </div>

                    <h3 className="mb-6 text-2xl font-bold text-white">
                      {skill.title}
                    </h3>

                    <ul className="space-y-4">

                      {skill.items.map((item, i) => (
                        <li
                          key={i}
                          className="
                            flex
                            items-center
                            gap-3
                            text-slate-400
                          "
                        >
                          <div className="h-2 w-2 rounded-full bg-cyan-400" />

                          <span>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ========================================= */}
          {/* CTA */}
          {/* ========================================= */}

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[3rem]
              border
              border-white/10
              bg-white/[0.03]
              px-8
              py-20
              text-center
              backdrop-blur-2xl
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-500/10
                via-transparent
                to-indigo-500/10
              "
            />

            <div className="relative z-10 mx-auto max-w-3xl">

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                  tracking-tight
                  text-white
                "
              >
                Construyamos algo
                <br />
                interesante.
              </h2>

              <p
                className="
                  mt-8
                  text-xl
                  leading-relaxed
                  text-slate-400
                "
              >
                Si tu proyecto involucra ingeniería,
                investigación o sistemas complejos,
                probablemente vamos a llevarnos bien.
              </p>

              <Link
                href="/contacto"
                className="
                  mt-12
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-cyan-400
                  px-10
                  py-5
                  text-lg
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]
                "
              >
                Ponte en contacto

                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}