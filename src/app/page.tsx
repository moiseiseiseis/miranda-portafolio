"use client";

import Link from "next/link";
import {
  Globe,
  Cpu,
  Database,
  ArrowRight,
  Activity,
  BrainCircuit,
  Layers3,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  useEffect,
  useRef,
} from "react";

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
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const particles: any[] = [];
    const particleCount = 120;

    const mouse = {
      x: -9999,
      y: -9999,
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < 180) {
          p.x += dxMouse * 0.002;
          p.y += dyMouse * 0.002;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);

          ctx.strokeStyle = `rgba(0,255,255,${
            0.15 - distMouse / 1200
          })`;

          ctx.stroke();
        }

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(255,255,255,${
              0.08 - dist / 1600
            })`;

            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="relative overflow-hidden bg-black text-white">

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
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
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

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
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

<div
  className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
  style={{
    backgroundImage: `
      radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)
    `,
    backgroundSize: '3px 3px',
  }}
/>
      </div>

      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-60"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Side Glow */}
        <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Content */}
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
          className="
            relative z-10
            max-w-7xl
            mx-auto
            px-6
            w-full
          "
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="space-y-10"
            >

            

              {/* Headline */}
              <motion.div
                variants={fadeUp}
                className="space-y-6"
              >
<h1
  className="
    text-5xl
    md:text-[4.8rem]
    leading-[0.9]
    tracking-[-0.08em]
    font-black
  "
>
  Entender
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
    sistemas
  </span>

  <br />

  para construir
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
    mejores herramientas
  </span>
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
                  Desarrollo software, hardware y herramientas
                  computacionales para investigación,
                  visualización de datos y sistemas
                  inteligentes.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-5"
              >
                <Link
                  href="/portafolio"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-cyan-500
                    px-8
                    py-4
                    font-semibold
                    text-black
                    transition-all
                    hover:scale-105
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                  "
                >
                  Explorar proyectos

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/sobre-mi"
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    px-8
                    py-4
                    font-medium
                    text-white
                    transition-all
                    hover:bg-white/10
                  "
                >
                  Sobre mí
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="relative hidden lg:block"
            >

              {/* Orb */}
              <div
                className="
                  relative
                  h-[600px]
                  w-[600px]
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-3xl
                  overflow-hidden
                "
              >

                {/* Inner grid */}
                <div
                  className="
                    absolute inset-0 opacity-20
                    bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
                    bg-[size:40px_40px]
                  "
                />

                {/* Rotating glow */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-10
                    rounded-full
                    border
                    border-cyan-400/20
                  "
                />

                {/* Floating cards */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-12
                    top-16
                    rounded-2xl
                    border border-white/10
                    bg-black/40
                    p-5
                    backdrop-blur-xl
                  "
                >
                  <BrainCircuit className="mb-3 text-cyan-400" />

                  <div className="text-sm text-slate-400">
                    Neurociencia Computacional
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-20
                    right-12
                    rounded-2xl
                    border border-white/10
                    bg-black/40
                    p-5
                    backdrop-blur-xl
                  "
                >
                  <Layers3 className="mb-3 text-indigo-400" />

                  <div className="text-sm text-slate-400">
                    Sistemas Inteligentes
                  </div>
                </motion.div>

                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="
                      h-48
                      w-48
                      rounded-full
                      bg-gradient-to-br
                      from-cyan-400
                      via-blue-500
                      to-indigo-600
                      blur-[2px]
                    "
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ========================================= */}
      {/* PILLARS */}
      {/* ========================================= */}

      <section className="relative py-32 px-6">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >

          <motion.div
            variants={fadeUp}
            className="max-w-3xl mb-20"
          >
            <h2 className="text-5xl font-black tracking-tight mb-6">
              Ingeniería aplicada a sistemas reales.
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed">
              Trabajo en la intersección entre software,
              hardware, análisis de datos e investigación
              computacional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <Globe className="text-cyan-400" />,
                title: "Software",
                desc:
                  "Plataformas web, interfaces complejas y arquitecturas full-stack.",
              },
              {
                icon: <Cpu className="text-indigo-400" />,
                title: "Hardware & IoT",
                desc:
                  "Integración de sensores, microcontroladores y sistemas físicos.",
              },
              {
                icon: <Database className="text-emerald-400" />,
                title: "Datos & ML",
                desc:
                  "Análisis computacional, machine learning y modelado de sistemas.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:border-cyan-400/30
                  hover:-translate-y-2
                "
              >

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                </div>

                <div className="relative z-10">

                  <div className="mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ========================================= */}
      {/* CTA */}
      {/* ========================================= */}

      <section className="relative py-32 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/[0.03]" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="
            relative
            max-w-5xl
            mx-auto
            overflow-hidden
            rounded-[3rem]
            border border-white/10
            bg-white/[0.03]
            px-10
            py-24
            text-center
            backdrop-blur-3xl
          "
        >

          {/* Glow */}
          <div className="absolute top-[-20%] left-[30%] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10">

            <h2
              className="
                mb-8
                text-5xl
                md:text-6xl
                font-black
                tracking-tight
              "
            >
              Construyamos algo
              <br />

              <span className="text-cyan-400">
                difícil.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mb-10
                max-w-2xl
                text-xl
                leading-relaxed
                text-slate-400
              "
            >
              Me interesan proyectos donde convergen
              investigación, ingeniería y sistemas
              inteligentes.
            </p>

            <Link
              href="/contacto"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-cyan-500
                px-10
                py-5
                font-semibold
                text-black
                transition-all
                hover:scale-105
                hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]
              "
            >
              Iniciar conversación

              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}