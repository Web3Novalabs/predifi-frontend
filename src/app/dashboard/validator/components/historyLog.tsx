import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ValidationItem {
  id: number;
  name: string;
  comment: string;
  reward: string;
  dateValidated: string;
  status: string;
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

const HistoryLog: React.FC<DashboardProps> = ({ pendingValidations = [] }) => {
  return (
    <div className="text-white min-h-screen w-full">
      <div className="hidden md:block overflow-x-auto border border-[#515461] rounded-md pt-3">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-400 uppercase">
              <th className="text-left pb-2 pl-2">pool name</th>
              <th className="text-left pb-2">comment</th>
              <th className="text-left pb-2">reward</th>
              <th className="text-left pb-2">date validated</th>
              <th className="text-left pb-2">status</th>
              <th className="pb-2"></th>
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
                    <span>{item.name}</span>
                  </td>
                  <td className="py-4">{item.comment}</td>
                  <td className="py-4">${item.reward}</td>
                  <td className="py-4">{item.dateValidated}</td>
                  <td className="py-4">{item.status}</td>
                  <td className="py-4 text-right pr-2">
                    <button className="bg-[#259BA5] text-black px-4 py-1 rounded flex items-center gap-1 cursor-pointer">
                      View
                      <ArrowRight size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 text-center text-gray-400">
                  No validation history
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
                <span className="font-medium">{item.name}</span>
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-400">Comment</p>
                  <p>{item.comment}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-gray-400">Reward</p>
                    <p>${item.reward}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Date</p>
                    <p>{item.dateValidated}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400">Status</p>
                    <p>{item.status}</p>
                  </div>

                  <button className="bg-[#259BA5] text-black px-4 py-1 rounded flex items-center gap-1 cursor-pointer">
                    View
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-4 text-center text-gray-400 border border-[#515461] rounded-md p-4">
            No validation history
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
        id: 1,
        name: "Will BTC reach $200K by June?",
        comment: "Interesting prediction",
        reward: "5,250",
        dateValidated: "Apr 19 4min ago",
        status: "Completed",
      },
    ],
  };

  return <HistoryLog {...dashboardData} />;
}
