"use client";

import React, { useEffect, useState } from "react";
import { num, shortString } from "starknet";
import { PoolDetails } from "@/lib/types";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { GET_ACTIVE_POOLS } from "@/constants/functionNames";
import { useContractFetch } from "../hooks/useBlockchain";
import PoolCard from "./component/PoolCard";
import PoolCardSkeleton from "./component/PoolLoading";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowRightLeft } from "lucide-react";

export default function ExplorePools() {
  const [pools, setPools] = useState<PoolDetails[]>([]);

  const router = useRouter();

  const {
    readIsLoading: loading,
    readError,
    readData: poolDetailsList,
  } = useContractFetch(PREDIFI_ABI, GET_ACTIVE_POOLS);

  useEffect(() => {
    if (!Array.isArray(poolDetailsList)) return;
    const decodedPools = poolDetailsList.map(
      (pool: any): PoolDetails => ({
        poolId: pool.pool_id.toString(),
        address: num.toHex(pool.address),
        poolName: shortString.decodeShortString(pool.poolName),
        poolDescription: pool.poolDescription,
        poolImage: pool.poolImage,
        eventSourceUrl: pool.poolEventSourceUrl,
        startTime: pool.poolStartTime.toString(),
        lockTime: pool.poolLockTime.toString(),
        endTime: pool.poolEndTime.toString(),
        option1: shortString.decodeShortString(pool.option1),
        option2: shortString.decodeShortString(pool.option2),
        totalStakeOption1: pool.totalStakeOption1.toString(),
        totalStakeOption2: pool.totalStakeOption2.toString(),
        totalBetAmountStrk: pool.totalBetAmountStrk.toString(),
        totalBetCount: pool.totalBetCount.toString(),
        initialStakeShares: pool.initial_stakes_share,
        minBet: pool.minBetAmount.toString(),
        maxBet: pool.maxBetAmount.toString(),
        creatorFee: pool.creatorFee.toString(),
        isPrivate: pool.isPrivate.toString(),
        category: Object.keys(pool.category?.variant || {})[0] ?? "Unknown",
        poolType: Object.keys(pool.poolType?.variant || {})[0] ?? "Unknown",
        status: Object.keys(pool.status?.variant || {})[0] ?? "Unknown",
      })
    );

    setPools(decodedPools);
  }, [poolDetailsList]);

  const handleViewPool = (id: string) => {
    router.push(`/dashboard/pool-market/${id}`);
  };

  return (
    <div className="bg-[#001112] h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-x-2 mt-4 w-fit text-sm  rounded-full border-slate-700 border-[0.7px] py-2 px-4 text-slate-300 transition"
        >
          <ArrowLeft /> Back To Homepage
        </button>

        <div className="text-start mt-10">
          <h1 className="text-[40px] md:text-[105] font-bold bg-gradient-to-r from-[#59B1A6] to-[#CEFFF7] bg-clip-text text-transparent  ">
            Explore Pools
          </h1>
          <p className="text-lg text-slate-300 mb-10">
           Explore active prediction pools and stake your bets on real-world outcomes.
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
