import { GlassmorphismNav } from "@/components/Navbar/glassmorphism-nav";
import { HeroSection } from "@/components/HeroSection/hero-section";
import { ProblemSolutionSection } from "@/components/Problem-Solution/problem-solution-section";
import Aurora from "@/components/Aurora";
import { FeaturesSection } from "@/components/FeaturesSection/features-section";
import { TestimonialsSection } from "@/components/Testimonial/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Work } from "@/components/Works/Work";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
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
          <HeroSection />
          <ProblemSolutionSection />
          <Work />
          <FeaturesSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
