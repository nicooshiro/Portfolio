import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import vidBg from '../../imports/video_solares_varela_ia__CORTO_-1.mp4';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
      {/* Cinematic Background Video */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <video 
          src={vidBg} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/60 to-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(11,17,32,0.8)_100%)]" />
      </motion.div>

      {/* Floating Light Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 30, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full text-center mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-medium tracking-[0.2em] text-neutral-300 uppercase">Director & Diseñador</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          NICOLÁS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-yellow-500">
            OSHIRO
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-neutral-400 text-lg md:text-xl mt-8 font-light"
        >
          Experiencias visuales inmersivas. <br className="hidden md:block"/>
          Diseño gráfico y producción audiovisual de alto nivel.
        </motion.p>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-blue-600/0 via-blue-600 to-blue-600/0 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-white"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};