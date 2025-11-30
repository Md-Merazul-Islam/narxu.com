interface ServiceHeroProps {
  title: string
  description: string
}

export function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#8b09db] rounded-full mr-2 animate-pulse"></span>
            Our Services
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-white">{title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="bg-gradient-to-r from-[#c588eb] to-blue-500 bg-clip-text text-transparent">
              {title.split(" ").slice(-1)}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}
