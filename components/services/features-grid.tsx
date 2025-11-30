import type React from "react"
import * as Icons from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: string
}

interface FeaturesGridProps {
  features: Feature[]
  color: string
}

export function FeaturesGrid({ features, color }: FeaturesGridProps) {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What's{" "}
            <span className="bg-gradient-to-r from-[#c588eb] to-blue-500 bg-clip-text text-transparent">Included</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to succeed with our comprehensive service package
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ElementType

            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
