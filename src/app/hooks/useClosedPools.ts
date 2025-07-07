import { useState, useEffect } from 'react';
import { useContractFetch } from '@/app/hooks/useBlockchain';
import { PREDIFI_ABI } from '@/app/abi/predifi_abi';
import { GET_CLOSED_POOLS } from '@/constants/functionNames';
import { PoolDetails } from '@/lib/types';
import { shortString, num } from 'starknet';

export function useClosedPools() {
  const [closedPools, setClosedPools] = useState<PoolDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    readIsLoading,
    readError,
    readData: rawClosedPools,
  } = useContractFetch(PREDIFI_ABI, GET_CLOSED_POOLS, []);

  useEffect(() => {
    if (readIsLoading) {
      setIsLoading(true);
      return;
    }

    if (readError) {
      setError(readError.message || 'Failed to fetch closed pools');
      setIsLoading(false);
      return;
    }

    if (rawClosedPools && Array.isArray(rawClosedPools)) {
      try {
        const transformedPools: PoolDetails[] = rawClosedPools.map((pool: any) => ({
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
          minBet: pool.minBetAmount.toString(),
          maxBet: pool.maxBetAmount.toString(),
          creatorFee: pool.creatorFee.toString(),
          totalStakeOption1: pool.totalStakeOption1.toString(),
          totalStakeOption2: pool.totalStakeOption2.toString(),
          totalBetAmountStrk: pool.totalBetAmountStrk.toString(),
          totalBetCount: pool.totalBetCount.toString(),
          initialStakeShares: pool.initial_stakes_share,
          isPrivate: pool.isPrivate.toString(),
          category: Object.keys(pool.category?.variant || {})[0] ?? 'Unknown',
          poolType: Object.keys(pool.poolType?.variant || {})[0] ?? 'Unknown',
          status: Object.keys(pool.status?.variant || {})[0] ?? 'Closed',
        }));

        setClosedPools(transformedPools);
        setError(null);
      } catch (err) {
        console.error('Error transforming closed pools data:', err);
        setError('Failed to process closed pools data');
      }
    } else {
      setClosedPools([]);
    }

    setIsLoading(false);
  }, [readIsLoading, readError, rawClosedPools]);

  return {
    closedPools,
    isLoading,
    error,
    refetch: () => {
      // This would trigger a refetch if supported by useContractFetch
      setIsLoading(true);
    }
  };
}
