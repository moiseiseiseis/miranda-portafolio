"use client";

import { useState } from "react";

import {
  motion,
} from "framer-motion";

import {
  Mail,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle2,
  Sparkles,
  BrainCircuit,
  Globe,
} from "lucide-react";

import { supabase } from "../../lib/supabase";

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
      ease: [0.25, 0.1, 0.25, 1],
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

export default function Contacto() {

  // =========================================
  // FORM STATE
  // =========================================

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [errorMsg, setErrorMsg] =
    useState("");

  // =========================================
  // SUBMIT
  // =========================================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setIsSubmitting(true);
    setErrorMsg("");

    if (
      !formData.nombre ||
      !formData.email ||
      !formData.asunto ||
      !formData.mensaje
    ) {
      setErrorMsg(
        "Completa todos los campos antes de enviar el formulario."
      );

      setIsSubmitting(false);

      return;
    }

    try {

      // Save in Supabase
      const {
        error: supabaseError,
      } = await supabase
        .from("mensajes")
        .insert([
          {
            nombre: formData.nombre,
            email: formData.email,
            asunto: formData.asunto,
            mensaje: formData.mensaje,
          },
        ]);

      if (supabaseError) {
        throw new Error(
          "Error al guardar el mensaje."
        );
      }

      // Send email
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            formData
          ),
        }
      );

      if (!response.ok) {
        console.error(
          "No se pudo enviar el correo."
        );
      }

      setSuccess(true);

      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });

    } catch (error) {

      console.error(error);

      setErrorMsg(
        "Ocurrió un error al enviar tu mensaje."
      );

    } finally {

      setIsSubmitting(false);
    }
  };

  // =========================================
  // INPUT CHANGE
  // =========================================

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

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
            top-[-10%]
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
            bottom-[-15%]
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

        <div className="mx-auto max-w-7xl">

          {/* ========================================= */}
          {/* HERO */}
          {/* ========================================= */}

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="
              mx-auto
              mb-24
              max-w-4xl
              text-center
              space-y-8
            "
          >

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
                Colaboraciones • Freelance • Ingeniería
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-[0.95]
                tracking-[-0.08em]
                text-white
              "
            >
              Iniciemos una
              <br />
              conversación.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="
                mx-auto
                max-w-3xl
                text-xl
                leading-relaxed
                text-slate-400
              "
            >
              Desarrollo software, interfaces,
              sistemas biomédicos y soluciones
              técnicas para proyectos que requieren
              algo más que una plantilla genérica.
            </motion.p>
          </motion.div>

          {/* ========================================= */}
          {/* GRID */}
          {/* ========================================= */}

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            {/* ========================================= */}
            {/* LEFT SIDE */}
            {/* ========================================= */}

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >

              {/* Intro card */}
              <motion.div
                variants={fadeUp}
                className="
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-2xl
                "
              >

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
                  <BrainCircuit size={28} />
                </div>

                <h2
                  className="
                    mb-5
                    text-3xl
                    font-black
                    tracking-tight
                    text-white
                  "
                >
                  Hablemos de ideas complejas.
                </h2>

                <p className="leading-relaxed text-slate-400">
                  Desde plataformas web y
                  visualización de datos hasta
                  investigación biomédica,
                  neurotecnología o automatización.
                  Si el proyecto parece difícil,
                  probablemente me interese.
                </p>
              </motion.div>

              {/* Contact cards */}
              <motion.div
                variants={fadeUp}
                className="
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-2xl
                "
              >

                <div className="space-y-8">

                  <div className="flex items-start gap-5">

                    <div
                      className="
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
                        shrink-0
                      "
                    >
                      <Mail size={24} />
                    </div>

                    <div className="space-y-2">

                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.3em]
                          text-slate-500
                        "
                      >
                        Email
                      </p>

                      <a
                        href="mailto:mirandatrbx@gmail.com"
                        className="
                          text-xl
                          font-semibold
                          text-white
                          transition-colors
                          hover:text-cyan-300
                        "
                      >
                        mirandatrbx@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/30
                        text-indigo-400
                        shrink-0
                      "
                    >
                      <MapPin size={24} />
                    </div>

                    <div className="space-y-2">

                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.3em]
                          text-slate-500
                        "
                      >
                        Ubicación
                      </p>

                      <p
                        className="
                          text-xl
                          font-semibold
                          text-white
                        "
                      >
                        Guadalajara, Jalisco
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Extra */}
              <motion.div
                variants={fadeUp}
                className="
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-indigo-500/10
                  p-8
                  backdrop-blur-2xl
                "
              >

                <div className="flex items-center gap-4 mb-5">

                  <Globe
                    size={24}
                    className="text-cyan-300"
                  />

                  <h3 className="text-xl font-bold text-white">
                    Disponible para:
                  </h3>
                </div>

                <div className="space-y-4 text-slate-300">

                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span>
                      Desarrollo Full Stack
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span>
                      Investigación y análisis
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span>
                      Sistemas biomédicos
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span>
                      Colaboraciones creativas
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ========================================= */}
            {/* FORM */}
            {/* ========================================= */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                md:p-10
                backdrop-blur-2xl
              "
            >

              {/* Glow */}
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

              <div className="relative z-10">

                {success ? (

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="
                      flex
                      min-h-[500px]
                      flex-col
                      items-center
                      justify-center
                      text-center
                    "
                  >

                    <div
                      className="
                        mb-8
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-green-400/20
                        bg-green-500/10
                        text-green-400
                      "
                    >
                      <CheckCircle2 size={46} />
                    </div>

                    <h3
                      className="
                        text-4xl
                        font-black
                        tracking-tight
                        text-white
                      "
                    >
                      Mensaje enviado.
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-md
                        text-lg
                        leading-relaxed
                        text-slate-400
                      "
                    >
                      Revisaré tu mensaje y te
                      responderé lo antes posible.
                    </p>

                    <button
                      onClick={() =>
                        setSuccess(false)
                      }
                      className="
                        mt-10
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-8
                        py-4
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:border-cyan-400/30
                        hover:bg-cyan-500/10
                      "
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>

                ) : (

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-7"
                  >

                    <div className="space-y-3">

                      <h2
                        className="
                          text-3xl
                          font-black
                          tracking-tight
                          text-white
                        "
                      >
                        Cuéntame tu idea.
                      </h2>

                      <p className="text-slate-400">
                        Mientras más detalles,
                        mejor.
                      </p>
                    </div>

                    {errorMsg && (
                      <div
                        className="
                          rounded-2xl
                          border
                          border-red-500/20
                          bg-red-500/10
                          p-4
                          text-sm
                          text-red-300
                        "
                      >
                        {errorMsg}
                      </div>
                    )}

                    {/* Name + Email */}
                    <div className="grid gap-6 md:grid-cols-2">

                      <div className="space-y-3">

                        <label
                          htmlFor="nombre"
                          className="
                            text-sm
                            font-semibold
                            text-slate-300
                          "
                        >
                          Nombre
                        </label>

                        <input
                          type="text"
                          id="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/30
                            px-5
                            py-4
                            text-white
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-500
                            focus:border-cyan-400/40
                            focus:bg-cyan-500/[0.03]
                          "
                        />
                      </div>

                      <div className="space-y-3">

                        <label
                          htmlFor="email"
                          className="
                            text-sm
                            font-semibold
                            text-slate-300
                          "
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/30
                            px-5
                            py-4
                            text-white
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-500
                            focus:border-cyan-400/40
                            focus:bg-cyan-500/[0.03]
                          "
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-3">

                      <label
                        htmlFor="asunto"
                        className="
                          text-sm
                          font-semibold
                          text-slate-300
                        "
                      >
                        Tipo de proyecto
                      </label>

                      <select
                        id="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/30
                          px-5
                          py-4
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          focus:border-cyan-400/40
                          focus:bg-cyan-500/[0.03]
                        "
                      >
                        <option value="">
                          Selecciona una opción
                        </option>

                        <option value="web">
                          Desarrollo Web
                        </option>

                        <option value="app">
                          Aplicación móvil
                        </option>

                        <option value="biomedica">
                          Solución biomédica
                        </option>

                        <option value="freelance">
                          Freelance / consultoría
                        </option>

                        <option value="otro">
                          Otro
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">

                      <label
                        htmlFor="mensaje"
                        className="
                          text-sm
                          font-semibold
                          text-slate-300
                        "
                      >
                        Mensaje
                      </label>

                      <textarea
                        id="mensaje"
                        rows={7}
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Describe tu idea, problema o proyecto..."
                        className="
                          w-full
                          resize-none
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/30
                          px-5
                          py-4
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-slate-500
                          focus:border-cyan-400/40
                          focus:bg-cyan-500/[0.03]
                        "
                      />
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        px-8
                        py-5
                        text-lg
                        font-bold
                        transition-all
                        duration-300
                        ${
                          isSubmitting
                            ? `
                              cursor-not-allowed
                              bg-slate-700
                              text-slate-400
                            `
                            : `
                              bg-cyan-400
                              text-black
                              hover:scale-[1.02]
                              hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]
                            `
                        }
                      `}
                    >

                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar mensaje

                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* ========================================= */}
          {/* FOOTER CTA */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="
              mt-24
              flex
              items-center
              justify-center
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
                text-sm
                text-slate-400
                backdrop-blur-xl
              "
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

              <span>
                Actualmente disponible para nuevos proyectos.
              </span>

              <ArrowRight
                size={16}
                className="text-cyan-400"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}