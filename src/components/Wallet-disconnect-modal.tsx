"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useDisconnect } from "@starknet-react/core";

interface WalletDisconnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletDisconnectModal({
  isOpen,
  onClose,
}: WalletDisconnectModalProps) {
  const { disconnectAsync } = useDisconnect();
  //pathname check
  const pathName = usePathname();
  const userDashboardPath = "/dashboard/user";
  const institutionDashboardPath = "/dashboard/institution";

  //router
  const router = useRouter();

  const handleDisconnect = async () => {
    if (
      userDashboardPath === pathName ||
      institutionDashboardPath === pathName
    ) {
      router.push("/"); // ■ now safe to navigate
    }
    await disconnectAsync();
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div
      className="absolute inset-0 bg-gradient-to-b backdrop-blur-md from-rgba(14, 14, 16, 0.6) to-rgba(14, 14, 16, 0.6)  bg-opacity-0 flex items-center justify-center z-50"
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
          Disconnect Wallet
        </h2>
        <h3 className="text-[#D9D9D9] text-center text-base mb-9 font-light">
          Are you sure you want to disconnect your wallet?
        </h3>
        <div className="space-y-3 mt-6">
          <Button
            variant="outline"
            className="w-full h-auto py-3 px-4 bg-[#1F2024] border-0 text-white text-center"
            onClick={handleDisconnect}
          >
            Disconnect wallet
          </Button>
          <Button
            variant="outline"
            className="w-full h-auto py-3 px-4 bg-transparent border-1 border-[#646982] text-white text-center"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
