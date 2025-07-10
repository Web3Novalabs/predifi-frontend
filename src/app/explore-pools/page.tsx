"use client";

import React from "react";
import PoolCard from "./component/PoolCard";
import PoolCardSkeleton from "./component/PoolLoading";
import { ArrowLeft } from "lucide-react";
import useGetActivePools from "../hooks/useGetActivePools";

export default function ExplorePools() {
  const { handleViewPool, pools, loading, readError, handleBackToHome } =
    useGetActivePools();

  return (
    <div className="bg-[#001112] h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <button
          onClick={handleBackToHome}
          className="flex items-center gap-x-2 mt-4 w-fit text-sm  rounded-full border-slate-700 border-[0.7px] py-2 px-4 text-slate-300 transition"
        >
          <ArrowLeft /> Back To Homepage
        </button>

        <div className="text-start mt-10">
          <h1 className="text-[40px] md:text-[105] font-bold bg-gradient-to-r from-[#59B1A6] to-[#CEFFF7] bg-clip-text text-transparent  ">
            Explore Pools
          </h1>
          <p className="text-lg text-slate-300 mb-10">
            Explore active prediction pools and stake your bets on real-world
            outcomes.
          </p>
        </div>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <PoolCardSkeleton key={idx} />
              ))}
          </div>
        ) : pools.length === 0 || readError !== null ? (
          <div className="text-center text-slate-500 text-xl py-10">
            No active pools available.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pools.map((pool) => (
              <PoolCard
                poolDescription={pool.poolDescription}
                poolId={pool.poolId}
                poolName={pool.poolName}
                option1={pool.option1}
                option2={pool.option2}
                status={pool.status}
                handleViewPool={handleViewPool}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
