import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { graphicProjects, audiovisualProjects } from "../data";

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const allProjects = [...graphicProjects, ...audiovisualProjects];
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <h2 className="text-white text-2xl">Proyecto no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center z-10">
      <div className="w-full flex justify-start mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} />
          Volver
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black">
          {project.type === "video" ? (
            <video
              src={project.mediaUrl}
              className="w-full h-full object-contain"
              autoPlay
              controls
              playsInline
            />
          ) : project.type === "pdf" ? (
            <embed
              src={project.mediaUrl}
              type="application/pdf"
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={project.mediaUrl}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-[#E8B931]/20 text-[#E8B931] text-xs font-bold uppercase tracking-wider rounded-full border border-[#E8B931]/30">
                {project.category}
              </span>
              <span className="text-white/50 text-sm">{project.year}</span>
            </div>
            
            <h3 className="text-xl text-white font-semibold mb-4">Sobre el Proyecto</h3>
            <p className="text-white/70 leading-relaxed text-lg mb-6">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="flex flex-col gap-8 bg-white/5 p-8 rounded-3xl border border-white/10 h-fit">
            <div>
              <span className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3 block">Herramientas</span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span 
                    key={tool.name} 
                    className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/10 text-white/90 text-sm rounded-full"
                  >
                    <span className="w-4 h-4 text-white" dangerouslySetInnerHTML={{ __html: tool.icon }} />
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            {project.colors && (
              <div>
                <span className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3 block">Paleta</span>
                <div className="flex gap-3">
                  {project.colors.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="w-10 h-10 rounded-full border-2 border-white/20 shadow-md"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}