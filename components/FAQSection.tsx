"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

type FAQSectionProps = {
  title?: string
  faqs?: FAQItem[]
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What's included in the sample pack?",
    answer: "Each pack is curated around a specific use case. Depending on the pack, you'll get a mix of our core silhouettes — like the Softhand Standard Tee (220 GSM) and the HeavyMax Oversized Tee (280 GSM) — so you can test the fit, weight, and construction hands-on before ordering in bulk."
  },
  {
    question: "How long does sample shipping take?",
    answer: "We ship sample packs within 3 business days. After that, delivery takes 3–7 business days depending on your location (we actively ship to CA, US, UK, AU, and NZ)."
  },
  {
    question: "Is the sample pack cost credited to my bulk order?",
    answer: "Absolutely. Place your first bulk order of $300 or more and we'll credit the full cost of your sample pack toward your total. Think of it as a free test drive."
  },
  {
    question: "What fabric weights do you offer?",
    answer: "We specialise in premium, heavyweight fabrics. Our tees range from 220 to 300 GSM, and our hoodies from 400 to 500 GSM — all made with 100% combed ringspun cotton for a dense, retail-grade hand-feel."
  },
  {
    question: "What are your minimum order quantities (MOQ)?",
    answer: "For our blank catalogue, there are no minimums at all — order as few as one unit. For fully custom cut-and-sew, our MOQs are among the lowest in the industry and designed to be startup-friendly. Reach out and we'll give you an exact number for your project."
  },
  {
    question: "Can your blanks be screen printed or embroidered?",
    answer: "Yes — and they'll look incredible. Our tight-knit, heavyweight fabric is specifically engineered to hold crisp screen prints, sharp DTG detail, and dense embroidery without warping, bleeding, or stretching."
  },
  {
    question: "Are you a manufacturer or a middleman?",
    answer: "We are a direct manufacturer based in Montreal, Canada. No middlemen, no brokers. When you work with Garment System, you're talking directly to the people running the production floor — and you're welcome to visit us in person."
  }
]

export const FAQSection = ({ title = "Frequently asked questions", faqs = defaultFAQs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-24 px-8 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[40px] leading-tight font-medium text-neutral-900 tracking-tight sticky top-24 font-figtree">
              {title}
            </h2>
            <p className="mt-4 text-neutral-500 font-figtree mb-8">
              Everything you need to know about our blanks, custom manufacturing, and logistics.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-neutral-200 last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                  >
                    <span className="text-lg leading-7 text-neutral-900 pr-8 font-figtree font-medium">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-6 h-6 text-neutral-900" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p className="text-lg leading-relaxed text-neutral-600 font-figtree">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
