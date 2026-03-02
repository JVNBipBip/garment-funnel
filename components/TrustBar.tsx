"use client"

import { Factory, Package, Zap, DollarSign, Globe2 } from "lucide-react"

const valueProps = [
    {
        icon: <Factory className="w-5 h-5 text-neutral-700" />,
        text: "Montreal-Based Manufacturing"
    },
    {
        icon: <Package className="w-5 h-5 text-neutral-700" />,
        text: "No Minimum Orders"
    },
    {
        icon: <Zap className="w-5 h-5 text-neutral-700" />,
        text: "3-Day Sample Turnaround"
    },
    {
        icon: <DollarSign className="w-5 h-5 text-neutral-700" />,
        text: "Sample Cost Credited to Bulk"
    },
    {
        icon: <Globe2 className="w-5 h-5 text-neutral-700" />,
        text: "Ships to CA, US, UK, AU, NZ"
    }
]

export const TrustBar = () => {
    return (
        <div className="w-full bg-neutral-100/50 border-y border-neutral-200/60 py-6">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-8">
                    {valueProps.map((prop, index) => (
                        <div key={index} className="flex items-center justify-center lg:justify-start gap-3 text-center lg:text-left">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200/50">
                                {prop.icon}
                            </div>
                            <span className="text-sm font-medium text-neutral-700 max-w-[140px] leading-tight font-figtree">
                                {prop.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
