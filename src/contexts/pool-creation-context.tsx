"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import toast from "react-hot-toast";
import type { PoolFormData } from "@/lib/types";
import { useAccount } from "@starknet-react/core";

import { byteArray, cairo, CallData, shortString } from "starknet";
import { createCairoEnum, myProvider, toEpochTime } from "@/lib/utils";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";

interface PoolCreationContextType {
  formData: PoolFormData;
  currentStep: number;
  isComplete: boolean;
  updateFormData: (data: Partial<PoolFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: () => void;
  isCreatingPool: boolean;
}

const initialFormData: PoolFormData = {
  image: null,
  name: "",
  description: "",
  eventSourceUrl: "",
  options: ["", ""],
  categories: [],
  lockDate: "",
  endDate: "",
  minBetAmount: "1",
  maxBetAmount: "6000",
  creatorFee: "2",
  privacy: "public",
};

const PoolCreationContext = createContext<PoolCreationContextType | undefined>(
  undefined
);

export function PoolCreationProvider({ children }: { children: ReactNode }) {
  const { account } = useAccount();
  const [formData, setFormData] = useState<PoolFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [isCreatingPool, setIsCreatingPool] = useState(false);

  const updateFormData = (data: Partial<PoolFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const callCreatePool = async () => {
    if (!account) {
      toast.error("Connect Wallet to continue");
      return;
    }
    try {
      setIsCreatingPool(true);
      toast("heeeyyy");
      const result = await account.execute({
        contractAddress: PREDIFI_CONTRACT_ADDRESS,
        entrypoint: "create_pool",
        calldata: CallData.compile({
          poolName: shortString.encodeShortString(formData.name),
          poolType: createCairoEnum("WinBet"),
          poolDescription: byteArray.byteArrayFromString(formData.description),
          poolImage: byteArray.byteArrayFromString("Q1fba"),
          poolEventSourceUrl: byteArray.byteArrayFromString(
            formData.eventSourceUrl
          ),
          poolStartTime: toEpochTime(new Date()),
          poolLockTime: toEpochTime(formData.lockDate),
          poolEndTime: toEpochTime(formData.endDate),
          option1: shortString.encodeShortString(formData.options[0]),
          option2: shortString.encodeShortString(formData.options[1]),
          minBetAmount: cairo.uint256(formData.minBetAmount),
          maxBetAmount: cairo.uint256(formData.maxBetAmount),
          creatorFee: BigInt(formData.creatorFee),
          isPrivate: formData.privacy === "private" ? 1 : 0,
          category: createCairoEnum(formData.categories[0]),
        }),
      });

      const status = await myProvider.waitForTransaction(
        result.transaction_hash
      );

      console.log(status);
      if (status.isSuccess()) {
        toast.success("Success! 🎉 Your pool has been created.");
        setIsComplete(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsCreatingPool(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log(formData);
      callCreatePool();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsComplete(false);
  };

  return (
    <PoolCreationContext.Provider
      value={{
        formData,
        currentStep,
        isComplete,
        updateFormData,
        nextStep,
        prevStep,
        resetForm,
        isCreatingPool,
      }}
    >
      {children}
    </PoolCreationContext.Provider>
  );
}

export function usePoolCreation() {
  const context = useContext(PoolCreationContext);
  if (context === undefined) {
    throw new Error(
      "usePoolCreation must be used within a PoolCreationProvider"
    );
  }
  return context;
}
