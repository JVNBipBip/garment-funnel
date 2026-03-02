"use client"

import { Shirt, Scissors } from "lucide-react"

export const BlanksVsCustomSection = () => {
    return (
        <section className="w-full py-24 bg-white">
            <div className="mx-auto max-w-6xl px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-figtree mb-4">
                        Blanks or Custom? Start Anywhere. Grow Into Everything.
                    </h2>
                    <p className="text-lg text-neutral-500 font-figtree max-w-2xl mx-auto">
                        Whether you're testing your first graphic tee or developing a fully custom silhouette, we're the only partner you need.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative items-stretch">

                    <div className="hidden md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:flex flex-col items-center justify-center z-10">
                        <div className="h-24 w-px bg-neutral-200" />
                        <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-400">
                            OR
                        </div>
                        <div className="h-24 w-px bg-neutral-200" />
                    </div>

                    {/* Blanks Path */}
                    <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-8 shadow-sm">
                            <Shirt className="w-8 h-8 text-neutral-700" />
                        </div>

                        <h3 className="text-2xl font-semibold text-neutral-900 mb-4">The Blanks Path</h3>
                        <div className="inline-flex max-w-fit items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-8">
                            Best for: First-time brands, merch drops, testing the market
                        </div>

                        <div className="space-y-6 flex-grow mb-10">
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">How it works</h4>
                                <p className="text-neutral-700 font-figtree">
                                    Choose from our premium blank styles → Add your branding (labels, tags, prints) → Ship to your door.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Starting at</h4>
                                <p className="text-neutral-900 font-medium font-figtree text-xl">
                                    $11.00/unit <span className="text-sm text-neutral-500 font-normal">with no minimums to sample</span>
                                </p>
                            </div>
                        </div>

                        <button className="w-full h-14 rounded-xl bg-white border-2 border-neutral-200 text-neutral-900 font-medium transition-colors hover:border-neutral-900">
                            Shop Blanks
                        </button>
                    </div>

                    {/* Custom Path */}
                    <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-8">
                            <Scissors className="w-8 h-8 text-emerald-400" />
                        </div>

                        <h3 className="text-2xl font-semibold text-white mb-4">The Custom Path</h3>
                        <div className="inline-flex max-w-fit items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium mb-8">
                            Best for: Brands ready for unique fits, fabrics, and full design control
                        </div>

                        <div className="space-y-6 flex-grow mb-10">
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">How it works</h4>
                                <p className="text-neutral-300 font-figtree">
                                    Use our digital design platform → We produce custom pattern samples in 3 days → Approve and scale.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Starting at</h4>
                                <p className="text-white font-medium font-figtree text-xl">
                                    Variable <span className="text-sm text-neutral-400 font-normal">with startup-friendly MOQs</span>
                                </p>
                            </div>
                        </div>

                        <button className="w-full h-14 rounded-xl bg-emerald-500 text-white font-medium transition-colors hover:bg-emerald-600">
                            Design Custom
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
