"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ArrowRight, Package, ClipboardList } from "lucide-react"

const samplePacks = [
    {
        id: "streetwear",
        name: "Streetwear Pack",
        description: "Our best-selling heavyweight silhouettes in one box. Test the oversized fit, feel the 280 GSM weight, and wash-test them before your next drop.",
        items: [
            "1× SS001 Softhand Standard Tee",
            "1× SS002 HeavyMax Oversized Tee",
            "1× HD001 Midweight Boxy Hoodie"
        ],
        price: "$85.00 CAD"
    },
    {
        id: "essentials",
        name: "Essentials Pack",
        description: "The fastest way to evaluate our core range. Classic fits and versatile weights built for screen printing, DTG, and embroidery.",
        items: [
            "1× SS001 Softhand Standard Tee",
            "1× LS001 Classic Longsleeve",
            "1× CR001 Essential Crewneck"
        ],
        price: "$75.00 CAD"
    }
]

export const SampleToggleSection = () => {
    const [activeTab, setActiveTab] = useState("custom")

    return (
        <section className="w-full py-24 bg-white" id="samples">
            <div className="mx-auto max-w-5xl px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-4 font-figtree">
                        Feel the difference before you commit
                    </h2>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-figtree">
                        Grab a curated sample pack to test our fabrics hands-on, or build a custom order with the exact styles, colours, and sizes you need. No minimums.
                    </p>
                    <div className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-full bg-neutral-100 text-sm font-medium text-neutral-600">
                        <span className="mr-2">✨</span>
                        Get $50 off your first bulk order after ordering a sample
                    </div>
                </div>

                <Tabs defaultValue="custom" className="w-full flex-col items-center" onValueChange={setActiveTab}>
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-neutral-100/80 rounded-full h-14">
                            <TabsTrigger
                                value="custom"
                                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-neutral-900 text-neutral-500 font-medium transition-all"
                            >
                                <ClipboardList className="w-4 h-4 mr-2" />
                                Guided Selection
                            </TabsTrigger>
                            <TabsTrigger
                                value="pre-packaged"
                                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-neutral-900 text-neutral-500 font-medium transition-all"
                            >
                                <Package className="w-4 h-4 mr-2" />
                                Pre-Packaged
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="relative min-h-[500px] w-full">
                        <AnimatePresence mode="wait">
                            {activeTab === "custom" && (
                                <motion.div
                                    key="custom"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    <TabsContent value="custom" className="mt-0 outline-none w-full">
                                        <div className="rounded-3xl border border-neutral-200/60 bg-white p-8 md:p-12 shadow-sm text-center max-w-3xl mx-auto flex flex-col items-center">
                                            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-8">
                                                <ClipboardList className="w-8 h-8 text-neutral-600" />
                                            </div>
                                            <h3 className="text-3xl font-medium text-neutral-900 mb-4">Let us guide your selection</h3>
                                            <p className="text-neutral-500 text-lg leading-relaxed mb-10 max-w-xl">
                                                Not sure where to start? Fill out our quick inquiry form so we can understand your brand's needs. Our algorithm will then guide you to the perfect sample pack or curate a custom selection of pieces specifically for you.
                                            </p>

                                            <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 w-full mb-10 text-left border border-neutral-100">
                                                <h4 className="text-sm font-medium text-neutral-900 mb-4">How it works:</h4>
                                                <ol className="space-y-4 text-sm text-neutral-600">
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center font-medium text-xs">1</span>
                                                        <p>Tell us about your brand and what you're looking for.</p>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center font-medium text-xs">2</span>
                                                        <p>Our team reviews your inquiry and guides you to the right pieces.</p>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center font-medium text-xs">3</span>
                                                        <p>We build a custom invoice for your specific sample order.</p>
                                                    </li>
                                                </ol>
                                            </div>

                                            <button className="inline-flex justify-center items-center h-14 px-8 rounded-full bg-neutral-900 text-white font-medium text-base transition-transform hover:scale-[1.02] active:scale-[0.98] group">
                                                <span className="flex items-center gap-2">
                                                    Tell Us What You Need
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </span>
                                            </button>
                                        </div>
                                    </TabsContent>
                                </motion.div>
                            )}

                            {activeTab === "pre-packaged" && (
                                <motion.div
                                    key="pre-packaged"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    <TabsContent value="pre-packaged" className="mt-0 outline-none w-full">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {samplePacks.map((pack) => (
                                                <div key={pack.id} className="group flex flex-col rounded-3xl border border-neutral-200/60 bg-white p-8 hover:border-neutral-300 transition-colors shadow-sm hover:shadow-md">
                                                    <div className="aspect-[4/3] w-full rounded-xl bg-neutral-100 mb-8 flex items-center justify-center overflow-hidden">
                                                        {/* Placeholder image */}
                                                        <span className="text-neutral-400 font-mono text-sm">[Sample Pack Image]</span>
                                                    </div>

                                                    <h3 className="text-2xl font-medium text-neutral-900 mb-3">{pack.name}</h3>
                                                    <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">
                                                        {pack.description}
                                                    </p>

                                                    <div className="bg-neutral-50 rounded-xl p-5 mb-8">
                                                        <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-3">Includes:</h4>
                                                        <ul className="space-y-2">
                                                            {pack.items.map((item, i) => (
                                                                <li key={i} className="text-sm text-neutral-600 flex items-start">
                                                                    <span className="text-neutral-400 mr-2">-</span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                                                        <span className="text-lg font-medium text-neutral-900">{pack.price}</span>
                                                        <button className="flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                                                            Purchase
                                                            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}
