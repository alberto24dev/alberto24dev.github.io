interface FooterProps {
  made: string
  year: string
}

export function Footer({ made, year }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{made}</p>
          <p className="text-sm text-muted-foreground">© {year}</p>
        </div>
      </div>
    </footer>
  )
}
