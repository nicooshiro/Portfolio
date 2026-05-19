import { motion } from "motion/react";
import { Mail, Instagram, Palette } from "lucide-react";

export function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center"
      >
        <h1 className="text-3xl font-bold mb-4 text-white">Trabajemos Juntos</h1>
        <p className="text-white/60 mb-8">
          ¿Tienes un proyecto en mente? Hablemos para hacerlo realidad.
        </p>
        
        <div className="flex flex-col gap-4">
          <a href="mailto:nicolasoshiro260704@gmail.com" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#E8B931] text-black font-semibold rounded-full hover:scale-105 transition-transform">
            <Mail size={20} />
            nicolasoshiro260704@gmail.com
          </a>
          <a href="https://www.instagram.com/nicooshiro_/?hl=es" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors">
            <Instagram size={20} />
            Instagram
          </a>
          <a href="https://www.behance.net/nicolasoshiro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors">
            <Palette size={20} />
            Behance
          </a>
        </div>
      </motion.div>
    </div>
  );
}
