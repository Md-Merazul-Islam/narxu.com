import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "123 AI Innovation Hub",
      "Tech District, San Francisco",
      "CA 94105, USA",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@Narxu.ai", "support@Narxu.ai"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Monday - Friday: 9AM - 6PM",
      "Saturday: 10AM - 4PM",
      "Sunday: Closed",
    ],
  },
];

const quickLinks = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our AI assistant 24/7",
  },
  {
    icon: Globe,
    title: "Schedule Demo",
    description: "Book a personalized demo session",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-white/60 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {quickLinks.map((link, index) => (
          <button
            key={index}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 text-left hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group"
          >
            <link.icon className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-white mb-1">{link.title}</h4>
            <p className="text-white/60 text-sm">{link.description}</p>
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-2">Enterprise Solutions</h3>
        <p className="text-white/60 text-sm mb-4">
          Looking for custom AI solutions for your enterprise? Our team of
          experts is ready to help you scale.
        </p>
        <button className="text-purple-400 font-medium text-sm hover:text-purple-300 transition-colors">
          Contact Enterprise Sales →
        </button>
      </div>
    </div>
  );
}
