import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BenefitsSection() {
  return (
    <div className="relative text-white py-20 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Where your predictions shape the outcome, not just your luck.
          </h2>
        </div>

        <div className="space-y-16">
          <div className="bg-[#FFFFFF0D] backdrop-blur-lg md:w-[95%] mx-auto border-1 border-[#B5F6FB] grid md:grid-cols-2 gap-12 items-center rounded-[17px] md:rounded-[33px] p-8">
            <div className="order-2 md:order-1 flex justify-center">
              <Image src="/image 3.png" alt="" width={384} height={67} />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 tracking-wider">
                GAME-LIKE ENGAGEMENT
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Experience prediction markets like never before with our
                intuitive, game-like interface. Engage with dynamic
                visualizations and real-time feedback that makes forecasting
                both educational and entertaining. Our platform transforms
                complex market dynamics into accessible, interactive
                experiences.
              </p>
              <button className="bg-[#37B7C31A] flex flex-row gap-[14px] rounded-lg p-[10px] mt-4 cursor-pointer hover:bg-[#37b7c338] transition-colors">
                Learn more
                <ArrowUpRight className="text-[#FBF9F9]" />
              </button>
            </div>
          </div>

          <div className="md:w-[95%] mx-auto grid md:grid-cols-2 gap-12 items-center p-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 tracking-wider">
                ZERO TRUST, FULL TRANSPARENCY
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Built on blockchain technology, our platform ensures complete
                transparency and eliminates the need for trust in centralized
                authorities. Every prediction, stake, and outcome is recorded
                immutably on-chain, providing verifiable proof of all market
                activities and ensuring fair resolution of all predictions.
              </p>
              <button className="bg-[#37B7C31A] flex flex-row gap-[14px] rounded-lg p-[10px] mt-4 cursor-pointer hover:bg-[#37b7c338] transition-colors">
                Learn more
                <ArrowUpRight className="text-[#FBF9F9]" />
              </button>
            </div>
            <div className="flex justify-center">
              <Image src="/image 5.png" alt="" width={384} height={67} />
            </div>
          </div>

          <div className="bg-[#FFFFFF0D] border-1 border-[#B5F6FB] backdrop-blur-lg md:w-[95%] mx-auto grid md:grid-cols-2 gap-12 items-center rounded-[17px] md:rounded-[33px] p-8">
            <div className="order-1 md:order-2">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 tracking-wider">
                REAL ON-CHAIN OUTCOMES
              </h3>
              <p className="text-slate-300 leading-relaxed">
                All prediction outcomes are determined and executed directly on
                the blockchain through smart contracts. This ensures automatic,
                tamper-proof resolution of markets based on real-world data
                feeds and oracle networks. Your winnings are distributed
                instantly and transparently without any intermediaries.
              </p>
              <button className="bg-[#37B7C31A] flex flex-row gap-[14px] rounded-lg p-[10px] mt-4 cursor-pointer hover:bg-[#37b7c338] transition-colors">
                Learn more
                <ArrowUpRight className="text-[#FBF9F9]" />
              </button>
            </div>
            <div className="order-2 md:order-1 flex justify-center">
              <Image src="/image 4.png" alt="" width={384} height={67} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
