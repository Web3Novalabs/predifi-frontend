// app/dashboard/pool-market/ClosedPoolCard.tsx
import React from 'react';
import Image from 'next/image';
import { Users, TicketsPlane, Lock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { PoolDetails } from '@/lib/types';
import { formatTimeDiffFromNow, shortenAddress } from '@/lib/utils';

interface ClosedPoolCardProps {
  pool: PoolDetails;
}

const ClosedPoolCard: React.FC<ClosedPoolCardProps> = ({ pool }) => {
  return (
    <div className="bg-[#0a0a0a] rounded-lg border-2 border-gray-700 p-4 w-full opacity-75">
      {/* Closed Status Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Lock size={16} className="text-red-400" />
          <span className="text-red-400 text-xs font-medium uppercase tracking-wide">
            CLOSED
          </span>
        </div>
        <CheckCircle size={16} className="text-green-400" />
      </div>

      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center justify-center">
          <Image width={50} height={40} src="/AI.png" alt="Pool icon" />
        </div>
        <h1 className="text-gray-300 text-xl font-bold">
          {pool.poolName}
        </h1>
      </div>

      <p className="text-gray-500 text-xs mb-4 line-clamp-2">
        {pool.poolDescription}
      </p>

      <div className="flex justify-between mb-4">
        <div className="bg-[#1a1a1a] rounded-lg border border-gray-600 p-3 flex-1 mr-2">
          <div className="flex items-center mb-1">
            <span className="text-gray-400 text-xs">Total Stake</span>
          </div>
          <div className="flex items-center">
            <TicketsPlane size={21} className="text-gray-500 mr-2" />
            <span className="text-gray-300 text-sm font-medium">
              ${pool.totalBetAmountStrk}
            </span>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg border border-gray-600 p-3 flex-1 ml-2">
          <div className="flex items-center mb-1">
            <span className="text-gray-400 text-xs">Participants</span>
          </div>
          <div className="flex items-center">
            <Users size={21} className="text-gray-500 mr-2" />
            <span className="text-gray-300 text-sm font-medium">
              {pool.totalBetCount}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <div className="flex items-center w-full">
          <div className="flex items-center justify-between w-full px-2 py-1.5 bg-[#1a1012] rounded-md border border-gray-600">
            <span className="truncate text-sm text-gray-400">{pool.option1}</span>
            <span className="text-gray-300 text-sm font-bold">
              {((Number(pool.totalStakeOption1) / (Number(pool.totalStakeOption1) + Number(pool.totalStakeOption2))) * 100 || 0).toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="flex items-center w-full">
          <div className="flex items-center justify-between w-full px-2 py-1.5 bg-[#1a1012] rounded-md border border-gray-600">
            <span className="truncate text-sm text-gray-400">{pool.option2}</span>
            <span className="text-gray-300 text-sm font-bold">
              {((Number(pool.totalStakeOption2) / (Number(pool.totalStakeOption1) + Number(pool.totalStakeOption2))) * 100 || 0).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {/* Additional Info for Closed Pools */}
      <div className="bg-[#1a1a1a] rounded-md border border-gray-600 p-3 mb-4">
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>Ended:</span>
          <span>{formatTimeDiffFromNow(Number(pool.endTime))} ago</span>
        </div>
        <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
          <span>Creator:</span>
          <span>{shortenAddress(pool.address as `0x${string}`)}</span>
        </div>
      </div>

      <Link
        href="/dashboard/pool-market/[id]"
        as={`/dashboard/pool-market/${pool.poolId}`}
      >
        <button className="w-full py-3 text-gray-400 bg-[#0a0a0a] border border-gray-600 rounded-md text-sm font-medium hover:bg-[#1a1a1a] transition cursor-pointer">
          <span>View Results</span>
        </button>
      </Link>
    </div>
  );
};

export default ClosedPoolCard;
