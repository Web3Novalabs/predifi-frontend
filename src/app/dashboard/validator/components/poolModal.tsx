"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
interface ResultModalProps {
  option: string;
  onClose?: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ option, onClose }) => {
  const router = useRouter();

  const handleDashboardClick = () => {
    if (onClose) onClose();
    router.push("/dashboard");
  };

  const handleHomeClick = () => {
    if (onClose) onClose();
    router.push("/");
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md from-rgba(14, 14, 16, 0.6) to-rgba(14, 14, 16, 0.6)  bg-opacity-0 flex items-center justify-center z-50">
      <div className="bg-[#0E0E10] rounded-lg p-6 shadow-lg shadow-[#25273599] w-[617px] h-[284px] max-w-md text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="rounded-full p-3">
            <CheckCircle className="h-10 w-10 text-teal-500" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Result Confirmed!
          </h2>z
        </div>

        <p className="text-teal-500 font-medium mb-6">
        &quot;{option}&quot; was marked correct.
        </p>

        <div className="space-y-3">
          <button
            onClick={handleDashboardClick}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded transition duration-200"
          >
            Go to Dashboard
          </button>

          <button
            onClick={handleHomeClick}
            className="w-full border border-gray-700 hover:bg-gray-800 text-white py-3 px-4 rounded transition duration-200"
          >
            Return to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
