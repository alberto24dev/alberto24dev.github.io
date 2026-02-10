import Link from 'next/link'
import { getDictionary } from '@/i18n/get-dictionary'
import { getProjectById } from '@/lib/skills'
import { SkillTag } from '@/components/SkillTag'
import { ProjectImage } from '@/components/ProjectImage'
import projects from '@/data/projects.json'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    locale: string
    id: string
  }>
}

export async function generateStaticParams() {
  return projects.flatMap(project => [
    { locale: 'en', id: project.id },
    { locale: 'es', id: project.id },
  ])
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, id } = await params
  const dict = await getDictionary(locale as any)
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href={`/${locale}/projects`}
        className="text-accent font-medium hover:underline mb-8 inline-block"
      >
        ← {dict.projects.title}
      </Link>

      <article>
        <ProjectImage src={project.image} alt={project.title} />

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-border">
          <div>
            <p className="text-sm text-muted-foreground">Role</p>
            <p className="font-semibold">{project.role}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Year</p>
            <p className="font-semibold">{project.year}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{dict.projects.description}</h2>
          <p className="text-lg text-muted-foreground mb-4">{project.details}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">{dict.projects.technologies}</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <SkillTag
                key={tech}
                name={tech}
                locale={locale}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
            >
              {dict.projects.github}
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-card border border-border rounded-lg font-medium hover:bg-muted transition-colors text-center"
            >
              {dict.projects.demo}
            </a>
          )}
        </div>
      </article>
    </div>
  )
}
