"use client"

import { Check, X } from "lucide-react"

export const ComparisonSection = () => {
    return (
        <section className="w-full py-24 bg-white border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-figtree mb-4">
                        Not All Blanks Are Created Equal
                    </h2>
                    <p className="text-lg text-neutral-500 font-figtree">
                        See why brands switch to Garment System and never look back.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-neutral-200/60 shadow-sm bg-white">
                    <div className="grid grid-cols-12 border-b border-neutral-200/60 bg-neutral-50/50">
                        <div className="col-span-4 p-6 flex flex-col justify-end">
                            <h3 className="font-semibold text-neutral-900">Features</h3>
                        </div>
                        <div className="col-span-4 p-6 text-center border-l border-neutral-200/60 flex flex-col justify-end">
                            <h3 className="font-semibold text-neutral-500">Generic Blanks</h3>
                            <p className="text-xs text-neutral-400 mt-1">(Gildan, etc.)</p>
                        </div>
                        <div className="col-span-4 p-6 text-center border-l border-neutral-200/60 bg-neutral-900 text-white flex flex-col justify-end relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                            <h3 className="font-semibold text-white">Garment System Premium</h3>
                        </div>
                    </div>

                    {[
                        {
                            feature: "Fabric Weight",
                            generic: "150–180 GSM",
                            premium: "220–300 GSM"
                        },
                        {
                            feature: "Fabric Feel",
                            generic: "Thin, rough",
                            premium: "Thick, soft, substantial"
                        },
                        {
                            feature: "Shrinkage",
                            generic: "5–8% after wash",
                            premium: "<2% pre-shrunk"
                        },
                        {
                            feature: "Print Quality",
                            generic: "Bleeds, fades",
                            premium: "Crisp, vibrant, lasting"
                        },
                        {
                            feature: "Sizing Consistency",
                            generic: "Varies between batches",
                            premium: "Consistent every order"
                        },
                        {
                            feature: "Brand Perception",
                            generic: '"Looks like merch"',
                            premium: '"Looks like an $80 retail tee"'
                        }
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-12 border-b border-neutral-100 last:border-0 hover:bg-neutral-50/50 transition-colors">
                            <div className="col-span-4 p-5 md:p-6 text-sm font-medium text-neutral-900 flex items-center">
                                {row.feature}
                            </div>
                            <div className="col-span-4 p-5 md:p-6 text-sm text-neutral-500 text-center border-l border-neutral-100 flex items-center justify-center">
                                <span className="flex items-center gap-2">
                                    <X className="w-4 h-4 text-red-400 flex-shrink-0 hidden md:block" /> {row.generic}
                                </span>
                            </div>
                            <div className="col-span-4 p-5 md:p-6 text-sm font-medium text-emerald-700 bg-emerald-50/30 text-center border-l border-neutral-100 flex items-center justify-center">
                                <span className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 hidden md:block" /> {row.premium}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
