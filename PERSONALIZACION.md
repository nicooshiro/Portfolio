# Guía de Personalización del Portfolio

## 🎨 Información Personal

### 1. Nombre y Título
Editar en `src/app/components/HeroSection.tsx`:
```tsx
<h1>Tu Nombre</h1>
<p>Diseñador Creativo</p>
```

### 2. Foto de Perfil
Editar en `src/app/components/AboutSection.tsx`:
- Reemplazar el placeholder con tu imagen
- Agregar la ruta de tu foto en el div de imagen

### 3. Descripción Personal
Editar en `src/app/components/AboutSection.tsx`:
- Modificar los párrafos de texto en la sección "Sobre Mí"

## 🎯 Proyectos

### Diseño Gráfico
Editar el array `projects` en `src/app/components/GraphicDesignSection.tsx`:
```tsx
const projects = [
  {
    id: 1,
    title: "Tu Proyecto",
    category: "Categoría",
    description: "Descripción",
    color: "from-blue-500/20 to-purple-500/20",
  },
  // Agregar más proyectos...
];
```

### Audiovisual
Editar el array `videos` en `src/app/components/AudiovisualSection.tsx`:
```tsx
const videos = [
  {
    id: 1,
    title: "Tu Video",
    category: "Motion Graphics",
    duration: "1:30",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];
```

### Proyectos Destacados
Editar el array `projects` en `src/app/components/FeaturedProjectsSection.tsx`

## 📧 Contacto

### Información de Contacto
Editar en `src/app/components/ContactSection.tsx`:
- Email: `hola@tuportfolio.com`
- WhatsApp: `+1 234 567 890`
- Links de redes sociales (Instagram, LinkedIn, GitHub)

### Formulario
El formulario actualmente solo hace `console.log`. Para conectarlo:
1. Agregar un servicio de email (EmailJS, Formspree, etc.)
2. Modificar la función `handleSubmit` en `ContactSection.tsx`

## 🎨 Colores y Estilo

### Tema de Colores
Editar en `src/styles/theme.css`:
- Variables CSS para modo claro y oscuro
- Modificar `--background`, `--foreground`, `--accent`, etc.

### Tipografía
Editar en `src/styles/fonts.css`:
- Cambiar la fuente importada de Google Fonts
- Modificar la familia tipográfica

## 🖼️ Imágenes

Para agregar tus propias imágenes:
1. Coloca las imágenes en una carpeta pública o importalas
2. Reemplaza los placeholders de gradientes con tus imágenes
3. Usa el componente `ImageWithFallback` si está disponible

## 🎯 Navegación

### Enlaces del Menú
Editar en `src/app/components/Navigation.tsx`:
```tsx
const navLinks = [
  { name: "Inicio", href: "#inicio" },
  // Agregar o modificar links...
];
```

### Footer
Editar en `src/app/components/Footer.tsx`:
- Modificar nombre y título
- Actualizar links de navegación

## ⚡ Características Opcionales

### Desactivar Cursor Personalizado
En `src/app/App.tsx`, comentar o remover:
```tsx
<CustomCursor />
```

### Desactivar Barra de Progreso
Comentar o remover:
```tsx
<ScrollProgress />
```

### Desactivar Modo Oscuro
Comentar o remover:
```tsx
<ThemeToggle />
```

## 🚀 Próximos Pasos

1. Reemplazar todo el contenido placeholder con tu información real
2. Agregar tus imágenes y videos
3. Personalizar los colores según tu marca personal
4. Conectar el formulario de contacto
5. Optimizar las imágenes para mejor rendimiento
6. Agregar Google Analytics (opcional)
7. Configurar SEO metadata

## 📱 Responsive

El portfolio está optimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

Todas las secciones se adaptan automáticamente.
