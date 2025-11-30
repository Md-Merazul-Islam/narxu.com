import { ServiceCard } from "./service-card"

interface Service {
  id: string
  title: string
  shortDescription: string
  category: string
  icon: string
  color: string
}

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const categories = [...new Set(services.map((s) => s.category))]

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        {categories.map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{category}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter((s) => s.category === category)
                .map((service, index) => (
                  <ServiceCard key={service.id} {...service} index={index} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
