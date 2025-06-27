"use client";
import { Connector, useConnect } from "@starknet-react/core";
import React from "react";
import { Button } from "./ui/button";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ConnectWalletModal({ isOpen, onClose }: ConnectModalProps) {
  const { connectAsync, connectors } = useConnect();

  const handleConnect = async (connector: Connector, walletType: string) => {
    try {
      await connectAsync({ connector });
      onClose();
    } catch (error) {
      console.error(`Failed to connect to ${walletType}:`, error);
    }
  };

  const wallets = [
    {
      id: "braavos",
      name: "Braavos",
      icon: "🛡️",
      description: "Connect using Braavos wallet",
    },
    {
      id: "argentX",
      name: "Argent X",
      icon: "🔷",
      description: "Connect using Argent X wallet",
    },
  ];

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gradient-to-b backdrop-blur-md from-rgba(14, 14, 16, 0.6) to-rgba(14, 14, 16, 0.6)  bg-opacity-0 flex items-center justify-center z-50">
      <div className="bg-gray-900 w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0E0E10] shadow-lg shadow-[#25273599] p-6">
          <h2 className="text-[#E9E9EF] text-center font-bold text-xl mb-3">
            Connect Wallet
          </h2>
          <h3 className="text-[#E9E9EF] text-center text-base mb-4">
            Choose a wallet to connect to
          </h3>
          <div className="space-y-3 mt-6">
            {connectors.map((connector: Connector) => {
              const wallet = wallets.find(
                (wallet) => wallet.id === connector.id
              );

              if (!wallet) return null;
              return (
                <Button
                  key={wallet.name}
                  variant="outline"
                  className="w-full justify-start h-auto p-4 hover:bg-purple-50 hover:border-purple-200"
                  onClick={() => handleConnect(connector, wallet.name)}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{wallet.icon}</span>
                    <div className="text-left">
                      <div className="font-medium">{wallet.name}</div>
                      <div className="text-sm text-gray-500">
                        {wallet.description}
                      </div>
                    </div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletModal;
