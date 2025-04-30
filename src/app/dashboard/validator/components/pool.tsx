"use client";
import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PoolModal from "./poolModal";

interface PredictionOption {
  id: number;
  text: string;
  odds: number;
  participants: number;
  staked: number;
  percentage: number;
}

interface PoolProps {
  poolId: string | null;
}

const Pool: React.FC<PoolProps> = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [noteText, setNoteText] = useState<string>("");
  const [evidenceUrl, setEvidenceUrl] = useState<string>("");
  const [confirmCriteria, setConfirmCriteria] = useState<boolean>(false);
  const [isPoolDetailsOpen, setIsPoolDetailsOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  // const router = useRouter();

  const predictionOptions: PredictionOption[] = [
    {
      id: 1,
      text: "Option 1",
      odds: 1.17,
      participants: 105,
      staked: 12500,
      percentage: 58,
    },
    {
      id: 2,
      text: "Option 2",
      odds: 2.54,
      participants: 85,
      staked: 56500,
      percentage: 42,
    },
  ];

  const confirmPool = () => {
    console.log("Pool confirmed with option:", selectedOption);
    setShowModal(true);
  };

  const togglePoolDetails = () => {
    setIsPoolDetailsOpen(!isPoolDetailsOpen);
  };

  function handleCloseModal(): void {
    setShowModal(false);
  }

  return (
    <div className="text-white min-h-screen w-full">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="mb-2 sm:mb-0">
                <Image
                  src="/bitcoin.png"
                  alt="Bitcoin"
                  width={80}
                  height={80}
                  className="w-20 h-20 lg:w-28 lg:h-28"
                />
              </div>
              <div className="ml-0 sm:ml-4 flex flex-col">
                <div className="text-xs sm:text-sm text-gray-400">
                  Crypto • AI
                </div>
                <h1 className="text-base sm:text-lg font-medium">
                  Will Bitcoin reach $70K by June?
                </h1>
                <div className="flex items-center flex-wrap mt-1">
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-400">
                    <Image src="/Frame.svg" alt="" width={16} height={16} />
                    185
                  </div>
                  <div className="mx-2 text-gray-600">•</div>
                  <div className="text-xs sm:text-sm text-gray-400">Status</div>
                  <div className="ml-1 px-2 py-0.5 text-xs rounded bg-green-900 text-green-400">
                    ENDED
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 sm:mt-0">
              <div className="text-xs sm:text-sm text-gray-400">
                Total stake
              </div>
              <div className="text-sm sm:text-base font-medium">
                $12,530 Strk
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6 items-center mt-4 sm:mt-6">
            {predictionOptions.map((option) => (
              <div
                key={option.id}
                className="w-full sm:w-[250px] p-3 sm:p-4 rounded-lg bg-[#0E0E10] border border-[#515461] cursor-pointer"
                onClick={() => setSelectedOption(option.id)}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">{option.text}</div>
                  <div className="text-xs sm:text-sm text-gray-400"></div>
                </div>
                <div
                  className="flex justify-center items-center rounded-full mb-3 sm:mb-4 py-2 sm:py-3"
                  style={{
                    background: option.id === 1 ? "#422C0899" : "#3C193699",
                    width: `${option.percentage}%`,
                    height: "20px",
                  }}
                >
                  {option.percentage}%
                </div>
                <div className="flex justify-start gap-2 sm:gap-4">
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 border border-gray-600 p-1 sm:p-2 rounded-lg">
                    <Image src="/Frame.svg" alt="" width={16} height={16} />
                    {option.participants}
                  </div>
                  <div className="flex flex-row justify-center gap-1 items-center text-xs sm:text-sm text-gray-400 border border-gray-600 p-1 sm:p-2 rounded-lg">
                    <Image src="/Frame1.svg" alt="" width={16} height={16} />$
                    {option.staked.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border border-[#515461] rounded-lg bg-[#0E0E10] overflow-hidden">
            <button
              className="flex items-center text-gray-400 hover:text-white w-full h-10 px-4"
              onClick={togglePoolDetails}
            >
              <div className="flex items-center justify-between w-full">
                <span className="flex items-center">
                  {isPoolDetailsOpen ? (
                    <ChevronUp size={16} className="mr-1" />
                  ) : (
                    <ChevronDown size={16} className="mr-1" />
                  )}
                  Pool Details
                </span>
              </div>
            </button>

            {isPoolDetailsOpen && (
              <div className="mt-2 p-3 sm:p-4 bg-[#0E0E10]">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className="text-xs sm:text-sm text-gray-400">
                      Created by:
                    </span>
                    <span className="text-xs sm:text-sm">@Victor</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                    <div className="text-xs sm:text-sm text-gray-400">
                      Description:
                    </div>
                    <div className="text-xs sm:text-sm p-2 rounded-md">
                      This prediction pool will resolve to &quot;Option 1&quot; if Bitcoin
                      reaches $70,000 USD on any major exchange before June 1,
                      2025. Otherwise, it will resolve to &quot;Option 2&quot;.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 p-0 sm:p-4 lg:p-6">
          <div className="mb-6 border border-[#515461] rounded-lg p-3 sm:p-4 bg-[#0E0E10]">
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
              Validate Option
            </h2>
            <div className="flex gap-2 sm:gap-4 mb-4">
              <button
                className={`px-2 sm:px-4 py-2 rounded flex-1 flex items-center justify-between border border-[#515461] ${
                  selectedOption === 1 ? "bg-[#1F2024]" : "bg-transparent"
                }`}
                onClick={() => setSelectedOption(1)}
              >
                <span>Option 1</span>
                <span>1.17</span>
              </button>
              <button
                className={`px-2 sm:px-4 py-2 rounded flex-1 flex items-center justify-between border border-[#515461] ${
                  selectedOption === 2 ? "bg-[#1F2024]" : "bg-transparent"
                }`}
                onClick={() => setSelectedOption(2)}
              >
                <span>Option 2</span>
                <span>2.54</span>
              </button>
            </div>

            <div className="mb-4">
              <div className="text-xs sm:text-sm text-gray-400 mb-2">
                Additional Notes (if any)
              </div>
              <Input
                type="text"
                className="w-full p-2 rounded border border-[#515461] outline-0"
                placeholder="Note"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <div className="text-xs sm:text-sm text-gray-400 mb-2">
                Attach Evidence URL (if any)
              </div>
              <Input
                type="text"
                className="w-full p-2 rounded border border-[#515461] outline-0"
                placeholder="Link"
                value={evidenceUrl}
                onChange={(e) => setEvidenceUrl(e.target.value)}
              />
            </div>

            <label className="flex items-center mb-4 cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={confirmCriteria}
                onChange={() => setConfirmCriteria(!confirmCriteria)}
              />
              <span className="text-xs sm:text-sm text-gray-400">
                I confirm this pool meets the criteria
              </span>
            </label>

            <Button
              className="w-full p-2 sm:p-3 rounded bg-[#259BA5] text-white font-medium hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
              // disabled={!selectedOption || !confirmCriteria}
              onClick={confirmPool}
            >
              Confirm Pool
            </Button>
          </div>

          <div className="bg-[#0E0E10] rounded-lg p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
              History / Metadata
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs sm:text-sm text-gray-400">
                  Event Source URL:
                </div>
                <div className="flex items-center mt-1 sm:mt-0">
                  <span className="text-xs sm:text-sm mr-1 break-all">
                    https://espn.com/match/123
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-gray-400 flex-shrink-0"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs sm:text-sm text-gray-400">
                  Prediction Hash:
                </div>
                <div className="text-xs sm:text-sm mt-1 sm:mt-0">
                  0x<span className="text-gray-400">5f6a...</span>b01E
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs sm:text-sm text-gray-400">
                  Date Created:
                </div>
                <div className="text-xs sm:text-sm mt-1 sm:mt-0">
                  April 16, 2025 - 4:32PM
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs sm:text-sm text-gray-400">
                  Validated on:
                </div>
                <div className="text-xs sm:text-sm mt-1 sm:mt-0">
                  April 19, 2025 - 9:00AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <PoolModal
          option={selectedOption === 1 ? "Option 1" : "Option 2"}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Pool;
