'use client'

import { useEffect, useState } from 'react'

interface SkillLogo {
  name: string
  emoji: string
  color: string
}

const skillsData: SkillLogo[] = [
  { name: 'Python', emoji: '🐍', color: 'text-blue-500' },
  { name: 'Swift', emoji: '🍎', color: 'text-orange-500' },
  { name: 'Docker', emoji: '🐳', color: 'text-blue-400' },
  { name: 'AWS', emoji: '☁️', color: 'text-orange-400' },
  { name: 'MongoDB', emoji: '🍃', color: 'text-green-500' },
  { name: 'FastAPI', emoji: '⚡', color: 'text-yellow-500' },
]

export function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % skillsData.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const goToPrevious = () => {
    setIsAutoplay(false)
    setCurrentIndex(prev => (prev - 1 + skillsData.length) % skillsData.length)
  }

  const goToNext = () => {
    setIsAutoplay(false)
    setCurrentIndex(prev => (prev + 1) % skillsData.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoplay(false)
    setCurrentIndex(index)
  }

  return (
    <div className="w-full">
      {/* Carrusel principal */}
      <div className="relative bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg overflow-hidden mb-6">
        <div className="flex justify-center items-center h-48">
          <div className="relative w-full h-full flex items-center justify-center">
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                className={`absolute transition-all duration-500 ease-in-out transform ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-75'
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <span className="text-8xl">{skill.emoji}</span>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={goToPrevious}
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicadores (dots) */}
      <div className="flex justify-center gap-2">
        {skillsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-accent w-8'
                : 'bg-border w-2 hover:bg-accent/50'
            }`}
          />
        ))}
      </div>

      {/* Vista en miniatura de todos los skills */}
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all cursor-pointer"
          >
            <span className="text-3xl mb-2">{skill.emoji}</span>
            <p className="text-xs font-medium text-center text-muted-foreground hover:text-foreground">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
