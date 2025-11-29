import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us | Cliste - AI Automation Solutions",
  description: "Get in touch with Cliste for AI automation solutions.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to transform your business with AI? Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}