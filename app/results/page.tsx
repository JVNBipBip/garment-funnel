"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { motion } from "framer-motion"
import { Footer } from "@/components/Footer"
import { ArrowRight, Check, Package, ShoppingBag, Plus, Star } from "lucide-react"

// ── Sample Packs ─────────────────────────────────────────────────────────────
const samplePacks: Record<string, {
    name: string
    description: string
    items: { name: string; detail: string }[]
    price: string
    badge: string
}> = {
    streetwear: {
        name: "Streetwear Pack",
        description: "Our best-selling heavyweight silhouettes in one box. Test the oversized fit, feel the 280 GSM weight, and wash-test them before your next drop.",
        items: [
            { name: "SS001 Softhand Standard Tee", detail: "Classic fit · Midweight · 100% Cotton" },
            { name: "SS002 HeavyMax Oversized Tee", detail: "Oversized fit · 280 GSM · Heavyweight" },
            { name: "HD001 Midweight Boxy Hoodie", detail: "Boxy cut · Fleece interior · Midweight" },
        ],
        price: "$85.00 CAD",
        badge: "Best for Streetwear",
    },
    essentials: {
        name: "Essentials Pack",
        description: "The fastest way to evaluate our core range. Classic fits and versatile weights built for screen printing, DTG, and embroidery.",
        items: [
            { name: "SS001 Softhand Standard Tee", detail: "Classic fit · Midweight · 100% Cotton" },
            { name: "LS001 Classic Longsleeve", detail: "Classic fit · Soft finish · Versatile" },
            { name: "CR001 Essential Crewneck", detail: "Relaxed fit · Midweight · Everyday wear" },
        ],
        price: "$75.00 CAD",
        badge: "Best for Essentials",
    },
}

// ── Individual Items (placeholders) ──────────────────────────────────────────
const individualItems = [
    {
        id: "ss001",
        name: "SS001 Softhand Standard Tee",
        description: "Classic fit, midweight cotton tee with a buttery soft hand-feel. Perfect for screen printing and DTG.",
        weight: "180 GSM",
        fit: "Classic",
        price: "$28.00 CAD",
        colors: ["Black", "White", "Navy", "Grey"],
        image: null,
    },
    {
        id: "ss002",
        name: "SS002 HeavyMax Oversized Tee",
        description: "280 GSM heavyweight oversized tee built for streetwear drops. Boxy silhouette with dropped shoulders.",
        weight: "280 GSM",
        fit: "Oversized",
        price: "$35.00 CAD",
        colors: ["Black", "White", "Cream", "Washed Grey"],
        image: null,
    },
    {
        id: "hd001",
        name: "HD001 Midweight Boxy Hoodie",
        description: "Boxy-cut hoodie with a premium midweight fleece interior. Ideal for embroidery and screen printing.",
        weight: "350 GSM",
        fit: "Boxy",
        price: "$55.00 CAD",
        colors: ["Black", "White", "Forest Green"],
        image: null,
    },
    {
        id: "ls001",
        name: "LS001 Classic Longsleeve",
        description: "Versatile longsleeve with a clean silhouette and soft finish. Great layering piece for any collection.",
        weight: "200 GSM",
        fit: "Classic",
        price: "$32.00 CAD",
        colors: ["Black", "White", "Navy"],
        image: null,
    },
    {
        id: "cr001",
        name: "CR001 Essential Crewneck",
        description: "Everyday crewneck sweatshirt with a relaxed, essential fit. Brushed fleece interior for comfort.",
        weight: "320 GSM",
        fit: "Relaxed",
        price: "$45.00 CAD",
        colors: ["Black", "White", "Heather Grey", "Navy"],
        image: null,
    },
    {
        id: "jg001",
        name: "JG001 Relaxed Jogger",
        description: "Tapered jogger with an elastic waistband and ribbed cuffs. Matches the Essential Crewneck perfectly.",
        weight: "320 GSM",
        fit: "Relaxed Taper",
        price: "$48.00 CAD",
        colors: ["Black", "Heather Grey"],
        image: null,
    },
    {
        id: "tk001",
        name: "TK001 Boxy Tank Top",
        description: "Dropped armhole tank with a boxy, oversized silhouette. Heavyweight cotton for a premium drape.",
        weight: "220 GSM",
        fit: "Boxy",
        price: "$24.00 CAD",
        colors: ["Black", "White", "Cream"],
        image: null,
    },
    {
        id: "sh001",
        name: "SH001 Mesh Athletic Short",
        description: "Lightweight mesh short with an elastic waist and side pockets. Great for athleisure collections.",
        weight: "120 GSM",
        fit: "Relaxed",
        price: "$30.00 CAD",
        colors: ["Black", "Navy", "White"],
        image: null,
    },
]

// ── Stagger animation ────────────────────────────────────────────────────────
const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
}
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

function ResultsContent() {
    const searchParams = useSearchParams()
    const packId = searchParams.get("pack") || "streetwear"
    const pack = samplePacks[packId] || samplePacks.streetwear

    return (
        <div className="min-h-screen bg-neutral-50">

            {/* Hero / Recommended Pack */}
            <section className="pt-16 pb-16 bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium mb-4">
                            <Check className="w-3 h-3" />
                            Curated for you
                        </div>
                        <h1 className="text-3xl md:text-4xl font-medium text-neutral-900 font-figtree mb-3">
                            Your Recommended Sample Pack
                        </h1>
                        <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                            Based on your answers, we've put together the perfect starting point for your brand.
                        </p>
                    </motion.div>

                    {/* Pack Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                        className="max-w-3xl mx-auto rounded-3xl border-2 border-neutral-900 bg-white p-8 md:p-10 shadow-lg"
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-8">
                            {/* Pack image placeholder */}
                            <div className="w-full md:w-56 h-44 md:h-56 rounded-2xl bg-neutral-100 flex items-center justify-center flex-shrink-0">
                                <Package className="w-10 h-10 text-neutral-300" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#156d95] text-white text-xs font-medium">
                                        <Star className="w-3 h-3" />
                                        {pack.badge}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-medium text-neutral-900 mb-2">{pack.name}</h2>
                                <p className="text-sm text-neutral-500 leading-relaxed mb-6">{pack.description}</p>

                                <div className="space-y-3 mb-6">
                                    {pack.items.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 bg-neutral-50 rounded-xl p-3">
                                            <div className="w-10 h-10 rounded-lg bg-neutral-200 flex items-center justify-center flex-shrink-0">
                                                <ShoppingBag className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-medium text-neutral-900 block">{item.name}</span>
                                                <span className="text-xs text-neutral-500">{item.detail}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                    <div>
                                        <span className="text-2xl font-medium text-neutral-900">{pack.price}</span>
                                        <span className="text-xs text-neutral-500 ml-2">Free shipping</span>
                                    </div>
                                    <button className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[#156d95] text-white font-medium text-sm transition-all hover:bg-[#156d95]/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md">
                                        Get This Pack
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex items-center gap-4 py-4">
                    <div className="flex-1 h-px bg-neutral-200" />
                    <span className="text-sm font-medium text-neutral-400">or build your own selection</span>
                    <div className="flex-1 h-px bg-neutral-200" />
                </div>
            </div>

            {/* Individual Items Grid */}
            <section className="py-12 pb-24">
                <div className="mx-auto max-w-5xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-medium text-neutral-900 font-figtree mb-2">
                            Individual Samples
                        </h2>
                        <p className="text-neutral-500">
                            Prefer to pick and choose? Add individual pieces to create your own sample order.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                    >
                        {individualItems.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={fadeUp}
                                className="group flex flex-col rounded-2xl border border-neutral-200/80 bg-white hover:border-neutral-300 transition-all hover:shadow-md"
                            >
                                {/* Image placeholder */}
                                <div className="aspect-square w-full rounded-t-2xl bg-neutral-100 flex items-center justify-center overflow-hidden">
                                    <ShoppingBag className="w-8 h-8 text-neutral-300 group-hover:scale-110 transition-transform" />
                                </div>

                                <div className="p-4 flex flex-col flex-1">
                                    <h3 className="text-sm font-medium text-neutral-900 mb-1">{item.name}</h3>
                                    <p className="text-xs text-neutral-500 leading-relaxed mb-3 flex-1">{item.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-[11px] font-medium text-neutral-600">
                                            {item.weight}
                                        </span>
                                        <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-[11px] font-medium text-neutral-600">
                                            {item.fit} fit
                                        </span>
                                    </div>

                                    {/* Color swatches placeholder */}
                                    <div className="flex items-center gap-1 mb-4">
                                        {item.colors.map((color, i) => (
                                            <span
                                                key={i}
                                                title={color}
                                                className="w-4 h-4 rounded-full border border-neutral-200"
                                                style={{
                                                    backgroundColor:
                                                        color === "Black" ? "#171717" :
                                                        color === "White" ? "#fafafa" :
                                                        color === "Navy" ? "#1e3a5f" :
                                                        color === "Grey" || color === "Heather Grey" ? "#9ca3af" :
                                                        color === "Washed Grey" ? "#d1d5db" :
                                                        color === "Cream" ? "#fef3c7" :
                                                        color === "Forest Green" ? "#166534" :
                                                        "#e5e7eb"
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Price + Add */}
                                    <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                                        <span className="text-sm font-medium text-neutral-900">{item.price}</span>
                                        <button className="inline-flex items-center gap-1 h-8 px-3 rounded-full bg-[#156d95] text-white text-xs font-medium transition-all hover:bg-[#156d95]/90 hover:scale-[1.03] active:scale-[0.97]">
                                            <Plus className="w-3 h-3" />
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default function ResultsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-neutral-50">
                <div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin" />
            </div>
        }>
            <ResultsContent />
        </Suspense>
    )
}
