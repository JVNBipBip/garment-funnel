"use client"

import { XCircle, CheckCircle2 } from "lucide-react"

const problems = [
    "Blanks that shrink after one wash",
    "500-unit minimums just to test the market",
    "Suppliers who ghost after you pay",
    "Cheap fabric that kills your brand's reputation",
    "Months-long wait times from overseas factories"
]

const solutions = [
    "Pre-shrunk, heavyweight fabrics (220–300 GSM)",
    "No minimums. Start with a $29 sample pack",
    "Real team in Montreal. 24-hour response guarantee",
    "Premium quality that commands premium prices",
    "3-day samples. 2–3 week production. NA shipping"
]

export const ProblemSolutionSection = () => {
    return (
        <section className="w-full py-24 bg-neutral-50/50">
            <div className="mx-auto max-w-7xl px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 font-figtree mb-4">
                        Sound Familiar?
                    </h2>
                    <p className="text-lg text-neutral-500 font-figtree max-w-2xl mx-auto">
                        We built Garment System because we were tired of the industry standard. This is how we fix it.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Problems Column */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-red-100">
                        <h3 className="text-xl font-semibold text-red-900 mb-8 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                <XCircle className="w-5 h-5 text-red-600" />
                            </div>
                            The Old Way
                        </h3>
                        <ul className="space-y-6">
                            {problems.map((problem, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="flex-shrink-0 mt-1">
                                        <XCircle className="w-5 h-5 text-red-300" />
                                    </span>
                                    <p className="text-neutral-600 text-base font-figtree">{problem}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Column */}
                    <div className="bg-neutral-900 rounded-3xl p-8 md:p-10 shadow-md">
                        <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            </div>
                            The Garment System Way
                        </h3>
                        <ul className="space-y-6">
                            {solutions.map((solution, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    </span>
                                    <p className="text-neutral-300 text-base font-figtree">{solution}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
