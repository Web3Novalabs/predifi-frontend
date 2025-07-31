import { PoolDetails } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { GET_ACTIVE_POOLS } from "@/constants/functionNames";
import { useContractFetch } from "./useBlockchain";
import { num, shortString } from "starknet";
import { Pool } from "@/@types";

export default function useGetActivePools() {
  const [pools, setPools] = useState<PoolDetails[]>([]);

  const router = useRouter();

  const {
    readIsLoading: loading,
    readError,
    readData: poolDetailsList,
  } = useContractFetch(PREDIFI_ABI, GET_ACTIVE_POOLS);

  useEffect(() => {
    if (!Array.isArray(poolDetailsList)) return;
    console.log(poolDetailsList);
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
        isPrivate: pool.isPrivate,
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

  const handleBackToHome = () => {
    router.push(`/`);
  };

  return {
    loading,
    pools,
    readError,
    handleViewPool,
    handleBackToHome,
  };
}
