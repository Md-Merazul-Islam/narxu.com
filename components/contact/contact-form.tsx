"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-white/60">Thank you for reaching out. We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
        >
          <option value="" className="bg-[#1a0a2e]">
            Select a service
          </option>
          <option value="ai-automation" className="bg-[#1a0a2e]">
            AI Automation
          </option>
          <option value="chatbot" className="bg-[#1a0a2e]">
            AI Chatbot
          </option>
          <option value="data-analytics" className="bg-[#1a0a2e]">
            Data Analytics
          </option>
          <option value="custom-solution" className="bg-[#1a0a2e]">
            Custom AI Solution
          </option>
          <option value="consultation" className="bg-[#1a0a2e]">
            Consultation
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  )
}
