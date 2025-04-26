import { Button } from "@/components/ui/button";
import { PlusIcon, ArrowUpRight } from "lucide-react";
import SummaryCard from "@/components/dashboard/wallet/summary-card";

// TODO: remove sample data when API is ready
const summaryCardData = [
  {
    title: "Current Balance",
    amount: "$1,205",
  },
  {
    title: "Locked Token",
    amount: "$1,205",
  },
  {
    title: "Claimable Token",
    amount: "$1,205",
  }
]

export default function Wallet() {
  return (
    <div className="text-white space-y-12">
      <section className="space-y-5">
        <header className="flex gap-4 max-md:flex-col justify-between md:items-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">Wallet Analysis</h1>
          <div className="flex gap-x-2">
            <Button
              className="bg-[#259BA5] text-black font-medium hover:bg-[#259BA5]/80
              transition-colors disabled:opacity-50 space-x-2.5">
              Deposit <PlusIcon className="w-4" />
            </Button>

            <Button
              variant="ghost"
              className="hover:bg-transparent hover:text-white"
            >
              Withdrawal <ArrowUpRight className="w-4" />
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-2.5 hover:bg-transparent hover:text-white"
            >
              Rewards <span className="bg-[#259BA5] text-black px-1 rounded-full py-px">3</span>
            </Button>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-2.5">
          {summaryCardData.map((card, index) => (
            <SummaryCard key={index} title={card.title} amount={card.amount} />
          ))}
        </div>
      </section>
    </div>
  )
}
