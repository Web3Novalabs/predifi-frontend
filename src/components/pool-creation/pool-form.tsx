"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepIndicator from "@/components/pool-creation/step-indicator";
import BasicInfoStep from "@/components/pool-creation/steps/basic-info-step";
import PredictionSetupStep from "@/components/pool-creation/steps/prediction-setup-step";
import BetRulesStep from "@/components/pool-creation/steps/bet-rules-step";
import SuccessScreen from "@/components/pool-creation/steps/success-screen";
import PreviewPanel from "@/components/pool-creation/preview-panel";
import type { PoolFormData } from "@/lib/types";

export default function PoolForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<PoolFormData>({
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
  });
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoStep formData={formData} updateFormData={updateFormData} />
        );
      case 2:
        return (
          <PredictionSetupStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <BetRulesStep formData={formData} updateFormData={updateFormData} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full mx-auto">
      <motion.div
        className="flex-1 bg-black rounded-xl p-6 border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
          Create a Pool
        </h1>

        <StepIndicator currentStep={currentStep} totalSteps={3} />

        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                <SuccessScreen />
              </div>
              <div className="opacity-30">
                <BetRulesStep
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="w-full lg:w-[427px] bg-black rounded-xl p-6 border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <PreviewPanel
          formData={formData}
          currentStep={currentStep}
          onNext={nextStep}
          onBack={prevStep}
          isComplete={isComplete}
        />
      </motion.div>
    </div>
  );
}
