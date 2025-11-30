import type { Metadata } from "next";
import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  Globe,
  Bell,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Narxu - AI Automation Solutions",
  description:
    "Learn how Narxu protects your privacy and handles your data. Our commitment to transparency and security in AI automation services.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "AI privacy",
    "Narxu",
  ],
  openGraph: {
    title: "Privacy Policy | Narxu",
    description: "Our commitment to protecting your privacy and data.",
    type: "website",
  },
};

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Personal identification information (name, email, phone number)",
      "Company information for business accounts",
      "Usage data and analytics to improve our services",
      "Communication records for support purposes",
      "Payment information processed securely through third-party providers",
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Data",
    content: [
      "To provide and maintain our AI automation services",
      "To personalize and improve your experience",
      "To communicate updates, offers, and support information",
      "To analyze usage patterns and optimize performance",
      "To comply with legal obligations and protect our rights",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "End-to-end encryption for all data transmissions",
      "Regular security audits and penetration testing",
      "SOC 2 Type II certified infrastructure",
      "Multi-factor authentication for all accounts",
      "24/7 monitoring and threat detection systems",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: [
      "Access and download your personal data",
      "Request correction of inaccurate information",
      "Delete your account and associated data",
      "Opt-out of marketing communications",
      "Data portability to other services",
    ],
  },
  {
    icon: Globe,
    title: "International Data Transfers",
    content: [
      "Data processed in compliance with GDPR",
      "Standard contractual clauses for EU transfers",
      "Privacy Shield framework adherence",
      "Regional data residency options available",
      "Cross-border transfer impact assessments",
    ],
  },
  {
    icon: Bell,
    title: "Updates to This Policy",
    content: [
      "We may update this policy periodically",
      "Material changes will be notified via email",
      "Continued use constitutes acceptance",
      "Previous versions available upon request",
      "Last updated: January 2025",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect
              your information.
            </p>
            <p className="text-sm text-white/40 mt-4">
              Effective Date: January 1, 2025
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Overview</h2>
                <p className="text-white/70 leading-relaxed">
                  At Narxu, we are committed to protecting your privacy and
                  ensuring the security of your personal information. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our AI automation
                  services. We encourage you to read this policy carefully to
                  understand our practices regarding your personal data.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-2">
                      {section.content.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-white/70"
                        >
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">
              Questions About Your Privacy?
            </h3>
            <p className="text-white/60 mb-6">
              If you have any questions or concerns about our privacy practices,
              please don't hesitate to contact us.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-medium transition-all duration-300"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
