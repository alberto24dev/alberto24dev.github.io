import projects from '@/data/projects.json'

export interface Skill {
  name: string
  projects: string[]
  count: number
}

export function getSkillsFromProjects(): Skill[] {
  const skillMap = new Map<string, Set<string>>()

  projects.forEach(project => {
    project.technologies.forEach(tech => {
      if (!skillMap.has(tech)) {
        skillMap.set(tech, new Set())
      }
      skillMap.get(tech)?.add(project.id)
    })
  })

  const skills: Skill[] = Array.from(skillMap).map(([name, projectIds]) => ({
    name,
    projects: Array.from(projectIds),
    count: projectIds.size,
  }))

  return skills.sort((a, b) => b.count - a.count)
}

export function getProjectsByTechnology(tech: string) {
  return projects.filter(project => project.technologies.includes(tech))
}

export function getProjectById(id: string) {
  return projects.find(project => project.id === id)
}
