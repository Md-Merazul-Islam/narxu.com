import type { Metadata } from "next";
import Aurora from "@/components/Aurora";

import { Footer } from "@/components/footer/footer";
import { AboutHero } from "@/components/about/about-hero";
import { ServicesGrid } from "@/components/about/services-grid";
import { CompanyStats } from "@/components/about/company-stats";
import { TeamSection } from "@/components/about/team-section";
import { SuccessStories } from "@/components/about/success-stories";
import { DailyActivities } from "@/components/about/daily-activities";
import { WorkEnvironment } from "@/components/about/work-environment";
import { CulturalPrograms } from "@/components/about/cultural-programs";
import { GlassmorphismNav } from "@/components/Navbar/glassmorphism-nav";

export const metadata: Metadata = {
  title: "About Cliste - AI-Powered Business Solutions",
  description:
    "Learn about Cliste and our comprehensive AI-powered services including chatbots, web development, app development, SEO, and 24/7 support.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {/* Aurora Background */}
        <div className="fixed inset-0 w-full h-full">
          <Aurora
            colorStops={["#180a45", "#5e1b96", "#180a45"]}
            amplitude={1.2}
            blend={0.9}
            speed={0.4}
          />
        </div>

        <div className="relative z-10">
          <GlassmorphismNav />
          <AboutHero />
          <CompanyStats />
          <SuccessStories />
          <ServicesGrid />
          <DailyActivities />
          <WorkEnvironment />
          <CulturalPrograms />
          <TeamSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
