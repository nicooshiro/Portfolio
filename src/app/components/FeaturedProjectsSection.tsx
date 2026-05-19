import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Rebrand Completo",
    client: "Tech Startup",
    year: "2024",
    description: "Desarrollo de identidad visual completa, desde el concepto hasta la implementación en todos los puntos de contacto.",
    tags: ["Branding", "Motion", "Web"],
    color: "from-blue-500/10 to-purple-500/10",
  },
  {
    id: 2,
    title: "Campaña Audiovisual",
    client: "Marca de Moda",
    year: "2024",
    description: "Producción completa de contenido audiovisual para lanzamiento de nueva colección.",
    tags: ["Video", "Fotografía", "Edición"],
    color: "from-pink-500/10 to-orange-500/10",
  },
  {
    id: 3,
    title: "Sistema de Diseño",
    client: "Fintech App",
    year: "2023",
    description: "Creación de sistema de diseño escalable con componentes reutilizables y guías de uso.",
    tags: ["UI/UX", "Design System", "Figma"],
    color: "from-green-500/10 to-teal-500/10",
  },
];

export function FeaturedProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="min-h-screen py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl mb-20 font-light">Proyectos Destacados</h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 bg-card border border-border rounded-3xl hover:bg-accent/50 transition-all">
                <div className={`aspect-video rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    className="text-8xl font-light text-foreground/5"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.id}
                  </motion.div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.client} — {project.year}
                      </p>
                      <h3 className="text-3xl md:text-4xl mb-4">{project.title}</h3>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="p-3 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-background border border-border rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
