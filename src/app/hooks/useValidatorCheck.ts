import { useReadContract, useAccount } from "@starknet-react/core";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";

interface UseAdminCheckOptions {
  enabled?: boolean;
}

const useValidatorCheck = ({ enabled = true }: UseAdminCheckOptions = {}) => {
  const { address } = useAccount();

  const { data: isValidator, isLoading: isValidatorLoading } = useReadContract({
    abi: PREDIFI_ABI,
    functionName: "is_validator",
    address: PREDIFI_CONTRACT_ADDRESS,
    args: [address],
    enabled: enabled && !!address,
  });

  const isLoading = isValidatorLoading;

  return {
    isValidator: Boolean(isValidator),    
    isLoading,
    address,
  };
};

export default useValidatorCheck;
