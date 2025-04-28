"use client";

import React from "react";
import { Bell } from "lucide-react";

interface NotificationProps {
  id: number;
  title: string;
  description: string;
  isRead: boolean;
  onMarkAsRead: (id: number) => void;
}

/**
 * Notification component to display individual user notifications.
 */
const Notification: React.FC<NotificationProps> = ({
  id,
  title,
  description,
  isRead,
  onMarkAsRead,
}) => {
  return (
    <div className={`p-4 rounded-lg border ${isRead ? "border-gray-600" : "border-blue-500"} bg-[#1A1A1A]`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <Bell className="text-blue-400 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>

        {!isRead && (
          <button
            onClick={() => onMarkAsRead(id)}
            className="ml-4 px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded-md transition"
          >
            Mark as Read
          </button>
        )}
      </div>
    </div>
  );
};

export default Notification;
