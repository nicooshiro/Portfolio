import { Link, Outlet, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X, Mail, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/stikers-4.png";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Diseño Gráfico", path: "/graphic-design" },
  { name: "Audiovisual", path: "/audiovisual" },
  { name: "Sobre Mí", path: "/about" },
  { name: "Contacto", path: "/contact" },
];

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#050B14] text-white selection:bg-[#E8B931] selection:text-black overflow-hidden font-sans">
      <style>{`
        body, a, button, [role="button"], input, select, textarea {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23000000" stroke="%230047FF" stroke-width="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>'), auto !important;
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050B14; }
        ::-webkit-scrollbar-thumb { background: #1f2937; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #374151; }
        .swiper-slide { -webkit-box-reflect: below 1px linear-gradient(transparent, transparent 50%, rgba(0,0,0,0.2)); }
        .swiper-slide-shadow-left, .swiper-slide-shadow-right { border-radius: 2rem; }
      `}</style>
      
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050B14]">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_80%)]"
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"]
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear"
          }}
        />

        <motion.div 
          animate={{ 
            x: ["0vw", "30vw", "-20vw", "0vw"], 
            y: ["0vh", "-30vh", "20vh", "0vh"],
            scale: [1, 1.4, 0.8, 1],
            rotate: [0, 90, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#0F4C81] opacity-20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: ["0vw", "-35vw", "25vw", "0vw"], 
            y: ["0vh", "30vh", "-15vh", "0vh"],
            scale: [1, 1.2, 1.5, 1],
            rotate: [360, 180, 90, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#E8B931] opacity-[0.15] blur-[140px]" 
        />
        <motion.div 
          animate={{ 
            x: ["0vw", "20vw", "-25vw", "0vw"],
            y: ["0vh", "20vh", "-25vh", "0vh"],
            scale: [1, 1.5, 0.7, 1],
            opacity: [0.08, 0.15, 0.05, 0.08]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[40%] w-[60vw] h-[60vh] rounded-full bg-[#0047FF] blur-[150px]" 
        />
        
        {/* Additional glowing orb for more dynamics */}
        <motion.div 
          animate={{ 
            x: ["-20vw", "40vw", "10vw", "-20vw"],
            y: ["40vh", "10vh", "-30vh", "40vh"],
            scale: [0.8, 1.2, 0.9, 0.8]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-[#6B9EE8] opacity-10 blur-[100px]" 
        />
      </div>

      {/* Floating Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center"
      >
        <div className="w-full max-w-7xl flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          
          <Link to="/" className="flex items-center gap-3 group relative z-10">
            <img src={logoImg} alt="Nicolás Oshiro Logo" className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(232,185,49,0.5)] group-hover:scale-105 transition-transform duration-300" />
            <span className="font-semibold text-lg tracking-wide hidden sm:block">
              NICOLÁS OSHIRO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white/80 hover:text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-[#050B14]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 px-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-white/80 hover:text-[#E8B931] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}

      {/* Main Content */}
      <main className="relative z-10 w-full min-h-screen pt-24 pb-12 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
