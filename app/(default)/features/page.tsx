import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Clock,
  Users,
  Sparkles,
  Brain,
  Workflow,
  Settings,
  Database,
  Lock,
  LineChart,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features | Narxu - AI Automation Platform Capabilities",
  description:
    "Explore Narxu's powerful AI automation features. From intelligent chatbots to advanced analytics, discover tools that transform your business.",
  keywords: [
    "AI features",
    "automation capabilities",
    "chatbot",
    "analytics",
    "Narxu",
  ],
  openGraph: {
    title: "Features | Narxu",
    description: "Powerful AI automation features for modern businesses.",
    type: "website",
  },
};

const heroFeatures = [
  { icon: Bot, label: "AI Agents", value: "Unlimited" },
  { icon: MessageSquare, label: "Conversations", value: "10M+" },
  { icon: Globe, label: "Languages", value: "100+" },
  { icon: Clock, label: "Uptime", value: "99.99%" },
];

const mainFeatures = [
  {
    icon: Brain,
    title: "Intelligent AI Agents",
    description:
      "Deploy custom AI agents that understand your business context and deliver personalized experiences at scale.",
    highlights: [
      "Natural language understanding",
      "Context-aware responses",
      "Multi-turn conversations",
      "Sentiment analysis",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate complex business processes with intelligent workflows that adapt and learn from your operations.",
    highlights: [
      "Visual workflow builder",
      "Conditional logic",
      "Multi-step automation",
      "Error handling",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain actionable insights with comprehensive analytics dashboards and real-time performance monitoring.",
    highlights: [
      "Real-time dashboards",
      "Custom reports",
      "Trend analysis",
      "Predictive insights",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced access controls.",
    highlights: [
      "End-to-end encryption",
      "SOC 2 Type II",
      "GDPR compliant",
      "SSO integration",
    ],
    gradient: "from-orange-500 to-red-500",
  },
];

const allFeatures = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "24/7 intelligent customer support",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Support",
    description: "Unified messaging across platforms",
  },
  {
    icon: Database,
    title: "Knowledge Base",
    description: "Self-learning knowledge management",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Sub-second response times",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Support in 100+ languages",
  },
  { icon: Lock, title: "Data Privacy", description: "Complete data ownership" },
  {
    icon: LineChart,
    title: "Performance Metrics",
    description: "Detailed analytics and reporting",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Role-based access and permissions",
  },
  {
    icon: Settings,
    title: "Custom Integrations",
    description: "API-first architecture",
  },
  {
    icon: Headphones,
    title: "Human Handoff",
    description: "Seamless agent escalation",
  },
  {
    icon: Sparkles,
    title: "AI Training",
    description: "Continuous learning and improvement",
  },
  {
    icon: Clock,
    title: "Scheduling",
    description: "Automated appointment booking",
  },
];

const comparisons = [
  { feature: "AI-Powered Responses", Narxu: true, traditional: false },
  { feature: "24/7 Availability", Narxu: true, traditional: false },
  { feature: "Multi-Language Support", Narxu: true, traditional: false },
  { feature: "Instant Scalability", Narxu: true, traditional: false },
  { feature: "Predictive Analytics", Narxu: true, traditional: false },
  { feature: "Self-Learning System", Narxu: true, traditional: false },
  { feature: "Human-Like Conversations", Narxu: true, traditional: false },
  { feature: "Zero Wait Times", Narxu: true, traditional: false },
];

export default function FeaturesPage() {
  return (
    <>
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Platform Features
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful AI Tools
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
              Everything you need to automate customer interactions, streamline
              operations, and deliver exceptional experiences.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {heroFeatures.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4"
                >
                  <item.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-white/50 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Features */}
          <div className="space-y-8 mb-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 opacity-80`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-white/60 text-lg mb-6">
                      {feature.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {feature.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-white/70"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`relative h-64 md:h-80 rounded-2xl overflow-hidden ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                        <feature.icon className="w-16 h-16 text-white/60" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Features Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              All Features
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <feature.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Choose Narxu?
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              See how our AI-powered platform compares to traditional customer
              service solutions.
            </p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden max-w-3xl mx-auto">
              <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 bg-white/5">
                <div className="font-semibold">Feature</div>
                <div className="font-semibold text-center text-purple-400">
                  Narxu AI
                </div>
                <div className="font-semibold text-center text-white/50">
                  Traditional
                </div>
              </div>
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 last:border-0"
                >
                  <div className="text-white/70">{item.feature}</div>
                  <div className="text-center">
                    {item.Narxu ? (
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <span className="text-white/30">-</span>
                    )}
                  </div>
                  <div className="text-center">
                    {item.traditional ? (
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <span className="text-white/30">-</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Narxu to transform
              their customer experience.
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
  );
}
