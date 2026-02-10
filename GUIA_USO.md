# Guía de Uso - CV Web Dinámico

¡Tu CV web está completamente configurado! Aquí tienes una guía completa para empezar.

## 🚀 Cómo Ejecutar el Proyecto

### Desarrollo Local
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador. El sitio cambiará automáticamente según edites los archivos.

### Producción
```bash
npm run build
npm run start
```

## 📝 Cómo Actualizar tu Contenido

### 1. **Información Personal** (`data/bio.json`)

Edita este archivo con tu información:

```json
{
  "name": "Tu Nombre",
  "title": "Tu Título",
  "bio": "Tu biografía...",
  "email": "tu@email.com",
  "phone": "+1 (555) 123-4567",
  "location": "Tu Ciudad",
  "social": {
    "github": "https://github.com/tuusername",
    "linkedin": "https://linkedin.com/in/tuusername",
    "twitter": "https://twitter.com/tuusername"
  },
  "highlights": [
    "Tu especialidad 1",
    "Tu especialidad 2",
    "Tu especialidad 3",
    "Tu especialidad 4"
  ]
}
```

### 2. **Añadir Proyectos** (`data/projects.json`)

Agrega nuevos proyectos al array. Cada proyecto tiene esta estructura:

```json
{
  "id": "proyecto-1",
  "title": "Nombre del Proyecto",
  "description": "Descripción breve",
  "shortDescription": "Una línea describiendo el proyecto",
  "technologies": ["FastAPI", "MongoDB", "AWS S3", "React", "Docker"],
  "image": "/projects/imagen.jpg",
  "links": {
    "github": "https://github.com/usuario/repo",
    "demo": "https://demo.ejemplo.com"
  },
  "details": "Descripción detallada del proyecto con contexto...",
  "role": "Tu Rol (ej: Lead Developer)",
  "year": "2024"
}
```

**⭐ Características Automáticas:**
- Las tecnologías listadas se agregan automáticamente a la sección de Habilidades
- Al hacer click en una habilidad, ves todos los proyectos que la usan
- Cada proyecto muestra las tecnologías con los que se puede filtrar

### 3. **Traducir Contenido** (i18n/dictionaries/)

El sitio soporta inglés y español. Actualiza ambos archivos:

- `i18n/dictionaries/en.json` - Textos en Inglés
- `i18n/dictionaries/es.json` - Textos en Español

### 4. **Personalizar Diseño** (styles/globals.css)

Modifica los colores y estilos en `styles/globals.css` editando las variables CSS:

```css
:root {
  --accent: 0 0% 9.8%;           /* Color principal */
  --background: 0 0% 100%;        /* Fondo */
  --foreground: 0 0% 3.6%;        /* Texto */
  --border: 0 0% 89.8%;           /* Bordes */
  /* ... más variables */
}
```

## 📁 Estructura del Proyecto

```
├── app/[locale]/              # Páginas (inglés/español automático)
│   ├── page.tsx               # Home
│   ├── projects/page.tsx      # Listado de proyectos
│   ├── projects/[id]/page.tsx # Detalle de proyecto
│   ├── skills/page.tsx        # Habilidades con filtrado
│   └── contact/page.tsx       # Contacto
├── components/                # Componentes reutilizables
│   ├── Navbar.tsx             # Barra de navegación
│   ├── ProjectCard.tsx        # Tarjeta de proyecto
│   ├── SkillTag.tsx           # Badge de habilidad
│   └── ...
├── data/                      # Contenido (JSON)
│   ├── bio.json               # Tu información
│   └── projects.json          # Tus proyectos
├── i18n/                      # Internacionalización
│   ├── config.ts              # Configuración i18n
│   └── dictionaries/          # Traducciones
├── lib/                       # Utilidades
│   └── skills.ts              # Lógica de habilidades
└── styles/                    # Estilos globales
```

## 🌐 Páginas Disponibles

- **Inicio** (`/en` o `/es`) - Bio, destacados y top skills
- **Proyectos** (`/en/projects` o `/es/projects`) - Grid de proyectos
- **Detalles Proyecto** (`/en/projects/1` o `/es/projects/1`) - Info completa del proyecto
- **Habilidades** (`/en/skills` o `/es/skills`) - Todas las skills con filtrado
- **Contacto** (`/en/contact` o `/es/contact`) - Datos de contacto

## 🔗 Relación Proyectos ↔ Habilidades

El sistema funciona así:

1. Cada proyecto en `projects.json` lista sus tecnologías en el array `technologies`
2. El archivo `lib/skills.ts` lee automáticamente todos los proyectos
3. Agrega cada tecnología como habilidad con el conteo de proyectos que la usan
4. En la página de Skills, puedes filtrar por tecnología para ver proyectos relacionados

**Ejemplo:**
- Proyecto A usa: `["React", "Node.js", "PostgreSQL"]`
- Proyecto B usa: `["React", "FastAPI", "MongoDB"]`
- Habilidades generadas:
  - React (2 proyectos)
  - Node.js (1 proyecto)
  - PostgreSQL (1 proyecto)
  - FastAPI (1 proyecto)
  - MongoDB (1 proyecto)

## 🎨 Personalización

### Cambiar Colores
Edita `styles/globals.css` - Todas las variables CSS están bien documentadas

### Cambiar Fuentes
Modifica `tailwind.config.js` bajo `theme.extend.fontFamily`

### Añadir Componentes
Crea nuevos componentes en `components/` como:
```tsx
export function MiComponente() {
  return <div>Mi contenido</div>
}
```

## 📤 Despliegue

### GitHub Pages
El proyecto está configurado para desplegarse automáticamente en GitHub Pages con:
- Archivo `CNAME` configurado a tu dominio
- GitHub Actions workflow en `.github/workflows/deploy.yml`

### Vercel
También puedes desplegar en Vercel:
1. Sube el código a GitHub
2. Conecta el repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente que es un proyecto Next.js

### Otras Plataformas
El proyecto genera archivos estáticos que puedes servir en:
- Netlify
- AWS S3
- Azure Static Web Apps
- O cualquier servidor de archivos estáticos

## 🆘 Solución de Problemas

**Problema:** Las imágenes no se muestran
- Asegúrate de que los archivos existan en la carpeta `/public/projects/`
- Verifica que la ruta en `projects.json` sea correcta

**Problema:** Las traducciones no funcionan
- Verifica que las claves de traducción existan en ambos archivos `en.json` y `es.json`

**Problema:** Las habilidades no aparecen
- Asegúrate de que tus proyectos tengan tecnologías listadas en el array `technologies`

## 📚 Tecnologías Utilizadas

- **Next.js 16** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilos
- **shadcn/ui Components** - UI componentes
- **JSON** - Datos estáticos
- **i18n** - Internacionalización (EN/ES)

## 🤝 Próximos Pasos

1. Edita tu información en `data/bio.json`
2. Agrega tus proyectos en `data/projects.json`
3. Personaliza colores en `styles/globals.css`
4. Prueba en local con `npm run dev`
5. Despliega a GitHub Pages o Vercel

¡Listo! Tu CV web dinámico está funcionando. 🎉
