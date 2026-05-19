import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

const categories = ["Todos", "Motion Graphics", "Edición de Video", "Animación"];

const videos = [
  {
    id: 1,
    title: "Motion Graphics Corporativo",
    category: "Motion Graphics",
    duration: "0:45",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Reel Comercial 2024",
    category: "Edición de Video",
    duration: "1:30",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Animación de Logo",
    category: "Animación",
    duration: "0:15",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "Video Explicativo",
    category: "Motion Graphics",
    duration: "2:00",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 5,
    title: "Spot Publicitario",
    category: "Edición de Video",
    duration: "0:30",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: 6,
    title: "Animación 2D",
    category: "Animación",
    duration: "1:15",
    color: "from-yellow-500/20 to-orange-500/20",
  },
];

export function AudiovisualSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredVideos =
    activeCategory === "Todos"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section id="audiovisual" className="min-h-screen py-32 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl mb-12 font-light">Audiovisual</h2>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-background border border-border hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid de videos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              layout
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                <div className={`aspect-video bg-gradient-to-br ${video.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-background transition-colors"
                    >
                      <Play className="w-8 h-8 fill-current" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{video.category}</p>
                  <h3 className="text-lg">{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
