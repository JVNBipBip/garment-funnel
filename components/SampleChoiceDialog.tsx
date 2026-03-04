"use client"

import { useState } from "react"
import { ClipboardList, Package, ArrowRight } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { GuidedSelectionQuiz } from "./GuidedSelectionQuiz"

interface SampleChoiceDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function SampleChoiceDialog({ open, onOpenChange }: SampleChoiceDialogProps) {
    const [quizOpen, setQuizOpen] = useState(false)

    function handleCurated() {
        onOpenChange(false)
        // Small delay so the first dialog closes before the quiz opens
        setTimeout(() => setQuizOpen(true), 150)
    }

    function handlePrePackaged() {
        onOpenChange(false)
        // Scroll to samples section and activate the pre-packaged tab
        setTimeout(() => {
            const section = document.getElementById("samples")
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
            }
            // Click the pre-packaged tab trigger
            const prePackagedTab = document.querySelector<HTMLButtonElement>('[value="pre-packaged"]')
            if (prePackagedTab) {
                prePackagedTab.click()
            }
        }, 150)
    }

    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent
                    showCloseButton
                    className="sm:max-w-md p-6 gap-0 rounded-2xl border-neutral-200/60"
                >
                    <DialogTitle className="text-xl font-medium text-neutral-900 font-figtree mb-1">
                        How would you like to order?
                    </DialogTitle>
                    <p className="text-sm text-neutral-500 mb-6">
                        Choose the option that works best for your brand.
                    </p>

                    <div className="space-y-3">
                        {/* Curated option */}
                        <button
                            onClick={handleCurated}
                            className="w-full text-left p-5 rounded-xl border-2 border-neutral-200 hover:border-[#156d95] bg-white hover:bg-blue-50/30 transition-all duration-200 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full bg-[#156d95]/10 flex items-center justify-center flex-shrink-0">
                                    <ClipboardList className="w-5 h-5 text-[#156d95]" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm font-semibold text-neutral-900 block mb-1">
                                        Curated Sample Form
                                    </span>
                                    <span className="text-xs text-neutral-500 block leading-relaxed">
                                        Answer a few quick questions and we'll recommend the perfect samples for your brand.
                                    </span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#156d95] mt-1 transition-colors flex-shrink-0" />
                            </div>
                        </button>

                        {/* Pre-packaged option */}
                        <button
                            onClick={handlePrePackaged}
                            className="w-full text-left p-5 rounded-xl border-2 border-neutral-200 hover:border-[#156d95] bg-white hover:bg-blue-50/30 transition-all duration-200 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full bg-[#156d95]/10 flex items-center justify-center flex-shrink-0">
                                    <Package className="w-5 h-5 text-[#156d95]" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm font-semibold text-neutral-900 block mb-1">
                                        Pre-Packaged Sample Packs
                                    </span>
                                    <span className="text-xs text-neutral-500 block leading-relaxed">
                                        Browse our ready-made sample packs — curated bundles you can order right away.
                                    </span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#156d95] mt-1 transition-colors flex-shrink-0" />
                            </div>
                        </button>
                    </div>
                </DialogContent>
            </Dialog>

            <GuidedSelectionQuiz open={quizOpen} onOpenChange={setQuizOpen} />
        </>
    )
}
