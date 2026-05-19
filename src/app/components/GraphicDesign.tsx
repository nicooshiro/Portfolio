import React from 'react';
import { ProjectCarousel, ProjectType } from './ProjectCarousel';

// Using standard relative path imports based on prompt instructions
import imgPortada from '../../imports/PORTADA-TOBBY-PS.jpg-1.jpeg';
import imgStikers from '../../imports/stikers-1.png';
import img2x1 from '../../imports/2x1_TERMINADO_V2.jpg-1.jpeg';

const graphicProjects: ProjectType[] = [
  {
    id: 'g1',
    title: 'Portada Tobby',
    subtitle: 'Diseño Editorial',
    description: 'Diseño de portada impactante utilizando Adobe Photoshop. Composición cinematográfica con fuerte contraste y retoque de alto nivel.',
    tools: ['Photoshop', 'Retoque', 'Composición'],
    type: 'image',
    src: imgPortada
  },
  {
    id: 'g2',
    title: 'Stickers Promocionales',
    subtitle: 'Branding',
    description: 'Diseño de stickers vectoriales para merchandising. Exploración de formas orgánicas y colores vibrantes para captar la atención en formato físico.',
    tools: ['Photoshop', 'Branding', 'Print'],
    type: 'image',
    src: imgStikers
  },
  {
    id: 'g3',
    title: 'Campaña 2x1 V2',
    subtitle: 'Social Media',
    description: 'Pieza promocional para redes sociales enfocada en la conversión. Uso estratégico de la tipografía y paleta de colores de la marca para destacar la oferta.',
    tools: ['Photoshop', 'Social Media', 'Marketing'],
    type: 'image',
    src: img2x1
  }
];

export const GraphicDesign = () => {
  return (
    <section id="diseno-grafico" className="relative w-full bg-neutral-950">
      <ProjectCarousel 
        projects={graphicProjects} 
        title="Diseño Gráfico" 
        subtitle="02 // Galería"
      />
    </section>
  );
};