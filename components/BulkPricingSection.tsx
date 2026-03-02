"use client"

import { Info } from "lucide-react"

const pricingTiers = [
    {
        name: "Starter",
        volume: "100–249 units",
        priceTee: "$14.50",
        priceHoodie: "$32.00",
        popular: false
    },
    {
        name: "Growth",
        volume: "250–499 units",
        priceTee: "$12.75",
        priceHoodie: "$28.50",
        popular: true
    },
    {
        name: "Scale",
        volume: "500–999 units",
        priceTee: "$11.00",
        priceHoodie: "$25.00",
        popular: false
    },
    {
        name: "Enterprise",
        volume: "1,000+ units",
        priceTee: "Custom Quote",
        priceHoodie: "Custom Quote",
        popular: false
    }
]

export const BulkPricingSection = () => {
    return (
        <section className="w-full py-24 bg-neutral-50 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-figtree mb-4">
                        Transparent Pricing. No Surprises.
                    </h2>
                    <p className="text-lg text-neutral-500 font-figtree">
                        See your costs upfront. No hidden fees or gatekeeping.
                    </p>
                </div>

                <div className="bg-white rounded-3xl border border-neutral-200/60 shadow-sm overflow-hidden mb-12">
                    {/* Table Header */}
                    <div className="grid grid-cols-4 bg-neutral-50/50 border-b border-neutral-200/60">
                        <div className="col-span-1 p-6 flex flex-col justify-end">
                            <h3 className="font-semibold text-neutral-900">Volume Tier</h3>
                        </div>
                        <div className="col-span-1 p-6 text-center border-l border-neutral-200/60 flex flex-col justify-end">
                            <h3 className="font-semibold text-neutral-500">Units</h3>
                        </div>
                        <div className="col-span-1 p-6 text-center border-l border-neutral-200/60 flex flex-col justify-end">
                            <h3 className="font-semibold text-neutral-900">Price Per Unit (Tees)</h3>
                            <p className="text-xs text-neutral-400 mt-1">280 GSM</p>
                        </div>
                        <div className="col-span-1 p-6 text-center border-l border-neutral-200/60 flex flex-col justify-end">
                            <h3 className="font-semibold text-neutral-900">Price Per Unit (Hoodies)</h3>
                            <p className="text-xs text-neutral-400 mt-1">450 GSM</p>
                        </div>
                    </div>

                    {/* Table Rows */}
                    {pricingTiers.map((tier, i) => (
                        <div key={i} className={`grid grid-cols-4 border-b border-neutral-100 last:border-0 ${tier.popular ? "bg-emerald-50/30" : "hover:bg-neutral-50/50"} transition-colors relative`}>

                            <div className={`col-span-1 p-5 md:p-6 text-sm font-medium flex items-center ${tier.popular ? "text-emerald-700" : "text-neutral-900"}`}>
                                {tier.popular && (
                                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-r-full" />
                                )}
                                <div className="flex flex-col">
                                    {tier.name}
                                    {tier.popular && <span className="text-xs text-emerald-500/80 mt-1 md:hidden">Most Popular</span>}
                                </div>
                            </div>
                            <div className="col-span-1 p-5 md:p-6 text-sm text-neutral-500 text-center border-l border-neutral-100 flex items-center justify-center">
                                {tier.volume}
                            </div>
                            <div className="col-span-1 p-5 md:p-6 text-sm font-medium text-neutral-900 text-center border-l border-neutral-100 flex items-center justify-center">
                                {tier.priceTee}
                            </div>
                            <div className="col-span-1 p-5 md:p-6 text-sm font-medium text-neutral-900 text-center border-l border-neutral-100 flex items-center justify-center">
                                {tier.priceHoodie}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3 bg-blue-50/50 text-blue-800 text-sm p-4 rounded-xl mb-12 border border-blue-100">
                    <Info className="w-5 h-5 text-blue-400" />
                    <p className="font-figtree">
                        <span className="font-semibold">Custom cut-and-sew?</span> Pricing depends on complexity. Order a sample pack and we'll quote your exact design.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="w-full sm:w-auto inline-flex justify-center items-center h-14 px-8 rounded-full bg-neutral-900 text-white font-medium text-base transition-transform hover:scale-[1.02] active:scale-[0.98]">
                        Get an Exact Quote
                    </button>
                    <button className="w-full sm:w-auto inline-flex justify-center items-center h-14 px-8 rounded-full bg-white border border-neutral-200 text-neutral-900 font-medium text-base transition-colors hover:bg-neutral-50">
                        Start with Samples
                    </button>
                </div>

            </div>
        </section>
    )
}
