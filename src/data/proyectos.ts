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
  semblanza?: string;
  abstract?: string[];
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
    semblanza:
      "La pregunta de fondo es cómo se reorganiza la actividad cerebral cuando una persona tiene que frenar una respuesta. Para estudiarlo usamos EEG de adultos y adolescentes registrado durante una tarea Go/NoGo y un modelo que describe la señal como una secuencia de estados que se alternan en el tiempo. Mi parte consiste en adaptar ese modelo (TDE-HMM) a ensayos cortos y comprobar que los estados que encuentra reflejan la tarea y no un efecto del propio método.",
    abstract: [
      "Aplicar un modelo oculto de Markov con time-delay embedding (TDE-HMM) a EEG de 19 canales registrado en épocas cortas de tarea plantea dos riesgos. El primero es que el modelo aprenda la posición temporal dentro del ensayo en lugar del contenido de la señal: si la respuesta evocada domina la varianza, cada estado puede quedar ligado a un intervalo fijo de latencia y el modelo funcionaría como un reloj del ensayo. El segundo es que el número de estados se fija antes del ajuste, de modo que los estados solo pueden interpretarse como propiedades de la población si se reproducen en muestras independientes.",
      "Para saber si los estados responden a lo que exige la tarea hace falta un paradigma en el que se conozca de antemano cuándo y en qué banda debería aparecer un cambio. El Go/NoGo cumple esa condición. Frente a los ensayos Go, los NoGo se asocian a una mayor negatividad frontocentral N2 (≈200-400 ms), a una mayor positividad P3 (≈300-500 ms) y a un aumento de la potencia theta frontal medial. Aquí esos marcadores sirven de referencia para ubicar la ventana y la banda en que deberían aparecer diferencias entre condiciones, con la cautela de que el contraste NoGo−Go mezcla la inhibición con la ejecución motora de los ensayos Go.",
      "El objetivo es adaptar el TDE-HMM a este tipo de registro y evaluar si produce una descripción válida y sensible a la demanda de la tarea. Planteamos tres hipótesis. Las dos primeras son condiciones de validez del método: los estados no codifican la posición temporal dentro del ensayo (H1) y los estados identificados en una mitad de los participantes se reproducen en la otra mitad (H2). La tercera es la predicción sustantiva: la ocupación de los estados difiere entre ensayos Go y NoGo en una ventana posterior al estímulo compatible con los componentes N2/P3 y con la actividad theta asociada al control inhibitorio (H3).",
    ],
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
    imagen_miniatura: "/proyectos/rumbo-rehab.png",
    url_demo: "https://rumbo-rehab-web.vercel.app/",
    url_instagram: "https://www.instagram.com/rumborehab/",
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
