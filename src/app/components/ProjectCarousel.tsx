import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Mousewheel, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Maximize2 } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";

export type Project = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  type: "image" | "video";
  mediaUrl: string;
  tools: { name: string; icon: string }[];
  description: string;
};

interface ProjectCarouselProps {
  projects: Project[];
  activeCategoryId?: string;
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  // Asegurar suficientes slides para loop infinito duplicando si es necesario
  let displayProjects = [...projects];
  if (projects.length > 0 && projects.length < 6) {
    while (displayProjects.length < 8) {
      displayProjects = [...displayProjects, ...projects];
    }
  }

  const activeProject = displayProjects[activeIndex] || projects[0];

  // Colores dinámicos para el glow basados en el índice (simulando extracción de color)
  const glowColors = ["#0047FF", "#E8B931", "#FF2A54", "#00D2FF", "#B500FF", "#FF7B00"];
  const currentColor = glowColors[activeIndex % glowColors.length];
  const nextColor = glowColors[(activeIndex + 1) % glowColors.length];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative py-12">
      
      {/* Background Ambient Glow Based on Active Project */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-1000 ease-in-out z-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] opacity-10 blur-[120px] mix-blend-screen transition-colors duration-1000"
          style={{ backgroundColor: currentColor }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] opacity-[0.08] blur-[150px] mix-blend-screen transition-colors duration-1000"
          style={{ backgroundColor: nextColor }} 
        />
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px]" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-3d {
          perspective: 1400px !important;
        }
        .cinematic-swiper {
          overflow: visible !important;
          padding: 4rem 0 !important;
        }
        .cinematic-swiper .swiper-slide {
          transition: filter 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
          filter: blur(8px) brightness(0.4);
          opacity: 0.4;
        }
        .cinematic-swiper .swiper-slide-active {
          filter: blur(0px) brightness(1.1);
          opacity: 1;
          z-index: 10;
        }
        /* Active glow border and drop-shadow */
        .cinematic-swiper .swiper-slide-active .card-glow {
          opacity: 1;
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.15), 0 0 80px var(--glow-color, rgba(232, 185, 49, 0.2));
        }
        .cinematic-swiper .swiper-slide-next,
        .cinematic-swiper .swiper-slide-prev {
          filter: blur(3px) brightness(0.6);
          opacity: 0.8;
          z-index: 5;
        }
        .cinematic-swiper .swiper-slide-shadow-left,
        .cinematic-swiper .swiper-slide-shadow-right {
          background-image: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0)) !important;
          border-radius: 2rem;
        }
        .cinematic-swiper .swiper-slide-shadow-right {
          background-image: linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0)) !important;
        }
      `}} />

      {/* Swiper Coverflow Container */}
      <div className="w-full max-w-[100vw] h-[55vh] md:h-[60vh] lg:h-[65vh] relative z-10 flex items-center justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={900}
          slideToClickedSlide={true}
          keyboard={{ enabled: true }}
          mousewheel={{ enabled: true, sensitivity: 1.2 }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          coverflowEffect={{
            rotate: 35,       // Inclinación suave
            stretch: -20,     // Juntar un poco las cartas para que se vean mejor a los lados
            depth: 350,       // Gran profundidad para alejar las cartas no activas
            modifier: 1,      
            slideShadows: true,
            scale: 0.75       // Reducir la escala de los laterales bastante
          }}
          modules={[EffectCoverflow, Keyboard, Mousewheel, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full cinematic-swiper"
        >
          {displayProjects.map((project, index) => (
            <SwiperSlide 
              key={`${project.id}-${index}`} 
              className="w-[75vw] sm:w-[50vw] md:w-[45vw] lg:w-[35vw] max-w-[500px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-[#050B14] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/5 relative group cursor-pointer"
              onClick={() => {
                if (activeIndex === index) {
                  setExpandedProject(project);
                }
              }}
            >
              {/* Contenedor principal con glow reactivo */}
              <div 
                className="card-glow absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] opacity-0 transition-opacity duration-1000 pointer-events-none border border-white/20" 
                style={{ '--glow-color': currentColor } as React.CSSProperties}
              />

              {/* Media Content */}
              {project.type === "image" ? (
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full relative">
                  <video 
                    src={project.thumbnail} 
                    className="w-full h-full object-cover opacity-95 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                       <Maximize2 className="text-white drop-shadow-lg" size={24} />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Glassmorphism reflection overlay para más profundidad 3D */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-overlay" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Floating Info Bar - Cinematic UI */}
      <AnimatePresence mode="wait">
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-12 z-20 w-[92%] max-w-5xl bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-6 shadow-[0_30px_80px_-15px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
          >
            {/* Subtle cinematic top highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Thumbnail */}
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-[1.2rem] overflow-hidden shrink-0 border border-white/10 hidden sm:block relative shadow-2xl">
              {activeProject.type === "image" ? (
                <img src={activeProject.thumbnail} alt="" className="w-full h-full object-cover" />
              ) : (
                <video src={activeProject.thumbnail} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              )}
              <div className="absolute inset-0 shadow-inner rounded-[1.2rem] pointer-events-none" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-[#E8B931] text-xs md:text-xs font-black tracking-[0.3em] uppercase mb-1 md:mb-2 block drop-shadow-md"
              >
                {activeProject.category}
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl"
              >
                {activeProject.title}
              </motion.h3>
              
              {/* Tools */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3"
              >
                {activeProject.tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/90 bg-white/5 hover:bg-white/10 transition-colors px-3 py-1.5 rounded-lg border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    <span dangerouslySetInnerHTML={{ __html: tool.icon }} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current flex items-center justify-center opacity-80" />
                    {tool.name}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Action Button */}
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={() => setExpandedProject(activeProject)}
              className="w-full md:w-auto mt-4 md:mt-0 px-8 py-4 bg-white text-black font-black uppercase tracking-wider text-sm rounded-2xl hover:bg-[#E8B931] hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_40px_rgba(232,185,49,0.4)] transition-all duration-300 flex items-center justify-center gap-3 shrink-0"
            >
              Ver Detalles
              <ExternalLink size={18} className="stroke-[3]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Expansion Modal - Cinematic Style */}
      <AnimatePresence>
        {expandedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center overflow-y-auto backdrop-blur-2xl"
          >
            <motion.button 
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setExpandedProject(null)}
              className="fixed top-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-white/5 hover:bg-white/20 hover:scale-110 rounded-full flex items-center justify-center text-white backdrop-blur-xl transition-all border border-white/10 shadow-2xl"
            >
              <X size={24} />
            </motion.button>

            <div className="w-full max-w-7xl min-h-screen py-20 px-4 md:px-6 flex flex-col items-center">
              <motion.div 
                initial={{ y: 80, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-[2rem] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.8)] bg-[#03060A] border border-white/5"
              >
                {/* Media Presentation */}
                <div className="w-full max-h-[75vh] bg-black flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03060A] via-transparent to-transparent z-10 h-40 bottom-0 pointer-events-none" />
                  {expandedProject.type === "image" ? (
                    <img 
                      src={expandedProject.mediaUrl || expandedProject.thumbnail} 
                      alt={expandedProject.title} 
                      className="w-full max-h-[75vh] object-contain relative z-0"
                    />
                  ) : (
                    <video 
                      src={expandedProject.mediaUrl || expandedProject.thumbnail} 
                      controls 
                      autoPlay 
                      className="w-full max-h-[75vh] object-contain relative z-0"
                    />
                  )}
                </div>

                {/* Details Section */}
                <div className="p-8 md:p-14 relative z-20">
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    <div className="flex-1">
                       <span className="text-[#E8B931] text-xs font-black tracking-[0.3em] uppercase mb-4 block">
                        {expandedProject.category}
                      </span>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tighter">
                        {expandedProject.title}
                      </h2>
                      <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-3xl font-light">
                        {expandedProject.description}
                      </p>
                    </div>

                    <div className="w-full lg:w-auto bg-white/[0.03] border border-white/5 rounded-[2rem] p-8 min-w-[280px]">
                      <h4 className="text-white font-black mb-6 border-b border-white/10 pb-4 text-sm tracking-widest uppercase">Tecnologías</h4>
                      <div className="flex flex-col gap-5">
                        {expandedProject.tools.map((tool, idx) => (
                          <div key={idx} className="flex items-center gap-4 text-white/90">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                               <span dangerouslySetInnerHTML={{ __html: tool.icon }} className="w-6 h-6 fill-current flex items-center justify-center opacity-80" />
                            </div>
                            <span className="font-semibold text-lg">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}