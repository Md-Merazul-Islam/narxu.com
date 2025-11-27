import { TestimonialsColumn } from "@/components/ui/testimonials-column";

const testimonials = [
  {
    text: "We went from missing 70% of after-hours web inquiries to capturing every single lead. Project consultations increased 65% in the first month with Narxu's AI handling initial qualification.",
    name: "Sarah Chen",
    role: "Digital Agency Owner",
    service: "AI Chatbots & Web Development",
  },
  {
    text: "Our website traffic grew by 140% in 6 months with Narxu's SEO optimization. The AI chatbot handles 80% of our customer inquiries, freeing up our team for complex projects.",
    name: "Mike Rodriguez",
    role: "Tech Startup Founder",
    service: "SEO & AI Solutions",
  },
  {
    text: "Narxu built our mobile app from scratch and integrated it with our existing systems. The 24/7 support has been invaluable for ongoing maintenance and updates.",
    name: "Jennifer Walsh",
    role: "E-commerce Business Owner",
    service: "App Development & Support",
  },
  {
    text: "The AI model they built for our business processes data 10x faster than our previous system. Customer insights have transformed our marketing strategy.",
    name: "David Kim",
    role: "Data Analytics Company",
    service: "AI Model Building",
  },
  {
    text: "Our lead generation increased by 200% with their digital marketing campaigns. The video content they created went viral, bringing in qualified leads daily.",
    name: "Lisa Thompson",
    role: "Marketing Director",
    service: "Digital Marketing & Video Editing",
  },
  {
    text: "Narxu redesigned our entire digital presence - website, social media, and customer portal. The seamless integration across platforms has boosted our conversion rates by 85%.",
    name: "James Wilson",
    role: "SaaS Company CEO",
    service: "Complete Digital Transformation",
  },
  {
    text: "Their 24/7 technical support resolved critical issues within minutes, preventing costly downtime. The production feature updates keep our platform ahead of competitors.",
    name: "Maria Garcia",
    role: "Software Company CTO",
    service: "24/7 Support & Maintenance",
  },
  {
    text: "The startup showcase platform Narxu built helped us secure funding and partnerships. Their end-to-end digital solution took our business to the next level.",
    name: "Michael Torres",
    role: "Startup Founder",
    service: "Business Showcase Platform",
  },
];

export async function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-32">
          <div className="inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6 animate-fade-in-up">
            <div className="w-8 h-px bg-white/30"></div>
            Success Stories
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance animate-fade-in-up delay-200">
            The businesses we{" "}
            <span className="font-medium italic">empower</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Discover how businesses are transforming their digital presence with
            our complete AI and development solutions
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto animate-fade-in-up delay-600">
          {[
            { name: "AI Solutions", count: "150+" },
            { name: "Web Development", count: "300+" },
            { name: "Digital Marketing", count: "200+" },
            { name: "24/7 Support", count: "100%" },
          ].map((service, index) => (
            <div
              key={index}
              className="text-center bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10"
            >
              <div className="text-2xl font-bold text-white mb-1">
                {service.count}
              </div>
              <div className="text-sm text-white/70">{service.name}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden animate-fade-in-up delay-800">
          <div
            className="flex gap-8 max-w-6xl"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn
              testimonials={testimonials.slice(0, 3)}
              duration={15}
              className="flex-1"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 5)}
              duration={12}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(1, 4)}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up delay-1000">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Join 300+ businesses that have accelerated their growth with our
              complete digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Start Your Project
              </button>
              <button className="px-6 py-3 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
