import React from 'react';
import type { Metadata } from 'next';
import { 
  CpuChipIcon, 
  GlobeAltIcon, 
  WrenchScrewdriverIcon, 
  PresentationChartLineIcon, 
  CheckBadgeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us | Transforming Ideas into Digital Reality',
  description: 'We are a full-service digital agency specializing in AI integration, web development, and digital growth strategies.',
};

// --- DATA: Structured for Professional Presentation ---
// I have grouped your specific services into 4 logical categories.

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Delivered', value: '250+' },
  { label: 'Client Retention', value: '98%' },
  { label: 'Support Availability', value: '24/7' },
];

const capabilities = [
  {
    category: "Artificial Intelligence",
    description: "We bridge the gap between complex AI models and practical business utility.",
    icon: <CpuChipIcon className="w-6 h-6 text-purple-600" />,
    items: [
      "Custom AI Model Building",
      "Intelligent AI Chatbots (LLM Integrated)",
      "Web-based AI Integration",
      "Automated Workflows"
    ]
  },
  {
    category: "Web & Platforms",
    description: "From stunning designs to robust platforms for startups to showcase their vision.",
    icon: <GlobeAltIcon className="w-6 h-6 text-blue-600" />,
    items: [
      "Full-Stack Web Development (From Scratch)",
      "UI/UX & Website Design",
      "Startup Showcase Platforms",
      "SEO Optimization & Architecture"
    ]
  },
  {
    category: "Software Engineering",
    description: "Reliable production cycles, maintenance, and mobile solutions.",
    icon: <WrenchScrewdriverIcon className="w-6 h-6 text-orange-600" />,
    items: [
      "Mobile App Development (iOS/Android)",
      "Production Feature Updates",
      "Legacy App Updates & Refactoring",
      "Bug Fixes & System Maintenance"
    ]
  },
  {
    category: "Growth & Creative",
    description: "We don't just build; we ensure your product reaches the right audience.",
    icon: <PresentationChartLineIcon className="w-6 h-6 text-green-600" />,
    items: [
      "Data-Driven Lead Generation",
      "Digital Marketing Campaigns",
      "Professional Video Editing",
      "Content Strategy"
    ]
  }
];

// --- SERVER COMPONENT ---

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-4">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            We build the digital engines that power <span className="text-slate-500">modern businesses.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            We are more than just developers; we are technical partners. From training custom AI models to scaling startup platforms, we handle the entire lifecycle of digital production so you can focus on growth.
          </p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</span>
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES (The Service List) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Our Technical Ecosystem</h2>
            <p className="text-slate-600">
              We provide end-to-end coverage for your digital needs. Whether it's fixing a critical software bug or launching a global marketing campaign.
            </p>
          </div>
          
          {/* 24/7 Support Badge */}
          <div className="mt-6 md:mt-0 flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full shadow-lg">
            <ClockIcon className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-sm">24/7 Priority Support Available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-lg">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold">{cap.category}</h3>
              </div>
              
              <p className="text-slate-500 mb-8 border-b border-slate-100 pb-6">
                {cap.description}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {cap.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                    <CheckBadgeIcon className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MISSION/CTA */}
      <section className="py-20 px-6 md:px-12 bg-black text-white rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to scale your vision?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            From fixing complex software issues to building AI models from scratch, our team is ready to act as your dedicated engineering department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors">
              Book a Free Consultation
            </button>
            <button className="px-8 py-4 rounded-full font-bold border border-slate-700 hover:bg-slate-900 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}