import type { ReactNode } from "react"

interface SkillTagProps {
  children: ReactNode
}

export function SkillTag({ children }: SkillTagProps) {
  return (
    <span
      className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-md border
        bg-gray-50 text-gray-700 border-gray-200
        dark:bg-zinc-900 dark:text-foreground dark:border-zinc-800
        hover:bg-gray-100 dark:hover:bg-zinc-800/80 transition-colors"
    >
      {children}
    </span>
  )
}
