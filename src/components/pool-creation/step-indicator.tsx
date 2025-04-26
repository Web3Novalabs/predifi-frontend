"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={stepNumber} className="flex items-center">
              <motion.div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors",
                  isActive && "bg-teal-500 text-black",
                  isCompleted && "bg-teal-500 text-black",
                  !isActive && !isCompleted && "bg-gray-800 text-gray-400"
                )}
                initial={false}
                animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {stepNumber}
              </motion.div>

              {stepNumber < totalSteps && (
                <div className="relative w-24 h-[2px] mx-1 bg-gray-800">
                  <motion.div
                    className="absolute inset-0 bg-teal-500"
                    initial={{ width: "0%" }}
                    animate={{ width: isCompleted ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
