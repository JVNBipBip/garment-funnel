"use client"

import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Ruler } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type SizeChartDialogProps = {
  items: string[]
  triggerClassName?: string
}

export function SizeChartDialog({ items, triggerClassName }: SizeChartDialogProps) {
  const [chart, setChart] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const fetchChart = async () => {
    if (chart) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/size-chart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to generate")
      setChart(data.chart)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (next && !chart && !loading) fetchChart()
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors font-figtree",
          triggerClassName
        )}
      >
        <Ruler className="w-4 h-4" />
        Size Chart
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-figtree">Size Chart</DialogTitle>
        </DialogHeader>
        <div className="mt-2 font-figtree">
          {loading && (
            <div className="flex items-center gap-2 text-neutral-500 py-8">
              <div className="w-4 h-4 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin" />
              <span>Generating your size chart…</span>
            </div>
          )}
          {error && (
            <p className="text-red-600 text-sm py-4">
              {error}. Make sure OPENAI_API_KEY is set in your environment.
            </p>
          )}
          {chart && !loading && (
            <div className="[&_table]:w-full [&_table]:text-sm [&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2 [&_table]:border-collapse [&_th]:border [&_td]:border [&_th]:border-neutral-200 [&_td]:border-neutral-200 [&_th]:bg-neutral-50 [&_th]:font-semibold [&_th]:text-left [&_p]:mb-2 [&_p]:text-neutral-600 [&_p]:text-sm">
              <ReactMarkdown>{chart}</ReactMarkdown>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
