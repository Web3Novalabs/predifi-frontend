"use client";
import { useAccount } from "@starknet-react/core";
import Image from "next/image";
import { useState } from "react";
import ConnectWalletModal from "./ConnectWalletModal";
import { shortenAddress } from "@/lib/utils";
import WalletDisconnectModal from "./Wallet-disconnect-modal";
import { LogOut } from "lucide-react";

function WalletConnectButton() {
  const { address } = useAccount();
  const [showConnectModal, setShowConnectModal] = useState<boolean>(false);
  const [showDisconnectModal, setShowDisconnectModal] =
    useState<boolean>(false);
  return (
    <>
      <ConnectWalletModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
      />
      <WalletDisconnectModal
        isOpen={showDisconnectModal}
        onClose={() => {
          setShowDisconnectModal(false);
        }}
      />
      {address ? (
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-[6px] text-white  p-2 border-1 border-[#515461] rounded-[6px]">
            <Image
              src="/accountUser.png"
              alt="User Avatar"
              width={20}
              height={20}
            />
            <span className="hidden md:inline text-base">
              {shortenAddress(address)}
            </span>

            <button
              className="text-[#EBEBED]"
              onClick={() => setShowDisconnectModal(true)}
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="flex text-white py-2 px-3 border-1 border-[#515461] rounded-md"
          onClick={() => setShowConnectModal(true)}
        >
          Connect Wallet
        </button>
      )}
    </>
  );
}

export default WalletConnectButton;
