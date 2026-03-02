"use client"

import { MapPin, ShieldCheck, Leaf, Globe } from "lucide-react"

export const TrustCredentialsSection = () => {
    return (
        <section className="w-full py-24 bg-neutral-50 border-t border-neutral-200/60 overflow-hidden">
            <div className="mx-auto max-w-7xl px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-neutral-200 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                        <div className="aspect-[4/3] rounded-3xl bg-neutral-100 overflow-hidden shadow-sm flex items-center justify-center">
                            {/* Image Placeholder */}
                            <div className="text-neutral-400 font-mono text-sm text-center">
                                [Image of Garment System Montreal Facility / Production Floor]
                            </div>
                        </div>
                        {/* Overlay Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 max-w-[240px]">
                            <p className="text-sm font-semibold text-neutral-900 mb-1">Made in Montreal</p>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                Every batch is weight-tested, wash-tested, and size-checked stringently before it leaves our facility.
                            </p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-figtree mb-6">
                            We're not a middleman. <br /> We're your manufacturing partner.
                        </h2>
                        <p className="text-lg text-neutral-600 leading-relaxed font-figtree mb-10">
                            Every garment is made in our own facility in Montreal, Canada. No anonymous factories. No supply chain mystery. You can visit us, meet our team, and watch your order come to life on the production floor.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Batch-Level QC</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    Every batch is weight-tested, wash-tested, and size-checked before it ships. Consistency you can count on.
                                </p>
                            </div>
                            <div>
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Ships Worldwide</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    Active in CA, US, UK, AU, and NZ with reliable logistics and full tracking on every order.
                                </p>
                            </div>
                            <div>
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                                    <MapPin className="w-5 h-5 text-orange-600" />
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Come Visit Us</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    424E-350 rue de Louvain Ouest, Montreal, QC, Canada H2N 2E8. Our door is open.
                                </p>
                            </div>
                            <div>
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <Leaf className="w-5 h-5 text-green-600" />
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Ethically Produced</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    Responsibly sourced materials and fair labour practices — because your brand's reputation depends on it.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
