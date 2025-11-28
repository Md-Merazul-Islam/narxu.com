"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Calendar,
  Trophy,
  Cake,
  Plane,
  GraduationCap,
  Heart,
} from "lucide-react";

const programs = [
  {
    title: "Hackathons",
    description:
      "Quarterly innovation challenges where teams compete to build groundbreaking AI solutions in 48 hours.",
    icon: Trophy,
    image:
      "https://res.cloudinary.com/dnsorselg/image/upload/v1764311452/Hackathons_fduhxk.jpg",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Birthday Celebrations",
    description:
      "We celebrate every team member with surprise parties, personalized gifts, and team lunches.",
    icon: Cake,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764311590/Birthday_Celebrations_utv4yu.jpg",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Team Retreats",
    description:
      "Annual offsite adventures to recharge, bond, and explore new destinations together.",
    icon: Plane,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764311695/Team_Retreats_bjt4mk.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Learning Sessions",
    description:
      "Weekly knowledge sharing and training programs to keep our skills cutting-edge.",
    icon: GraduationCap,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764311783/Learning_Sessions_prt3dn.jpg",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Festival Events",
    description:
      "Celebrating diversity through cultural festivals, traditional foods, and themed decorations.",
    icon: Calendar,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764311916/Festival_Events_thuosx.jpg",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Wellness Programs",
    description:
      "Yoga sessions, mental health workshops, and fitness challenges for a balanced lifestyle.",
    icon: Heart,
    image: "https://res.cloudinary.com/dnsorselg/image/upload/v1764311992/Wellness_Programs_hwesub.jpg",
    color: "from-red-500 to-pink-500",
  },
];

export function CulturalPrograms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Life &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Culture
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We believe in working hard and celebrating harder. Here's how we
            keep our culture vibrant.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}
                  >
                    <program.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-white/60 text-sm">{program.description}</p>
                </div>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10 blur-xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to be part of our story?
            </h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              We're always looking for talented individuals who share our
              passion for AI and innovation.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Join Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
