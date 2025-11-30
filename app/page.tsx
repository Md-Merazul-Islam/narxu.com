import { HeroSection } from "@/components/HeroSection/hero-section";
import { ProblemSolutionSection } from "@/components/Problem-Solution/problem-solution-section";
import { FeaturesSection } from "@/components/FeaturesSection/features-section";
import { TestimonialsSection } from "@/components/Testimonial/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Work } from "@/components/Works/Work";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <Work />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
