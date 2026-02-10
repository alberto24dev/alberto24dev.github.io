'use client'

interface ProjectImageProps {
  src?: string
  alt: string
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  if (!src) {
    return null
  }

  return (
    <div className="w-full h-96 bg-muted rounded-lg overflow-hidden mb-8">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )
}
