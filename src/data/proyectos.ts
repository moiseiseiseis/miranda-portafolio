// Para agregar o editar un proyecto, modifica este arreglo y haz deploy.
// El orden del arreglo es el orden en que se muestran.
// Las secciones opcionales que queden vacías no se muestran en la página.

export type Categoria =
  | "Investigación"
  | "Dispositivos médicos"
  | "Plataformas"
  | "Proyectos académicos"
  | "Freelance";

export interface Proyecto {
  slug: string;
  titulo: string;
  categoria: Categoria;
  descripcion_corta: string;
  problema?: string;
  rol?: string;
  trabajo?: string[];
  estado?: string;
  stack_tecnologico: string[];
  colaboradores?: string[];
  imagen_miniatura?: string;
  url_demo?: string;
  url_repositorio?: string;
  url_instagram?: string;
}

export const proyectos: Proyecto[] = [
  {
    slug: "eeg-hmm",
    titulo: "Investigación EEG con HMM",
    categoria: "Investigación",
    descripcion_corta:
      "Proyecto en curso que estudia la dinámica cerebral durante el control inhibitorio mediante modelos ocultos de Markov aplicados a EEG.",
    problema:
      "Caracterizar cómo se organiza la actividad cerebral en el tiempo durante una tarea Go/NoGo, en adultos y adolescentes.",
    rol: "Asistente de investigación. Mi línea principal es el enfoque TDE-HMM (time-delay embedding).",
    trabajo: [
      "Desarrollo del pipeline de análisis.",
      "Presentación de avances ante el grupo de investigación (noviembre de 2026).",
      "Redacción de un manuscrito en preparación.",
    ],
    estado: "En curso. Manuscrito en preparación.",
    stack_tecnologico: ["Python", "hmmlearn", "scikit-learn", "Procesamiento de EEG"],
    colaboradores: [
      "Laboratorio de Bioinformática e Inteligencia Artificial (BIL, CUCEI), Universidad de Guadalajara",
      "Laboratorio de Biohacking (CUTLAJO), Universidad de Guadalajara",
      "Asesor: Dr. Omar Paredes",
    ],
    // [DATO PENDIENTE: capturas sin resultados numéricos]
  },
  {
    slug: "rumbo-rehab",
    titulo: "Rumbo Rehab",
    categoria: "Dispositivos médicos",
    descripcion_corta:
      "Wearable de muñeca que reconoce ejercicios de rehabilitación de hombro, cuenta repeticiones y mide adherencia. Finalista de Jalisco MedTech 2026.",
    problema:
      "Los fisioterapeutas no tienen una forma objetiva de saber si el paciente hizo en casa los ejercicios prescritos.",
    rol: "Desarrollo completo de hardware y software.",
    trabajo: [
      "Dispositivo con IMU y TinyML (Seeed XIAO nRF52840 Sense).",
      "App del paciente (Flutter), backend (NestJS) y panel del fisioterapeuta (Next.js).",
      "MVP probado de punta a punta con el dispositivo real.",
      "Retroalimentación positiva de fisioterapeutas.",
      "Ficha regulatoria preliminar (COFEPRIS).",
    ],
    estado: "Entre los 6 finalistas del programa Jalisco MedTech 2026.",
    stack_tecnologico: [
      "Seeed XIAO nRF52840 Sense",
      "IMU",
      "TinyML",
      "BLE",
      "Flutter",
      "NestJS",
      "Next.js",
    ],
    url_instagram: "https://www.instagram.com/rumborehab/",
    // [DATO PENDIENTE: capturas]
  },
  {
    slug: "taller-programacion",
    titulo: "Plataforma de enseñanza de programación",
    categoria: "Plataformas",
    descripcion_corta:
      "Plataforma gratuita para enseñar programación a principiantes de distintas carreras (servicio social).",
    rol: "Desarrollo completo de la plataforma y del currículo.",
    trabajo: [
      "LMS completo (Next.js + Supabase).",
      "Currículo con los talleres Fundamentos de Computación, Lógica, Python, Metacognición y Algoritmia.",
    ],
    estado: "En curso (2025 – presente).",
    stack_tecnologico: ["Next.js", "Supabase", "TypeScript"],
    colaboradores: [
      "CUTLAJO",
      "Rama Estudiantil IEEE",
      "Supervisión: Dra. María Teresa Romero Gutiérrez",
    ],
    imagen_miniatura: "/proyectos/taller-progra.png",
    url_demo: "https://taller-programacion-sigma.vercel.app/",
  },
  {
    slug: "pre-diagnostico-ergonomico-nom-036",
    titulo: "Plataforma de pre-diagnóstico ergonómico NOM-036",
    categoria: "Plataformas",
    descripcion_corta:
      "Plataforma que automatiza la evaluación de riesgo ergonómico conforme a la NOM-036-1-STPS-2018.",
    rol: "Desarrollador único.",
    trabajo: [
      "A partir de la investigación publicada del Dr. Valenzuela: instrumento de 50 ítems en 5 criterios.",
      "Generación automática de reportes.",
    ],
    estado: "En curso (2025 – presente). Artículo en preparación.",
    stack_tecnologico: ["Next.js", "Supabase", "Python"],
    colaboradores: ["Dr. Sergio Alberto Valenzuela Gómez (Universidad de Guadalajara)"],
    // [DATO PENDIENTE: capturas]
  },
  {
    slug: "talleres-culturales-musica",
    titulo: "Talleres culturales de música",
    categoria: "Plataformas",
    descripcion_corta: "Plataforma educativa para los talleres de música de CUTLAJO.",
    trabajo: [
      "LMS musical con entrenamiento auditivo y lectura de partitura.",
      "Taller de guitarra con recital final.",
    ],
    estado: "Artículo de gestión educativa en preparación.",
    stack_tecnologico: ["Next.js", "Supabase", "TypeScript"],
    // [DATO PENDIENTE: capturas]
  },
  {
    slug: "pneumo-tiny-ml",
    titulo: "PneumoTinyML",
    categoria: "Proyectos académicos",
    descripcion_corta:
      "Clasificador de radiografías de tórax para apoyo en la detección de neumonía, embebido en ESP32.",
    estado: "Proyecto académico.",
    stack_tecnologico: ["Edge Impulse", "PyTorch", "TensorFlow Lite", "ESP32"],
    imagen_miniatura: "/proyectos/pneumo-tiny-ml.png",
    url_demo: "https://pneumotiny-ml.vercel.app/",
  },
  {
    slug: "miranda-ris",
    titulo: "MIRANDA RIS/PACS",
    categoria: "Proyectos académicos",
    descripcion_corta:
      "Plataforma web para gestionar estudios radiológicos con visor DICOM.",
    estado: "Proyecto académico.",
    stack_tecnologico: ["Python", "MySQL", "Docker", "Orthanc", "OHIF Viewer"],
    imagen_miniatura: "/proyectos/miranda-ris.png",
    url_demo: "https://miranda-ris-pacs-showroom-1t8x.vercel.app/",
  },
  {
    slug: "smartknee",
    titulo: "SmartKnee / Goniómetro Digital",
    categoria: "Proyectos académicos",
    descripcion_corta:
      "Ecosistema integral de rehabilitación y medición de rango de movimiento (ROM) para rodilla.",
    trabajo: [
      "Hardware con ESP32 y sensores IMU.",
      "Aplicación móvil en Flutter.",
      "API backend en NestJS.",
      "Portal web en Next.js.",
    ],
    estado: "Proyecto académico.",
    stack_tecnologico: ["ESP32", "IMU", "Flutter", "NestJS", "Next.js"],
    imagen_miniatura: "/proyectos/smart.png",
    url_demo: "https://rodilladebronce1.vercel.app/",
  },
  {
    slug: "purple-bonnes",
    titulo: "Purple Bonnes",
    categoria: "Freelance",
    descripcion_corta:
      "E-commerce y portafolio digital desarrollado a medida para una artista plástica.",
    trabajo: ["Pasarela de pagos integrada con Stripe."],
    stack_tecnologico: ["Next.js", "Prisma", "Stripe"],
    imagen_miniatura: "/proyectos/purple.png",
    url_demo: "https://purple-bonnes.vercel.app/",
  },
];

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
