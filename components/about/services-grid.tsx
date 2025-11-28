"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Bot,
  Code,
  Globe,
  Smartphone,
  Search,
  Wrench,
  Headphones,
  TrendingUp,
  Video,
  Megaphone,
  Cpu,
  Layers,
  Chrome,
  Share2,
} from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Development",
    description: "Custom AI chatbots that handle customer inquiries 24/7, reducing response time by 90%.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cpu,
    title: "AI Model Building",
    description: "Custom machine learning models tailored to your specific business needs and data.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing website and systems.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Stunning, conversion-focused designs that capture your brand essence.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Full-stack development from scratch using modern technologies.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Startup Showcase Platform",
    description: "Launch your startup with a professional platform that attracts investors.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher on search engines organically.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Wrench,
    title: "Production Maintenance",
    description: "Feature updates and maintenance to keep your systems running smoothly.",
    color: "from-slate-400 to-slate-600",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps that users love.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and software issue resolution.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Data-driven strategies to capture and convert quality leads.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video production and editing for your content needs.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies that drive real results.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Chrome,
    title: "Google Ads Management",
    description: "Expert management of your Google Ads campaigns to maximize ROI.",
    color: "from-purple-600 to-indigo-600",
  },
  {
    icon: Share2,
    title: "Facebook Ads Management",
    description: "Expert management of your Facebook Ads campaigns to maximize ROI.",
    color: "from-blue-600 to-cyan-600",
  }
  
]

export function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="relative py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions powered by cutting-edge technology and AI
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
