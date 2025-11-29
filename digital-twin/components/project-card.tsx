import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  slug: string
}

export function ProjectCard({ title, category, image, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block h-full">
      <Card className="bg-white dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 overflow-hidden group hover:border-blue-500 dark:hover:border-[#22d3ee]/50 transition-all h-full shadow-sm hover:shadow-md backdrop-blur-sm">
        <div className="relative h-40 sm:h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent dark:from-black/80 dark:to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-3 sm:p-4">
            <div className="text-xs text-blue-600 dark:text-[#22d3ee] mb-1 font-medium">{category}</div>
            <h3 className="font-medium text-sm sm:text-base text-white dark:text-white">{title}</h3>
          </div>
        </div>
      </Card>
    </Link>
  )
}
