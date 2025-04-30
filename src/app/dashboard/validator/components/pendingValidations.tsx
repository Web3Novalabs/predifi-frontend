import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Pool from "./pool";
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
  onPreviewClick?: (id: string) => void;
}

interface PendingValidationProps {
  pendingValidations?: ValidationItem[];
  onPreviewClick?: (id: string) => void;
}

const PendingValidation: React.FC<DashboardProps & PendingValidationProps> = ({
  pendingValidations = [],
}) => {
  const [selectedPoolId, setSelectedPoolId] = useState<string | null>(null);

  const handleReviewClick = (id: string) => {
    setSelectedPoolId(id);
  };

  const handleBackToList = () => {
    setSelectedPoolId(null);
  };

  if (selectedPoolId) {
    const selectedPool = pendingValidations.find(
      (item) => item.id === selectedPoolId
    );

    return (
      <div className="text-white min-h-screen w-full">
        <button
          onClick={handleBackToList}
          className="mb-4 flex items-center gap-2 text-gray-400 hover:text-white"
        >
          ← Back to validations
        </button>

        {selectedPool && (
          <div className="rounded-md p-4 w-full">
            <h2 className="text-xl mb-4">{selectedPool.title}</h2>
            <Pool poolId={selectedPoolId} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="text-white min-h-screen w-full">
      <div className="hidden md:block overflow-x-auto border border-[#515461] rounded-md pt-3">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-400 uppercase">
              <th className="text-left pb-2 pl-2">Pool Title</th>
              <th className="text-left pb-2">End Time</th>
              <th className="text-left pb-2">Stake</th>
              <th className="text-left pb-2">Participant</th>
              <th className="text-right pb-2"></th>
            </tr>
          </thead>
          <tbody>
            {pendingValidations.length > 0 ? (
              pendingValidations.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-[#515461] rounded-lg"
                >
                  <td className="py-4 pl-2 flex items-center gap-2">
                    <div className="w-8 h-8 p-1 border border-[#259BA599] flex items-center justify-center rounded-md text-xs">
                      <Image
                        src="/Rectangle 206.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>{item.title}</span>
                  </td>
                  <td className="py-4">{item.endTime}</td>
                  <td className="py-4">${item.stake}</td>
                  <td className="py-4">{item.participants}</td>
                  <td className="py-4 text-right pr-2">
                    <button
                      className="bg-[#259BA5] text-black px-4 py-1 rounded flex items-center gap-1 cursor-pointer"
                      onClick={() => handleReviewClick(item.id)}
                    >
                      Review
                      <ArrowRight size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-400">
                  No pending validations
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {pendingValidations.length > 0 ? (
          pendingValidations.map((item) => (
            <div
              key={item.id}
              className="border border-[#515461] rounded-md p-4 space-y-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 p-1 border border-[#259BA599] flex items-center justify-center rounded-md text-xs">
                  <Image
                    src="/Rectangle 206.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-medium">{item.title}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-400">End Time</p>
                  <p>{item.endTime}</p>
                </div>
                <div>
                  <p className="text-gray-400">Stake</p>
                  <p>${item.stake}</p>
                </div>
                <div>
                  <p className="text-gray-400">Participants</p>
                  <p>{item.participants}</p>
                </div>
              </div>

              <button
                className="bg-[#259BA5] text-black px-4 py-2 rounded flex items-center justify-center gap-1 w-full cursor-pointer"
                onClick={() => handleReviewClick(item.id)}
              >
                Review
                <ArrowRight size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="py-4 text-center text-gray-400 border border-[#515461] rounded-md p-4">
            No pending validations
          </div>
        )}
      </div>
    </div>
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
      {
        id: "2",
        title: "Will ETH surpass $12K in May?",
        endTime: "Apr 22, 3hrs",
        stake: "3,450",
        participants: 187,
      },
    ],
  };

  return <PendingValidation {...dashboardData} />;
}
