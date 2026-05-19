import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import logo from '../../imports/stikers-4.png';

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 md:py-40 px-6 md:px-12 bg-neutral-950 text-white relative overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Decorative background typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <h2 className="text-[25vw] font-black tracking-tighter leading-none whitespace-nowrap">
          CONTACTO
        </h2>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] text-yellow-500 uppercase mb-6">
                04 // Contacto
              </h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
                ¿CREAMOS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  ALGO ÉPICO?
                </span>
              </h3>
              <p className="text-xl text-neutral-400 font-light max-w-md leading-relaxed">
                Estoy disponible para proyectos freelance, colaboraciones creativas o simplemente para hablar de diseño y cine.
              </p>
            </div>

            <div className="mt-16 md:mt-auto">
              <a 
                href="mailto:nicooshirodg@gmail.com" 
                className="inline-flex items-center gap-6 text-2xl md:text-4xl font-light hover:text-white text-neutral-300 transition-colors group"
              >
                nicooshirodg@gmail.com
                <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Inner glow for the form card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none" />

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Asunto</label>
                <input 
                  type="text" 
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Ej: Proyecto de Branding"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu idea..."
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Enviar Mensaje
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
               <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              NICOLÁS<span className="text-blue-500">OSHIRO</span>
            </span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:nicooshirodg@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-neutral-600 text-sm font-light uppercase tracking-widest">
            © 2026. BUE, ARG.
          </p>
        </div>
      </div>
    </section>
  );
};