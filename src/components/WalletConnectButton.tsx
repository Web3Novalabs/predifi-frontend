"use client";
import { useAccount } from "@starknet-react/core";
import Image from "next/image";
import { useState } from "react";
import { useWalletContext } from "./WalletProvider";
import ConnectWalletModal from "./ConnectWalletModal";
import { shortenAddress } from "@/lib/utils";

function WalletConnectButton() {
  const { address } = useAccount();
  const [showConnectModal, setShowConnectModal] = useState<boolean>(false);
  const { account, connectWallet, disconnectWallet, connectors } =
    useWalletContext();
  return (
    <>
      <ConnectWalletModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
      />
      {address ? (
        <button className="flex items-center space-x-2 text-gray-400 hover:text-white py-1 px-3 border-2 border-gray-600 rounded-md">
          <Image
            src="/accountUser.png"
            alt="User Avatar"
            width={30}
            height={30}
          />
          <span className="hidden md:inline">
            Account ID: {shortenAddress(address)}
          </span>
        </button>
      ) : (
        <button
          className="flex items-center space-x-2 text-gray-400 hover:text-white py-1 px-3 border-2 border-gray-600 rounded-md"
          onClick={() => setShowConnectModal(true)}
        >
          Connect Wallet
        </button>
      )}
    </>
  );
}

export default WalletConnectButton;
