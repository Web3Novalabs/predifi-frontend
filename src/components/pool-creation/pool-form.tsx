"use client";

import { motion, AnimatePresence } from "framer-motion";
import StepIndicator from "@/components/pool-creation/step-indicator";
import BasicInfoStep from "@/components/pool-creation/steps/basic-info-step";
import PredictionSetupStep from "@/components/pool-creation/steps/prediction-setup-step";
import BetRulesStep from "@/components/pool-creation/steps/bet-rules-step";
import SuccessScreen from "@/components/pool-creation/steps/success-screen";
import PreviewPanel from "@/components/pool-creation/preview-panel";
import { usePoolCreation } from "@/contexts/pool-creation-context";

export default function PoolForm() {
  const { currentStep, isComplete } = usePoolCreation();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep />;
      case 2:
        return <PredictionSetupStep />;
      case 3:
        return <BetRulesStep />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full mx-auto">
      <div className="flex-1">
        <motion.div
          className="bg-black rounded-xl p-6 pb-10 border border-gray-800"
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
              <>
                <motion.div key="dimmed-content" className="opacity-30">
                  <BetRulesStep />
                </motion.div>
                <SuccessScreen />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div>
        <motion.div
          className="w-full lg:w-[500px] bg-black rounded-xl p-6 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PreviewPanel />
        </motion.div>
      </div>
    </div>
  );
}
