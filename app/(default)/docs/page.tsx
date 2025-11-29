import type { Metadata } from "next"
import Link from "next/link"
import {
  Book,
  Code,
  Zap,
  Settings,
  Shield,
  Database,
  Webhook,
  Terminal,
  FileText,
  Video,
  Download,
  ExternalLink,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation | Cliste - AI Automation Guides & API Reference",
  description:
    "Comprehensive documentation for Cliste AI automation platform. API reference, integration guides, tutorials, and best practices.",
  keywords: ["documentation", "API reference", "integration guides", "AI tutorials", "Cliste"],
  openGraph: {
    title: "Documentation | Cliste",
    description: "Comprehensive guides and API reference for Cliste AI platform.",
    type: "website",
  },
}

const quickLinks = [
  { icon: Zap, title: "Quick Start", description: "Get up and running in 5 minutes", href: "/docs/quick-start" },
  { icon: Code, title: "API Reference", description: "Complete API documentation", href: "/docs/api" },
  { icon: Settings, title: "Configuration", description: "Setup and customization guides", href: "/docs/config" },
  {
    icon: Shield,
    title: "Security",
    description: "Authentication and security best practices",
    href: "/docs/security",
  },
]

const docCategories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics and get your first AI agent running",
    articles: [
      { title: "Introduction to Cliste", href: "/docs/intro" },
      { title: "Installation Guide", href: "/docs/installation" },
      { title: "Your First AI Agent", href: "/docs/first-agent" },
      { title: "Understanding Workflows", href: "/docs/workflows" },
      { title: "Dashboard Overview", href: "/docs/dashboard" },
    ],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete reference for all API endpoints and SDKs",
    articles: [
      { title: "Authentication", href: "/docs/api/auth" },
      { title: "Agents API", href: "/docs/api/agents" },
      { title: "Conversations API", href: "/docs/api/conversations" },
      { title: "Analytics API", href: "/docs/api/analytics" },
      { title: "Webhooks", href: "/docs/api/webhooks" },
    ],
  },
  {
    icon: Webhook,
    title: "Integrations",
    description: "Connect Cliste with your existing tools and platforms",
    articles: [
      { title: "Slack Integration", href: "/docs/integrations/slack" },
      { title: "Microsoft Teams", href: "/docs/integrations/teams" },
      { title: "Salesforce", href: "/docs/integrations/salesforce" },
      { title: "Zendesk", href: "/docs/integrations/zendesk" },
      { title: "Custom Integrations", href: "/docs/integrations/custom" },
    ],
  },
  {
    icon: Database,
    title: "Data & Training",
    description: "Train and customize your AI models with your data",
    articles: [
      { title: "Data Import Guide", href: "/docs/data/import" },
      { title: "Training Custom Models", href: "/docs/data/training" },
      { title: "Knowledge Base Setup", href: "/docs/data/knowledge-base" },
      { title: "Data Security", href: "/docs/data/security" },
      { title: "Performance Optimization", href: "/docs/data/optimization" },
    ],
  },
  {
    icon: Terminal,
    title: "Advanced Topics",
    description: "Deep dive into advanced features and customization",
    articles: [
      { title: "Custom AI Behaviors", href: "/docs/advanced/behaviors" },
      { title: "Multi-language Support", href: "/docs/advanced/languages" },
      { title: "Enterprise Deployment", href: "/docs/advanced/enterprise" },
      { title: "High Availability Setup", href: "/docs/advanced/ha" },
      { title: "Monitoring & Alerts", href: "/docs/advanced/monitoring" },
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Security best practices and compliance documentation",
    articles: [
      { title: "Security Overview", href: "/docs/security/overview" },
      { title: "GDPR Compliance", href: "/docs/security/gdpr" },
      { title: "SOC 2 Compliance", href: "/docs/security/soc2" },
      { title: "Data Encryption", href: "/docs/security/encryption" },
      { title: "Access Controls", href: "/docs/security/access" },
    ],
  },
]

const resources = [
  { icon: Video, title: "Video Tutorials", description: "Step-by-step video guides", href: "/docs/videos" },
  { icon: FileText, title: "Changelog", description: "Latest updates and releases", href: "/docs/changelog" },
  { icon: Download, title: "SDKs & Tools", description: "Download official SDKs", href: "/docs/sdks" },
  { icon: ExternalLink, title: "GitHub", description: "Open source examples", href: "https://github.com/cliste" },
]

export default function DocsPage() {
  return (
    <>

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Documentation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                To Build with Cliste
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Comprehensive guides, API reference, and tutorials to help you integrate AI automation into your business.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
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

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <link.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">{link.title}</h3>
                <p className="text-white/50 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>

          {/* Documentation Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {docCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className="text-white/50 text-sm">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <Link
                        href={article.href}
                        className="block py-2 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Additional Resources</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.href}
                  className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                >
                  <resource.icon className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium mb-1">{resource.title}</h4>
                  <p className="text-white/50 text-xs">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Banner */}
          <div className="mt-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Can't find what you're looking for?</h3>
              <p className="text-white/60">Our support team is here to help you with any questions.</p>
            </div>
            <Link
              href="/support"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-medium transition-all duration-300 whitespace-nowrap"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
