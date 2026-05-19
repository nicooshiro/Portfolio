import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Palette, Video, Layout, Sparkles } from "lucide-react";

const skills = [
  { name: "Diseño Gráfico", icon: Palette },
  { name: "Branding", icon: Sparkles },
  { name: "Motion Graphics", icon: Video },
  { name: "Diseño UI/UX", icon: Layout },
];

const experience = [
  { year: "2024", title: "Senior Designer", company: "Estudio Creativo", current: true },
  { year: "2022", title: "Diseñador Gráfico", company: "Agencia Digital", current: false },
  { year: "2020", title: "Freelance Designer", company: "Proyectos Independientes", current: false },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="min-h-screen py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl mb-20 font-light">Sobre Mí</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square bg-gradient-to-br from-muted to-accent rounded-3xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                {/* Placeholder para foto */}
                <Palette className="w-24 h-24 opacity-30" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un diseñador apasionado por crear experiencias visuales que
              cuentan historias. Con más de 5 años de experiencia, combino diseño
              gráfico y audiovisual para dar vida a ideas innovadoras.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi enfoque se centra en la simplicidad, la funcionalidad y el
              impacto visual, siempre buscando la excelencia en cada proyecto.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h3 className="text-2xl mb-8 font-light">Habilidades</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card border border-border rounded-2xl text-center hover:bg-accent transition-colors cursor-default"
              >
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-foreground/70" />
                <p className="text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl mb-8 font-light">Experiencia</h3>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="relative flex items-center gap-6 p-6 bg-card border border-border rounded-2xl hover:bg-accent transition-colors group"
              >
                {item.current && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-foreground text-background text-xs rounded-full">
                    Actual
                  </div>
                )}
                <div className="text-3xl font-light text-muted-foreground min-w-20">
                  {item.year}
                </div>
                <div className="border-l border-border pl-6 flex-1">
                  <h4 className="mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
