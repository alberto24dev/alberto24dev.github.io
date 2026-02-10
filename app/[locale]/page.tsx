import Link from 'next/link'
import { getDictionary } from '@/i18n/get-dictionary'
import { SkillsCarousel } from '@/components/SkillsCarousel'
import bio from '@/data/bio.json'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale as any)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="mb-16 py-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">{dict.home.title}</h1>
        <p className="text-2xl text-muted-foreground mb-6">{dict.home.subtitle}</p>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">{dict.home.bio}</p>
        <Link
          href={`/${locale}/projects`}
          className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          {dict.home.cta}
        </Link>
      </section>

      {/* Highlights Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{dict.home.highlights}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bio.highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{highlight}</h3>
              <p className="text-muted-foreground">
                Specialized in {highlight.toLowerCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Carousel Only */}
      <section>
        <SkillsCarousel />
      </section>
    </div>
  )
}

