"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, Check } from "lucide-react"
import { LoadingStep } from "./LoadingStep"
import { QuizResults } from "./QuizResults"

type QuizState = {
  stage: string
  sourcing: string
  garments: string[]
  priority: string
  volume: string
}

export const QuizFunnel = () => {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<QuizState>({
    stage: "",
    sourcing: "",
    garments: [],
    priority: "",
    volume: "",
  })

  const totalSteps = 5

  const updateAnswer = (key: keyof QuizState, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  const nextStep = () => setStep((s) => Math.min(s + 1, 7))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <QuestionStep
            title="Where are you at with your brand?"
            subtitle="No wrong answers — we just want to point you to the right pack."
            options={[
              { id: "idea", label: "Still in the idea phase", icon: "💡" },
              { id: "launching", label: "About to launch my first drop", icon: "🚀" },
              { id: "growing", label: "Already selling, looking to level up", icon: "📈" },
              { id: "established", label: "Established brand switching suppliers", icon: "🔄" },
            ]}
            value={answers.stage}
            onChange={(val) => {
              updateAnswer("stage", val)
              setTimeout(nextStep, 300)
            }}
          />
        )
      case 2:
        return (
          <QuestionStep
            title="Where are you currently sourcing blanks?"
            subtitle="This helps us understand what you're comparing us to."
            options={[
              { id: "alibaba", label: "Alibaba or overseas suppliers", icon: "🌏" },
              { id: "local", label: "Local distributors (S&S, SanMar, etc.)", icon: "🏬" },
              { id: "pod", label: "Print-on-demand (Printful, Printify)", icon: "🖨️" },
              { id: "nowhere", label: "Haven't started sourcing yet", icon: "🤷" },
            ]}
            value={answers.sourcing}
            onChange={(val) => {
              updateAnswer("sourcing", val)
              setTimeout(nextStep, 300)
            }}
          />
        )
      case 3:
        return (
          <MultiSelectStep
            title="What are you looking to order?"
            subtitle="Select all that apply."
            options={[
              { id: "Tees", label: "T-Shirts", icon: "👕" },
              { id: "Hoodies", label: "Hoodies", icon: "🧥" },
              { id: "Crewnecks", label: "Crewneck Sweatshirts", icon: "👚" },
              { id: "Sweatpants", label: "Sweatpants", icon: "👖" },
              { id: "Accessories", label: "Hats & Bags", icon: "🧢" },
            ]}
            value={answers.garments}
            onChange={(val) => updateAnswer("garments", val)}
            onContinue={nextStep}
          />
        )
      case 4:
        return (
          <QuestionStep
            title="What matters most to you right now?"
            subtitle="Pick the one that's top of mind."
            options={[
              { id: "quality", label: "Feeling the quality before I commit", icon: "🤚" },
              { id: "price", label: "Getting the best price per unit", icon: "💰" },
              { id: "speed", label: "Fast shipping, no 2-month wait", icon: "⚡" },
              { id: "branding", label: "Custom labels, tags, and packaging", icon: "🏷️" },
            ]}
            value={answers.priority}
            onChange={(val) => {
              updateAnswer("priority", val)
              setTimeout(nextStep, 300)
            }}
          />
        )
      case 5:
        return (
          <QuestionStep
            title="How many pieces are you looking to order?"
            subtitle="No minimums — just helps us recommend the right pack."
            options={[
              { id: "samples", label: "Just a sample pack to start", icon: "📦" },
              { id: "small", label: "Under 100 pieces", icon: "📋" },
              { id: "medium", label: "100–500 pieces", icon: "🏭" },
              { id: "large", label: "500+ pieces", icon: "🚀" },
            ]}
            value={answers.volume}
            onChange={(val) => {
              updateAnswer("volume", val)
              setTimeout(nextStep, 300)
            }}
          />
        )
      case 6:
        return <LoadingStep onComplete={nextStep} />
      case 7:
        return <QuizResults answers={answers} />
      default:
        return null
    }
  }

  return (
    <div className={`mx-auto px-4 sm:px-6 ${step === 7 ? "max-w-[1440px]" : "max-w-3xl"}`}>
      {step <= 5 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </button>
            ) : (
              <div />
            )}
            <span className="text-sm font-geist-mono text-neutral-400 uppercase tracking-wider">
              Step {step} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
            <motion.div
              className="bg-neutral-900 h-full"
              initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function QuestionStep({
  title,
  subtitle,
  options,
  value,
  onChange,
}: {
  title: string
  subtitle: string
  options: { id: string; label: string; icon: string }[]
  value: string
  onChange: (val: string) => void
}) {
  return (
    <div className="py-4 md:py-8">
      <h2 className="text-2xl md:text-4xl font-medium font-figtree text-neutral-900 mb-2 md:mb-3">{title}</h2>
      <p className="text-neutral-500 text-base md:text-lg mb-6 md:mb-8 font-figtree">{subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {options.map((opt) => {
          const isSelected = value === opt.id
          return (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={`flex items-center p-4 md:p-6 rounded-2xl border-2 transition-all duration-200 text-left w-full group ${
                isSelected
                  ? "border-neutral-900 bg-neutral-50 shadow-sm"
                  : "border-neutral-200 hover:border-neutral-300 hover:bg-white"
              }`}
            >
              <span className="text-xl md:text-2xl mr-3 md:mr-4">{opt.icon}</span>
              <span className="font-medium text-neutral-900 flex-grow font-figtree text-base md:text-lg">{opt.label}</span>
              {isSelected && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-neutral-900">
                  <Check className="w-5 h-5" />
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function MultiSelectStep({
  title,
  subtitle,
  options,
  value,
  onChange,
  onContinue,
}: {
  title: string
  subtitle: string
  options: { id: string; label: string; icon: string }[]
  value: string[]
  onChange: (val: string[]) => void
  onContinue: () => void
}) {
  const toggleSelection = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id))
    } else {
      onChange([...value, id])
    }
  }

  return (
    <div className="py-4 md:py-8">
      <h2 className="text-2xl md:text-4xl font-medium font-figtree text-neutral-900 mb-2 md:mb-3">{title}</h2>
      <p className="text-neutral-500 text-base md:text-lg mb-6 md:mb-8 font-figtree">{subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
        {options.map((opt) => {
          const isSelected = value.includes(opt.id)
          return (
            <button
              key={opt.id}
              onClick={() => toggleSelection(opt.id)}
              className={`flex items-center p-4 md:p-6 rounded-2xl border-2 transition-all duration-200 text-left w-full group ${
                isSelected
                  ? "border-neutral-900 bg-neutral-50 shadow-sm"
                  : "border-neutral-200 hover:border-neutral-300 hover:bg-white"
              }`}
            >
              <div
                className={`w-5 h-5 md:w-6 md:h-6 rounded-md border mr-3 md:mr-4 flex items-center justify-center transition-colors ${
                  isSelected ? "bg-neutral-900 border-neutral-900 text-white" : "border-neutral-300"
                }`}
              >
                {isSelected && <Check className="w-3 h-3 md:w-4 md:h-4" />}
              </div>
              <span className="text-xl md:text-2xl mr-2 md:mr-3">{opt.icon}</span>
              <span className="font-medium text-neutral-900 font-figtree text-base md:text-lg">{opt.label}</span>
            </button>
          )
        })}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onContinue}
          disabled={value.length === 0}
          className={`inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 rounded-full font-medium text-sm md:text-base transition-all ${
            value.length > 0
              ? "bg-neutral-900 text-white hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
          }`}
        >
          Continue
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
        </button>
      </div>
    </div>
  )
}
