import { useReadContract } from "@starknet-react/core";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";

interface UseGetLockedPoolsOptions {
  enabled?: boolean;
  watch?: boolean;
  refetchInterval?:
    | number
    | false
    | ((query: unknown) => number | false | undefined);
}

const useGetLockedPools = ({
  enabled = true,
  watch = false,
  refetchInterval,
}: UseGetLockedPoolsOptions = {}) => {
  const { data, error, isLoading, status } = useReadContract({
    abi: PREDIFI_ABI,
    functionName: "get_locked_pools",
    address: PREDIFI_CONTRACT_ADDRESS,
    args: [],
    enabled,
    watch,
    refetchInterval,
  });

  // TODO: parse the data to make sure we are returning it in the correct format
  const lockedPools = data || [];

  return {
    data: lockedPools,
    error,
    isLoading,
    status,
  };
};

export default useGetLockedPools;
