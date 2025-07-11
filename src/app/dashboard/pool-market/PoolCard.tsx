// app/dashboard/pool-market/PoolCard.tsx
import React from 'react';
import Image from 'next/image';
import { ChevronDown, Users, TicketsPlane } from 'lucide-react';
import Link from 'next/link';

interface PoolCardProps {
  id: number;
  title: string;
  description: string;
  poolAmount: string;
  poolDuration: string;
  tokenAmount: string;
  predictedAmount: string;
  option1: string;
  option1Percentage: string;
  option2: string;
  option2Percentage: string;
}

const PoolCard: React.FC<PoolCardProps> = ({
  id,
  title,
  description,
  poolAmount,
  tokenAmount,
  option1,
  option1Percentage,
  option2,
  option2Percentage,
}) => {
  return (
    <>
      <div className="bg-[#111010] rounded-lg border-2 border-gray-800 p-4 w-full">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center justify-center">
            <Image width={50} height={40} src="/AI.png" alt="AI icon" />
          </div>
          <h1 className="text-white text-xl font-bold">{title}</h1>
        </div>

        <p className="text-gray-400 text-xs mb-4">{description}</p>

        <div className="flex justify-between mb-4">
          <div className="bg-[#232323] rounded-lg border-1 border-gray-400  p-3 flex-1 mr-2">
            <div className="flex items-center mb-1">
              <span className="text-white text-xs">Total Stake</span>
            </div>
            <div className="flex items-center">
              <TicketsPlane size={21} className="text-[#259BA6] mr-2" />
              <span className="text-white text-sm font-medium">
                {poolAmount}
              </span>
            </div>
          </div>

          <div className="bg-[#232323] rounded-lg border-1 border-gray-400 p-3 flex-1 ml-2">
            <div className="flex items-center mb-1">
              <span className="text-white text-xs">Participants</span>
            </div>
            <div className="flex items-center">
              <Users size={21} className="text-[#259BA6] mr-2" />
              <span className="text-white text-sm font-medium">
                {tokenAmount}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <div className="flex items-center w-full">
            <div className="flex items-center justify-between w-full px-2 py-1.5 bg-[#2d200b] rounded-md text-xs]">
              <span className="truncate text-sm">{option1}</span>
              <span className="text-white text-sm font-bold">
                {option1Percentage}
              </span>
            </div>
          </div>

          <div className="flex items-center w-full">
            <div className="flex items-center justify-between w-full px-2 py-1.5 bg-[#2a1427] rounded-md">
              <span className="truncate text-sm">{option2}</span>
              <span className="text-white text-sm font-bold">
                {option2Percentage}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <ChevronDown size={20} />
          </div>
        </div>

        <Link
          href="/dashboard/pool-market/[id]"
          as={`/dashboard/pool-market/${id}`}
        >
          <button className="w-full py-3 text-white bg-[#111010] border border-gray-400 rounded-md text-sm font-medium hover:bg-[#252424] transition cursor-pointer">
            <span> Join Pool</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default PoolCard;
