import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from '../../imports/stikers-4.png';

export const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Diseño Gráfico', id: 'diseno-grafico' },
    { label: 'Audiovisual', id: 'audiovisual' },
    { label: 'Sobre Mí', id: 'sobre-mi' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 max-w-5xl w-full
          ${isScrolled 
            ? "bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border border-transparent"}
        `}>
          
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollTo('hero')}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-blue-500 transition-colors">
              <img src={logo} alt="Logo Nicolás Oshiro" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden md:block text-white">
              NICOLÁS<span className="text-blue-500">OSHIRO</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo(item.id)}
                className="px-5 py-2 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTo('contacto')}
            className="hidden md:flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-105 transition-all duration-300"
          >
            Hablemos
          </button>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-neutral-950/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-3xl font-bold text-white tracking-tight hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};