import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServiceDetailHero } from "@/components/services/service-detail-hero"
import { FeaturesGrid } from "@/components/services/features-grid"
import { DetailSection } from "@/components/services/detail-section"
import { PricingSection } from "@/components/services/pricing-section"
import { CTASection } from "@/components/services/cta-section"
import servicesData from "@/assets/services.json"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.services.find((s) => s.id === slug)

  if (!service) {
    return {
      title: "Service Not Found | Narxu",
    }
  }

  return {
    title: `${service.title} | Narxu - AI-Powered Business Solutions`,
    description: service.heroDescription,
    keywords: [service.title, service.category, "Narxu", "AI solutions", "Bangladesh"],
    openGraph: {
      title: `${service.title} | Narxu`,
      description: service.heroDescription,
      type: "website",
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = servicesData.services.find((s) => s.id === slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <ServiceDetailHero
        title={service.title}
        heroDescription={service.heroDescription}
        category={service.category}
        icon={service.icon}
        color={service.color}
        stats={service.stats}
      />

      <FeaturesGrid features={service.features} color={service.color} />

      {service.sections.map((section, index) => (
        <DetailSection
          key={index}
          badge={section.badge}
          title={section.title}
          highlight={section.highlight}
          description={section.description}
          bullets={section.bullets}
          image={section.image}
          reversed={index % 2 !== 0}
        />
      ))}

      <PricingSection pricing={service.pricing} serviceTitle={service.title} />

      <CTASection />
    </>
  )
}
