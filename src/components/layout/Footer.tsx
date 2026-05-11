"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#050816] overflow-hidden">
      
      {/* Glow superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Blur ambiental */}
      <div className="absolute bottom-[-120px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Grid tecnológico */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-3xl font-black tracking-tight text-white hover:text-cyan-300 transition-colors"
            >
              miranda
              <span className="text-cyan-400">.</span>
            </Link>

            <p className="text-sm leading-relaxed text-white/50 max-w-sm">
              Ingeniería Biomédica, software y sistemas inteligentes.
            </p>

            {/* Línea futurista */}
            <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
          </motion.div>

          {/* Navegación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-sm uppercase tracking-[0.25em] text-white/40 font-semibold">
              Navegación
            </h3>

            <div className="flex flex-col gap-4">
              {[
                { name: "Inicio", href: "/" },
                { name: "Portafolio", href: "/portafolio" },
                { name: "Sobre mí", href: "/sobre-mi" },
                { name: "Contacto", href: "/contacto" }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-white/70 hover:text-cyan-300 transition-all duration-300 w-fit"
                >
                  <span>{item.name}</span>

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 md:text-right"
          >
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-[0.25em] text-white/40 font-semibold">
                Conecta
              </h3>

              <p className="text-sm text-white/50 leading-relaxed md:ml-auto max-w-xs">
                Siempre abierto a proyectos ambiciosos, ideas raras y sistemas complejos.
              </p>
            </div>

            <div className="flex md:justify-end gap-4">
              
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/moiseiseiseis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/moises-garcia-b028ab35a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-white hover:border-blue-400/40 hover:bg-blue-400/10 transition-all duration-300"
              >
                <Linkedin size={20} />
              </motion.a>

            </div>
          </motion.div>
        </div>

        {/* Línea divisora */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-xs tracking-wide text-white/30">
            © {currentYear} MIRANDA — Diseñado y desarrollado desde cero.
          </p>

          <div className="flex items-center gap-2 text-xs text-white/20">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Online
          </div>
        </div>
      </div>
    </footer>
  );
}