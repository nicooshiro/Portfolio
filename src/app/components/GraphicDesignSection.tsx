import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import Masonry from "react-responsive-masonry";

const projects = [
  {
    id: 1,
    title: "Branding Corporativo",
    category: "Branding",
    description: "Identidad visual completa para startup tecnológica",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Poster Festival",
    category: "Diseño Editorial",
    description: "Serie de posters para festival de música",
    color: "from-pink-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "Packaging Premium",
    category: "Packaging",
    description: "Diseño de packaging para línea de productos orgánicos",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Tipografía Custom",
    category: "Tipografía",
    description: "Desarrollo de fuente tipográfica para marca",
    color: "from-yellow-500/20 to-red-500/20",
  },
  {
    id: 5,
    title: "Social Media",
    category: "Redes Sociales",
    description: "Contenido visual para campaña digital",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Identidad Visual",
    category: "Branding",
    description: "Sistema de identidad para evento cultural",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

export function GraphicDesignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="diseno-grafico" className="min-h-screen py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl mb-20 font-light">Diseño Gráfico</h2>
        </motion.div>

        <Masonry columnsCount={columns} gutter="1.5rem" className="mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project.id)}
              className="cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                <div className={`aspect-[4/5] bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-light text-foreground/10">
                    {project.id}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-foreground/90 flex items-center justify-center p-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-center">
                    <p className="text-sm mb-2 opacity-80">{project.category}</p>
                    <h3 className="text-xl mb-3">{project.title}</h3>
                    <p className="text-sm opacity-70">Ver detalles</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-4xl w-full bg-card border border-border rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {projects
                .filter((p) => p.id === selectedProject)
                .map((project) => (
                  <div key={project.id}>
                    <div className={`aspect-video bg-gradient-to-br ${project.color}`} />
                    <div className="p-8">
                      <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                      <h3 className="text-3xl mb-4">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
