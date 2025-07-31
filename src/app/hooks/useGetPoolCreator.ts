import { useReadContract } from "@starknet-react/core";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";

interface useGetPoolCreatorInterface {
  enabled?: boolean;
  watch?: boolean;
  poolId?: string;
  refetchInterval?:
    | number
    | false
    | ((query: any) => number | false | undefined);
}

function useGetPoolCreator({
  enabled = true,
  watch = false,
  poolId,
  refetchInterval,
}: useGetPoolCreatorInterface) {
  const { data, error, isLoading, status } = useReadContract({
    abi: PREDIFI_ABI,
    functionName: "get_pool_creator",
    address: PREDIFI_CONTRACT_ADDRESS,
    args: [poolId],
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
}

export default useGetPoolCreator;