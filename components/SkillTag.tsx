import Link from 'next/link'

export interface SkillTagProps {
  name: string
  projectCount?: number
  locale?: string
  isClickable?: boolean
}

export function SkillTag({
  name,
  projectCount,
  locale = 'en',
  isClickable = true,
}: SkillTagProps) {
  const content = (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-80 transition-opacity">
      {name}
      {projectCount !== undefined && projectCount > 0 && (
        <span className="text-xs bg-background/20 px-2 py-0.5 rounded-full">
          {projectCount}
        </span>
      )}
    </span>
  )

  if (isClickable && locale) {
    return (
      <Link href={`/${locale}/skills?tech=${encodeURIComponent(name)}`}>
        {content}
      </Link>
    )
  }

  return content
}
