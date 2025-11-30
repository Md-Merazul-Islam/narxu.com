import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  FileText,
  HelpCircle,
  Clock,
  Headphones,
  Video,
  BookOpen,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support | Narxu - Help Center & Customer Service",
  description:
    "Get help with Narxu AI automation. Access our knowledge base, contact support, or schedule a call with our team.",
  keywords: [
    "support",
    "help center",
    "customer service",
    "AI support",
    "Narxu",
  ],
  openGraph: {
    title: "Support | Narxu",
    description: "Help center and customer support for Narxu AI platform.",
    type: "website",
  },
};

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our AI assistant for instant answers 24/7",
    action: "Start Chat",
    available: "Available Now",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message and we'll respond within 24 hours",
    action: "Send Email",
    available: "24hr Response",
    highlight: false,
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team during business hours",
    action: "Call Now",
    available: "Mon-Fri 9AM-6PM",
    highlight: false,
  },
  {
    icon: Video,
    title: "Schedule Call",
    description: "Book a video call with a support specialist",
    action: "Book Call",
    available: "Next Available: Today",
    highlight: false,
  },
];

const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        q: "How do I create my first AI agent?",
        a: "Navigate to the Dashboard, click 'Create Agent', and follow the setup wizard. You can choose from templates or create a custom agent.",
      },
      {
        q: "What integrations are available?",
        a: "We support Slack, Microsoft Teams, Salesforce, Zendesk, and many more. Visit our integrations page for the full list.",
      },
      {
        q: "Is there a free trial available?",
        a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required.",
      },
    ],
  },
  {
    title: "Billing & Plans",
    questions: [
      {
        q: "How do I upgrade my plan?",
        a: "Go to Settings > Billing and select your desired plan. Changes take effect immediately.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
      },
      {
        q: "Can I cancel my subscription anytime?",
        a: "Yes, you can cancel anytime from your account settings. You'll retain access until the end of your billing period.",
      },
    ],
  },
  {
    title: "Technical Issues",
    questions: [
      {
        q: "My AI agent isn't responding correctly",
        a: "Check your training data and ensure your knowledge base is up to date. You can also adjust the confidence threshold in settings.",
      },
      {
        q: "How do I reset my API keys?",
        a: "Go to Settings > API Keys, revoke the old key, and generate a new one. Remember to update your integrations.",
      },
      {
        q: "Why are my webhooks failing?",
        a: "Verify your endpoint URL is correct and accessible. Check our webhook logs for detailed error messages.",
      },
    ],
  },
];

const helpResources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and tutorials",
    href: "/docs",
  },
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Search our help articles",
    href: "/docs",
  },
  {
    icon: Zap,
    title: "Status Page",
    description: "Check system status",
    href: "/status",
  },
  {
    icon: HelpCircle,
    title: "Community Forum",
    description: "Connect with other users",
    href: "/community",
  },
];

const supportTiers = [
  {
    name: "Standard",
    description: "For small teams getting started",
    features: [
      "Email support",
      "24-hour response time",
      "Knowledge base access",
      "Community forum",
    ],
  },
  {
    name: "Priority",
    description: "For growing businesses",
    features: [
      "Live chat support",
      "4-hour response time",
      "Phone support",
      "Dedicated success manager",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    features: [
      "24/7 dedicated support",
      "1-hour response time",
      "Custom SLAs",
      "On-site training",
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Help Center
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our support team is dedicated to helping you succeed with Narxu AI
              automation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all pl-14"
              />
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-md border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  option.highlight ? "border-purple-500/50" : "border-white/10"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    option.highlight
                      ? "bg-purple-500/30"
                      : "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                  }`}
                >
                  <option.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">{option.title}</h3>
                <p className="text-white/60 text-sm mb-4">
                  {option.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-green-400 mb-4">
                  <Clock className="w-3 h-3" />
                  {option.available}
                </div>
                <button
                  className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                    option.highlight
                      ? "bg-purple-500 hover:bg-purple-600"
                      : "bg-white/10 hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {option.action}
                </button>
              </div>
            ))}
          </div>

          {/* Quick Resources */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {helpResources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group"
              >
                <resource.icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-medium text-sm">{resource.title}</h4>
                  <p className="text-white/50 text-xs">
                    {resource.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {faqCategories.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="font-semibold mb-4 text-purple-300">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <details key={faqIndex} className="group">
                        <summary className="cursor-pointer text-sm font-medium text-white/80 hover:text-white transition-colors list-none flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5">+</span>
                          {faq.q}
                        </summary>
                        <p className="mt-2 text-sm text-white/60 pl-4 border-l border-white/10">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Tiers */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Support Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {supportTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-md border rounded-2xl p-6 ${
                    tier.highlight
                      ? "border-purple-500/50 scale-105"
                      : "border-white/10"
                  }`}
                >
                  {tier.highlight && (
                    <span className="inline-block px-3 py-1 bg-purple-500/30 rounded-full text-xs font-medium text-purple-300 mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-white/60 text-sm mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
            <Headphones className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Need Help?
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Our dedicated support team is available to assist you with any
              questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold transition-all duration-300 group"
              >
                Contact Us
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
