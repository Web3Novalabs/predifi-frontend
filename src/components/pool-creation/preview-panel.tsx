"use client";
import { useState } from "react";
import { CopyIcon, Check, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePoolCreation } from "@/contexts/pool-creation-context";
import Image from "next/image";

export default function PreviewPanel() {
  const { formData, currentStep, nextStep, prevStep } = usePoolCreation();
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
        <div className="space-y-3 flex-1">
          <div className="bg-[#0E0E10] p-4 rounded-lg mt-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                {formData.image ? (
                  <Image
                    height={500}
                    width={500}
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

          <div className="bg-[#0E0E10] p-4 rounded-lg">
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
          </div>

          {/* Step 3 Content */}
          <div className="bg-[#0E0E10] p-4 rounded-lg mt-2">
            {formData.privacy && (
              <div className="flex justify-between items-center py-1 text-sm">
                <span className="text-sm text-gray-400">Privacy</span>
                <div className="bg-gray-800 text-white hover:bg-gray-900 px-2 py-1 rounded">
                  {formData.privacy === "public" ? "Public" : "Private"}
                </div>
              </div>
            )}

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

            {formData.creatorFee && (
              <div className="flex justify-between items-center py-1 text-sm">
                <span className="text-sm text-gray-400">Creator fee</span>
                <span className="font-medium">{formData.creatorFee}%</span>
              </div>
            )}
          </div>

          <>
            <div className="flex justify-between pt-2 gap-5">
              <button
                className="px-6 py-2 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors w-full"
                onClick={currentStep > 1 ? prevStep : undefined}
                disabled={currentStep === 1}
                style={{ opacity: currentStep === 1 ? 0.5 : 1 }}
              >
                {currentStep === 1 ? "Cancel" : "Back"}
              </button>
              <button
                className="px-6 py-2 rounded-md bg-teal-500 text-black font-medium hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
                onClick={nextStep}
                disabled={isNextDisabled()}
              >
                {currentStep < 3 ? "Continue" : "Proceed"}
              </button>
            </div>
          </>

          <div className=" flex items-center justify-center gap-2 text-sm">
            <Info className="text-[#FFC66B] h-5 w-5" />
            <span className="text-xs text-gray-400">
              Pool creation costs
              <span className="font-bold text-white"> 1 STRK.</span> Make sure
              you have enough in your wallet
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
