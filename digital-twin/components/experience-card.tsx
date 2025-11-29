import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
  index?: number
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
  index
}: ExperienceCardProps) {
  return (
    <div className="relative flex">
      {/* Timeline circle only, line is handled by parent */}
      <div className="relative mr-6 z-10 flex flex-col items-center justify-start" style={{ minWidth: '2rem' }}>
        <span className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-[#22d3ee] border-4 border-white shadow-md"></span>
      </div>
      <div className="flex-1 space-y-4 pb-6 border-b border-gray-200 dark:border-zinc-900 last:border-0 last:pb-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
          <div>
            <h4 className="font-medium text-base sm:text-lg text-foreground">{title}</h4>
            <div className="text-sm text-blue-600 dark:text-[#22d3ee] font-medium">{company}</div>
          </div>
          <div className="text-xs text-gray-600 dark:text-muted-foreground bg-gray-100 dark:bg-muted px-2 py-1 sm:px-3 sm:py-1 rounded-full self-start mt-1 sm:mt-0 sm:self-auto border border-gray-200 dark:border-transparent">
            {period}
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-muted-foreground">{description}</p>

        <div className="space-y-3">
          <h5 className="text-sm font-medium text-gray-700 dark:text-muted-foreground">Key Achievements</h5>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600 dark:text-[#22d3ee] flex-shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-700 dark:text-muted-foreground mb-2">Technologies & Skills</h5>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-gray-50 dark:bg-muted hover:bg-gray-100 dark:hover:bg-muted/80 text-foreground border-gray-200 dark:border-border">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
