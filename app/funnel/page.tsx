import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { QuizFunnel } from "@/components/funnel/QuizFunnel"

export const metadata = {
  title: "Find Your Perfect Blanks | Garment System",
  description: "Take our 60-second quiz to get personalized recommendations and an exclusive bundle offer.",
}

export default function FunnelPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <PortfolioNavbar />
      <main className="flex-grow pt-24 pb-16">
        <QuizFunnel />
      </main>
      <Footer />
    </div>
  )
}
