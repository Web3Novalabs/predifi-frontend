import { useReadContract } from "@starknet-react/core";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";
import { PoolDetails } from "@/lib/types";
import { num, shortString } from "starknet";

interface UseGetSettledPoolsOptions {
  enabled?: boolean;
  watch?: boolean;
  refetchInterval?:
  | number
  | false
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((query: any) => number | false | undefined);
}

const useGetSettledPools = ({
  enabled = true,
  watch = false,
  refetchInterval,
}: UseGetSettledPoolsOptions = {}) => {
  const { data, error, isLoading, status } = useReadContract({
    abi: PREDIFI_ABI,
    functionName: "get_settled_pools",
    address: PREDIFI_CONTRACT_ADDRESS,
    args: [],
    enabled,
    watch,
    refetchInterval,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const settledPools = data?.map((pool: any): PoolDetails => ({
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
    totalStakeOption1: Number(pool.totalStakeOption1.toString()),
    totalStakeOption2: Number(pool.totalStakeOption2.toString()),
    totalBetAmountStrk: Number(pool.totalBetAmountStrk.toString()),
    totalBetCount: Number(pool.totalBetCount.toString()),
    initialStakeShares: pool.initial_stakes_share || 0,
    minBet: pool.minBetAmount.toString(),
    maxBet: pool.maxBetAmount.toString(),
    creatorFee: pool.creatorFee.toString(),
    isPrivate: pool.isPrivate,
    category: Object.keys(pool.category?.variant || {})[0] ?? "Unknown",
    poolType: Object.keys(pool.poolType?.variant || {})[0] ?? "Unknown",
    status: Object.keys(pool.status?.variant || {})[0] ?? "Unknown",
  }));

  return {
    data: settledPools,
    error,
    isLoading,
    status,
  };
};

export default useGetSettledPools;
