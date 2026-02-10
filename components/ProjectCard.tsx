import Link from 'next/link'
import { ProjectImage } from './ProjectImage'

export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  technologies: string[]
  image?: string
  links: {
    github?: string
    demo?: string
  }
  details: string
  role: string
  year: string
}

interface ProjectCardProps {
  project: Project
  locale: string
  viewDetailsLabel: string
  technologiesLabel: string
}

export function ProjectCard({
  project,
  locale,
  viewDetailsLabel,
  technologiesLabel,
}: ProjectCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {project.image && (
        <div className="w-full h-48 bg-muted overflow-hidden">
          <ProjectImage src={project.image} alt={project.title} />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.shortDescription}</p>

        <div className="mb-4">
          <p className="text-sm font-semibold mb-2">{technologiesLabel}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <Link
                key={tech}
                href={`/${locale}/skills?tech=${encodeURIComponent(tech)}`}
                className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded hover:opacity-80 transition-opacity"
              >
                {tech}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 border-t border-border">
          <Link
            href={`/${locale}/projects/${project.id}`}
            className="text-sm font-medium text-accent hover:underline"
          >
            {viewDetailsLabel} →
          </Link>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
