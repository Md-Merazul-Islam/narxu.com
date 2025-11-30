import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { ServicesGrid } from "@/components/about/services-grid";
import { CompanyStats } from "@/components/about/company-stats";
import { TeamSection } from "@/components/about/team-section";
import { SuccessStories } from "@/components/about/success-stories";
import { DailyActivities } from "@/components/about/daily-activities";
import { WorkEnvironment } from "@/components/about/work-environment";
import { CulturalPrograms } from "@/components/about/cultural-programs";

export const metadata: Metadata = {
  title: "About Narxu - AI-Powered Business Solutions",
  description: "Learn about Narxu and our comprehensive AI-powered services",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStats />
      <SuccessStories />
      <ServicesGrid />
      <DailyActivities />
      <WorkEnvironment />
      <CulturalPrograms />
      <TeamSection />
    </>
  );
}
