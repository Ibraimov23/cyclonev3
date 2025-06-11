"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  variant?: "primary" | "secondary" | "outline" | "cyclone" | "cyclone-outline" | "gold" | "premium"
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-premium-800 text-white hover:bg-premium-700 shadow-premium"
      case "secondary":
        return "bg-white text-premium-800 border border-premium-200 hover:bg-premium-50 shadow-sm"
      case "outline":
        return "bg-transparent text-premium-800 border border-premium-200 hover:bg-premium-50"
      case "cyclone":
        return "bg-gradient-to-r from-cyclone to-cyclone-light text-white hover:shadow-cyclone shadow-md"
      case "cyclone-outline":
        return "bg-transparent text-cyclone border border-cyclone hover:bg-cyclone/5"
      case "gold":
        return "bg-gradient-to-r from-gold-400 to-gold-500 text-premium-900 hover:shadow-gold shadow-md"
      case "premium":
        return "bg-gradient-to-r from-premium-800 to-premium-900 text-white hover:shadow-premium-lg shadow-md"
      default:
        return "bg-premium-800 text-white hover:bg-premium-700"
    }
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden rounded-full px-6 py-3 font-medium transition-all duration-300",
        getVariantClasses(),
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span
        className="absolute inset-0 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { scale: 1.5, opacity: 0.15 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
          transformOrigin: "center",
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  )
}
