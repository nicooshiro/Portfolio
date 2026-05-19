import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { Link } from "react-router";
import { graphicProjects } from "../data";
import { Filter } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function GraphicDesign() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterYear, setFilterYear] = useState<string | null>(null);
  const [filterTool, setFilterTool] = useState<string | null>(null);
  
  const allTools = Array.from(new Set(graphicProjects.flatMap(p => p.tools.map(t => t.name))));

  const filteredProjects = graphicProjects.filter(p => {
    const matchYear = filterYear ? p.year === filterYear : true;
    const matchTool = filterTool ? p.tools.some(t => t.name === filterTool) : true;
    return matchYear && matchTool;
  });
  
  // Create an array with enough slides for Swiper's loop mode
  const displayProjects = filteredProjects.length > 0 
    ? [...filteredProjects, ...filteredProjects, ...filteredProjects]
    : [];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] w-full py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
          Diseño Gráfico
        </h1>
        <p className="text-white/50 max-w-lg mx-auto text-sm md:text-base">
          Una selección exclusiva de trabajos de diseño gráfico enmarcados en una estética cinemática.
        </p>

        {/* Filters */}
        <div className="flex flex-col items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-3">
            <Filter size={20} className="text-white/50" />
            <div className="flex flex-wrap justify-center bg-white/5 p-1.5 rounded-full border border-white/10">
              {['Todos', '2024', '2025', '2026'].map((yearOpt) => {
                const isSelected = (yearOpt === 'Todos' && filterYear === null) || yearOpt === filterYear;
                return (
                  <button 
                    key={yearOpt}
                    onClick={() => setFilterYear(yearOpt === 'Todos' ? null : yearOpt)}
                    className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                      isSelected 
                        ? 'bg-[#E8B931] text-black shadow-md' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {yearOpt}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
            <button 
              onClick={() => setFilterTool(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                filterTool === null 
                  ? 'border-[#E8B931] text-[#E8B931] bg-[#E8B931]/10' 
                  : 'border-white/10 text-white/50 hover:text-white hover:border-white/30'
              }`}
            >
              Todas las herr.
            </button>
            {allTools.map((toolName) => {
              const isSelected = filterTool === toolName;
              return (
                <button 
                  key={toolName}
                  onClick={() => setFilterTool(toolName)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                    isSelected 
                      ? 'border-[#0047FF] text-[#0047FF] bg-[#0047FF]/10' 
                      : 'border-white/10 text-white/50 hover:text-white hover:border-white/30'
                  }`}
                >
                  {toolName}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {displayProjects.length === 0 ? (
        <div className="w-full py-20 flex justify-center items-center">
          <p className="text-white/50 text-lg">No hay proyectos que coincidan con estos filtros.</p>
        </div>
      ) : (
        <div className="w-full max-w-6xl mx-auto relative">
          <Swiper
            key={`${filterYear}-${filterTool}`}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full py-12"
            initialSlide={0}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
          {displayProjects.map((project, index) => {
            const isActive = activeIndex === index;
            return (
              <SwiperSlide 
                key={`${project.id}-${index}`} 
                className="!w-[300px] md:!w-[500px] !h-[400px] md:!h-[600px] relative rounded-3xl overflow-hidden transition-all duration-500"
              >
                <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40 blur-sm'}`}>
                  {project.type === "pdf" ? (
                    <embed
                      src={`${project.mediaUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                      type="application/pdf"
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  ) : (
                    <img
                      src={project.mediaUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {isActive && (
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(232,185,49,0.3)] pointer-events-none" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Glassmorphism Bottom Bar for the Active Project */}
        {displayProjects.length > 0 && (
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[90%] md:w-[600px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {displayProjects[activeIndex]?.title}
              </h3>
              <p className="text-white/60 text-xs mb-3 max-w-[280px]">
                {displayProjects[activeIndex]?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {displayProjects[activeIndex]?.tools.map((tool) => (
                  <span 
                    key={tool.name} 
                    className="flex items-center gap-1 px-3 py-1 bg-black/40 border border-white/10 text-white/80 text-xs rounded-full"
                  >
                    <span className="w-3 h-3 text-white" dangerouslySetInnerHTML={{ __html: tool.icon }} />
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Paleta</span>
              <div className="flex gap-2">
                {displayProjects[activeIndex]?.colors?.map((color, idx) => (
                  <div 
                    key={idx} 
                    className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
            <Link 
              to={displayProjects[activeIndex]?.id ? `/project/${displayProjects[activeIndex].id}` : '/'}
              className="px-6 py-3 bg-[#E8B931] text-black font-semibold rounded-full hover:bg-white transition-colors flex-shrink-0 ml-4"
            >
              Ver Detalles
            </Link>
          </motion.div>
        )}
      </div>
      )}
    </div>
  );
}
