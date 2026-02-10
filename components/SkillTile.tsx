import Link from 'next/link'
import { getProjectsByTechnology } from '@/lib/skills'

interface SkillTileProps {
  name: string
  locale: string
}

// Mapa de colores para cada tecnología
const techColors: Record<string, { bg: string; border: string; text: string }> = {
  Swift: { bg: 'bg-orange-50 dark:bg-orange-950', border: 'border-orange-200 dark:border-orange-800', text: 'text-orange-700 dark:text-orange-300' },
  Python: { bg: 'bg-blue-50 dark:bg-blue-950', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-700 dark:text-blue-300' },
  FastAPI: { bg: 'bg-green-50 dark:bg-green-950', border: 'border-green-200 dark:border-green-800', text: 'text-green-700 dark:text-green-300' },
  MongoDB: { bg: 'bg-emerald-50 dark:bg-emerald-950', border: 'border-emerald-200 dark:border-emerald-800', text: 'text-emerald-700 dark:text-emerald-300' },
  Docker: { bg: 'bg-cyan-50 dark:bg-cyan-950', border: 'border-cyan-200 dark:border-cyan-800', text: 'text-cyan-700 dark:text-cyan-300' },
  'AWS S3': { bg: 'bg-amber-50 dark:bg-amber-950', border: 'border-amber-200 dark:border-amber-800', text: 'text-amber-700 dark:text-amber-300' },
  'React Native': { bg: 'bg-indigo-50 dark:bg-indigo-950', border: 'border-indigo-200 dark:border-indigo-800', text: 'text-indigo-700 dark:text-indigo-300' },
  Expo: { bg: 'bg-purple-50 dark:bg-purple-950', border: 'border-purple-200 dark:border-purple-800', text: 'text-purple-700 dark:text-purple-300' },
  TensorFlow: { bg: 'bg-red-50 dark:bg-red-950', border: 'border-red-200 dark:border-red-800', text: 'text-red-700 dark:text-red-300' },
  Flask: { bg: 'bg-slate-50 dark:bg-slate-950', border: 'border-slate-200 dark:border-slate-800', text: 'text-slate-700 dark:text-slate-300' },
}

const getColorScheme = (tech: string) => {
  return techColors[tech] || {
    bg: 'bg-gray-50 dark:bg-gray-950',
    border: 'border-gray-200 dark:border-gray-800',
    text: 'text-gray-700 dark:text-gray-300',
  }
}

export function SkillTile({ name, locale }: SkillTileProps) {
  const projects = getProjectsByTechnology(name)
  const colors = getColorScheme(name)

  return (
    <div
      className={`${colors.bg} ${colors.border} border rounded-lg p-6 hover:shadow-lg transition-shadow`}
    >
      {/* Nombre de la tecnología */}
      <div className="mb-4">
        <h3 className={`text-xl font-bold ${colors.text}`}>{name}</h3>
      </div>

      {/* Proyectos que usan esta tecnología */}
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2 font-semibold">
          Usado en {projects.length} proyecto{projects.length !== 1 ? 's' : ''}
        </p>
        <div className="space-y-2">
          {projects.map(project => (
            <Link
              key={project.id}
              href={`/${locale}/projects/${project.id}`}
              className="block p-3 bg-background/50 dark:bg-background/20 rounded border border-border hover:border-accent transition-colors"
            >
              <p className="font-semibold text-sm">{project.title}</p>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {project.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Link para ver más detalles */}
      <Link
        href={`/${locale}/skills?tech=${encodeURIComponent(name)}`}
        className={`inline-block text-sm font-semibold ${colors.text} hover:underline`}
      >
        Ver detalles →
      </Link>
    </div>
  )
}
