import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Bot,
  HeadphonesIcon,
  Calendar,
  ShoppingCart,
  FileSearch,
  TrendingUp,
  Shield,
  Zap,
  Settings,
  ArrowRight,
  Star,
  Users,
  Clock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Team | Cliste - Meet Your Virtual Workforce",
  description:
    "Meet Cliste's AI team members. Specialized AI agents for customer support, sales, scheduling, and more. Available 24/7.",
  keywords: ["AI team", "virtual assistants", "AI agents", "chatbots", "automation", "Cliste"],
  openGraph: {
    title: "AI Team | Cliste",
    description: "Meet your virtual AI workforce powered by Cliste.",
    type: "website",
  },
}

const aiAgents = [
  {
    name: "Alex",
    role: "Customer Support Agent",
    avatar: "/friendly-ai-robot-avatar-blue.jpg",
    icon: HeadphonesIcon,
    description: "Handles customer inquiries, resolves issues, and provides instant support across all channels.",
    skills: ["Issue Resolution", "Product Knowledge", "Escalation Handling", "Feedback Collection"],
    stats: { conversations: "2.5M+", satisfaction: "98%", responseTime: "< 1s" },
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sarah",
    role: "Sales Assistant",
    avatar: "/professional-ai-robot-avatar-purple.jpg",
    icon: TrendingUp,
    description: "Qualifies leads, recommends products, and guides customers through the purchase journey.",
    skills: ["Lead Qualification", "Product Recommendations", "Upselling", "Quote Generation"],
    stats: { conversions: "45%", revenue: "$8.2M", deals: "15K+" },
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Max",
    role: "Scheduling Coordinator",
    avatar: "/efficient-ai-robot-avatar-green.jpg",
    icon: Calendar,
    description: "Manages appointments, sends reminders, and optimizes scheduling for maximum efficiency.",
    skills: ["Appointment Booking", "Calendar Sync", "Reminders", "Rescheduling"],
    stats: { appointments: "500K+", showRate: "94%", saved: "12K hrs" },
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Luna",
    role: "E-Commerce Assistant",
    avatar: "/helpful-ai-robot-avatar-orange.jpg",
    icon: ShoppingCart,
    description: "Assists shoppers with product discovery, cart management, and order tracking.",
    skills: ["Product Search", "Cart Recovery", "Order Tracking", "Returns Processing"],
    stats: { orders: "1.2M+", cartRecovery: "35%", aov: "+22%" },
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Nova",
    role: "Knowledge Base Agent",
    avatar: "/intelligent-ai-robot-avatar-teal.jpg",
    icon: FileSearch,
    description: "Searches and retrieves information from your knowledge base with perfect accuracy.",
    skills: ["Document Search", "FAQ Handling", "Content Suggestions", "Learning"],
    stats: { queries: "3M+", accuracy: "99.2%", articles: "50K+" },
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Rex",
    role: "Security Monitor",
    avatar: "/secure-ai-robot-avatar-red.jpg",
    icon: Shield,
    description: "Monitors conversations for compliance, detects fraud, and ensures data security.",
    skills: ["Fraud Detection", "Compliance Check", "Data Protection", "Threat Analysis"],
    stats: { monitored: "10M+", threats: "25K blocked", compliance: "100%" },
    color: "from-red-500 to-pink-500",
  },
]

const capabilities = [
  { icon: Zap, title: "Instant Deployment", description: "Get your AI team running in minutes" },
  { icon: Settings, title: "Fully Customizable", description: "Train agents on your specific needs" },
  { icon: Users, title: "Team Collaboration", description: "AI and humans work seamlessly together" },
  { icon: Clock, title: "24/7 Availability", description: "Never miss a customer interaction" },
]

const testimonials = [
  {
    quote: "Our AI team handles 80% of inquiries without human intervention. It's transformed our support.",
    author: "Jennifer Martinez",
    role: "VP Customer Success",
    company: "TechFlow Inc",
    rating: 5,
  },
  {
    quote: "The sales AI increased our conversion rate by 45%. ROI was achieved within the first month.",
    author: "Michael Chen",
    role: "Sales Director",
    company: "GrowthLabs",
    rating: 5,
  },
  {
    quote: "Scheduling automation saved our team 40 hours per week. Our clients love the instant booking.",
    author: "Sarah Johnson",
    role: "Operations Manager",
    company: "MedCare Clinic",
    rating: 5,
  },
]

export default function AITeamPage() {
  return (
    <>
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Meet Your AI Team
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Virtual
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Workforce Awaits
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
              Meet the AI agents that work tirelessly to help your business succeed. Specialized, trained, and ready to
              deploy.
            </p>

            {/* Capabilities */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {capabilities.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                  <item.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                  <p className="text-white/50 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Agents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiAgents.map((agent, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300 group"
              >
                {/* Agent Header */}
                <div className={`relative h-32 bg-gradient-to-br ${agent.color} opacity-80`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden">
                      <Image
                        src={agent.avatar || "/placeholder.svg"}
                        alt={agent.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <agent.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Agent Info */}
                <div className="pt-16 px-6 pb-6">
                  <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                  <p className="text-purple-400 text-sm font-medium mb-3">{agent.role}</p>
                  <p className="text-white/60 text-sm mb-4">{agent.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                    {Object.entries(agent.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-bold text-white">{value}</div>
                        <div className="text-xs text-white/40 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Choose Agents", description: "Select the AI team members that fit your needs" },
                {
                  step: "02",
                  title: "Train & Customize",
                  description: "Upload your data and customize agent behaviors",
                },
                { step: "03", title: "Deploy & Integrate", description: "Connect to your existing tools and channels" },
                { step: "04", title: "Monitor & Optimize", description: "Track performance and continuously improve" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full">
                    <div className="text-4xl font-bold text-purple-500/30 mb-4">{item.step}</div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-white/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-white/70 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                    <p className="text-purple-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
            <Bot className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your AI Team?</h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Start with a free trial and see how AI agents can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-medium transition-all duration-300"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
