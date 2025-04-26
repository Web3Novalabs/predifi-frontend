"use client";
import { useState } from "react";
import { CopyIcon, ExternalLink, Check } from "lucide-react";

import type { PoolFormData } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PreviewPanelProps {
  formData: PoolFormData;
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  isComplete: boolean;
}

export default function PreviewPanel({
  formData,
  currentStep,
  onNext,
  onBack,
  isComplete,
}: PreviewPanelProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !formData.name || !formData.description;
      case 2:
        return (
          formData.options.some((option) => !option) ||
          formData.categories.length === 0
        );
      case 3:
        return !formData.minBetAmount || !formData.maxBetAmount;
      default:
        return false;
    }
  };

  return (
    <div className="h-full flex flex-col text-white">
      <h2 className="text-xl font-bold text-center mb-6">PREVIEW</h2>

      <div className="border-t border-gray-800 pt-6 flex-1">
        <div className="space-y-6 flex-1">
          <div className="bg-[#0E0E10] p-4 rounded-lg mt-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                {formData.image ? (
                  <img
                    src={
                      URL.createObjectURL(formData.image) || "/placeholder.svg"
                    }
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-teal-500/20 text-teal-500">
                    AI
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg">
                  {formData.name || "Will Bitcoin reach $70K by June?"}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mt-1">
                  {formData.description ||
                    "Consectetur et viverra fermentum laoreet lobortis enimaoreet lobortis enim mattis porttitor..."}
                </p>
              </div>
            </div>
            {formData.eventSourceUrl && (
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Link source</span>
                <div className="flex items-center gap-2 text-sm bg-gray-800 px-2 py-1 rounded">
                  <span className="text-gray-300">
                    {formData.eventSourceUrl}
                  </span>
                  <div
                    onClick={() => copyToClipboard(formData.eventSourceUrl)}
                    className="cursor-pointer"
                  >
                    {copied ? (
                      <Check className="w-3 h-3 text-teal-400" />
                    ) : (
                      <CopyIcon className="w-3 h-3 text-gray-400 hover:text-teal-400" />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Step 2 Content */}
          {currentStep >= 2 && (
            <div className="bg-[#0E0E10] p-4 rounded-lg">
              {formData.options.length > 0 &&
                formData.options.some((option) => option) && (
                  <div>
                    {formData.options.map((option, index) => {
                      if (!option) return null;
                      return (
                        <div
                          key={index}
                          className="flex justify-between items-center py-1 text-sm"
                        >
                          <span className="text-sm text-gray-400">
                            Option {index + 1}
                          </span>
                          <span className="font-medium">{option}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

              {formData.categories.length > 0 && (
                <div className="flex justify-between items-center py-1 text-sm">
                  <span className="text-sm text-gray-400">Categories</span>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {formData.categories.map((category) => (
                      <Badge
                        key={category}
                        className="bg-gray-800 text-xs font-normal hover:bg-gray-700"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {(formData.lockDate || formData.endDate) && (
                <>
                  {formData.lockDate && (
                    <div className="flex justify-between items-center py-1 text-sm">
                      <span className="text-sm text-gray-400">Start date</span>
                      <span className="font-medium">{formData.lockDate}</span>
                    </div>
                  )}

                  {formData.endDate && (
                    <div className="flex justify-between items-center py-1 text-sm">
                      <span className="text-sm text-gray-400">End Date</span>
                      <span className="font-medium">{formData.endDate}</span>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Step 3 Content */}
          {currentStep >= 3 && (
            <div className="bg-[#0E0E10] p-4 rounded-lg mt-2">
              {formData.privacy && (
                <div className="flex justify-between items-center py-1 text-sm">
                  <span className="text-sm text-gray-400">Privacy</span>
                  <Badge className="bg-indigo-900/50 text-indigo-300 hover:bg-indigo-900/70">
                    {formData.privacy === "public" ? "Public" : "Private"}
                  </Badge>
                </div>
              )}

              {formData.minBetAmount && (
                <div className="flex justify-between items-center py-1 text-sm">
                  <span className="text-sm text-gray-400">
                    Minimum bet amount
                  </span>
                  <span className="font-medium">
                    {formData.minBetAmount} strk
                  </span>
                </div>
              )}

              {formData.maxBetAmount && (
                <div className="flex justify-between items-center py-1 text-sm">
                  <span className="text-sm text-gray-400">
                    Maximum bet amount
                  </span>
                  <span className="font-medium">
                    {formData.maxBetAmount} strk
                  </span>
                </div>
              )}

              {formData.creatorFee && (
                <div className="flex justify-between items-center py-1 text-sm">
                  <span className="text-sm text-gray-400">Creator fee</span>
                  <span className="font-medium">{formData.creatorFee}%</span>
                </div>
              )}
            </div>
          )}

          {!isComplete && (
            <>
              <div className="flex justify-between pt-4">
                <button
                  className="px-6 py-2 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
                  onClick={currentStep > 1 ? onBack : undefined}
                  disabled={currentStep === 1}
                  style={{ opacity: currentStep === 1 ? 0.5 : 1 }}
                >
                  {currentStep === 1 ? "Cancel" : "Back"}
                </button>
                <button
                  className="px-6 py-2 rounded-md bg-teal-500 text-black font-medium hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={onNext}
                  disabled={isNextDisabled()}
                >
                  {currentStep < 3 ? "Continue" : "Proceed"}
                </button>
              </div>
              {currentStep === 3 && (
                <div className="flex items-center gap-2 text-amber-500 text-sm">
                  <span className="w-5 h-5 rounded-full border border-amber-500 flex items-center justify-center text-xs">
                    !
                  </span>
                  <p>
                    Pool creation costs 1 STRK. Make sure you have enough in
                    your wallet.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
