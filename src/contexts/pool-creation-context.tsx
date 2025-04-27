"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import type { PoolFormData } from "@/lib/types";

interface PoolCreationContextType {
  formData: PoolFormData;
  currentStep: number;
  isComplete: boolean;
  updateFormData: (data: Partial<PoolFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: () => void;
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
  const [formData, setFormData] = useState<PoolFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const updateFormData = (data: Partial<PoolFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true);
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
