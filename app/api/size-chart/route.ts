import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    const { items } = (await req.json()) as { items: string[] }

    if (!items?.length) {
      return Response.json(
        { error: "Items are required" },
        { status: 400 }
      )
    }

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      system: `You are a garment sizing expert for a premium blank apparel supplier. Generate accurate, professional size charts for wholesale blanks.

Output ONLY valid markdown. Use a table format like:
| Size | Chest (in) | Length (in) | Shoulder (in) | Sleeve (in) |
|------|------------|-------------|---------------|--------------|
| S    | 36         | 28          | 17            | 8            |
| M    | 40         | 29          | 18            | 8.5          |
| L    | 44         | 30          | 19            | 9            |
| XL   | 48         | 31          | 20            | 9.5          |
| XXL  | 52         | 32          | 21            | 10           |

For hoodies/sweatshirts, include Hood Height if relevant. For hats, use Head Circumference. For bags, skip or use N/A.
Use realistic measurements for premium heavyweight blanks (slightly roomier than fast fashion).
Keep it concise. One table per garment type if multiple. Add a brief "How to measure" note at the end if space allows.`,
      prompt: `Generate a size chart for these garments: ${items.join(", ")}. Create a clear markdown table with measurements in inches.`,
    })

    return Response.json({ chart: text })
  } catch (err) {
    console.error("Size chart generation error:", err)
    return Response.json(
      { error: "Failed to generate size chart" },
      { status: 500 }
    )
  }
}
