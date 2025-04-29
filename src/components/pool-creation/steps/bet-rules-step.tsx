"use client";

import { motion } from "framer-motion";
import  {Input}  from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePoolCreation } from "@/contexts/pool-creation-context";

export default function BetRulesStep() {
  const { formData, updateFormData } = usePoolCreation();
  const feeOptions = ["0", "0.5", "1", "2", "5"];

  return (
    <motion.div
      className="space-y-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-6">
        Step 3: Bet Rules and Privacy
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Minimum bet amount
          </label>
          <Input
            placeholder="amount in strk"
            className="bg-transparent border-gray-700 focus:border-teal-500"
            value={formData.minBetAmount}
            onChange={(e) => updateFormData({ minBetAmount: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Maximum bet amount
          </label>
          <Input
            placeholder="amount in strk"
            className="bg-transparent border-gray-700 focus:border-teal-500"
            value={formData.maxBetAmount}
            onChange={(e) => updateFormData({ maxBetAmount: e.target.value })}
          />
        </div>

        <div className="flex items-center gap-5">
          <label className="block text-sm font-medium">Creator fee</label>
          <div className="flex items-center gap-2 bg-[#1F2024] px-2 rounded">
            <Input
              className="bg-transparent border-transparent focus:outline-transparent w-20"
              value={formData.creatorFee}
              onChange={(e) => updateFormData({ creatorFee: e.target.value })}
            />
            <span className="text-gray-400">%</span>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mt-4">
            {feeOptions.map((fee) => (
              <Button
                key={fee}
                variant={formData.creatorFee === fee ? "default" : "outline"}
                size="sm"
                className={
                  formData.creatorFee === fee
                    ? "bg-gray-800 text-white border-gray-700 rounded-3xl"
                    : "border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent rounded-3xl hover:text-white"
                }
                onClick={() => updateFormData({ creatorFee: fee })}
              >
                {fee}%
              </Button>
            ))}
          </div>

          <p className="text-sm text-white italic mt-5">
            You&apos;ll earn {formData.creatorFee}% from total staked
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Privacy</label>
          <div className="flex">
            <Button
              variant={formData.privacy === "public" ? "default" : "outline"}
              className={
                formData.privacy === "public"
                  ? "rounded-r-none bg-teal-500 hover:bg-teal-600 py-6 text-white border border-teal-500"
                  : "rounded-r-none border-gray-700 hover:bg-gray-800 bg-transparent py-6 text-white border"
              }
              onClick={() => updateFormData({ privacy: "public" })}
            >
              Public
            </Button>
            <Button
              variant={formData.privacy === "private" ? "default" : "outline"}
              className={
                formData.privacy === "private"
                  ? "rounded-l-none bg-teal-500 hover:bg-teal-600 py-6 text-white border border-teal-500"
                  : "rounded-l-none border-gray-700 hover:bg-gray-800 bg-transparent py-6 text-white border"
              }
              onClick={() => updateFormData({ privacy: "private" })}
            >
              Private
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
