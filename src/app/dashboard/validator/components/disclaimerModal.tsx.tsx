"use client";
import { useState } from "react";

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DisclaimerModal = ({
  isOpen,
  onClose,
  onConfirm,
}: DisclaimerModalProps) => {
  const [isChecked, setIsChecked] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b backdrop-blur-md from-rgba(14, 14, 16, 0.6) to-rgba(14, 14, 16, 0.6)  bg-opacity-0 flex items-center justify-center z-50">
      <div className="bg-gray-900 w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0E0E10] shadow-lg shadow-[#25273599] p-6">
          <h2 className="text-[#E9E9EF] text-center font-bold text-xl mb-6">
            DISCLAIMER
          </h2>
          <div className="">
            <h3 className="text-[#E9E9EF] text-center text-sm mb-4">
              A MUST READ FOR EVERY POTENTIAL VALIDATOR
            </h3>
          </div>
          <div className="border-y border-[#CCCCCC] py-4 max-h-60 overflow-y-auto mb-6">
            <p className="text-[#E9E9EF] text-sm">
              Lorem ipsum dolor sit amet consectetur. Justo pretium cura at
              tristique duis suspendisse amet. Nunc fusce condimentum praesent
              dictum iaculis etera elementum senectus. Pellentesque cum rhoncus
              aliquet faucibus rutrum eu. Eget senean interdum tellus adipiscing
              risus. Lacinia in ut risus mattis. Dui enim ipsum ac nibh justo.
              Ac sit est volutpat eget quisque volutpat.
            </p>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="agreement"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-5 h-5 border border-[#259BA5] rounded focus:ring-0 focus:ring-offset-0 text-teal-500"
            />
            <label htmlFor="agreement" className="ml-2 text-[#E9E9EF] text-xs">
              I have read and agree to the terms and condition above
            </label>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-[#CCCCCC] hover:bg-gray-700 text-[#E9E9EF] rounded"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={!isChecked}
              className={`flex-1 py-2 px-4 ${
                isChecked
                  ? "bg-teal-500 hover:bg-teal-600"
                  : "bg-teal-500/50 cursor-not-allowed"
              } text-white rounded`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
