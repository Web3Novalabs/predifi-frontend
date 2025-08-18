"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  BookOpen,
  Users,
  Wallet,
  TrendingUp,
  Shield,
  HelpCircle,
  MessageCircle,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is PrediFi?",
    answer:
      "PrediFi is a decentralized prediction platform built on Starknet where users can create and join prediction pools. Users can predict outcomes of various events and earn rewards for accurate predictions.",
    category: "general",
  },
  {
    question: "How do I create a prediction pool?",
    answer:
      "To create a pool, navigate to the dashboard and click 'Create Pool'. You'll need to provide basic information, set prediction rules, and stake an initial amount. The pool will be active once created and can accept participants.",
    category: "pools",
  },
  {
    question: "How do I join a prediction pool?",
    answer:
      "Browse available pools in the Pool Market section. Click on any pool to view details, then click 'Join Pool' and stake your prediction amount. Make sure to read the pool rules before participating.",
    category: "pools",
  },
  {
    question: "How are rewards distributed?",
    answer:
      "Rewards are distributed based on prediction accuracy. Correct predictions receive a share of the total pool rewards proportional to their stake. The more accurate your prediction and the higher your stake, the more rewards you earn.",
    category: "rewards",
  },
  {
    question: "What happens if my prediction is wrong?",
    answer:
      "If your prediction is incorrect, you lose your staked amount. The staked amounts from incorrect predictions are distributed among participants with correct predictions as rewards.",
    category: "rewards",
  },
  {
    question: "How do I connect my wallet?",
    answer:
      "Click the 'Connect Wallet' button in the top navigation. We support various Starknet-compatible wallets. Make sure you have some ETH in your wallet for gas fees.",
    category: "wallet",
  },
  {
    question: "What are gas fees?",
    answer:
      "Gas fees are transaction costs on the Starknet network. You'll need ETH in your wallet to pay for creating pools, joining pools, and other transactions. Gas fees vary based on network congestion.",
    category: "wallet",
  },
  {
    question: "How do I become a validator?",
    answer:
      "Validators help resolve prediction outcomes. To become a validator, navigate to the Validator section in your dashboard. You'll need to stake a certain amount and demonstrate reliability in resolving disputes.",
    category: "validation",
  },
  {
    question: "What if there's a dispute about a prediction outcome?",
    answer:
      "Disputes are resolved through our validator system. Multiple validators review the evidence and vote on the correct outcome. The majority decision becomes the final result.",
    category: "validation",
  },
  {
    question: "Can I cancel my participation in a pool?",
    answer:
      "Pool cancellation depends on the pool creator's settings. Some pools allow cancellation before the prediction deadline, while others are locked once created. Check the pool details for cancellation policies.",
    category: "pools",
  },
  {
    question: "How do I track my prediction history?",
    answer:
      "Your prediction history is available in your dashboard under the Profile section. You can view all your active and completed predictions, along with your earnings and performance statistics.",
    category: "general",
  },
  {
    question: "What types of predictions can I make?",
    answer:
      "PrediFi supports various prediction types including price movements, event outcomes, sports results, and more. Pool creators define the specific prediction criteria and rules for each pool.",
    category: "pools",
  },
];

const categories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "general", name: "General", icon: BookOpen },
  { id: "pools", name: "Prediction Pools", icon: TrendingUp },
  { id: "rewards", name: "Rewards & Earnings", icon: TrendingUp },
  { id: "wallet", name: "Wallet & Payments", icon: Wallet },
  { id: "validation", name: "Validation", icon: Shield },
];

export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#001112] text-white pt-[107px]">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto pt-6">
        <Link
          href="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#000A0B] py-16">
        <div
          className="absolute inset-0 w-full h-full opacity-[10%]"
          style={{
            backgroundImage: "url('/images/topo-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#59B1A6] to-[#CEFFF7] bg-clip-text text-transparent mb-6">
            Help Center
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Find answers to your questions about PrediFi, prediction pools, and
            how to maximize your earnings.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#00262A] border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "border-cyan-400 bg-[#00262A] text-cyan-400"
                      : "border-slate-700 bg-[#001A1C] text-slate-300 hover:border-slate-600 hover:bg-[#00262A]"
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
            {selectedCategory !== "all" && (
              <span className="text-cyan-400 ml-2">
                ({filteredFAQs.length} questions)
              </span>
            )}
          </h2>

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400 text-lg">
                No questions found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-700 rounded-lg bg-[#001A1C] overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between py-4 px-6 text-left hover:bg-[#00262A] transition-colors"
                  >
                    <span className="text-white font-medium pr-4">
                      {faq.question}
                    </span>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#001A1C] border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <MessageCircle className="w-6 h-6 text-cyan-400 mr-3" />
              Still Need Help?
            </h3>
            <p className="text-slate-300 mb-4">
              Can't find what you're looking for? Our support team is here to
              help.
            </p>
            <div className="space-y-3">
              <a
                href="https://discord.gg/predifi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Join our Discord community
              </a>
              <a
                href="mailto:support@predifi.com"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Contact support team
              </a>
            </div>
          </div>

          <div className="bg-[#001A1C] border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 text-cyan-400 mr-3" />
              Getting Started
            </h3>
            <p className="text-slate-300 mb-4">
              New to PrediFi? Start your prediction journey with these
              resources.
            </p>
            <div className="space-y-3">
              <Link
                href="/dashboard/pool-market"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Explore prediction pools
              </Link>
              <Link
                href="/dashboard/create-pool"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Create your first pool
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#00262A] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Platform Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-sm text-slate-400">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">$44k+</div>
              <div className="text-sm text-slate-400">Amount Predicted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">5k+</div>
              <div className="text-sm text-slate-400">
                Active Prediction Pools
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">2k+</div>
              <div className="text-sm text-slate-400">Total Coin Flips</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
