"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Wifi, Coffee, Dumbbell, Leaf, Monitor, Music } from "lucide-react"

const amenities = [
  { icon: Wifi, label: "High-Speed Internet" },
  { icon: Coffee, label: "Premium Coffee Bar" },
  { icon: Dumbbell, label: "Fitness Zone" },
  { icon: Leaf, label: "Green Spaces" },
  { icon: Monitor, label: "Dual Monitor Setup" },
  { icon: Music, label: "Music Lounge" },
]

const galleryImages = [
  { src: "/modern-office-workspace-tech-company.jpg", span: "col-span-2 row-span-2" },
  { src: "/office-lounge-relaxation-area.jpg", span: "col-span-1" },
  { src: "/meeting-room-modern-glass.jpg", span: "col-span-1" },
  { src: "/coffee-bar-office-cafe.jpg", span: "col-span-1" },
  { src: "/gaming-room-office-entertainment.jpg", span: "col-span-1" },
]

export function WorkEnvironment() {
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
              Work Environment
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A space designed to inspire creativity and foster innovation
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 group ${image.span}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt="Office environment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Office Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <amenity.icon className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-white/80 text-sm text-center">{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
