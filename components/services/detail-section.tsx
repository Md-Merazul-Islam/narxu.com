import Image from "next/image"
import { Check } from "lucide-react"

interface DetailSectionProps {
  badge: string
  title: string
  highlight: string
  description: string
  bullets: string[]
  image: string
  reversed?: boolean
}

export function DetailSection({
  badge,
  title,
  highlight,
  description,
  bullets,
  image,
  reversed = false,
}: DetailSectionProps) {
  return (
    <section className={`py-16 sm:py-24 ${reversed ? "bg-gradient-to-b from-white/[0.02] to-transparent" : ""}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          <div className={`order-2 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          <div className={`order-1 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#8b09db]/20 border border-[#8b09db]/30 text-[#c588eb] text-xs font-medium uppercase tracking-wider mb-6">
              {badge}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}{" "}
              <span className="bg-gradient-to-r from-[#c588eb] to-blue-500 bg-clip-text text-transparent">
                {highlight}
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">{description}</p>

            <div className="space-y-4">
              {bullets.map((bullet, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8b09db]/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#c588eb]" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
