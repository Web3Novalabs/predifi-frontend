
"use client";
import React from "react";

export default function Dashboard() {
  return <div>Dashboard</div>;
}

import React from "react";
import Chart from "@/components/dashboard/chart/Chart";
import ActivePrediction from "@/components/dashboard/active-prediction/active-prediction";
import {
  ActionIcon,
  ActivePoolIcon,
  ClaimIcon,
  IdIcon,
  StatusIcon,
  TotalEarnedIcon,
  TrendFlatIcon,
  TrendUpIcon,
  WinRateIcon,
  WithdrawalIcon,
} from "@/assets/svgs/svgs";
import { StatsCardProps } from "@/lib/types";

const Dashboard: React.FC = () => {
  const chartData = [
    { month: "JAN", value: 50 },
    { month: "FEB", value: 70 },
    { month: "MAR", value: 30 },
    { month: "APR", value: 90 },
    { month: "MAY", value: 150 }, // Highlighted bar
    { month: "JUN", value: 60 },
    { month: "JUL", value: 40 },
    { month: "AUG", value: 80 },
    { month: "SEP", value: 100 },
    { month: "OCT", value: 120 },
    { month: "NOV", value: 110 },
    { month: "DEC", value: 130 },
  ];

  const yAxisLabels = ["$100K", "$50K", "$30K", "$10K", "$0K"];

  return (
    <div className="bg-black text-white p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-[32px] text-white font-bold mb-2">
          My Dashboard
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur. Non eget non odio lobortis
          odio.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6">
        <StatsCard
          icon={
            <div className="text-cyan-400">
              <TotalEarnedIcon />
            </div>
          }
          title="TOTAL EARNED"
          value="1,255"
          trend={
            <div className="flex items-center gap-2">
              <TrendUpIcon />
              <span className="text-[10px]">65% increase</span>
            </div>
          }
        />
        <StatsCard
          icon={
            <div className="text-cyan-400">
              <ActivePoolIcon />
            </div>
          }
          title="ACTIVE POOL"
          value="75"
          trend={
            <div className="flex items-center gap-2 text-[10.15px]">
              <TrendFlatIcon />
              <span>+7 new add</span>
            </div>
          }
        />
        <StatsCard
          icon={
            <div className="text-cyan-400">
              <WinRateIcon />
            </div>
          }
          title="WIN RATE"
          value="65%"
          trend={
            <div className="flex items-center gap-2 text-[10.15px]">
              <TrendFlatIcon />
              <span>+7.8% Growth</span>
            </div>
          }
        />
        <StatsCard
          icon={
            <div className="text-cyan-400">
              <WinRateIcon />
            </div>
          }
          title="REPUTATION SCORE"
          value={
            <div>
              <span className="text-green-400">3.5</span>{" "}
              <span className="text-[20px]">/5.0</span>
            </div>
          }
          trend={
            <div className="text-cyan-400 text-[10.15px]">70% accuracy</div>
          }
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4 ">
          <div className="bg-gradient-to-b from-[#0E0E10] to-[#181C1C] rounded-[8px] p-6">
            <h2 className="text-[14px] text-[#C2C2C2] mb-2">Total Balance</h2>
            <div className="text-3xl md:text-[32px] text-white font-bold mb-[4rem]">
              $15,255.25
            </div>

            <div className="flex items-center mb-4 bg-black px-[10px] py-1 border-[0.5px] border-[#515461] rounded-[8px] w-fit">
              <span className="mr-2 text-[#C2C2C2] text-[12px]">Rewards:</span>
              <span className="font-semibold text-white">$1,255.68</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="bg-[#28C4D2] text-black py-2 px-4 rounded-[16px] text-[14px] font-medium flex items-center">
                Withdrawal <WithdrawalIcon />
              </button>
              <button className="bg-[#28C4D2] text-black py-2 px-4 rounded-full flex items-center text-[14px]">
                Claim <ClaimIcon />
              </button>
            </div>
          </div>

          <div className="bg-transparent border-[0.5px] border-[#1F2024] rounded-lg p-4">
            <div className="flex border-b border-gray-800 pb-2">
              <button className="text-cyan-400 font-semibold text-[14px] flex items-center mr-4 border-b-2 border-cyan-400 pb-2">
                Active Prediction{" "}
                <span className="bg-cyan-400 text-black rounded-full h-6 w-6 flex items-center justify-center ml-2">
                  6
                </span>
              </button>
              <button className="text-[#B6B9BE] font-semibold text-[14px] ">
                Past Predictions
              </button>
            </div>

            <div className="max-h-[20rem] overflow-scroll scrollbar-hidden">
              <ActivePrediction
                title="125,000 or above"
                date="18-04-2025 21:43"
                status="Pending"
                potentialPayout="179.52 strk"
                stake="100 strk"
                odd="2.54"
                id="19133DK"
                description="Best AI this mon..."
                statusIcon={<StatusIcon />}
                idIcon={<IdIcon />}
                actionIcon={<ActionIcon />}
              />

              <ActivePrediction
                title="125,000 or above"
                date="18-04-2025 21:43"
                status="Pending"
                potentialPayout="179.52 strk"
                stake="100 strk"
                odd="2.54"
                id="19133DK"
                description="Best AI this mon..."
                statusIcon={<StatusIcon />}
                idIcon={<IdIcon />}
                actionIcon={<ActionIcon />}
              />

              <ActivePrediction
                title="125,000 or above"
                date="18-04-2025 21:43"
                status="Pending"
                potentialPayout="179.52 strk"
                stake="100 strk"
                odd="2.54"
                id="19133DK"
                description="Best AI this mon..."
                statusIcon={<StatusIcon />}
                idIcon={<IdIcon />}
                actionIcon={<ActionIcon />}
              />
            </div>
          </div>
        </div>

        {/* Chart & Created */}
        <div className="space-y-4">
          <Chart
            title="Total Staked"
            buttonText="This Month"
            data={chartData}
            yAxisLabels={yAxisLabels}
            highlightedIndex={4} // Highlight the bar for "MAY"
          />

          <div className="bg-transparent border-[0.5px] border-[#1F2024] rounded-[8px] p-6">
            <h2 className="text-lg mb-4 w-full border-[0.5px] border-[#1F2024] p-4 rounded-[8px]">
              Created Pools
            </h2>
            {/* Empty state or placeholder for created pools */}
            <div className="h-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, trend }) => {
  return (
    <div
      className="relative rounded-[10.15px] p-5 gap-[20.31px] 
      bg-gradient-to-b from-[#0E0E10] to-[#181C1C]
      bg-clip-border text-[#28C4D2] flex h-[118.08px]  border-t border-[#515461]
      hover:rotate-2 transition duration-300 ease-in-out overflow-hidden"
    >
      <div className="flex items-center mb-2">{icon}</div>

      <div className="flex flex-col items-start gap-1">
        <span className="text-sm text-[#CFCFCF] text-[12px]">{title}</span>
        <div className="text-2xl font-bold mb-2 text-white text-[28px]">
          {value}
        </div>
        <div>{trend}</div>
      </div>
    </div>
  );
};

export default Dashboard;

