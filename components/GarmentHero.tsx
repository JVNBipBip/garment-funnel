"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const GarmentHero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setTypingComplete(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-8 py-24 pt-16">
        <div className="grid grid-cols-12 gap-5 gap-y-16 items-center">
          <div className="col-span-12 md:col-span-6 relative z-10">
            <div
              className="relative h-6 inline-flex items-center font-mono uppercase text-xs mb-12 px-2"
            >
              <div className="flex items-center gap-0.5 overflow-hidden">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block whitespace-nowrap overflow-hidden text-neutral-500 relative z-10 font-geist-mono"
                >
                  Built for creators
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: typingComplete ? [1, 0, 1, 0] : 0 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="block w-1.5 h-3 bg-neutral-500 ml-0.5 relative z-10 rounded-sm"
                />
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[48px] md:text-[56px] font-medium leading-tight tracking-tight text-neutral-900 mb-6 font-figtree"
            >
              Premium blanks to <br />
              <span className="text-neutral-400">build your brand.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed text-neutral-600 mb-8 max-w-lg font-figtree"
            >
              Experience the quality, fit, and feel of our garments before placing a bulk order. Curated sample packs designed for modern streetwear and fashion-driven labels.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
                <button className="inline-flex justify-center items-center h-12 px-6 rounded-full bg-neutral-900 text-white font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] group">
                    <span className="flex items-center gap-2">
                        Get Samples
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </button>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-6 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={isVisible ? { opacity: 1, scale: 1 } : {}}
               transition={{ duration: 1, delay: 0.3 }}
               className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-100"
             >
                {/* Placeholder for Hero Image - In a real scenario we'd use Next/Image */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-mono text-sm bg-neutral-200/50">
                    [Premium Hero Image of Garments]
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
