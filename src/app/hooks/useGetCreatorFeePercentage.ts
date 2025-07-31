import { useReadContract } from "@starknet-react/core";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";

interface useGetCreatorFeePercentageInterface {
  enabled?: boolean;
  watch?: boolean;
  poolId?: string;
  refetchInterval?:
    | number
    | false
    | ((query: any) => number | false | undefined);
}

function useGetCreatorFeePercentage({
  enabled = true,
  watch = false,
  poolId,
  refetchInterval,
}: useGetCreatorFeePercentageInterface) {
  const { data, error, isLoading, status } = useReadContract({
    abi: PREDIFI_ABI,
    functionName: "get_creator_fee_percentage",
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

export default useGetCreatorFeePercentage;
