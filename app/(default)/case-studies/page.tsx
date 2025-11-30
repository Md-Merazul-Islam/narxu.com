import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Narxu - AI Automation Insights & News",
  description:
    "Stay updated with the latest trends in AI automation, industry insights, and expert tips from the Narxu team.",
  keywords: [
    "AI blog",
    "automation insights",
    "AI trends",
    "machine learning",
    "Narxu",
  ],
  openGraph: {
    title: "Blog | Narxu",
    description: "AI automation insights, news, and expert tips.",
    type: "website",
  },
};

const featuredPost = {
  title: "The Future of AI in Enterprise: 2025 and Beyond",
  excerpt:
    "Discover how artificial intelligence is reshaping enterprise operations and what businesses need to prepare for in the coming years.",
  image: "/futuristic-ai-enterprise-technology-abstract.jpg",
  category: "Industry Trends",
  author: "Dr. Sarah Chen",
  date: "Jan 15, 2025",
  readTime: "8 min read",
  slug: "future-ai-enterprise-2025",
};

const posts = [
  {
    title: "10 Ways AI Chatbots Are Revolutionizing Customer Service",
    excerpt:
      "Learn how intelligent chatbots are transforming customer experiences and reducing support costs.",
    image: "/ai-chatbot-customer-service-technology.jpg",
    category: "AI Solutions",
    author: "Michael Torres",
    date: "Jan 12, 2025",
    readTime: "6 min read",
    slug: "ai-chatbots-customer-service",
  },
  {
    title: "Building a Data-Driven Culture with AI Analytics",
    excerpt:
      "Strategies for implementing AI-powered analytics that drive better business decisions.",
    image: "/data-analytics-dashboard-ai-visualization.jpg",
    category: "Data Analytics",
    author: "Emily Watson",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    slug: "data-driven-culture-ai",
  },
  {
    title: "The ROI of AI Automation: What to Expect",
    excerpt:
      "A comprehensive guide to measuring and maximizing return on investment from AI automation.",
    image: "/roi-business-growth-chart-ai.jpg",
    category: "Business Strategy",
    author: "James Park",
    date: "Jan 8, 2025",
    readTime: "5 min read",
    slug: "roi-ai-automation",
  },
  {
    title: "Securing Your AI Infrastructure: Best Practices",
    excerpt:
      "Essential security considerations and best practices for deploying AI systems safely.",
    image: "/cybersecurity-ai-shield-technology.jpg",
    category: "Security",
    author: "Lisa Anderson",
    date: "Jan 5, 2025",
    readTime: "9 min read",
    slug: "securing-ai-infrastructure",
  },
  {
    title: "AI Integration Patterns for Legacy Systems",
    excerpt:
      "How to seamlessly integrate modern AI capabilities with existing enterprise infrastructure.",
    image: "/system-integration-technology-network.jpg",
    category: "Integration",
    author: "David Kim",
    date: "Jan 3, 2025",
    readTime: "6 min read",
    slug: "ai-integration-legacy-systems",
  },
  {
    title: "Natural Language Processing: A Practical Guide",
    excerpt:
      "Understanding NLP applications and how to leverage them for your business needs.",
    image: "/natural-language-processing-ai-brain.jpg",
    category: "Technology",
    author: "Rachel Green",
    date: "Jan 1, 2025",
    readTime: "8 min read",
    slug: "nlp-practical-guide",
  },
];

const categories = [
  "All",
  "Industry Trends",
  "AI Solutions",
  "Data Analytics",
  "Business Strategy",
  "Security",
  "Technology",
];

export default function BlogPage() {
  return (
    <>
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights &
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Expert perspectives on AI automation, industry trends, and the
              future of intelligent business solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-purple-500/30 border border-purple-500/50 text-white"
                    : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-purple-400 text-sm font-medium mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/60 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-white/50">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 flex-1 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/50 pt-4 border-t border-white/10">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-medium transition-all duration-300 group">
              Load More Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
