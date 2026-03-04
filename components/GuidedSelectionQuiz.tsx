"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Check, Sparkles, X, Loader2 } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"

// ── Quiz questions ───────────────────────────────────────────────────────────
type Answer = string | string[]

interface Question {
    id: string
    question: string
    subtitle: string
    multiSelect?: boolean
    options: { value: string; label: string; description: string }[]
}

const questions: Question[] = [
    {
        id: "brand-style",
        question: "What best describes your brand?",
        subtitle: "This helps us match the right aesthetic and fabric weight.",
        options: [
            { value: "streetwear", label: "Streetwear", description: "Bold drops, oversized fits, heavy fabrics" },
            { value: "essentials", label: "Basics & Essentials", description: "Clean, versatile everyday pieces" },
            { value: "athleisure", label: "Athleisure", description: "Performance meets lifestyle" },
            { value: "premium", label: "Luxury / Premium", description: "High-end quality, refined details" },
        ],
    },
    {
        id: "garment-types",
        question: "What garments are you interested in?",
        subtitle: "Select all that apply.",
        multiSelect: true,
        options: [
            { value: "tees", label: "T-Shirts", description: "Standard and oversized tees" },
            { value: "hoodies", label: "Hoodies & Sweats", description: "Pullover hoodies and sweatshirts" },
            { value: "longsleeves", label: "Longsleeves", description: "Long sleeve tees and jerseys" },
            { value: "crewnecks", label: "Crewnecks", description: "Crewneck sweatshirts" },
        ],
    },
    {
        id: "priority",
        question: "What matters most to you?",
        subtitle: "Pick the quality that's most important for your line.",
        options: [
            { value: "heavyweight", label: "Heavyweight Feel", description: "Thick, premium, 280+ GSM fabrics" },
            { value: "versatile", label: "Versatile & Lightweight", description: "Adaptable pieces for any season" },
            { value: "oversized", label: "Oversized / Relaxed Fit", description: "Boxy, dropped shoulders, relaxed cuts" },
            { value: "classic", label: "Classic / Standard Fit", description: "True-to-size, clean silhouettes" },
        ],
    },
    {
        id: "decoration",
        question: "How will you decorate your garments?",
        subtitle: "Different fabrics perform better with different methods.",
        options: [
            { value: "screen-printing", label: "Screen Printing", description: "Classic high-volume decoration" },
            { value: "dtg", label: "DTG / DTF", description: "Digital direct-to-garment or film printing" },
            { value: "embroidery", label: "Embroidery", description: "Stitched logos and designs" },
            { value: "not-sure", label: "Not Sure Yet", description: "We'll recommend versatile options" },
        ],
    },
]

// ── Recommendation engine ────────────────────────────────────────────────────
function getRecommendedPackId(answers: Record<string, Answer>): string {
    const brandStyle = answers["brand-style"] as string
    const garmentTypes = answers["garment-types"] as string[]
    const priority = answers["priority"] as string

    let streetwearScore = 0
    let essentialsScore = 0

    if (brandStyle === "streetwear" || brandStyle === "premium") streetwearScore += 3
    if (brandStyle === "essentials" || brandStyle === "athleisure") essentialsScore += 3

    if (priority === "heavyweight" || priority === "oversized") streetwearScore += 2
    if (priority === "versatile" || priority === "classic") essentialsScore += 2

    if (garmentTypes?.includes("hoodies")) streetwearScore += 1
    if (garmentTypes?.includes("longsleeves") || garmentTypes?.includes("crewnecks")) essentialsScore += 1

    return streetwearScore >= essentialsScore ? "streetwear" : "essentials"
}

// ── Component ────────────────────────────────────────────────────────────────
interface GuidedSelectionQuizProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function GuidedSelectionQuiz({ open, onOpenChange }: GuidedSelectionQuizProps) {
    const router = useRouter()
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState<Record<string, Answer>>({})
    const [direction, setDirection] = useState<1 | -1>(1)
    const [analyzing, setAnalyzing] = useState(false)
    const [analyzePhase, setAnalyzePhase] = useState(0)

    const totalSteps = questions.length

    const analyzeMessages = [
        "Reviewing your answers…",
        "Matching fabrics & weights…",
        "Building your recommendation…",
    ]

    function startAnalyzing(finalAnswers: Record<string, Answer>) {
        setAnalyzing(true)
        setAnalyzePhase(0)

        // Cycle through phases then navigate
        setTimeout(() => setAnalyzePhase(1), 1200)
        setTimeout(() => setAnalyzePhase(2), 2400)
        setTimeout(() => {
            const packId = getRecommendedPackId(finalAnswers)
            onOpenChange(false)
            router.push(`/results?pack=${packId}`)
            // Reset after navigation
            setTimeout(() => {
                setAnalyzing(false)
                setAnalyzePhase(0)
            }, 300)
        }, 3600)
    }

    function handleSelect(questionId: string, value: string, multiSelect?: boolean) {
        const newAnswers = { ...answers }

        if (multiSelect) {
            const current = (newAnswers[questionId] as string[]) || []
            newAnswers[questionId] = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value]
        } else {
            newAnswers[questionId] = value
        }

        setAnswers(newAnswers)

        // Auto-advance for single select
        if (!multiSelect) {
            const nextStep = step + 1
            setTimeout(() => {
                if (nextStep >= totalSteps) {
                    startAnalyzing(newAnswers)
                } else {
                    setDirection(1)
                    setStep(nextStep)
                }
            }, 300)
        }
    }

    function handleNext() {
        const nextStep = step + 1
        if (nextStep >= totalSteps) {
            startAnalyzing(answers)
        } else {
            setDirection(1)
            setStep(nextStep)
        }
    }

    function handleBack() {
        setDirection(-1)
        setStep(prev => prev - 1)
    }

    function handleReset() {
        setStep(0)
        setAnswers({})
        setDirection(1)
        setAnalyzing(false)
        setAnalyzePhase(0)
    }

    function handleClose() {
        onOpenChange(false)
        setTimeout(handleReset, 300)
    }

    const currentQuestion = questions[step]
    const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined
    const canProceed = currentQuestion?.multiSelect
        ? ((currentAnswer as string[])?.length ?? 0) > 0
        : !!currentAnswer

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent
                showCloseButton={false}
                className="sm:max-w-2xl p-0 gap-0 overflow-hidden rounded-2xl border-neutral-200/60"
            >
                <DialogTitle className="sr-only">Guided Sample Selection Quiz</DialogTitle>

                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-neutral-600" />
                        </div>
                        <span className="text-sm font-medium text-neutral-900">
                            {analyzing ? "Analyzing…" : `Question ${step + 1} of ${totalSteps}`}
                        </span>
                    </div>
                    <button
                        onClick={handleClose}
                        className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                    >
                        <X className="w-4 h-4 text-neutral-600" />
                    </button>
                </div>

                {/* Progress bar */}
                <div className="px-6 pb-2">
                    <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#156d95] rounded-full"
                            initial={false}
                            animate={{ width: analyzing ? "100%" : `${((step + 1) / totalSteps) * 100}%` }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6 min-h-[400px] flex flex-col">
                    <AnimatePresence mode="wait" custom={direction}>
                        {analyzing ? (
                            <motion.div
                                key="analyzing"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1 flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#156d95]/10 flex items-center justify-center mb-8">
                                    <Loader2 className="w-8 h-8 text-[#156d95] animate-spin" />
                                </div>

                                <h3 className="text-2xl font-medium text-neutral-900 font-figtree mb-3">
                                    Analyzing your preferences
                                </h3>

                                <div className="space-y-3 mt-6 w-full max-w-xs">
                                    {analyzeMessages.map((msg, i) => (
                                        <motion.div
                                            key={msg}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{
                                                opacity: analyzePhase >= i ? 1 : 0.3,
                                                y: analyzePhase >= i ? 0 : 8,
                                            }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                                                analyzePhase > i
                                                    ? "bg-emerald-500"
                                                    : analyzePhase === i
                                                    ? "bg-[#156d95]"
                                                    : "bg-neutral-200"
                                            }`}>
                                                {analyzePhase > i ? (
                                                    <Check className="w-3 h-3 text-white" />
                                                ) : analyzePhase === i ? (
                                                    <Loader2 className="w-3 h-3 text-white animate-spin" />
                                                ) : null}
                                            </div>
                                            <span className={`text-sm transition-colors duration-300 ${
                                                analyzePhase >= i ? "text-neutral-900" : "text-neutral-400"
                                            }`}>
                                                {msg}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ) : currentQuestion && (
                            <motion.div
                                key={step}
                                custom={direction}
                                initial={{ opacity: 0, x: direction * 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction * -40 }}
                                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                                className="flex-1 flex flex-col"
                            >
                                <div className="mb-6 mt-2">
                                    <h3 className="text-2xl font-medium text-neutral-900 font-figtree">
                                        {currentQuestion.question}
                                    </h3>
                                    <p className="text-sm text-neutral-500 mt-1">
                                        {currentQuestion.subtitle}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                                    {currentQuestion.options.map((option) => {
                                        const isSelected = currentQuestion.multiSelect
                                            ? (currentAnswer as string[])?.includes(option.value)
                                            : currentAnswer === option.value

                                        return (
                                            <button
                                                key={option.value}
                                                onClick={() => handleSelect(currentQuestion.id, option.value, currentQuestion.multiSelect)}
                                                className={`relative text-left p-4 rounded-xl border-2 transition-all duration-200 group ${
                                                    isSelected
                                                        ? "border-[#156d95] bg-blue-50/30"
                                                        : "border-neutral-200 hover:border-neutral-300 bg-white"
                                                }`}
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <span className="text-sm font-medium text-neutral-900 block">
                                                            {option.label}
                                                        </span>
                                                        <span className="text-xs text-neutral-500 mt-0.5 block">
                                                            {option.description}
                                                        </span>
                                                    </div>
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-3 mt-0.5 transition-all ${
                                                        isSelected
                                                            ? "border-[#156d95] bg-[#156d95]"
                                                            : "border-neutral-300"
                                                    }`}>
                                                        {isSelected && <Check className="w-3 h-3 text-white" />}
                                                    </div>
                                                </div>
                                            </button>
                                        )
                                    })}
                                </div>

                                {/* Navigation */}
                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-100">
                                    <button
                                        onClick={handleBack}
                                        disabled={step === 0}
                                        className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Back
                                    </button>

                                    {currentQuestion.multiSelect && (
                                        <button
                                            onClick={handleNext}
                                            disabled={!canProceed}
                                            className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-[#156d95] text-white text-sm font-medium transition-all hover:bg-[#156d95]/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            Continue
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </DialogContent>
        </Dialog>
    )
}
