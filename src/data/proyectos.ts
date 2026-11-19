// =========================================
// PROYECTOS DEL PORTAFOLIO
// =========================================
// Para agregar o editar un proyecto, modifica este arreglo y haz deploy.
// El orden del arreglo es el orden en que se muestran (primero = arriba).
//
// - slug: la URL del proyecto (/portafolio/<slug>). Único, sin espacios.
// - imagen_miniatura: ruta dentro de /public (ej. "/proyectos/smart.png").
// - contenido_completo: HTML para la página de detalle (opcional).

export type Categoria =
  | "Desarrollo Web"
  | "Móvil & Hardware"
  | "Software & Datos";

export interface Proyecto {
  slug: string;
  titulo: string;
  categoria: Categoria;
  descripcion_corta: string;
  stack_tecnologico: string[];
  imagen_miniatura?: string;
  contenido_completo?: string;
  url_demo?: string;
  url_repositorio?: string;
}

export const proyectos: Proyecto[] = [
  // ---------- Desarrollo Web ----------
  {
    slug: "miranda-ris",
    titulo: "MIRANDA",
    categoria: "Desarrollo Web",
    descripcion_corta:
      "Plataforma web tipo RIS/PACS para la gestión de imágenes radiológicas y visualización de estudios DICOM.",
    stack_tecnologico: ["Next.js", "React", "DICOM"],
    imagen_miniatura: "/proyectos/miranda-ris.png",
    contenido_completo: `
      <h2>Sobre este proyecto</h2>
      <p>Plataforma web tipo RIS/PACS para la gestión de imágenes radiológicas y visualización de estudios DICOM.</p>
      <p><strong>Enfoque:</strong> salud digital, gestión de datos médicos y visualización web.</p>
    `,
  },
  {
    slug: "purple-bananas",
    titulo: "Purple Bananas",
    categoria: "Desarrollo Web",
    descripcion_corta:
      "E-commerce y portafolio digital desarrollado a medida para una artista plástica.",
    stack_tecnologico: ["Next.js", "Prisma", "Stripe"],
    imagen_miniatura: "/proyectos/purple.png",
    contenido_completo: `
      <h2>Sobre este proyecto</h2>
      <p>E-commerce y portafolio digital desarrollado a medida para una artista plástica, con pasarela de pagos integrada con Stripe.</p>
    `,
  },
  {
    slug: "taller-programacion",
    titulo: "Taller de Programación para No Programadores",
    categoria: "Desarrollo Web",
    descripcion_corta:
      "Aplicación web para la gestión de comunidad, registro de estudiantes y administración de eventos educativos.",
    stack_tecnologico: ["Next.js", "Supabase"],
    imagen_miniatura: "/proyectos/taller-progra.png",
    contenido_completo: `
      <h2>Sobre este proyecto</h2>
      <p>Aplicación web enfocada en la gestión de comunidad, registro de estudiantes y administración de eventos educativos.</p>
    `,
  },

  // ---------- Móvil & Hardware ----------
  {
    slug: "smartknee",
    titulo: "SmartKnee / Goniómetro Digital",
    categoria: "Móvil & Hardware",
    descripcion_corta:
      "Ecosistema integral de rehabilitación y medición de rango de movimiento (ROM) para rodilla.",
    stack_tecnologico: ["ESP32", "IMU", "Flutter", "NestJS", "Next.js"],
    imagen_miniatura: "/proyectos/smart.png",
    contenido_completo: `
      <h2>Sobre este proyecto</h2>
      <p>Ecosistema integral de rehabilitación y medición de rango de movimiento (ROM) para rodilla.</p>
      <h3>Arquitectura</h3>
      <ul>
        <li>Hardware con ESP32 y sensores IMU</li>
        <li>Aplicación móvil en Flutter</li>
        <li>API backend en NestJS</li>
        <li>Portal web en Next.js</li>
      </ul>
    `,
  },
  {
    slug: "monitor-rehabilitacion-hombro",
    titulo: "Monitor de Rehabilitación de Hombro",
    categoria: "Móvil & Hardware",
    descripcion_corta:
      "Dispositivo wearable para el seguimiento continuo de movimiento y análisis cinemático en procesos de rehabilitación.",
    stack_tecnologico: ["Seeed XIAO BLE Sense", "LSM6DS3", "BLE"],
    contenido_completo: `
      <h2>Sobre este proyecto</h2>
      <p>Dispositivo wearable diseñado para el seguimiento continuo de movimiento y análisis cinemático en procesos de rehabilitación.</p>
      <p><strong>Hardware:</strong> Seeed Studio XIAO BLE Sense con sensor IMU integrado (LSM6DS3).</p>
    `,
  },

  // ---------- Software & Datos ----------
  {
    slug: "eeg-hmm",
    titulo: "Análisis de Señales EEG con HMMs",
    categoria: "Software & Datos",
    descripcion_corta:
      "Plataforma de neurociencia computacional para modelar la dinámica cerebral en paradigmas resting-state y Go/No-Go.",
    stack_tecnologico: ["Python", "Gaussian HMM", "TDE-HMM", "EEG"],
    imagen_miniatura: "/proyectos/eeg-hmm.png",
    contenido_completo: `
      <h2>Sobre este proyecto</h2>
      <p>Plataforma de neurociencia computacional orientada a modelar la dinámica cerebral en paradigmas <em>resting-state</em> y <em>Go/No-Go</em>.</p>
      <p><strong>Métodos:</strong> modelos ocultos de Markov (Gaussian HMM y TDE-HMM).</p>
    `,
  },
  {
    slug: "pneumo-tiny-ml",
    titulo: "PneumoTinyML",
    categoria: "Software & Datos",
    descripcion_corta:
      "Clasificación de radiografías de tórax con machine learning como apoyo en la detección de neumonía.",
    stack_tecnologico: ["Machine Learning", "TinyML", "Visión por computadora"],
    imagen_miniatura: "/proyectos/pneumo-tiny-ml.png",
    contenido_completo: `
      <h2>Sobre este proyecto</h2>
      <p>Sistema de clasificación de imágenes médicas en radiografías de tórax mediante técnicas de machine learning para apoyo en la detección de neumonía.</p>
    `,
  },
  {
    slug: "simulacion-esquizofilano",
    titulo: "Simulación de Esquizofilano (SPG)",
    categoria: "Software & Datos",
    descripcion_corta:
      "Pipeline in silico para evaluar el esquizofilano de Schizophyllum commune como portador de ácidos nucleicos.",
    stack_tecnologico: ["Python", "OpenMM", "MDTraj"],
    contenido_completo: `
      <h2>Sobre este proyecto</h2>
      <p>Pipeline <em>in silico</em> para evaluar la viabilidad del esquizofilano derivado de <em>Schizophyllum commune</em> como portador de ácidos nucleicos.</p>
      <p><strong>Herramientas:</strong> OpenMM y MDTraj.</p>
    `,
  },
];

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
