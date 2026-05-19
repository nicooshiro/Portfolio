import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.3), transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(120, 119, 198, 0.3), transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-muted-foreground mb-4 tracking-wider uppercase text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Diseñador Creativo
            </motion.p>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-6 tracking-tight">
              Tu Nombre
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
              Diseño gráfico y audiovisual que conecta con las emociones
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Proyectos
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-foreground/30 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
