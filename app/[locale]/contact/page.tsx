import { getDictionary } from '@/i18n/get-dictionary'
import bio from '@/data/bio.json'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale as any)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.contact.title}</h1>
        <p className="text-lg text-muted-foreground">{dict.contact.description}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="space-y-6">
            {bio.email && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">{dict.contact.email}</p>
                <a
                  href={`mailto:${bio.email}`}
                  className="text-lg font-semibold text-accent hover:underline"
                >
                  {bio.email}
                </a>
              </div>
            )}

            {bio.phone && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">{dict.contact.phone}</p>
                <a
                  href={`tel:${bio.phone}`}
                  className="text-lg font-semibold text-accent hover:underline"
                >
                  {bio.phone}
                </a>
              </div>
            )}

            {bio.location && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">Location</p>
                <p className="text-lg font-semibold">{bio.location}</p>
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
          <div className="space-y-4">
            {bio.social?.github && (
              <a
                href={bio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold">{dict.contact.github}</span>
                <span className="text-muted-foreground text-sm">→</span>
              </a>
            )}

            {bio.social?.linkedin && (
              <a
                href={bio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold">{dict.contact.linkedin}</span>
                <span className="text-muted-foreground text-sm">→</span>
              </a>
            )}

            {bio.social?.instagram && (
              <a
                href={bio.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold">Instagram</span>
                <span className="text-muted-foreground text-sm">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
