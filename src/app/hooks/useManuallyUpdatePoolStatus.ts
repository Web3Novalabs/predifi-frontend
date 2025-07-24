import { useContract, useAccount } from "@starknet-react/core";
import { PREDIFI_ABI } from "../abi/predifi_abi";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";
import { useState } from "react";
import { cairo, CallData } from "starknet";
import { myProvider } from "@/lib/utils";
import toast from "react-hot-toast";

export interface PoolStatus {
  active?: string;
  locked?: string;
  settled?: string;
  closed?: string;
}

interface UseManuallyUpdatePoolStateOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

const useManuallyUpdatePoolState = ({
  onSuccess,
  onError,
}: UseManuallyUpdatePoolStateOptions = {}) => {
  const { account } = useAccount();
  const { contract } = useContract({
    abi: PREDIFI_ABI,
    address: PREDIFI_CONTRACT_ADDRESS,
  });

  const [isLoading, setIsLoading] = useState(false);

  const updatePoolState = async (
    poolId: string | number,
    newStatus: PoolStatus
  ) => {
    if (!account) {
      const errorMsg = "Wallet not connected";
      onError?.(errorMsg);
    }

    if (!contract) {
      const errorMsg = "Contract not available";
      onError?.(errorMsg);
    }

    setIsLoading(true);

    try {
      const poolIdU256 = cairo.uint256(poolId.toString());
      const callData = CallData.compile({
        pool_id: poolIdU256,
        new_status: newStatus,
      });

      const result = await account?.execute({
        contractAddress: PREDIFI_CONTRACT_ADDRESS,
        entrypoint: "manually_update_pool_state",
        calldata: callData,
      });

      //   await account.waitForTransaction(result.transaction_hash);
      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );

      onSuccess?.(result);
      setIsLoading(false);

      if (status.isSuccess()) {
        toast.success("Success! 🎉 Pool status has been updated.");
        setIsLoading(false);
      }
    } catch (err: any) {
      const errorMessage =
        err?.message || "Failed to update pool state. Try again.";
      toast.error(errorMessage);
      setIsLoading(false);
      onError?.(err);
    }
  };

  return {
    updatePoolState,
    isLoading,
  };
};

export default useManuallyUpdatePoolState;
