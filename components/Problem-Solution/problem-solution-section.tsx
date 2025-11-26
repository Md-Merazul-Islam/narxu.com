import { Button } from "@/components/ui/button";

const AlertTriangle = () => (
  <svg
    className="h-6 w-6 text-red-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.186-.833-2.956 0L3.858 16.5c-.77.833.192 2.5 1.732 2.5z"
    />
  </svg>
);

const CheckCircle = () => (
  <svg
    className="h-5 w-5 text-green-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export async function ProblemSolutionSection() {
  // Server-side data - could be fetched from CMS
  const sectionData = {
    header: {
      badge: "The Digital Challenges Every Business Faces",
      title: "68% of Businesses Struggle with Digital Transformation",
      description:
        "While technology evolves rapidly, most businesses are left behind with outdated systems, poor online presence, and inefficient workflows.",
    },
    problems: [
      "Manual processes consuming 15+ hours weekly that could be automated",
      "Outdated websites driving away 47% of potential customers",
      "No 24/7 customer support losing leads after business hours",
      "Poor online visibility with competitors dominating search results",
      "No mobile app missing 60% of modern consumer interactions",
    ],
    solutions: [
      {
        title: "AI-Powered Automation",
        desc: "Chatbots, workflow automation, customer service AI",
      },
      {
        title: "Complete Web Development",
        desc: "Custom websites, e-commerce, startup platforms",
      },
      {
        title: "Digital Marketing Suite",
        desc: "SEO, lead generation, video content, social media",
      },
      {
        title: "Mobile & App Development",
        desc: "iOS/Android apps, progressive web apps",
      },
      {
        title: "24/7 Technical Support",
        desc: "Ongoing maintenance, updates, issue resolution",
      },
    ],
    stats: [
      { number: "8+", label: "Years Digital Experience" },
      { number: "300+", label: "Projects Delivered" },
      { number: "24/7", label: "Support Coverage" },
    ],
    serviceHighlights: [
      { title: "AI Solutions", desc: "Chatbots & Automation" },
      { title: "App Development", desc: "Mobile & Desktop" },
      { title: "Web Development", desc: "Custom Sites & Platforms" },
      { title: "Business Automation", desc: "Workflow Automation" },
      { title: "SEO Optimization", desc: "Improve Search Rankings" },
      { title: "Digital Marketing", desc: "Social Media & Ads" },
      { title: "Lead Generation", desc: "Grow Your Customer Base" },
      { title: "Video Editing", desc: "Engaging Content Creation" },
    ],
    cta: {
      title: "Transform Your Digital Presence Today",
      description:
        "Get a free digital audit and discover exactly how we can automate, optimize, and scale your business operations.",
      buttonText: "Get Free Digital Audit",
    },
  };

  return (
    <section className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
            {sectionData.header.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            <span className="text-red-400">68%</span> of Businesses Struggle
            with Digital Transformation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            {sectionData.header.description}
          </p>
        </div>

        {/* Main Problem/Solution Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 animate-fade-in-up delay-300">
          {/* Problem Card */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-red-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/20">
                  <AlertTriangle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-400">
                  Common Business Pain Points
                </h3>
              </div>

              {/* Key Stat */}
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 sm:p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">
                  €15,000+
                </div>
                <p className="text-white/80 text-sm sm:text-base">
                  Average annual revenue lost due to inefficient digital systems
                  and missed opportunities
                </p>
              </div>

              {/* Problem Points */}
              <div className="space-y-4">
                {sectionData.problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70 text-sm sm:text-base">
                      {problem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-green-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <CheckCircle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-400">
                  Our Complete Digital Solutions
                </h3>
              </div>

              {/* Key Stat */}
              <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 sm:p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                  360°
                </div>
                <p className="text-white/80 text-sm sm:text-base">
                  End-to-end digital transformation covering all your business
                  needs
                </p>
              </div>

              {/* Solution Points */}
              <div className="space-y-4">
                {sectionData.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle />
                    <div>
                      <p className="text-white/70 text-sm sm:text-base font-semibold">
                        {solution.title}
                      </p>
                      <p className="text-white/50 text-xs">{solution.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 animate-fade-in-up delay-600">
          {sectionData.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <p className="text-white/70 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-fade-in-up delay-800">
          {sectionData.serviceHighlights.map((service, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-lg font-bold text-white mb-1">
                {service.title}
              </div>
              <p className="text-white/60 text-xs">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 animate-fade-in-up delay-900">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-balance">
            {sectionData.cta.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            {sectionData.cta.description}
          </p>
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
          >
            {sectionData.cta.buttonText}
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
