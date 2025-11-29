import type { Metadata } from "next"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Zap, Shield, Code, Webhook, Database, Cloud, Lock, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Integrations | Cliste - Connect Your Tools & Platforms",
  description:
    "Integrate Cliste AI with your existing tools. Seamless connections with Slack, Salesforce, Zendesk, and 100+ more platforms.",
  keywords: ["integrations", "API", "Slack", "Salesforce", "Zendesk", "automation", "Cliste"],
  openGraph: {
    title: "Integrations | Cliste",
    description: "Connect Cliste AI with your existing tools and platforms.",
    type: "website",
  },
}

const featuredIntegrations = [
  {
    name: "Slack",
    category: "Communication",
    description: "Deploy AI agents directly in your Slack workspace for instant team and customer support.",
    logo: "/slack-logo.png",
    popular: true,
  },
  {
    name: "Salesforce",
    category: "CRM",
    description: "Sync conversations and customer data seamlessly with Salesforce for complete visibility.",
    logo: "/salesforce-logo.png",
    popular: true,
  },
  {
    name: "Zendesk",
    category: "Support",
    description: "Enhance your Zendesk support with AI-powered ticket routing and response suggestions.",
    logo: "/zendesk-logo.png",
    popular: true,
  },
  {
    name: "Microsoft Teams",
    category: "Communication",
    description: "Bring AI assistance to your Teams channels for internal and external communications.",
    logo: "/microsoft-teams-logo.png",
    popular: true,
  },
  {
    name: "HubSpot",
    category: "CRM",
    description: "Connect your HubSpot CRM for automated lead qualification and customer insights.",
    logo: "/hubspot-logo.png",
    popular: false,
  },
  {
    name: "Intercom",
    category: "Support",
    description: "Supercharge your Intercom messenger with AI-powered automated responses.",
    logo: "/generic-chat-bubble-logo.png",
    popular: false,
  },
]

const integrationCategories = [
  {
    title: "Communication",
    integrations: ["Slack", "Microsoft Teams", "Discord", "WhatsApp", "Telegram", "Facebook Messenger"],
  },
  {
    title: "CRM",
    integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Monday.com", "Freshsales"],
  },
  {
    title: "Support",
    integrations: ["Zendesk", "Intercom", "Freshdesk", "Help Scout", "Front", "Drift"],
  },
  {
    title: "E-Commerce",
    integrations: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe", "Square"],
  },
  {
    title: "Marketing",
    integrations: ["Mailchimp", "Klaviyo", "ActiveCampaign", "Marketo", "Pardot", "Sendinblue"],
  },
  {
    title: "Analytics",
    integrations: ["Google Analytics", "Mixpanel", "Amplitude", "Segment", "Heap", "Hotjar"],
  },
]

const apiFeatures = [
  {
    icon: Code,
    title: "RESTful API",
    description: "Full-featured REST API for complete programmatic access to all Cliste features.",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Real-time event notifications to trigger actions in your systems.",
  },
  {
    icon: Database,
    title: "Data Export",
    description: "Export conversation data, analytics, and reports in multiple formats.",
  },
  {
    icon: Cloud,
    title: "Cloud Functions",
    description: "Serverless integrations with AWS Lambda, Google Cloud, and Azure.",
  },
  {
    icon: Lock,
    title: "OAuth 2.0",
    description: "Secure authentication with industry-standard OAuth 2.0 protocol.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Bidirectional data synchronization with sub-second latency.",
  },
]

const benefits = [
  "Connect in minutes, not weeks",
  "No coding required for most integrations",
  "Automatic data synchronization",
  "Enterprise-grade security",
  "Dedicated integration support",
  "Custom integration development available",
]

export default function IntegrationPage() {
  return (
    <>


      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Integrations
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect Your
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Entire Tech Stack
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
              Seamlessly integrate Cliste AI with 100+ tools you already use. No complicated setup required.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-purple-400">100+</div>
                <div className="text-white/50 text-sm">Integrations</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-purple-400">5 min</div>
                <div className="text-white/50 text-sm">Avg. Setup Time</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-purple-400">99.9%</div>
                <div className="text-white/50 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Featured Integrations */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-8">Popular Integrations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                      <Image
                        src={integration.logo || "/placeholder.svg"}
                        alt={integration.name}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                    </div>
                    {integration.popular && (
                      <span className="px-2 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">Popular</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{integration.name}</h3>
                  <p className="text-purple-400 text-sm mb-3">{integration.category}</p>
                  <p className="text-white/60 text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* All Integrations by Category */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationCategories.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-4 text-purple-300">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.integrations.map((integration, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* API Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Developer-Friendly API</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Build custom integrations with our powerful API. Full documentation and SDKs available.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Zap className="w-12 h-12 text-purple-400 mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Why Integrate with Cliste?</h2>
                  <p className="text-white/60 mb-6">
                    Get the most out of your existing tools by connecting them with Cliste AI. Automate workflows, sync
                    data, and provide seamless experiences.
                  </p>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 bg-white/10 rounded-lg animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Integration?</h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Our team can build custom integrations for your specific needs. Enterprise customers get dedicated
              integration support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold transition-all duration-300 group"
              >
                Request Custom Integration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-medium transition-all duration-300"
              >
                View API Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
