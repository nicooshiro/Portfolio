import imgPortadaTobby from "../imports/PORTADA-TOBBY-PS.jpg-3.jpeg";
import img2x1 from "../imports/2x1_TERMINADO_V2.jpg-3.jpeg";
import imgRef1 from "../imports/stikers-3.png";
const imgRef2 = "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGludGVyZmFjZSUyMGRhcmt8ZW58MXx8fHwxNzc5MTM0Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
import vidLogo from "../imports/logo_nuevo_6-4-2.mp4";
import vidSolares from "../imports/video_solares_varela_ia__CORTO_-2.mp4";
import imgPocoSerio1 from "../imports/dele-2.jpg";
import imgPocoSerio2 from "../imports/MVP-NAVE.png";
import imgPocoSerio3 from "../imports/poster-boli-nico-dele-laucha.png";
import imgPocoSerio4 from "../imports/posterRR.png";
import vidCamperas from "../imports/camperas_video_4.2.mp4";
import vidIAPinamar from "../imports/ia_pinamar.mp4";
import imgVinyl from "../imports/Captura_de_pantalla_2026-05-19_021735.png";
import imgFullescabioFlyer from "../imports/FLYER_PARA_REDES_APERTURA_FULLESCABIO.jpg";
import vidFullescabioVideo from "../imports/11_DE_ENERO_TRAGOS_CON_LETRA_C.mp4";

// SVGs as strings for simple rendering
const icons = {
  ps: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 12H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6"/><path d="M11 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/><path d="M13 10V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"/></svg>`, // Placeholder PS
  ai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"/><path d="m12 2 4 10-8 6"/></svg>`, // Placeholder Illustrator
  ae: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 12a4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4"/><path d="M14 12h8"/><path d="M14 12V4"/><path d="M14 12v8"/></svg>`, // Placeholder AE
  pr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 8v8l6-4-6-4Z"/></svg>`, // Placeholder PR
  blender: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>`,
  ia: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg>`, // Spark/IA
};

export const graphicProjects = [
  {
    id: "g1",
    title: "Portada Tobby",
    category: "Album Cover",
    thumbnail: imgPortadaTobby,
    type: "image" as const,
    mediaUrl: imgPortadaTobby,
    tools: [{ name: "Photoshop", icon: icons.ps }],
    description: "Diseño de portada para sencillo musical. Exploración tipográfica y manipulación fotográfica avanzada con un enfoque oscuro y urbano.",
    longDescription: "Un proyecto desafiante donde se buscó transmitir la esencia cruda del artista. La portada fue realizada íntegramente en Photoshop combinando texturas, ajuste de color y técnicas de composición avanzadas. Realizado en 2025.",
    colors: ["#000000", "#1A1A1A", "#8B0000"],
    year: "2025"
  },
  {
    id: "g2",
    title: "Campaña Promocional 2x1",
    category: "Publicidad",
    thumbnail: img2x1,
    type: "image" as const,
    mediaUrl: img2x1,
    tools: [{ name: "Photoshop", icon: icons.ps }, { name: "Illustrator", icon: icons.ai }],
    description: "Pieza publicitaria enfocada en alto impacto visual y legibilidad para redes sociales, integrando identidad de marca con ofertas destacadas.",
    longDescription: "Campaña desarrollada para maximizar el CTR en redes sociales. Se utilizaron colores vibrantes para captar la atención del usuario en el primer segundo de visualización, respetando la identidad de la marca. Realizado en 2025.",
    colors: ["#800080", "#FFFF00", "#FFFFFF"],
    year: "2025"
  },
  {
    id: "g3",
    title: "Poco Serio - Dele",
    category: "Diseño Deportivo",
    thumbnail: imgPocoSerio1,
    type: "image" as const,
    mediaUrl: imgPocoSerio1,
    tools: [{ name: "Photoshop", icon: icons.ps }],
    description: "Diseño gráfico para el equipo POCO SERIO.",
    longDescription: "Gráfica deportiva exclusiva para el equipo POCO SERIO, destacando al jugador. Creado íntegramente en Photoshop.",
    colors: ["#022359", "#FFFFFF", "#6B9EE8"],
    year: "2024"
  },
  {
    id: "g4",
    title: "Poco Serio - MVP Nave",
    category: "Diseño Deportivo",
    thumbnail: imgPocoSerio2,
    type: "image" as const,
    mediaUrl: imgPocoSerio2,
    tools: [{ name: "Photoshop", icon: icons.ps }],
    description: "Reconocimiento MVP para el equipo POCO SERIO.",
    longDescription: "Placa de reconocimiento al jugador más valioso del partido (MVP) para las redes del equipo POCO SERIO. Uso avanzado de texturas y modos de fusión.",
    colors: ["#000B29", "#E1AD21", "#FFFFFF"],
    year: "2024"
  },
  {
    id: "g5",
    title: "Poco Serio - Poster 1",
    category: "Diseño Deportivo",
    thumbnail: imgPocoSerio3,
    type: "image" as const,
    mediaUrl: imgPocoSerio3,
    tools: [{ name: "Photoshop", icon: icons.ps }],
    description: "Póster promocional del equipo POCO SERIO.",
    longDescription: "Diseño promocional dinámico con los integrantes del equipo POCO SERIO, resaltando la estética urbana y competitiva.",
    colors: ["#0A1B3F", "#30DEFF", "#FFFFFF", "#8B95A6"],
    year: "2024"
  },
  {
    id: "g6",
    title: "Poco Serio - Poster 2",
    category: "Diseño Deportivo",
    thumbnail: imgPocoSerio4,
    type: "image" as const,
    mediaUrl: imgPocoSerio4,
    tools: [{ name: "Photoshop", icon: icons.ps }],
    description: "Composición fotográfica para POCO SERIO.",
    longDescription: "Arte gráfico para presentar al equipo POCO SERIO, fusionando fotografía deportiva con elementos abstractos y tipografía de impacto.",
    colors: ["#091738", "#FFFFFF", "#B8C0D1", "#004B99"],
    year: "2024"
  },
  {
    id: "g7",
    title: "Disco de Vinilo - Vida (Cuba)",
    category: "Packaging",
    thumbnail: imgVinyl,
    type: "image" as const,
    mediaUrl: imgVinyl,
    tools: [{ name: "Photoshop", icon: icons.ps }],
    description: "Diseño de disco de vinilo inspirado en Cuba.",
    longDescription: "Diseño de arte y packaging para disco de vinilo. Inspirado en la cultura cubana, captura la esencia vintage y caribeña mediante texturas nostálgicas. Realizado en 2024.",
    colors: ["#244521", "#E6C843", "#080B09"],
    year: "2024"
  },
  {
    id: "g8",
    title: "Apertura Fullescabio Pinamar",
    category: "Publicidad",
    thumbnail: imgFullescabioFlyer,
    type: "image" as const,
    mediaUrl: imgFullescabioFlyer,
    tools: [{ name: "Photoshop", icon: icons.ps }, { name: "Illustrator", icon: icons.ai }],
    description: "Flyer promocional para la apertura del local Fullescabio en Pinamar.",
    longDescription: "Diseño de flyer publicitario para redes sociales promocionando la inauguración de la sucursal de Fullescabio en Pinamar. Composición vibrante y de alto impacto para conectar con público joven. Realizado en 2026.",
    colors: ["#F9D342", "#4FC4E3", "#CD7F32"],
    year: "2026"
  }
];

export const audiovisualProjects = [
  {
    id: "a1",
    title: "Animación de Logotipo",
    category: "Motion Graphics",
    thumbnail: vidLogo,
    type: "video" as const,
    mediaUrl: vidLogo,
    tools: [{ name: "After Effects", icon: icons.ae }, { name: "Illustrator", icon: icons.ai }],
    description: "Animación fluida de identidad de marca para introducciones de video. Uso de easing avanzado y partículas luminosas.",
    longDescription: "Animación de logotipo corporativo orientada a intros y outros de contenido audiovisual. Se hizo foco en el timing y las curvas de animación para lograr un resultado fluido y profesional. Realizado en 2025.",
    colors: undefined as string[] | undefined,
    year: "2025"
  },
  {
    id: "a2",
    title: "Solares Varela - Corto Promocional",
    category: "Video Editing & IA",
    thumbnail: vidSolares,
    type: "video" as const,
    mediaUrl: vidSolares,
    tools: [{ name: "Premiere Pro", icon: icons.pr }, { name: "After Effects", icon: icons.ae }, { name: "IA", icon: icons.ia }],
    description: "Edición dinámica para reel promocional. Corrección de color cinematográfica, uso de IA y diseño sonoro.",
    longDescription: "Edición de video y postproducción con asistencia de IA para reel publicitario. El trabajo incluyó diseño sonoro, etalonaje y estabilización, generando un recorrido inmersivo. Realizado en 2025.",
    colors: undefined as string[] | undefined,
    year: "2025"
  },
  {
    id: "a3",
    title: "Campaña de Camperas",
    category: "Publicidad",
    thumbnail: vidCamperas,
    type: "video" as const,
    mediaUrl: vidCamperas,
    tools: [{ name: "Premiere Pro", icon: icons.pr }],
    description: "Video promocional para campaña de camperas.",
    longDescription: "Montaje audiovisual para destacar el diseño y la calidad de la nueva línea de camperas. Edición rítmica adaptada para redes sociales y uso intensivo de transiciones por corte. Realizado en 2026.",
    colors: undefined as string[] | undefined,
    year: "2026"
  },
  {
    id: "a4",
    title: "Pinamar IA",
    category: "After Effects & IA",
    thumbnail: vidIAPinamar,
    type: "video" as const,
    mediaUrl: vidIAPinamar,
    tools: [{ name: "After Effects", icon: icons.ae }, { name: "IA", icon: icons.ia }],
    description: "Animación y manipulación de video utilizando herramientas de Inteligencia Artificial.",
    longDescription: "Proyecto experimental de video donde se combinó el poder compositivo de After Effects con la generación y modificación de entornos mediante IA, logrando un resultado visual único. Realizado en 2026.",
    colors: undefined as string[] | undefined,
    year: "2026"
  },
  {
    id: "a5",
    title: "Fullescabio - Tragos con C",
    category: "Social Media Video",
    thumbnail: vidFullescabioVideo,
    type: "video" as const,
    mediaUrl: vidFullescabioVideo,
    tools: [{ name: "Premiere Pro", icon: icons.pr }],
    description: "Video dinámico para redes sociales de Fullescabio.",
    longDescription: "Edición de contenido vertical orientado a redes sociales para Fullescabio. Montaje ágil con un ritmo veloz, subtítulos dinámicos y cortes rápidos que maximizan la retención del espectador en TikTok y Reels. Realizado en 2026.",
    colors: undefined as string[] | undefined,
    year: "2026"
  }
];
