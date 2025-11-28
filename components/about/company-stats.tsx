"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "300+", label: "Projects Delivered", suffix: "" },
  { value: "98", label: "Client Satisfaction", suffix: "%" },
  { value: "24/7", label: "Support Available", suffix: "" },
  { value: "50+", label: "AI Models Built", suffix: "" },
]

export function CompanyStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-purple-400">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-white/60">{stat.label}</div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
