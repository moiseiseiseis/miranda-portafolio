import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Proyecto } from "../data/proyectos";

// Tarjeta grande: proyectos del grupo "principal" (portafolio e inicio).
export function ProyectoCardGrande({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link
      href={`/portafolio/${proyecto.slug}`}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        transition-colors
        duration-300
        hover:border-cyan-400/30
      "
    >
      {proyecto.imagen_miniatura && (
        <div className="relative h-56 overflow-hidden border-b border-white/10">
          <img
            src={proyecto.imagen_miniatura}
            alt={proyecto.titulo}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-cyan-300">
            {proyecto.categoria}
          </span>

          {proyecto.etiqueta_estado && (
            <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">
              {proyecto.etiqueta_estado}
            </span>
          )}
        </div>

        <h3 className="mb-4 text-3xl font-black leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
          {proyecto.titulo}
        </h3>

        <p className="mb-8 flex-grow leading-relaxed text-slate-400">
          {proyecto.descripcion_corta}
        </p>

        <div className="mb-6 h-px w-full bg-white/10" />

        <div className="mb-6 flex flex-wrap gap-2">
          {proyecto.stack_tecnologico.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
          Ver proyecto
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}

// Fila compacta: proyectos académicos y freelance.
export function ProyectoCardCompacta({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link
      href={`/portafolio/${proyecto.slug}`}
      className="
        group
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        p-5
        transition-colors
        duration-300
        hover:border-cyan-400/30
      "
    >
      <div className="mb-2 flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-300">
          {proyecto.titulo}
        </h3>
        <ArrowUpRight size={16} className="mt-1 shrink-0 text-slate-500" />
      </div>

      <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-400">
        {proyecto.descripcion_corta}
      </p>

      <p className="text-xs text-slate-500">
        {proyecto.stack_tecnologico.join(" · ")}
      </p>
    </Link>
  );
}
