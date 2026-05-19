import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-40 px-6 md:px-12 bg-neutral-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <h2 className="text-yellow-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">
              01 // Sobre Mí
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9]">
              NICOLÁS <br className="hidden lg:block"/> OSHIRO
            </h3>
            <div className="w-16 h-1 bg-blue-600 mt-8 mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-6 text-neutral-300 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Soy un profesional apasionado por la intersección entre el diseño gráfico y la narrativa audiovisual. Mi enfoque se basa en crear identidades visuales que no solo destaquen estéticamente, sino que también comuniquen mensajes poderosos.
                </p>
                <p>
                  Con experiencia en múltiples disciplinas creativas, abordo cada proyecto con una perspectiva cinematográfica, buscando siempre la innovación y la excelencia en cada píxel y cada frame.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-8 pt-8 border-t border-white/10 relative z-10">
                <div>
                  <span className="block text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">5+</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Años de Exp.</span>
                </div>
                <div>
                  <span className="block text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">120+</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Proyectos</span>
                </div>
                <div>
                  <span className="block text-5xl font-black text-white mb-2">100%</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Dedicación</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};