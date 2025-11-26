"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface RotatingTextProps {
  texts: string[]
  mainClassName?: string
  staggerFrom?: "first" | "last" | "center" | "random"
  initial?: any
  animate?: any
  exit?: any
  staggerDuration?: number
  splitLevelClassName?: string
  transition?: any
  rotationInterval?: number
}

export default function RotatingText({
  texts,
  mainClassName = "",
  staggerFrom = "first",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName = "",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}: RotatingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((current) => (current + 1) % texts.length)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [texts.length, rotationInterval])

  const currentText = texts[currentTextIndex]

  const getStaggerDelay = (index: number, totalChars: number) => {
    switch (staggerFrom) {
      case "first":
        return index * staggerDuration
      case "last":
        return (totalChars - 1 - index) * staggerDuration
      case "center":
        return Math.abs(index - (totalChars - 1) / 2) * staggerDuration
      case "random":
        return Math.random() * 0.5
      default:
        return index * staggerDuration
    }
  }

  return (
    <div className={`inline-flex items-center ${mainClassName}`}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentText}
          initial="initial"
          animate="animate"
          exit="exit"
          className="inline-flex overflow-hidden"
        >
          {currentText.split("").map((char, index) => (
            <motion.span
              key={`${currentText}-${index}`}
              custom={index}
              variants={{
                initial,
                animate: {
                  ...animate,
                  transition: {
                    ...transition,
                    delay: getStaggerDelay(index, currentText.length),
                  },
                },
                exit: {
                  ...exit,
                  transition: {
                    ...transition,
                    delay: getStaggerDelay(index, currentText.length),
                  },
                },
              }}
              className={`inline-block ${splitLevelClassName}`}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}