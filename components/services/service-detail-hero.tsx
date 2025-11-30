import type React from "react"
import * as Icons from "lucide-react"

interface ServiceDetailHeroProps {
  title: string
  heroDescription: string
  category: string
  icon: string
  color: string
  stats: Record<string, string>
}

export function ServiceDetailHero({ title, heroDescription, category, icon, color, stats }: ServiceDetailHeroProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as React.ElementType

  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#8b09db] rounded-full mr-2 animate-pulse"></span>
            {category}
          </div>

          <div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-8`}
          >
            {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed text-pretty">{heroDescription}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
