"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  gradient?: boolean
  weight?: "light" | "normal" | "medium" | "semibold" | "bold"
}

export default function RevealText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  once = true,
  as: Component = "div",
  gradient = false,
  weight = "normal",
}: RevealTextProps) {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    if (!inView && !once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const getWeightClass = () => {
    switch (weight) {
      case "light":
        return "font-light"
      case "normal":
        return "font-normal"
      case "medium":
        return "font-medium"
      case "semibold":
        return "font-semibold"
      case "bold":
        return "font-bold"
      default:
        return "font-normal"
    }
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          <Component className={cn("inline", getWeightClass(), gradient && "text-gradient", "tracking-tight")}>
            {word}
          </Component>
        </motion.span>
      ))}
    </motion.div>
  )
}
