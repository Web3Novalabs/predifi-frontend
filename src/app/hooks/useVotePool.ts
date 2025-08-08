import { ActionType } from "@/lib/types";
import { myProvider } from "@/lib/utils";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";
import { useAccount } from "@starknet-react/core";
import { useState } from "react";
import toast from "react-hot-toast";
import { cairo, CallData } from "starknet";

export default function useVotePool(poolId: string) {
  const { account } = useAccount();

  const [voteStatus, setVoteStatus] = useState<ActionType>("idle");

  const voteOnPool = async (option: string, amount: string, poolStatus?: string) => {
    if (!account) {
      toast.error("Account not connected!");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid vote amount!");
      return;
    }

    if (!option) {
      toast.error("Please select an option!");
      return;
    }

    // Check if pool is active
    if (poolStatus && poolStatus !== "Active") {
      toast.error("Cannot vote on inactive pool!");
      return;
    }


    try {
      setVoteStatus("pending");

      const result = await account.execute({
        contractAddress: PREDIFI_CONTRACT_ADDRESS,
        entrypoint: "vote",
        calldata: CallData.compile({
          pool_id: cairo.uint256(poolId),
          option: cairo.felt(option),
          amount: cairo.uint256(amount),
        }),
      });

      const status = await myProvider.waitForTransaction(
        result.transaction_hash
      );

      if (status.isSuccess()) {
        toast.success(`Success! Voted ${amount} STRK on ${option}.`);
        setVoteStatus("success");
        return true;
      }
      return false;
    } catch (err) {
      console.log(err);
      setVoteStatus("error");
      toast.error("Error voting on pool. Please try again.");
      return false;
    } finally {
      setVoteStatus("idle");
    }
  };

  return {
    voteStatus,
    voteOnPool,
  };
} 