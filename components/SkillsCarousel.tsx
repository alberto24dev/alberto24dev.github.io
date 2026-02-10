'use client'

interface SkillLogo {
    name: string
    image: string // URL or path to image
}

const skillsData: SkillLogo[] = [
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Swift', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
]

export function SkillsCarousel() {
    return (
        <div className="w-full bg-background py-12 overflow-hidden relative">
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
          display: flex;
        }
        .carousel-fade::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 100px;
          background: linear-gradient(to right, hsl(var(--background)), transparent);
          z-index: 10;
          pointer-events: none;
        }
        .carousel-fade::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100px;
          background: linear-gradient(to left, hsl(var(--background)), transparent);
          z-index: 10;
          pointer-events: none;
        }
      `}</style>
            <div className="carousel-fade">
                <div className="carousel-scroll flex gap-8">
                    {/* Duplicamos el array múltiples veces para garantizar scroll infinito */}
                    {[...Array(3)].flatMap((_, index) => 
                        skillsData.map((skill) => (
                            <div
                                key={`${skill.name}-${index}`}
                                className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition-shadow w-40 h-40 flex-shrink-0"
                            >
                                <img 
                                    src={skill.image} 
                                    alt={skill.name} 
                                    className="w-16 h-16 mb-3 object-contain"
                                    onError={(e) => {
                                        // Fallback si la imagen no carga
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                <p className="text-sm font-semibold text-foreground text-center">
                                    {skill.name}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
