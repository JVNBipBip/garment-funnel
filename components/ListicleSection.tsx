"use client"

export const ListicleSection = () => {
    const listicleItems = [
        {
            title: "Stop killing your brand with cheap 150 GSM blanks",
            description: "You're charging $45 for a print on a shirt that feels like it cost $3. Your customers aren't stupid—they notice. We mill 280 GSM heavyweight cotton that feels like luxury, making your price tag look like a steal."
        },
        {
            title: "Never lose a sale to 'Out of Stock' again",
            description: "While your competitors are begging overseas factories to answer WhatsApp messages, you'll be restocking your best-sellers in 3 days. We hold the inventory risk so you can scale recklessly."
        },
        {
            title: "Test viral ideas with zero financial risk",
            description: "No more praying you can sell 500 units just to hit minimums. Order 5 units for a photoshoot, blow it up on TikTok, and scale to 5,000 when the demand is actually there."
        },
        {
            title: "Take all the credit. We don't mind.",
            description: "Your customers will think you built a multi-million dollar supply chain. With our tear-away tags, you slap your brand on our meticulous engineering and own the margins."
        },
        {
            title: "The 'perfect fit' guarantee that kills return rates",
            description: "Gildan shrinks wildly. Our proprietary pre-washed, pre-shrunk process locks in the drape on day one. When the fit stays perfect forever, your first-time buyers become lifelong addicts."
        }
    ]

    return (
        <section className="w-full py-24 bg-white border-t border-neutral-200">
            <div className="mx-auto max-w-4xl px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 font-figtree mb-6 tracking-tight">
                        The unfair advantage the 1% use to crush you
                    </h2>
                    <p className="text-xl text-neutral-500 font-figtree max-w-2xl mx-auto">
                        We didn't just build a blank manufacturer. We built a cheat code for serious streetwear founders tired of playing amateur games.
                    </p>
                </div>

                <div className="space-y-6">
                    {listicleItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 transition-colors"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20">
                                    <span className="font-bold text-xl">{index + 1}</span>
                                </div>
                            </div>
                            <div className="pt-1">
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight font-figtree">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-500 leading-relaxed font-figtree text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
