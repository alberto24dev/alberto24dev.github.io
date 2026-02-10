import { getDictionary } from '@/i18n/get-dictionary'
import { getSkillsFromProjects } from '@/lib/skills'
import { SkillTag } from '@/components/SkillTag'
import { i18n } from '@/i18n/config'

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    locale,
  }))
}

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function SkillsPage({
  params,
}: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale as any)
  const skills = getSkillsFromProjects()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.skills.title}</h1>
        <p className="text-lg text-muted-foreground">{dict.skills.description}</p>
      </section>

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
