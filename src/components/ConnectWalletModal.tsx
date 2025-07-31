"use client";
import { Connector, useConnect } from "@starknet-react/core";
import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ConnectWalletModal({ isOpen, onClose }: ConnectModalProps) {
  const { connectAsync, connectors } = useConnect();

  console.log(connectors);

  const handleConnect = async (connector: Connector, walletType: string) => {
    try {
      await connectAsync({ connector });
      onClose();
    } catch (error) {
      console.error(`Failed to connect to ${walletType}:`, error);
    }
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-gradient-to-b backdrop-blur-md from-rgba(14, 14, 16, 0.6) to-rgba(14, 14, 16, 0.6)  bg-opacity-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#0E0E10] p-6 relative w-[550px] rounded-[8px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          boxShadow: "4px 4px 9.7px 0px #25273599",
        }}
      >
        <button
          className="absolute top-4 right-4 text-white cursor-pointer"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 className="text-[#FFFFFF] text-center text-2xl font-normal mb-4">
          Connect Wallet
        </h2>
        <h3 className="text-[#D9D9D9] text-center text-base mb-9 font-light">
          Choose a wallet to connect to
        </h3>
        <div className="space-y-3 mt-6">
          {connectors.map((connector: Connector) => {
            return (
              <Button
                key={connector.id}
                variant="outline"
                className="w-full justify-start h-auto py-3 px-4 bg-[#259BA6] hover:bg-[#259BA6] border-0 text-[#0E0E10] cursor-pointer"
                onClick={() => handleConnect(connector, connector.id)}
              >
                <div className="flex items-center space-x-3">
                  <img src={connector.icon as string} className="w-7" alt="" />
                  <div className="text-left">
                    <div className="font-medium text-base">
                      {connector.name}
                    </div>
                    <div className="text-sm text-white">
                      Connect to {connector.name}
                    </div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletModal;
