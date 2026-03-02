"use client"

import { PackageOpen, Sparkles, Building2 } from "lucide-react"

export const ProcessSection = () => {
    return (
        <section className="w-full py-24 bg-neutral-900 border-t border-neutral-800">
            <div className="mx-auto max-w-7xl px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-medium text-white font-figtree mb-4">
                        From sample to scale in three steps
                    </h2>
                    <p className="text-lg text-neutral-400 font-figtree">
                        No complicated onboarding. No sales calls. Just order, test, and grow.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800" />

                    {[
                        {
                            step: "01",
                            icon: <PackageOpen className="w-8 h-8 text-neutral-300" />,
                            title: "Order Your Sample Pack",
                            description: "Pick your styles and sizes. We ship within 3 business days — you'll have fabric in hand by the end of the week."
                        },
                        {
                            step: "02",
                            icon: <Sparkles className="w-8 h-8 text-neutral-300" />,
                            title: "Test & Compare",
                            description: "Hold our blanks next to whatever you're sourcing now. Check the weight, the stitching, the drape. Wash them. We dare you."
                        },
                        {
                            step: "03",
                            icon: <Building2 className="w-8 h-8 text-neutral-300" />,
                            title: "Scale Your Order",
                            description: "Convinced? Your sample cost gets credited toward your first bulk order. Go from 50 units to 5,000 with the same quality."
                        }
                    ].map((item, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-neutral-800 border-4 border-neutral-900 flex items-center justify-center mb-8 relative shadow-xl">
                                {item.icon}
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold font-mono">
                                    {item.step}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                            <p className="text-neutral-400 leading-relaxed font-figtree max-w-[280px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
