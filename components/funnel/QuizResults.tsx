"use client"

import { motion } from "framer-motion"
import { CheckCircle, Truck, Package, RotateCcw, ChevronDown } from "lucide-react"
import { SizeChartDialog } from "./SizeChartDialog"

type QuizState = {
  stage: string
  sourcing: string
  garments: string[]
  priority: string
  volume: string
}

const getBundleRecommendations = (answers: QuizState) => {
  const { stage, sourcing, garments, priority, volume } = answers

  const streetwear = {
    id: "streetwear",
    title: "Streetwear Pack",
    description: "The Streetwear Pack includes one of each of our core blanks, curated specifically for streetwear brands looking to test fit, fabric weight, and overall construction before placing a bulk order. Designed around oversized, boxy, and heavyweight silhouettes, it gives you a hands-on feel for the quality and structure needed for modern streetwear.",
    price: "CA$88.00",
    originalPrice: "CA$114.00",
    image: "bg-gradient-to-br from-[#c8c6c6] via-[#e2d5c4] to-[#8d909b]",
    items: [
      "1x SS001 Softhand Standard Tee",
      "1x SS002 HeavyMax Oversized Tee",
      "1x HD001 Midweight Boxy Hoodie",
    ],
  }

  const essentials = {
    id: "essentials",
    title: "Essentials Sample Pack",
    description: "Two tees, one hoodie, one hat — exactly what the video promised. Feel the quality, compare it to whatever you're sourcing now, and if you place your first bulk order after, we'll refund this pack.",
    price: "CA$65.00",
    originalPrice: "CA$88.00",
    image: "bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]",
    items: [
      "1x SS001 Softhand Standard Tee",
      "1x SS002 HeavyMax Oversized Tee",
      "1x HD001 Midweight Boxy Hoodie",
      "1x HT001 Premium Hat",
    ],
  }

  const starter = {
    id: "starter",
    title: "Brand Launch Starter Kit",
    description: "Everything you need to launch your first small run. Includes multiple fits so you can lock in your brand's core silhouette before you scale up to bulk orders.",
    price: "CA$59.00",
    originalPrice: "CA$82.00",
    image: "bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc]",
    items: [
      "3x SS001 Softhand Standard Tees",
      "2x SS002 HeavyMax Oversized Tees",
      "1x HD001 Midweight Boxy Hoodie",
    ],
  }

  const fullLine = {
    id: "fullline",
    title: "Full Line Sample Pack",
    description: "One of every garment we make in a single size. Perfect for established brands evaluating a supplier switch — test every fabric, weight, and silhouette in our entire catalog side by side.",
    price: "CA$110.00",
    originalPrice: "CA$145.00",
    image: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    items: [
      "1x SS001 Softhand Standard Tee",
      "1x SS002 HeavyMax Oversized Tee",
      "1x HD001 Midweight Boxy Hoodie",
      "1x CR001 Crewneck Sweatshirt",
      "1x SW001 Premium Sweatpants",
      "1x TB001 Tote Bag",
      "1x HT001 Premium Hat",
    ],
  }

  const bulkTrial = {
    id: "bulktrial",
    title: "Bulk Trial Pack",
    description: "A small production run to test at scale before committing to a full order. Includes a standard size curve so you can validate fit across your audience and start selling immediately.",
    price: "CA$210.00",
    originalPrice: "CA$260.00",
    image: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    items: [
      "24x SS001 Softhand Standard Tees",
      "Standard size curve (S–XXL)",
      "Single color of your choice",
    ],
  }

  const customBrand = {
    id: "custombrand",
    title: "Custom Branding Starter",
    description: "Sample our blanks with full custom branding services included — woven labels, printed tags, and packaging mockups. See exactly how your brand will look on our garments before you order in bulk.",
    price: "CA$95.00",
    originalPrice: "CA$125.00",
    image: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    items: [
      "1x SS001 Softhand Standard Tee",
      "1x HD001 Midweight Boxy Hoodie",
      "Custom woven label mockup",
      "Printed tag sample",
    ],
  }

  // Always ordered: cheapest → mid price → most expensive
  if (stage === "idea" || sourcing === "nowhere") {
    return [essentials, streetwear, fullLine]
  }

  if (stage === "launching") {
    if (priority === "branding") return [essentials, customBrand, fullLine]
    return [starter, essentials, fullLine]
  }

  if (stage === "growing") {
    if (priority === "branding") return [streetwear, customBrand, bulkTrial]
    if (priority === "price") return [essentials, streetwear, bulkTrial]
    return [starter, streetwear, bulkTrial]
  }

  if (stage === "established" || sourcing === "alibaba") {
    if (priority === "branding") return [streetwear, customBrand, fullLine]
    if (priority === "quality") return [essentials, streetwear, fullLine]
    if (priority === "price") return [starter, essentials, bulkTrial]
    return [essentials, streetwear, fullLine]
  }

  return [essentials, streetwear, fullLine]
}

const BundleCard = ({ bundle, index }: { bundle: any; index: number }) => {
  const badge = index === 0
    ? null
    : index === 1
      ? { label: "Best Value", className: "bg-[#156d95] text-white" }
      : { label: "For Established Brands", className: "bg-neutral-100 text-neutral-600" }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`bg-white rounded-[24px] border overflow-hidden flex flex-col h-full ${
        index === 1
          ? "border-[#156d95] shadow-md ring-1 ring-[#156d95]/20"
          : "border-neutral-200 shadow-sm"
      }`}
    >
      {/* Image area */}
      <div className={`p-6 flex flex-col items-center justify-center relative min-h-[280px] sm:min-h-[320px] ${bundle.image}`}>
        <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
        <div className="relative z-10 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-2xl text-white/90 font-medium text-sm shadow-sm border border-white/20">
          [Garment Preview]
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-grow">
        {badge && (
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 font-geist-mono w-fit ${badge.className}`}>
            {badge.label}
          </div>
        )}
        <h3 className="text-xl font-semibold font-figtree text-neutral-900 mb-2">{bundle.title}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-neutral-400 line-through text-sm font-figtree">{bundle.originalPrice}</span>
          <span className="text-xl font-bold font-figtree text-neutral-900">{bundle.price}</span>
        </div>
        <div className="text-xs text-neutral-400 font-figtree mb-4">+ Free shipping</div>

        <div className="space-y-1.5 mb-5 flex-grow">
          {bundle.items.map((item: string, i: number) => (
            <div key={i} className="text-sm text-neutral-800 font-medium font-figtree flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-neutral-400 block shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-neutral-700 font-figtree">Size</span>
          <SizeChartDialog items={bundle.items} />
        </div>
        <div className="mb-4 relative w-full">
          <select className="w-full h-11 px-4 rounded-xl border border-neutral-200 bg-white text-sm font-figtree text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 appearance-none cursor-pointer hover:border-neutral-300 transition-colors">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">X-Large</option>
            <option value="xxl">XX-Large</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
        </div>

        <button className="w-full h-11 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-colors font-figtree shadow-sm">
          Add to Cart
        </button>
        </div>
      </div>
    </motion.div>
  )
}

export const QuizResults = ({ answers }: { answers: QuizState }) => {
  const bundles = getBundleRecommendations(answers)

  return (
    <div className="py-8 max-w-[1440px] mx-auto px-2 sm:px-6">
      {/* Success Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#e8f5e9] border border-[#b9e4c0] rounded-2xl p-6 mb-12 flex items-center gap-4"
      >
        <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center text-white shrink-0">
          <CheckCircle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-[#2e7d32] font-semibold text-lg font-figtree">15% Off + Free Shipping Unlocked!</h3>
          <p className="text-[#388e3c] font-figtree">Your discount is automatically applied at checkout.</p>
        </div>
      </motion.div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-medium font-figtree text-neutral-900 mb-4">
          Your Curated Packs
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-figtree">
          Based on your needs, we've selected the top 3 bundles to help you get started perfectly.
        </p>
      </div>

      {/* Recommended Bundles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
        {bundles.map((bundle, index) => (
          <BundleCard key={bundle.id} bundle={bundle} index={index} />
        ))}
      </div>

      {/* Trust & Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm text-center">
          <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-900">
            <Truck className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-neutral-900 mb-2 font-figtree">Free Shipping</h4>
          <p className="text-sm text-neutral-500 font-figtree">Free shipping is available on all orders across North America.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm text-center">
          <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-900">
            <Package className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-neutral-900 mb-2 font-figtree">No Minimums Required</h4>
          <p className="text-sm text-neutral-500 font-figtree">Test our quality with a single sample before committing.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm text-center">
          <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-900">
            <RotateCcw className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-neutral-900 mb-2 font-figtree">Sizing Consistency</h4>
          <p className="text-sm text-neutral-500 font-figtree">Guaranteed consistent fits across our proprietary line.</p>
        </div>
      </div>
    </div>
  )
}
