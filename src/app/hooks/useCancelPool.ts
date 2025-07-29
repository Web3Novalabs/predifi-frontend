import { ActionType } from "@/lib/types";
import { myProvider } from "@/lib/utils";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";
import { useAccount } from "@starknet-react/core";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { cairo, CallData } from "starknet";

export default function useCancelPool(poolId: string) {
  const { account } = useAccount();

  const [cancelstatus, setCancelStatus] = useState<ActionType>("idle");

  const cancelPool = async () => {
    if (!account) {
      toast.error("Account not connected!");
      return;
    }
    try {
      setCancelStatus("pending");
      const result = await account.execute({
        contractAddress: PREDIFI_CONTRACT_ADDRESS,
        entrypoint: "cancel_pool",
        calldata: CallData.compile({
          pool_id: cairo.uint256(poolId),
        }),
      });

      const status = await myProvider.waitForTransaction(
        result.transaction_hash
      );

      if (status.isSuccess()) {
        toast.success("Success! pool cancelled successfully.");
        setCancelStatus("success");
      }
    } catch (err) {
      console.log(err);
      setCancelStatus("error");
      toast.error("Error cancelling pool .");
    } finally {
      setCancelStatus("idle");
    }
  };

  return {
    cancelstatus,
    cancelPool,
  };
}
