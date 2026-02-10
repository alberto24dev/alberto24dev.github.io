import { getDictionary } from '@/i18n/get-dictionary'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params
  const dict = await getDictionary(locale as any)

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/skills`, label: dict.nav.skills },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ]

  return (
    <>
      <Navbar locale={locale} links={navLinks} />
      <main className="min-h-screen">{children}</main>
      <Footer made={dict.footer.made} year={dict.footer.year} />
    </>
  )
}

