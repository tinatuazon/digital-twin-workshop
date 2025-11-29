import * as LucideIcons from "lucide-react"

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface SocialLinksProps {
  socialLinks: SocialLink[]
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div className="flex justify-center gap-2 sm:gap-3 my-2 sm:my-3">
      {socialLinks.map((link, index) => {
        const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons] as any

        return (
          <a
            key={index}
            href={link.url}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-muted flex items-center justify-center hover:bg-gray-200 dark:hover:bg-muted/80 transition-colors border border-gray-200 dark:border-transparent"
            aria-label={link.platform}
          >
            {IconComponent && <IconComponent className="w-4 h-4 text-gray-700 dark:text-foreground" />}
          </a>
        )
      })}
    </div>
  )
}
