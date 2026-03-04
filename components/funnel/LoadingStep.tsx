"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export const LoadingStep = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2500) // 2.5 seconds fake loading
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="py-20 md:py-32 text-center max-w-xl mx-auto flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Loader2 className="w-16 h-16 text-neutral-900 animate-spin mx-auto" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-4xl font-medium font-figtree text-neutral-900 mb-4"
      >
        Finding the best deal for you...
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-neutral-500 text-lg font-figtree"
      >
        Analyzing your preferences and matching with our catalog.
      </motion.p>
    </div>
  )
}
