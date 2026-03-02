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
                            A Partner You Can Trust. <br /> Not Just a Factory.
                        </h2>
                        <p className="text-lg text-neutral-600 leading-relaxed font-figtree mb-10">
                            Stop guessing if your overseas supplier will actually deliver what you paid for. We operate a verifiable, direct manufacturing facility based in North America. Visit us, chat with our team, and see exactly how your garments are made.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Quality Assured</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    Rigorous QC protocols ensure sizing and fabric consistency across all batches.
                                </p>
                            </div>
                            <div>
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Global Shipping</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    Serving brands actively in CA, US, UK, AU, and NZ with reliable logistics.
                                </p>
                            </div>
                            <div>
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                                    <MapPin className="w-5 h-5 text-orange-600" />
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Physical HQ</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    424E-350 rue de Louvain Ouest, Montreal, Quebec, Canada. H2N 2E8.
                                </p>
                            </div>
                            <div>
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <Leaf className="w-5 h-5 text-green-600" />
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Responsibly Made</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    Ethically sourced and produced with the highest environmental standards.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
