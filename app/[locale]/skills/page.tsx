import { getDictionary } from '@/i18n/get-dictionary'
import { getSkillsFromProjects } from '@/lib/skills'
import { SkillTile } from '@/components/SkillTile'
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.skills.title}</h1>
        <p className="text-lg text-muted-foreground">{dict.skills.description}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">All Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => (
            <SkillTile
              key={skill.name}
              name={skill.name}
              locale={locale}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
