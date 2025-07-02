"use client";
import React, { useCallback } from "react";
 
import { sepolia, mainnet, Chain } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
  voyager,
  jsonRpcProvider
} from "@starknet-react/core";
 
export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [
      argent(),
      braavos(),
    ],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random"
  });


    const rpc = useCallback((chain: Chain) => {
    return {
      nodeUrl: "https://starknet-sepolia.public.blastapi.io"
    };
  }, []);


    const provider = jsonRpcProvider({ rpc });

  return (
    <StarknetConfig
      chains={[mainnet, sepolia]}
      provider={provider}
      connectors={connectors ?? []}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}