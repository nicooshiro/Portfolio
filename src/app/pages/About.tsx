import { motion } from "motion/react";
import profilePic from "../../imports/foto_de_perfil-1.jpg";

export function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E8B931] to-transparent opacity-40 blur-xl animate-pulse" />
          <img 
            src={profilePic} 
            alt="Nicolás Oshiro" 
            className="w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl relative z-10"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            Sobre Mí
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Soy un estudiante de 4º año de la UADE, apasionado por contar historias a través de 
            imágenes cautivadoras y diseños con propósito. Mi estilo se caracteriza por una paleta de tonos 
            cinematográficos, alto contraste y un toque premium en cada proyecto.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl text-[#E8B931] font-semibold mb-4">Mis Habilidades</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Figma'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
