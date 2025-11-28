"use client"

import { motion } from "framer-motion"
import { Bot, Sparkles, Cpu } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* AI Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <Bot className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-white/80">AI-Powered Solutions</span>
          <Sparkles className="w-4 h-4 text-purple-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          We Build the{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Future
          </span>
          <br />
          of Your Business
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12"
        >
          At Cliste, we specialize in cutting-edge AI solutions, custom software development, and digital transformation
          services that help businesses scale and thrive in the modern era.
        </motion.p>

        {/* Floating AI Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-full max-w-2xl mx-auto h-48 md:h-64"
        >
          {/* Central AI Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-pulse-slow">
                <Cpu className="w-12 h-12 md:w-16 md:h-16 text-purple-300" />
              </div>
              {/* Orbiting rings */}
              <div
                className="absolute inset-0 -m-4 border border-purple-500/20 rounded-full animate-spin"
                style={{ animationDuration: "10s" }}
              />
              <div
                className="absolute inset-0 -m-8 border border-purple-500/10 rounded-full animate-spin"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              />
              <div
                className="absolute inset-0 -m-12 border border-purple-500/5 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              />
            </div>
          </div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/50 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                y: [0, -20, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
