import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="w-full min-h-screen relative bg-transparent pt-[100px] text-white overflow-">
        <div
          className="absolute inset-0 w-full h-full opacity-[10%]"
          style={{
            backgroundImage: "url('/images/topo-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-[40px] md:text-[105] font-bold bg-gradient-to-r from-[#59B1A6] to-[#CEFFF7] bg-clip-text text-transparent mb-6 text-center">
            Predict.
            <br />
            Profit. Flip
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Create or join decentralized prediction pools and earn rewards for
            your insights.
          </p>
          <div className="mb-16">
            <Link
              href="dashboard/pool-market"
              className="bg-[#37B7C3] hover:bg-cyan-500 text-slate-900 font-medium px-8 py-3 rounded-full transition-colors inline-block"
            >
              Explore Pool Market
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-16">
            <span className="text-sm text-slate-400">Powered by:</span>
            <Image src="/SN-Linear-Flat.png" alt="" width={100} height={27} />
          </div>

          <div className="w-[248px] md:w-[1104px] absolute bottom- md:-bottom-[75px] grid grid-cols-1 md:grid-cols-4 gap-[70px] bg-[#00262A66] backdrop-blur-lg p-6 rounded-lg max-w-4xl mx-auto transform -translate-x-[50%] left-[50%]">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-sm text-slate-400">Prediction Accuracy</div>
            </div>
            <div className="">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$44k+</div>
              <div className="text-sm text-slate-400">Amount Predicted</div>
            </div>
            <div className="">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5k+</div>
              <div className="text-sm text-slate-400">
                Active Prediction Pools
              </div>
            </div>
            <div className="">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2k+</div>
              <div className="text-sm text-slate-400">Total Coin Flips</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
