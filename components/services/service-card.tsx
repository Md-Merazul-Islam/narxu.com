import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import * as Icons from "lucide-react"

interface ServiceCardProps {
  id: string
  title: string
  shortDescription: string
  category: string
  icon: string
  color: string
  index: number
}

export function ServiceCard({ id, title, shortDescription, category, icon, color, index }: ServiceCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as React.ElementType

  return (
    <Link href={`/services/${id}`} className="group block">
      <div
        className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500"
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />

        <div className="relative p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
              {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
            </div>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium">{category}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">{shortDescription}</p>

          <div className="flex items-center gap-2 text-[#c588eb] font-medium text-sm group-hover:gap-3 transition-all duration-300">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
