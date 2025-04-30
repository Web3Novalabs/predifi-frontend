import React from "react";
import Image from "next/image";
import bestai_img from "@/assets/bestAi.png";
import { ActivePredictionProps } from "@/lib/types";

const ActivePrediction: React.FC<ActivePredictionProps> = ({
  title,
  date,
  status,
  potentialPayout,
  stake,
  odd,
  id,
  description,
  statusIcon,
  idIcon,
  actionIcon,
}) => {
  return (
    <div className="mt-4 bg-transparent border-[0.5px] border-[#1F2024] bg-opacity-50 rounded-lg p-4 scrollbar-hidden">
      <div className="flex justify-between items-center mb-4 border-[0.5px] border-[#515461] rounded-[8px] p-4">
        <div>
          <h3 className="font-bold text-white text-[14px] mb-2">{title}</h3>
          <div className="text-gray-400 text-[10px]">{date}</div>
        </div>
        <div className="flex items-center">
          <span className="text-[#5AC429] text--[12px] font-semibold mr-2">
            {status}
          </span>
          {statusIcon}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-[#CCCCCC] text-[12px]">Potential Payout:</span>
          <span className="font-bold text-[16px] text-white">
            {potentialPayout}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#CCCCCC] text-[12px]">Stake</span>
          <span className="font-normal text-[12px]">{stake}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#CCCCCC] text-[12px]">Odd</span>
          <span className="font-normal text-[12px]">{odd}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#CCCCCC] text-[12px]">ID No.</span>
          <div className="flex items-center">
            <span className="font-normal text-[12px]">{id}</span>
            <span className="ml-1 text-gray-400 cursor-pointer">{idIcon}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <Image src={bestai_img} alt="prediction" />
            <span className="text-[#FCFCFC] text-[12.06px] font-semibold">
              {description}
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-400 cursor-pointer">
              {actionIcon}
            </span>
            <span className="font-bold text-[10px]">185</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePrediction;
