import { ArrowUpRight } from "lucide-react";
import FAQAccordion from "./faq-accordion";
import Image from "next/image";

export default function InsightsFAQSection() {
  const faqItems = [
    {
      question: "What is Flipnet?",
      answer:
        "Flipnet is a decentralized prediction protocol that allows users to create and participate in prediction markets. It transforms traditional betting into skill-based forecasting where your insights and analysis matter more than luck.",
    },
    {
      question: "How does the flipnet work?",
      answer:
        "Flipnet operates on blockchain technology using smart contracts. Users can create prediction markets, stake tokens on outcomes, and earn rewards based on accurate predictions. All transactions are transparent and automatically executed on-chain.",
    },
    {
      question: "Is this gambling?",
      answer:
        "No, Flipnet is not gambling. It&apos;s a prediction market platform that rewards skill, research, and analysis. Unlike gambling which relies on chance, Flipnet encourages informed decision-making and provides tools for market analysis.",
    },
    {
      question: "How does the predifi pool works?",
      answer:
        "PrediFi pools are smart contract-based prediction markets where users can stake tokens on different outcomes. When the event concludes, winners receive proportional rewards based on their stake and the accuracy of their predictions.",
    },
  ];

  return (
    <div className="relative text-white mb-10 py-20 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-4xl mx-auto leading-tight">
            You Don&apos;t Just Bet. Turns Instincts Into Signals
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 flex items-start justify-center">
                  <Image src="/Frame.png" alt="" width={56} height={56} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Real-Time Statistics
              </h3>
              <p className="text-slate-400 text-sm">
                Access live market data, trends, and participant data.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 flex items-start justify-center">
                  <Image src="/Frame (1).png" alt="" width={56} height={56} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Diverse Pool Types
              </h3>
              <p className="text-slate-400 text-sm">
                From crypto markets to sports. Dive into diverse betting
                incoming soon.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 flex items-start justify-start">
                  <Image src="/Frame (2).png" alt="" width={56} height={56} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Decentralized Platform
              </h3>
              <p className="text-slate-400 text-sm">
                No central authority. Community-driven.
              </p>
            </div>
          </div>

          <button className="bg-[#37B7C31A] w-[301px] mx-auto flex flex-row justify-center items-center gap-[14px] rounded-lg p-[10px] mt-4 cursor-pointer hover:bg-[#37b7c338] transition-colors">
            Learn more
            <ArrowUpRight className="md:block hidden" />
          </button>
        </div>

        <div className="w-full md:w-[1200px] bg-[#FFFFFF0D] backdrop-blur-lg mx-auto md:p-[37px] py-[20px] px-[10px]">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </div>
  );
}
