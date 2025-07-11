"use client";

import Link from "next/link";

type PoolCardProps = {
  poolId: string;
  poolName: string;
  poolDescription: string;
  option1: string;
  option2: string;
  status: string;
  handleViewPool: (id: string) => void;
};

export default function PoolCard({
  poolId,
  poolName,
  poolDescription,
  option1,
  option2,
  status,
  handleViewPool,
}: PoolCardProps) {
  return (
    <Link href={`/dashboard/pool-market/${poolId}`}>
      <div className="rounded-xl bg-[#00262A66] space-y-3 backdrop-blur-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-center">
          <p className="text-xs text-slate-400">Pool ID: #{poolId}</p>
          <div
            className={`inline-block px-4 py-1 text-xs font-medium rounded-full shadow-md transition-all
              ${
                status === "Active"
                  ? "bg-gradient-to-r from-[#59B1A6] to-[#CEFFF7] text-slate-900 animate-fade-in"
                  : "bg-slate-900 dark:bg-gray-700 text-cyan-600 dark:text-gray-300"
              }`}
          >
            {status}
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl first-letter:uppercase first-letter:tracking-wide mb-1 font-semibold text-slate-300 dark:text-white tracking-tight leading-snug">
              {poolName}
            </h3>
            <p className="text-sm px-1 text-slate-400 first-letter:uppercase">
              {poolDescription}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-slate-400 mb-2">Options</p>
          <div className="flex items-center gap-x-2">
            <div className="text-cyan-500 capitalize text-sm rounded-full border border-slate-700 px-4 py-1 inline-block">
              {option1}
            </div>
            <div className="text-cyan-500 capitalize text-sm rounded-full border border-slate-700 px-4 py-1 inline-block">
              {option2}
            </div>
          </div>
        </div>

        <button
          onClick={() => handleViewPool(poolId)}
          className="mt-4 w-full rounded-full bg-[#37B7C3] text-slate-900 py-2 font-semibold hover:bg-cyan-500 transition"
        >
          View Pool
        </button>
      </div>
    </Link>
  );
}
