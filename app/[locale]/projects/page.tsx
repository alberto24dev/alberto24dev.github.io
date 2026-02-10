import { getDictionary } from '@/i18n/get-dictionary'
import { ProjectCard } from '@/components/ProjectCard'
import projects from '@/data/projects.json'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale as any)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.projects.title}</h1>
        <p className="text-lg text-muted-foreground">{dict.projects.description}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            locale={locale}
            viewDetailsLabel={dict.projects.viewDetails}
            technologiesLabel={dict.projects.technologies}
          />
        ))}
      </div>
    </div>
  )
}

