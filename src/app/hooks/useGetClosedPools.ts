import { useReadContract } from "@starknet-react/core";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";

interface UseGetClosedPoolsOptions {
  enabled?: boolean;
  watch?: boolean;
  refetchInterval?:
    | number
    | false
    | ((query: unknown) => number | false | undefined);
}

const useGetClosedPools = ({
  enabled = true,
  watch = false,
  refetchInterval,
}: UseGetClosedPoolsOptions = {}) => {
  const { data, error, isLoading, status } = useReadContract({
    abi: PREDIFI_ABI,
    functionName: "get_closed_pools",
    address: PREDIFI_CONTRACT_ADDRESS,
    args: [],
    enabled,
    watch,
    refetchInterval,
  });

  // TODO: parse the data to make sure we are returning it in the correct format
  const closedPools = data || [];

  return {
    data: closedPools,
    error,
    isLoading,
    status,
  };
};

export default useGetClosedPools;