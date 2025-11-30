import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

interface PricingSectionProps {
  pricing: {
    starting: string
    period: string
    includes: string[]
  }
  serviceTitle: string
}

export function PricingSection({ pricing, serviceTitle }: PricingSectionProps) {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-8 sm:p-12 text-center border-b border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Transform your business with our {serviceTitle.toLowerCase()} services
            </p>
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="text-center sm:text-left">
                <div className="text-gray-400 text-sm mb-1">Starting from</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-bold text-white">{pricing.starting}</span>
                  <span className="text-gray-400">/{pricing.period}</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
              {pricing.includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b09db]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#c588eb]" />
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
