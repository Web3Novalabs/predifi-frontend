import { ActionType } from "@/lib/types";
import { myProvider } from "@/lib/utils";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";
import { useAccount } from "@starknet-react/core";
import { useState } from "react";
import toast from "react-hot-toast";
import { cairo, CallData } from "starknet";

export default function useStakePool(poolId: string) {
  const { account } = useAccount();

  const [stakeStatus, setStakeStatus] = useState<ActionType>("idle");

  const stakeOnPool = async (amount: string) => {
    if (!account) {
      toast.error("Account not connected!");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid stake amount!");
      return;
    }

    try {
      setStakeStatus("pending");      
      
      const result = await account.execute({
        contractAddress: PREDIFI_CONTRACT_ADDRESS,
        entrypoint: "stake",
        calldata: CallData.compile({
          pool_id: cairo.uint256(poolId),
          amount: cairo.uint256(amount),
        }),
      });

      const status = await myProvider.waitForTransaction(
        result.transaction_hash
      );

      if (status.isSuccess()) {
        toast.success(`Success! Staked ${amount} STRK on the pool.`);
        setStakeStatus("success");
      }
    } catch (err) {
      console.log(err);
      setStakeStatus("error");
      toast.error("Error staking on pool. Please try again.");
    } finally {
      setStakeStatus("idle");
    }
  };

  return {
    stakeStatus,
    stakeOnPool,
  };
}
