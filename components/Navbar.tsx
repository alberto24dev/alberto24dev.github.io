import Link from 'next/link'

interface NavLink {
  href: string
  label: string
}

interface NavbarProps {
  locale: string
  links: NavLink[]
}

export function Navbar({ locale, links }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="font-bold text-xl">
            Alberto
          </Link>
          <div className="flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </nav>
  )
}

interface LocaleSwitcherProps {
  locale: string
}

function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const nextLocale = locale === 'en' ? 'es' : 'en'
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
  const newPath = currentPath.replace(`/${locale}`, `/${nextLocale}`)

  return (
    <Link
      href={newPath || `/${nextLocale}`}
      className="text-sm font-medium px-3 py-1 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </Link>
  )
}
