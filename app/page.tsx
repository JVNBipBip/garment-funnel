import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { GarmentHero } from "@/components/GarmentHero"
import { TrustBar } from "@/components/TrustBar"
import { SampleToggleSection } from "@/components/SampleToggleSection"
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection"
import { SocialProofSection } from "@/components/SocialProofSection"
import { ComparisonSection } from "@/components/ComparisonSection"
import { ProcessSection } from "@/components/ProcessSection"
import { BulkPricingSection } from "@/components/BulkPricingSection"
import { BlanksVsCustomSection } from "@/components/BlanksVsCustomSection"
import { TrustCredentialsSection } from "@/components/TrustCredentialsSection"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <>
      <PortfolioNavbar />
      <GarmentHero />
      <TrustBar />
      <SampleToggleSection />
      <ProblemSolutionSection />
      <SocialProofSection />
      <ComparisonSection />
      <ProcessSection />
      <BulkPricingSection />
      <BlanksVsCustomSection />
      <TrustCredentialsSection />
      <FAQSection />
      <Footer />
    </>
  )
}
