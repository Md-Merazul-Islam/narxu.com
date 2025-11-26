"use client";

import { useState } from "react";
import { AnimatedChatDemo } from "./AnimatedChatDemo";
import { AnimatedPhoneDemo } from "./AnimatedPhoneDemo";
import { AnimatedCalendarDemo } from "./AnimatedCalendarDemo";
import { AnimatedEmailDemo } from "./AnimatedEmailDemo";
import { AnimatedLeadsDemo } from "./AnimatedLeadsDemo";
import { AnimatedIntegrationsDemo } from "./AnimatedIntegrationsDemo";

const features = [
  {
    title: "24/7 AI Chat Support",
    description: "Intelligent chatbots that handle customer inquiries, answer questions, and capture leads across your website and social channels.",
    demo: AnimatedChatDemo,
    size: "large",
  },
  {
    title: "AI Phone Receptionist",
    description: "Professional AI voice assistant that answers calls, takes messages, and books appointments when you're busy or closed.",
    demo: AnimatedPhoneDemo,
    size: "medium",
  },
  {
    title: "Smart Appointment Booking",
    description: "Automated scheduling system that checks availability, books appointments, and sends confirmations without human intervention.",
    demo: AnimatedCalendarDemo,
    size: "medium",
  },
  {
    title: "Email Response Automation",
    description: "AI-powered email assistant that responds to inquiries, provides information, and forwards complex queries to your team.",
    demo: AnimatedEmailDemo,
    size: "large",
  },
  {
    title: "Lead Qualification & Handoff",
    description: "Intelligent system that qualifies prospects, gathers key information, and seamlessly hands off hot leads to your sales team.",
    demo: AnimatedLeadsDemo,
    size: "medium",
  },
  {
    title: "Multi-Platform Integration",
    description: "Connect with your existing tools including CRM, calendar, WhatsApp, SMS, and more for a unified customer experience.",
    demo: AnimatedIntegrationsDemo,
    size: "medium",
  },
];

export function FeaturesGrid() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-fade-in-up delay-300">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`group transition-all duration-1000 ${
            feature.size === "large" ? "md:col-span-2" : ""
          }`}
          style={{
            transitionDelay: `${300 + index * 100}ms`,
          }}
          onMouseEnter={() => setActiveDemo(index)}
          onMouseLeave={() => setActiveDemo(null)}
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300">
            <div className="mb-6">
              <feature.demo isActive={activeDemo === index} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
              {feature.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}