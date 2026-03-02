"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Testimonial = {
    id: string
    company: string
    logo: React.ReactNode
    title: string
    features: string[]
    quote: string
    attribution: string
    accentColor: string
    stats: {
        shippingTime: string
        units: string
        qualityRating: string
        velocityLabel: string
        velocityValue: string
        velocityPercent: number
    }
}

const testimonials: Testimonial[] = [
    {
        id: "midnight",
        company: "Midnight Studio",
        logo: (
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/30">
                MS
            </div>
        ),
        title: "Midnight Studio scaled their seasonal drop with zero minimums and zero stress.",
        features: ["Heavyweight 280 GSM", "Custom Tags", "Pre-Shrunk"],
        quote: "The 280 GSM tees are heavier than what I was paying $12/unit for elsewhere. Incredible value.",
        attribution: "Alex M., Founder, Midnight Studio",
        accentColor: "#10b981", // Emerald
        stats: {
            shippingTime: "3 Days",
            units: "500+",
            qualityRating: "4.9/5",
            velocityLabel: "Margin increase",
            velocityValue: "+32%",
            velocityPercent: 85
        }
    },
    {
        id: "sensory",
        company: "Sensory House",
        logo: (
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-500/30">
                SH
            </div>
        ),
        title: "Sensory House relies on Garment System to keep their core collection perpetually in stock.",
        features: ["Direct Communication", "Fast Turnaround", "Consistent Fit"],
        quote: "They responded to my first email in 2 hours. My last overseas supplier took 3 weeks. The peace of mind is worth it.",
        attribution: "Sarah J., Operations, Sensory House",
        accentColor: "#3b82f6", // Blue
        stats: {
            shippingTime: "5 Days",
            units: "1,200",
            qualityRating: "5.0/5",
            velocityLabel: "Inventory turnover",
            velocityValue: "2x Faster",
            velocityPercent: 92
        }
    },
    {
        id: "muse",
        company: "Curated by Muse",
        logo: (
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg border border-amber-500/30">
                CM
            </div>
        ),
        title: "Curated by Muse eliminated customer returns by switching to our premium blanks.",
        features: ["Wash Tested", "Premium Construction", "Retail Ready"],
        quote: "Our return rate dropped significantly since switching. Customers literally comment on the fabric quality now.",
        attribution: "David L., CEO, Curated by Muse",
        accentColor: "#f59e0b", // Amber
        stats: {
            shippingTime: "4 Days",
            units: "850",
            qualityRating: "4.8/5",
            velocityLabel: "Return rate drop",
            velocityValue: "-45%",
            velocityPercent: 78
        }
    }
]

const FeatureBadge = ({ name, accentColor }: { name: string, accentColor: string }) => {
    return (
        <div className="flex items-center gap-2 bg-neutral-800/80 shadow-sm border border-neutral-700/50 rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-300 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }} />
            {name}
        </div>
    )
}

const StatsCard = ({
    stats,
    accentColor,
    delay,
    zIndex,
}: {
    stats: Testimonial["stats"]
    accentColor: string
    delay: number
    zIndex: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay }}
            className="absolute w-full max-w-[440px] rounded-2xl p-8 backdrop-blur-xl bg-neutral-900/80 shadow-2xl border border-neutral-700/60"
            style={{
                zIndex,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)",
            }}
        >
            <div className="flex flex-col space-y-8">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                    <h4 className="text-base font-semibold text-white">Production Metrics</h4>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700/50">Verified Drop</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
                        <div className="text-2xl font-bold text-white mb-1">{stats.shippingTime}</div>
                        <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide px-1">Shipping Limit</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50 flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-white mb-1">{stats.units}</div>
                        <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Units</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <div className="text-2xl font-bold text-white">{stats.qualityRating}</div>
                        </div>
                        <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide px-1 mt-0.5">Google Reviews</div>
                    </div>
                </div>

                <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-400 font-medium">{stats.velocityLabel}</span>
                        <span className="font-bold tracking-wide" style={{ color: accentColor, textShadow: `0 0 10px ${accentColor}40` }}>{stats.velocityValue}</span>
                    </div>
                    <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden border border-neutral-700/50 backdrop-blur-sm shadow-inner">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${stats.velocityPercent}%` }}
                            transition={{ duration: 1.2, delay: delay + 0.3, ease: "circOut" }}
                            className="h-full rounded-full relative"
                            style={{ backgroundColor: accentColor }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// Add placeholder paths for logos
const sampleLogos = Array(6).fill("/placeholder-logo.png")

export const SocialProofSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    const currentStudy = testimonials[currentIndex]

    const startAutoPlay = () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current)
        autoPlayRef.current = setInterval(() => {
            nextSlide()
        }, 6000)
    }

    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
            autoPlayRef.current = null
        }
    }

    useEffect(() => {
        if (isAutoPlaying) {
            startAutoPlay()
        } else {
            stopAutoPlay()
        }
        return () => stopAutoPlay()
    }, [isAutoPlaying, currentIndex])

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    }

    return (
        <div
            className="w-full bg-neutral-900 flex flex-col py-24 overflow-hidden relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >

            {/* Metric Strip */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-20 text-center border-b border-neutral-800 pb-12 mx-auto max-w-7xl px-8 w-full">
                <div>
                    <p className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">2M+</p>
                    <p className="text-sm text-neutral-400 uppercase tracking-widest font-medium">Garments Shipped</p>
                </div>
                <div>
                    <p className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">500+</p>
                    <p className="text-sm text-neutral-400 uppercase tracking-widest font-medium">Brands Served</p>
                </div>
                <div>
                    <p className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">4.8/5</p>
                    <p className="text-sm text-neutral-400 uppercase tracking-widest font-medium">Satisfaction Rating</p>
                </div>
            </div>

            <div className="max-w-7xl w-full mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16">

                    {/* Left Content (Text) */}
                    <div className="space-y-8 z-10 relative">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentStudy.id}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-3">
                                    {currentStudy.logo}
                                    <span className="text-xl font-semibold text-white">{currentStudy.company}</span>
                                </div>

                                <h2 className="text-3xl md:text-[40px] font-medium text-white leading-tight tracking-tight font-figtree">
                                    {currentStudy.title}
                                </h2>

                                <div className="flex flex-wrap gap-3">
                                    {currentStudy.features.map((feature, idx) => (
                                        <FeatureBadge key={idx} name={feature} accentColor={currentStudy.accentColor} />
                                    ))}
                                </div>

                                <blockquote className="border-l-4 pl-6 py-2 relative mt-8" style={{ borderColor: currentStudy.accentColor }}>
                                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300 font-figtree italic mb-4">
                                        "{currentStudy.quote}"
                                    </p>
                                    <footer className="text-sm font-medium text-neutral-500 font-figtree">
                                        {currentStudy.attribution}
                                    </footer>
                                </blockquote>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className="flex items-center gap-8 pt-8">
                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goToSlide(idx)}
                                        className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-10" : "w-3 bg-neutral-700 hover:bg-neutral-600"
                                            }`}
                                        style={{
                                            backgroundColor: idx === currentIndex ? currentStudy.accentColor : undefined,
                                            boxShadow: idx === currentIndex ? `0 0 12px ${currentStudy.accentColor}80` : undefined
                                        }}
                                        aria-label={`Go to testimonial ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={prevSlide}
                                    className="p-3 rounded-full border border-neutral-700 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors bg-neutral-800/50"
                                    aria-label="Previous testimonial"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-3 rounded-full border border-neutral-700 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors bg-neutral-800/50"
                                    aria-label="Next testimonial"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content (Visual Abstract/Mockup) */}
                    <div className="h-[500px] w-full flex items-center justify-center relative bg-neutral-900/50 rounded-3xl overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] before:bg-[size:24px_24px] border border-neutral-800/50">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStudy.id}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {/* Decorative background glow */}
                                <div
                                    className="absolute inset-0 opacity-[0.12] blur-[80px] transition-colors duration-700 w-3/4 h-3/4 m-auto rounded-full"
                                    style={{ backgroundColor: currentStudy.accentColor }}
                                />

                                <StatsCard stats={currentStudy.stats} accentColor={currentStudy.accentColor} delay={0} zIndex={10} />

                                {/* Subtle decorative elements behind the card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="absolute w-72 h-72 rounded-full border border-neutral-700/40 -translate-x-12 translate-y-12"
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute w-96 h-96 rounded-full border border-neutral-700/20 translate-x-12 -translate-y-8"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Scrolling Logos */}
            <div className="relative w-full overflow-hidden mt-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-neutral-900 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-neutral-900 after:to-transparent pt-8 border-t border-neutral-800">
                <motion.div
                    className="flex items-center gap-16 md:gap-24 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                >
                    {[...sampleLogos, ...sampleLogos].map((_, i) => (
                        <div key={i} className="flex-shrink-0 grayscale opacity-30 hover:opacity-100 transition-opacity flex items-center justify-center w-36 h-12 bg-neutral-800/80 rounded-lg text-xs text-neutral-500 font-mono border border-neutral-700">
                            [Brand Logo]
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>
    )
}
