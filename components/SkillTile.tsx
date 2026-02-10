import Link from 'next/link'
import { getProjectsByTechnology } from '@/lib/skills'

interface SkillTileProps {
  name: string
  locale: string
}

export function SkillTile({ name, locale }: SkillTileProps) {
  const projects = getProjectsByTechnology(name)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      {/* Nombre de la tecnología */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      </div>

      {/* Proyectos que usan esta tecnología */}
      <div className="mb-4">
        <p className="text-xs text-gray-600 mb-2 font-semibold">
          Usado en {projects.length} proyecto{projects.length !== 1 ? 's' : ''}
        </p>
        <div className="space-y-2">
          {projects.map(project => (
            <Link
              key={project.id}
              href={`/${locale}/projects/${project.id}`}
              className="block p-3 bg-white rounded border border-gray-200 hover:border-gray-400 transition-colors"
            >
              <p className="font-semibold text-sm text-gray-900">{project.title}</p>
              <p className="text-xs text-gray-600 line-clamp-2">
                {project.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Link para ver más detalles */}
      <Link
        href={`/${locale}/skills?tech=${encodeURIComponent(name)}`}
        className="inline-block text-sm font-semibold text-gray-900 hover:underline"
      >
        Ver detalles →
      </Link>
    </div>
  )
}
