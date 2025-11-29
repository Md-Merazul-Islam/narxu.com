import type { Metadata } from "next"
import { ROICalculator } from "@/components/roi/roi-calculator"


export const metadata: Metadata = {
  title: "ROI Calculator | Cliste - Calculate Your AI Automation Savings",
  description:
    "Calculate your potential return on investment with Cliste AI automation. See how much you can save on customer support, sales, and operations.",
  keywords: ["ROI calculator", "AI savings", "automation ROI", "cost savings", "Cliste"],
  openGraph: {
    title: "ROI Calculator | Cliste",
    description: "Calculate your AI automation savings with Cliste.",
    type: "website",
  },
}

export default function ROICalculatorPage() {
  return (
    <>
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              ROI Calculator
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Calculate Your
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI Savings
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              See how much you could save by automating your customer interactions with Cliste AI.
            </p>
          </div>

          <ROICalculator />
        </div>
      </div>
    </>
  )
}
