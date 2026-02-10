import { getDictionary } from '@/i18n/get-dictionary'
import { getSkillsFromProjects, getProjectsByTechnology } from '@/lib/skills'
import { ProjectCard } from '@/components/ProjectCard'
import { SkillTag } from '@/components/SkillTag'

interface PageProps {
  params: Promise<{
    locale: string
  }>
  searchParams: Promise<{
    tech?: string
  }>
}

export default async function SkillsPage({
  params,
  searchParams,
}: PageProps) {
  const { locale } = await params
  const { tech } = await searchParams
  const dict = await getDictionary(locale as any)
  const skills = getSkillsFromProjects()
  const selectedTech = tech ? decodeURIComponent(tech) : null
  const relatedProjects = selectedTech
    ? getProjectsByTechnology(selectedTech)
    : []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.skills.title}</h1>
        <p className="text-lg text-muted-foreground">{dict.skills.description}</p>
      </section>

      {selectedTech && (
        <section className="mb-12 p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold">
              Projects using <span className="text-accent">{selectedTech}</span>
            </h2>
            <a
              href={`/${locale}/skills`}
              className="text-sm text-accent hover:underline"
            >
              Clear filter
            </a>
          </div>

          {relatedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  locale={locale}
                  viewDetailsLabel={dict.projects.viewDetails}
                  technologiesLabel={dict.projects.technologies}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No projects found for this skill.</p>
          )}
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold mb-6">All Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <SkillTag
              key={skill.name}
              name={skill.name}
              projectCount={skill.count}
              locale={locale}
              isClickable={true}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
