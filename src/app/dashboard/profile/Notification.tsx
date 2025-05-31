"use client";

import React, { ReactNode } from "react";
//import { Bell } from "lucide-react";

interface NotificationProps {
  id: number;
  title: string;
  description: ReactNode;
  isRead: boolean;
  onMarkAsRead: (id: number) => void;
}

const Notification: React.FC<NotificationProps> = ({
  id,
  title,
  description,
  isRead,
  onMarkAsRead,
}) => {
  return (
    <div
      className={`w-full p-4 rounded-xl border ${
        isRead ? "border-[#262626]" : "border-[#bbbec2]"
      } bg-[#0F0F0F] shadow-inner`}
    >
      <div className="flex items-start gap-4">
        {/* Left: Icon */}
      {/*  <div className="bg-[#3B82F6]/20 p-2 rounded-full mt-1">
          <Bell className="text-[#3B82F6] w-5 h-5" />
        </div> */}

        {/* Right: Text and Mark as Read */}
       <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">{title}</h3>
            {!isRead && (
              <label className="flex items-center gap-1 cursor-pointer text-xs text-[#3B82F6] font-medium">
                <input
                  type="hidden"
                  onChange={() => onMarkAsRead(id)}
                  className="appearance-none w-3.5 h-3.5 border border-[#3B82F6] rounded-sm checked:bg-[#3B82F6] checked:border-[#3B82F6] transition"
                />
                {/*Mark as read*/}
              </label>
            )}
          </div>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>
    </div> 
  );
};

export default Notification;
