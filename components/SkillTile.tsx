import Link from 'next/link'
import { getProjectsByTechnology } from '@/lib/skills'

interface SkillTileProps {
  name: string
  locale: string
}

export function SkillTile({ name, locale }: SkillTileProps) {
  const projects = getProjectsByTechnology(name)

  return (
    <div className="bg-card text-card-foreground border border-border rounded-lg p-6">
      {/* Nombre de la tecnología */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
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
              className="block p-3 bg-background rounded border border-border hover:bg-muted hover:border-ring transition-colors"
            >
              <p className="font-semibold text-sm text-foreground">{project.title}</p>
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
        className="inline-block text-sm font-semibold text-accent hover:underline"
      >
        Ver detalles →
      </Link>
    </div>
  )
}
