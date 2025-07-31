import useManuallyUpdatePoolState, {
  PoolStatus,
} from "@/app/hooks/useManuallyUpdatePoolStatus";
import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStatus: PoolStatus;
  id: string;
}

export const ManuallyUpdateModal = ({
  isOpen,
  onClose,
  currentStatus,
  id,
}: ModalProps) => {
  const [selectedStatus, setSelectedStatus] = useState<PoolStatus>(
    currentStatus || "Active"
  );
  const statusOptions = [
    { value: "Active", label: "Active" },
    {
      value: "Locked",
      label: "Locked",
    },
    { value: "Settled", label: "Settled" },
    { value: "Closed", label: "Closed" },
    {
      value: "Suspended",
      label: "Suspended",
    },
  ];

  const { updatePoolState, isLoading: isUpdating } =
    useManuallyUpdatePoolState();

  useEffect(() => {
    if (!isUpdating) {
      setSelectedStatus(currentStatus);
      onClose();
    }
  }, [isUpdating]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b backdrop-blur-md from-rgba(14, 14, 16, 0.6) to-rgba(14, 14, 16, 0.6)  bg-opacity-0 flex items-center justify-center z-50">
      <div className="bg-gray-900 w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0E0E10] shadow-lg shadow-[#25273599] p-6">
          <h2 className="text-[#E9E9EF] text-center font-bold text-xl mb-6">
            Manually Update Pool Status
          </h2>
          <div className="">
            <h3 className="text-[#E9E9EF] text-center text-sm mb-4">
              Select the new status for pool {id}
            </h3>
          </div>
          <div className="p-4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contract Status
            </label>
            <select
              id="status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as PoolStatus)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {statusOptions.map((status) => (
                <option
                  key={status.value}
                  value={status.value}
                  className="text-gray-900"
                >
                  {status.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-4 px-4 mt-5">
            <button
              onClick={() => {
                setSelectedStatus(currentStatus);
                onClose();
              }}
              className="flex-1 py-2 px-4 border border-[#CCCCCC] hover:bg-gray-700 text-[#E9E9EF] rounded"
            >
              Cancel
            </button>
            <button
              onClick={() => updatePoolState(id, selectedStatus)}
              disabled={selectedStatus === currentStatus || isUpdating}
              className={`flex-1 py-2 px-4 ${
                selectedStatus === currentStatus
                  ? "bg-teal-500/50 cursor-not-allowed"
                  : "bg-teal-500 hover:bg-teal-600"
              } text-white rounded disabled:opacity-50`}
            >
              {isUpdating ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
