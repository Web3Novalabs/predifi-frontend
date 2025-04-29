"use client";
import React, { useState, useEffect } from "react";
import HistoryLog from "./components/historyLog";
import PendingValidation from "./components/pendingValidations";
import Pool from "./components/pool";
import DisclaimerModal from "./components/disclaimerModal.tsx";
import Image from "next/image";

interface ValidationItem {
  id: string;
  title: string;
  endTime: string;
  stake: string;
  participants: number;
}

interface DashboardProps {
  username?: string;
  reputationScore?: number;
  maxScore?: number;
  accuracy?: number;
  speedAvg?: number;
  tokensEarned?: number;
  pendingValidations?: ValidationItem[];
}

const Dashboard: React.FC<DashboardProps> = ({
  username = "User",
  reputationScore = 0,
  maxScore = 5.0,
  accuracy = 0,
  speedAvg = 0,
  tokensEarned = 0,
}) => {
  const [activeTab, setActiveTab] = useState<"pending" | "history">("pending");
  const [showPool,] = useState<boolean>(false);
  const [selectedPoolId,] = useState<string | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(true);

  const reputationPercentage =
    maxScore > 0 ? (reputationScore / maxScore) * 100 : 0;

  useEffect(() => {
    setShowDisclaimer(true);
  }, []);

  const closeDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <>
      <div className="text-white min-h-screen">
        <div className="flex items-center justify-between mb-8">
          <div className="">
            <h1 className="text-2xl font-bold">Welcome {username}</h1>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur. Non eget non odio lobortis
              odio.
            </p>
          </div>

          <div className="text-right">
            <p className="text-gray-400 text-xs uppercase">REPUTATION SCORE</p>
            <div className="flex items-center justify-end gap-2">
              <span className="text-[#52F66A] text-3xl font-bold">
                {reputationScore.toFixed(2)}
              </span>
              <span className="text-gray-300">/{maxScore.toFixed(1)}</span>
            </div>
            <div className="w-30 h-2 bg-gray-800 mt-1">
              <div
                className="h-full bg-[#52F66A]"
                style={{ width: `${reputationPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-[2px] bg-gradient-to-b from-[#515461] to-transparent rounded-lg">
            <div className="h-[108px] bg-gradient-to-b from-[#0E0E10] to-[#181C1C] rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">Accuracy</p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full">
                  <Image src="/Frames.svg" alt="" width={17} height={17} />
                </div>
                <span className="text-xl">{accuracy}%</span>
              </div>
            </div>
          </div>

          <div className="p-[2px] bg-gradient-to-b from-[#515461] to-transparent rounded-lg">
            <div className="h-[108px] bg-gradient-to-b from-[#0E0E10] to-[#181C1C] rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">Speed Avg.</p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full">
                  <Image src="/Frame (1).svg" alt="" width={17} height={17} />
                </div>
                <span className="text-xl">{speedAvg}%</span>
              </div>
            </div>
          </div>

          <div className="p-[2px] bg-gradient-to-b from-[#515461] to-transparent rounded-lg">
            <div className="h-[108px] bg-gradient-to-b from-[#0E0E10] to-[#181C1C] rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">Tokens Earned</p>
              <div className="flex items-center gap-2">
                <Image src="/Frame (2).svg" alt="" width={17} height={17} />
                <span className="text-xl">
                  ${tokensEarned.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("pending")}
              className={`text-sm pb-2 cursor-pointer ${
                activeTab === "pending"
                  ? "border-b-2 border-[#2BC2CF] text-[#2BC2CF]"
                  : "text-gray-400"
              }`}
            >
              PENDING VALIDATIONS
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`text-sm pb-2 cursor-pointer ${
                activeTab === "history"
                  ? "border-b-2 border-[#2BC2CF] text-[#2BC2CF]"
                  : "text-gray-400"
              }`}
            >
              HISTORY LOG
            </button>
          </div>
        </div>

        <div className="mt-8">
          {activeTab === "pending" && <PendingValidation />}
          {activeTab === "history" && <HistoryLog />}
        </div>
      </div>

      {/* Show DisclaimerModal when showDisclaimer is true */}
      <DisclaimerModal
        isOpen={showDisclaimer}
        onClose={closeDisclaimer}
        onConfirm={() => setShowDisclaimer(false)}
      />

      {showPool && selectedPoolId && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <Pool poolId={selectedPoolId} />
          </div>
        </div>
      )}
    </>
  );
};

export default function ValidatorDashboardPage() {
  const dashboardData = {
    username: "Zyrick",
    reputationScore: 3.45,
    maxScore: 5.0,
    accuracy: 89,
    speedAvg: 97,
    tokensEarned: 1255,
    pendingValidations: [
      {
        id: "1",
        title: "Will BTC reach $200K by June?",
        endTime: "Apr 19, 4min",
        stake: "5,250",
        participants: 223,
      },
    ],
  };

  return <Dashboard {...dashboardData} />;
}
