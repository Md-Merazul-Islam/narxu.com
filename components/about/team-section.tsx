"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, Zap, Shield, Brain } from "lucide-react"

const aiAgents = [
  {
    name: "Atlas",
    role: "Lead AI Strategist",
    description: "Orchestrates complex AI solutions and ensures seamless integration across all projects.",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    status: "Online",
  },
  {
    name: "Nova",
    role: "Development AI",
    description: "Powers our rapid development pipeline with intelligent code generation and optimization.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    status: "Processing",
  },
  {
    name: "Sentinel",
    role: "Security AI",
    description: "Monitors and protects all client systems with advanced threat detection capabilities.",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
    status: "Monitoring",
  },
  {
    name: "Echo",
    role: "Support AI",
    description: "Provides instant 24/7 customer support and intelligent issue resolution.",
    icon: Bot,
    color: "from-orange-500 to-red-500",
    status: "Active",
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Team</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our advanced AI agents work around the clock to deliver exceptional results
          </p>
        </motion.div>

        {/* AI Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiAgents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30">
                <div className="flex items-start gap-4">
                  {/* Agent Icon */}
                  <div
                    className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} p-3 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <agent.icon className="w-full h-full text-white" />
                    {/* Pulse indicator */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-black animate-pulse" />
                  </div>

                  {/* Agent Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        {agent.status}
                      </span>
                    </div>
                    <p className="text-purple-400 text-sm mb-2">{agent.role}</p>
                    <p className="text-white/60 text-sm">{agent.description}</p>
                  </div>
                </div>

                {/* Activity indicator */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${agent.color} rounded-full`}
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: ["0%", "100%", "60%"] } : {}}
                        transition={{ duration: 2, delay: index * 0.2 }}
                      />
                    </div>
                    <span className="text-xs text-white/40">Active</span>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10 blur-xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">Ready to transform your business with AI?</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your AI Journey
            <Zap className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
