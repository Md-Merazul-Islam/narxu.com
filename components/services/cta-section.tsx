import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-[#8b09db]/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b09db]/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's discuss how Narxu can help you achieve your goals with our cutting-edge digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 text-center"
              >
                Explore All Services
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>hello@narxu.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
