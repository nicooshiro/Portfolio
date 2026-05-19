import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, PlayCircle, MonitorPlay, Filter } from "lucide-react";
import { graphicProjects, audiovisualProjects } from "../data";
import profilePic from "../../imports/foto_de_perfil-1.jpg";

export function Home() {
  const [filterYear, setFilterYear] = useState<string | null>(null);
  const [filterTool, setFilterTool] = useState<string | null>(null);
  
  const allProjects = [...graphicProjects, ...audiovisualProjects];
  
  const allTools = Array.from(new Set(allProjects.flatMap(p => p.tools.map(t => t.name))));

  const filteredProjects = allProjects.filter(p => {
    const matchYear = filterYear ? p.year === filterYear : true;
    const matchTool = filterTool ? p.tools.some(t => t.name === filterTool) : true;
    return matchYear && matchTool;
  });

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 z-10">
          
          {/* Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-56 h-56 md:w-72 md:h-72 flex-shrink-0 relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E8B931] to-[#0047FF] opacity-30 blur-2xl animate-pulse" />
            <img 
              src={profilePic} 
              alt="Nicolás Oshiro" 
              className="w-full h-full object-cover rounded-full border border-white/20 shadow-2xl relative z-10"
            />
          </motion.div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative inline-block mb-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                NICOLÁS OSHIRO
              </h1>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl text-[#E8B931] font-light tracking-wide mb-6"
            >
              Diseño Gráfico & Audiovisual
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              Soy estudiante de 4º año de la UADE. Elevo marcas a través de narrativas visuales inmersivas, 
              aplicando un enfoque cinematográfico para el diseño y el movimiento.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link 
                to="/graphic-design"
                className="group relative px-6 py-3 bg-[#E8B931] text-black font-semibold rounded-full overflow-hidden flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(232,185,49,0.3)] hover:shadow-[0_0_40px_rgba(232,185,49,0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MonitorPlay size={18} />
                  Gráfico
                </span>
              </Link>

              <Link 
                to="/audiovisual"
                className="group px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full flex items-center gap-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:border-white/20 hover:scale-105"
              >
                <PlayCircle size={18} className="text-[#0047FF] group-hover:text-[#E8B931] transition-colors" />
                Audiovisual
                <ArrowRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Grid / Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none opacity-50 z-0"></div>
      </section>

      {/* All Projects Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            TODOS MIS PROYECTOS
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Una mirada completa a mis trabajos más recientes en diseño gráfico y producción audiovisual.
          </p>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden">
                {project.type === "video" ? (
                  <video
                    src={project.mediaUrl}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : project.type === "pdf" ? (
                  <embed
                    src={`${project.mediaUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    type="application/pdf"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  />
                ) : (
                  <img
                    src={project.mediaUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <span className="text-[#E8B931] text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <span className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Herramientas</span>
                    <div className="flex gap-2">
                      {project.tools.map((tool) => (
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

                  {project.colors && (
                    <div>
                      <span className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Paleta de Colores</span>
                      <div className="flex gap-2">
                        {project.colors.map((color, idx) => (
                          <div 
                            key={idx} 
                            className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link 
                  to={project?.id ? `/project/${project.id}` : '/'}
                  className="inline-flex items-center gap-2 text-[#E8B931] font-semibold hover:text-white transition-colors"
                >
                  Ver Proyecto Completamente <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
