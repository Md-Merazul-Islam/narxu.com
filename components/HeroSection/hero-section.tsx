import { Button } from "@/components/ui/button";
import RotatingText from "./RotatingText";
import StatsRow from "./StatsRow";

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Play = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
);

const services = [
  "AI Chatbots",
  "AI Model Building",
  "AI Integration",
  "Website Design",
  "Web Development",
  "Startup Platforms",
  "SEO Optimization",
  "App Development",
  "Lead Generation",
  "Video Editing",
  "Digital Marketing",
  "24/7 Support",
];

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          Your Complete Digital Solutions Partner
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-heading">
          <span className="text-white">Build & Scale</span>
          <br />
          <span className="inline-flex items-center gap-2 mt-4 sm:mt-6 md:mt-8">
            <span className="text-white">Your</span>
            <RotatingText
              texts={["Business", "Vision", "Success", "Growth"]}
              mainClassName="px-3 bg-white text-[#8b09db] py-2 rounded-lg shadow-lg"
              rotationInterval={2000}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 lg:max-w-4x max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed animate-fade-in-subheading">
          From AI chatbots to complete digital ecosystems - we design, develop, and maintain your entire digital infrastructure with 24/7 support and measurable results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-buttons">
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-8 py-6 text-lg hover:bg-gray-100 hover:scale-105 cursor-pointer transition-all"
          >
            Get Free Consultation
            <ArrowRight />
          </Button>

          <Button
            size="lg"
            className=" bg-transparent text-white border-2 border-[#8b09db] rounded-full px-8 py-6 text-lg hover:bg-[#8b09db] hover:text-white hover:scale-105 cursor-pointer transition-all"
          >
            <Play />
            View Case Studies
          </Button>
        </div>

        {/* Trust Indicators - Desktop */}
        <div className="text-center px-4 hidden sm:block overflow-hidden mb-12 animate-fade-in-trust">
          <p className="text-sm text-gray-400 mb-6">
            Trusted by innovative teams worldwide USA, UK, Canada, Australia,
            Germany, France ......
          </p>
          <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
            <div className="flex items-center gap-8 opacity-70 animate-slide-left">
              <div className="flex items-center gap-8 whitespace-nowrap">
                {services.map((service, idx) => (
                  <div key={idx} className="text-lg font-semibold text-gray-300">
                    {service}
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-8 whitespace-nowrap">
                {services.map((service, idx) => (
                  <div key={idx} className="text-lg font-semibold text-gray-300">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-8 sm:hidden overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-gray-400 mb-6">
            Trusted by innovative teams worldwide
          </p>
          <div className="relative overflow-hidden w-full max-w-sm mx-auto">
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <div className="flex items-center gap-6 opacity-60 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap">
                {services.map((service, idx) => (
                  <div key={idx} className="text-sm font-medium text-gray-300">
                    {service}
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-6 whitespace-nowrap">
                {services.map((service, idx) => (
                  <div key={idx} className="text-sm font-medium text-gray-300">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
     {/* <StatsRow /> */}
      </div>
    </section>
  );
}
