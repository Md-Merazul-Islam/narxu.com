import type { Metadata } from "next"
import { Scale, FileText, AlertCircle, CreditCard, Ban, RefreshCw, Gavel, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Cliste - AI Automation Solutions",
  description:
    "Read the terms and conditions for using Cliste's AI automation services. Understand your rights and responsibilities as a user.",
  keywords: ["terms of service", "terms and conditions", "legal", "AI services", "Cliste"],
  openGraph: {
    title: "Terms of Service | Cliste",
    description: "Terms and conditions for using Cliste AI services.",
    type: "website",
  },
}

const terms = [
  {
    icon: FileText,
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using Cliste's AI automation services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services. These terms apply to all visitors, users, and others who access or use the Service.",
  },
  {
    icon: Scale,
    title: "2. Use License",
    content:
      "Permission is granted to temporarily access and use Cliste's services for personal or business purposes, subject to the restrictions in these Terms. This license does not include: modifying or copying materials except as necessary for normal use; using materials for commercial purposes outside the scope of your subscription; attempting to reverse engineer any software; removing any copyright or proprietary notations; or transferring the materials to another person.",
  },
  {
    icon: AlertCircle,
    title: "3. User Responsibilities",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to: provide accurate and complete information; maintain and promptly update your information; ensure your use complies with all applicable laws; not use the services for any unlawful purpose; and immediately notify us of any unauthorized use of your account.",
  },
  {
    icon: CreditCard,
    title: "4. Payment Terms",
    content:
      "Certain services require payment. You agree to pay all fees associated with your chosen plan. Fees are non-refundable except as required by law or as explicitly stated. We reserve the right to change our pricing with 30 days notice. Failure to pay may result in service suspension or termination. All payments are processed securely through our third-party payment providers.",
  },
  {
    icon: Ban,
    title: "5. Prohibited Activities",
    content:
      "You may not use our services to: violate any laws or regulations; infringe on intellectual property rights; transmit malware or harmful code; attempt to gain unauthorized access to our systems; engage in any activity that disrupts or interferes with our services; use automated systems to access our services without permission; or collect user information without consent.",
  },
  {
    icon: RefreshCw,
    title: "6. Service Modifications",
    content:
      "Cliste reserves the right to modify, suspend, or discontinue any part of the services at any time without prior notice. We may also impose limits on certain features or restrict access to parts of the services without notice or liability. We will make reasonable efforts to notify users of significant changes that may affect their use of the services.",
  },
  {
    icon: Gavel,
    title: "7. Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Cliste shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the services. Our total liability shall not exceed the amount paid by you for the services in the twelve months preceding the claim. Some jurisdictions do not allow limitations on implied warranties or exclusions of certain damages.",
  },
  {
    icon: HelpCircle,
    title: "8. Dispute Resolution",
    content:
      "Any disputes arising from these terms or your use of the services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You agree to resolve disputes individually and waive any right to participate in a class action lawsuit. The arbitration shall take place in San Francisco, California, unless otherwise agreed.",
  },
]

export default function TermsPage() {
  return (
    <>

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Please read these terms carefully before using our AI automation services.
            </p>
            <p className="text-sm text-white/40 mt-4">Last Updated: January 1, 2025</p>
          </div>

          <div className="space-y-6">
            {terms.map((term, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <term.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3">{term.title}</h2>
                    <p className="text-white/70 leading-relaxed">{term.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-white/70 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="space-y-2 text-white/60">
              <li>Email: legal@cliste.ai</li>
              <li>Address: 123 AI Innovation Hub, Tech District, San Francisco, CA 94105</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm">
              By using our services, you acknowledge that you have read and understood these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
