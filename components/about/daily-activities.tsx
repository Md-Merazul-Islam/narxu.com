"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Coffee, Code, MessageSquare, Lightbulb, Rocket, Heart } from "lucide-react"
import Image from "next/image"

const activities = [
  {
    time: "09:00",
    title: "Morning Standup",
    description: "Team sync to align on daily goals and priorities",
    icon: Coffee,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764310550/Morning-Standup_cepmb3.jpg",
  },
  {
    time: "10:00",
    title: "Deep Work Sessions",
    description: "Focused coding and development sprints",
    icon: Code,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764310677/Deep_Work_Sessions_Focused_coding_and_development_sprints_djlimx.jpg",
  },
  {
    time: "12:00",
    title: "Client Collaboration",
    description: "Meetings and updates with our partners",
    icon: MessageSquare,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764310832/video-call-client-meeting-collaboration_e1qsot.jpg",
  },
  {
    time: "14:00",
    title: "Innovation Time",
    description: "Exploring new AI technologies and solutions",
    icon: Lightbulb,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764311117/brainstorming-innovation-whiteboard-ideas_vznimk.jpg",
  },
  {
    time: "16:00",
    title: "Project Launches",
    description: "Deploying and celebrating completed work",
    icon: Rocket,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764311246/Deploying_and_celebrating_completed_work_qifuz2.jpg",
  },
  {
    time: "17:30",
    title: "Team Bonding",
    description: "Games, discussions, and building connections",
    icon: Heart,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764311350/Team_Bonding_mnitnz.jpg",
  },
]

export function DailyActivities() {
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
            A Day at{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cliste</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Experience our daily rhythm of innovation, collaboration, and growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.time}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Time marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-black transform -translate-x-1/2 flex items-center justify-center z-10">
                  <activity.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-purple-400 font-mono text-sm">{activity.time}</span>
                      <h3 className="text-lg font-bold text-white">{activity.title}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="relative w-full md:w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-white/60 text-sm flex-1">{activity.description}</p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
