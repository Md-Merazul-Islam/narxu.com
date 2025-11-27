"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import AiAgent from "@/assets/ai-chat.jpg"
import Ecom from "@/assets/ecommerce-revolution.jpg"
import BankingApp from "@/assets/mobile-banking.jpg"


const projects = [
  {
    title: "AI Chatbot Platform",
    category: "AI Solutions",
    image: AiAgent,
    color: "from-purple-500/20 to-blue-500/20",
    services: ["AI Development", "Web App", "24/7 Support"],
    description: "Enterprise AI chatbot handling 10,000+ daily conversations with 95% accuracy"
  },
  {
    title: "E-commerce Revolution",
    category: "Web Development",
    image: Ecom,
    color: "from-orange-500/20 to-red-500/20",
    services: ["Website Development", "SEO", "Digital Marketing"],
    description: "Complete e-commerce solution boosting sales by 300% in first 6 months"
  },
  {
    title: "Mobile Banking App",
    category: "App Development",
    image:  BankingApp,
    color: "from-green-500/20 to-emerald-500/20",
    services: ["Mobile App", "Security", "24/7 Support"],
    description: "Secure mobile banking app serving 50,000+ users with zero downtime"
  },
]

export function Work() {
  return (
    <section id="work" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-[#8b09db] rounded-full mr-2 animate-pulse"></span>
            Our Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="text-white">Success</span>{" "}
            <span className="bg-gradient-to-r from-[#c588eb] to-blue-500 bg-clip-text text-transparent">
              Stories
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Transforming businesses with cutting-edge digital solutions. See how we've helped clients 
            achieve remarkable results through our comprehensive service offerings.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/* Glass Card Container */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:border-white/20">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    <div className="relative z-10">
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4">
                        <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* Services Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.services.map((service, serviceIndex) => (
                          <span 
                            key={serviceIndex}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium hover:bg-white/10 transition-colors"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 group/btn">
                        View Case Study
                        <svg 
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-transparent lg:bg-gradient-to-l z-10" />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-20" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 sm:mt-24"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto hover:bg-white/10 transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-8 max-w-md mx-auto font-light leading-relaxed">
              Let's discuss how we can transform your digital presence and drive measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Start Your Project
              </button>
              <button className="px-6 py-3 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300">
                View All Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}