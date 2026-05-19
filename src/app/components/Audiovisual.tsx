import React from 'react';
import { ProjectCarousel, ProjectType } from './ProjectCarousel';

// Import correct videos from attachments
import vidSolares from '../../imports/video_solares_varela_ia__CORTO_-1.mp4';
import vidLogo from '../../imports/logo_nuevo_6-4-1.mp4';

const audiovisualProjects: ProjectType[] = [
  {
    id: 'a1',
    title: 'Solares Varela',
    subtitle: 'Edición de Video',
    description: 'Montaje dinámico y color grading para proyecto inmobiliario. Se buscó transmitir un ritmo moderno y atractivo utilizando técnicas avanzadas de edición.',
    tools: ['Premiere Pro', 'Color Grading', 'Edición'],
    type: 'video',
    src: vidSolares
  },
  {
    id: 'a2',
    title: 'Logo Animation',
    subtitle: 'Motion Graphics',
    description: 'Animación de identidad visual. Creación de una introducción cinematográfica y fluida, enfatizando el aspecto moderno de la marca con efectos de luz y desenfoque de movimiento.',
    tools: ['After Effects', 'Motion', 'VFX'],
    type: 'video',
    src: vidLogo
  }
];

export const Audiovisual = () => {
  return (
    <section id="audiovisual" className="relative w-full bg-neutral-950">
      <ProjectCarousel 
        projects={audiovisualProjects} 
        title="Audiovisual" 
        subtitle="03 // Reel & Motion"
      />
    </section>
  );
};