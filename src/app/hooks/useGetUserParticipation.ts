import { Address, useReadContract } from "@starknet-react/core";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";

interface UseGetUserParticipation {
  enabled?: boolean;
  watch?: boolean;
  poolId?: string,
  userAddress?: Address;
  refetchInterval?:
    | number
    | false
    | ((query: unknown ) => number | false | undefined);
}

const useGetUserParticiaptionInPool = ({
  enabled = true,
  watch = false,
  poolId,
  userAddress,
  refetchInterval,
}: UseGetUserParticipation = {}) => {
  const { data, error, isLoading, status } = useReadContract({
    abi: PREDIFI_ABI,
    functionName: "has_user_participated_in_pool",
    address: PREDIFI_CONTRACT_ADDRESS,
    args: [userAddress, poolId],
    enabled,
    watch,
    refetchInterval,
  });

  return {
    data,
    error,
    isLoading,
    status,
  };
};

export default useGetUserParticiaptionInPool;
