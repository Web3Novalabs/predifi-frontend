import React from "react";
import { ChartProps } from "@/lib/types";


const Chart: React.FC<ChartProps> = ({ title, buttonText, data, yAxisLabels, highlightedIndex }) => {
  return (
    <div className="bg-transparent border-[0.5px] rounded-[8px] border-[#1F2024] p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg">{title}</h2>
        <button className="bg-[#1F2024] px-4 py-2 rounded-full flex items-center text-sm">
          {buttonText}
          <svg
            width="14"
            className="ml-1"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.746094 1.57971L6.74609 7.57971L12.7461 1.57971"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-end h-48 md:h-64 relative">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-400">
          {yAxisLabels.map((label, index) => (
            <div key={index}>{label}</div>
          ))}
        </div>

        {/* Chart Bars */}
        <div className="flex items-end justify-between w-full pl-12">
          {data.map((item, index) => (
            <div key={item.month} className="flex flex-col items-center">
              <div
                className={`w-6 md:w-8 ${
                  index === highlightedIndex ? "bg-[#28C4D2]" : "bg-gray-700"
                } rounded-t`}
                style={{
                  height: `${item.value}px`,
                }}
              >
                {index === highlightedIndex && (
                  <div className="text-xs -mt-6 whitespace-nowrap">{item.value}k</div>
                )}
              </div>
              <div className="text-xs text-gray-400 mt-2">{item.month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;