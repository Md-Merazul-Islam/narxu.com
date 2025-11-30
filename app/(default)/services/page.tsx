import type { Metadata } from "next"
import { ServiceHero } from "@/components/services/service-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { CTASection } from "@/components/services/cta-section"
import servicesData from "@/assets/services.json"

export const metadata: Metadata = {
  title: "Our Services | Narxu - AI-Powered Business Solutions",
  description:
    "Explore our comprehensive range of AI solutions, web development, app development, and digital marketing services designed to transform your business.",
  keywords: [
    "AI chatbot",
    "AI integration",
    "website development",
    "app development",
    "SEO optimization",
    "digital marketing",
    "lead generation",
    "24/7 support",
  ],
  openGraph: {
    title: "Our Services | Narxu",
    description: "AI-powered business solutions for modern enterprises",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        title="Our Services"
        description="Comprehensive AI-powered solutions designed to transform your business. From intelligent chatbots to full-stack development, we deliver results that matter."
      />
      <ServicesGrid services={servicesData.services} />
      <CTASection />
    </>
  )
}
