"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Award, Users, Target } from "lucide-react"
import Image from "next/image"

const stories = [
  {
    title: "E-Commerce Revolution",
    client: "Global Retail Brand",
    result: "300% increase in online sales",
    description:
      "Implemented AI-powered recommendation engine and chatbot support that transformed their digital presence.",
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764308979/ecommerce-success-dashboard-analytics_no1vqy.jpg",
    icon: TrendingUp,
  },
  {
    title: "Healthcare Innovation",
    client: "Leading Medical Network",
    result: "50% reduction in response time",
    description: "Deployed intelligent patient support system with 24/7 AI assistance and appointment scheduling.",
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764309224/Healthcare-Innovation_g66971.jpg",
    icon: Award,
  },
  {
    title: "Startup Scaling",
    client: "Tech Startup",
    result: "10x user growth in 6 months",
    description: "Built full-stack web and mobile applications with integrated AI features from ground up.",
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764309824/startup-growth-technology_jl3had.jpg",
    icon: Users,
  },
  {
    title: "Enterprise Transformation",
    client: "Fortune 500 Company",
    result: "45% operational efficiency gain",
    description: "Streamlined operations with custom AI workflows and automated customer service solutions.",
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764309990/enterprise-business-success-corporate_j0ifii.jpg",
    icon: Target,
  },
]

export function SuccessStories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real results from real partnerships. See how we've transformed businesses with AI.
          </p>
        </motion.div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <story.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">{story.result}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
                  <span className="text-purple-400 text-sm font-medium">{story.client}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">{story.title}</h3>
                  <p className="text-white/60 mb-6">{story.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                    <span className="text-green-400 font-semibold text-sm">Success</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
