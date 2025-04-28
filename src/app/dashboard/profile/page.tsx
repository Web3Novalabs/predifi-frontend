"use client";

import React, { useState } from "react";
import PoolCard from "../pool-market/PoolCard";
import Notification from "./Notification"; // Adjust path if needed
import { UserRoundPlus } from "lucide-react";

const tabs = ["Created Pools", "Joined Predictions", "Achievement"];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Created Pools");
  const handleMarkAsRead = (id: number) => {
    console.log(`Notification ${id} marked as read.`);
  };

  return (
    <div className="min-h-screen p-6 bg-[#09090B] text-white">
      {/* Top Layout */}
      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Left Side - Profile Info */}
        <div className="w-full md:w-1/3 flex flex-col space-y-6 pr-6 border-r border-gray-700">
          {/* Avatar + Name/Followers/Follow button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-[#1F1F22] flex items-center justify-center text-3xl font-bold">
                Z
              </div>
              {/* Name and Followers */}
              <div>
                <h1 className="text-2xl font-bold">Zyrick</h1>
                <p className="text-sm text-gray-400">185 Followers</p>
              </div>
            </div>
            {/* Follow Button */}
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              <UserRoundPlus size={18} />
              <span>Follow</span>
            </button>
          </div>

          {/* Description */}
          <div className="bg-[#1F1F22] rounded-lg p-4 text-sm text-gray-300">
            <p>
              Description et viverra fermentum laoreet lobortis enim mattis porttitor nibh.
              In cursus malesuada arcu accumsan dictumst eleifend mi lorem.
              Mauris in id convallis auctor gravida integer tincidunt.
              Mauris in et convallis aliquam pharetra netus lacus magna.
            </p>
          </div>

          {/* Stats Boxes */}
          <div className="flex space-x-4">
            {/* Stat 1 */}
            <div className="flex-1 bg-[#1F1F22] rounded-lg p-4 text-center">
              <p className="text-xl font-semibold">175</p>
              <p className="text-xs text-gray-400">Winnings</p>
            </div>
            {/* Stat 2 */}
            <div className="flex-1 bg-[#1F1F22] rounded-lg p-4 text-center">
              <p className="text-xl font-semibold">309</p>
              <p className="text-xs text-gray-400">Participation Count</p>
            </div>
            {/* Stat 3 */}
            <div className="flex-1 bg-[#1F1F22] rounded-lg p-4 text-center">
              <p className="text-xl font-semibold">501</p>
              <p className="text-xs text-gray-400">Total Pools</p>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="flex flex-col space-y-4 pt-6">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <Notification
              id={1}
              title="You joined the Pool"
              description="You participated in the pool 'ETH to $4000 by July'"
              isRead={false}
              onMarkAsRead={handleMarkAsRead}
            />
            <Notification
              id={2}
              title="New Pool Created"
              description="New Pool 'Bitcoin $100k' is now open"
              isRead={false}
              onMarkAsRead={handleMarkAsRead}
            />
            <Notification
              id={3}
              title="Rewards Available"
              description="Claim your 50 USDT reward from last week's pool"
              isRead={false}
              onMarkAsRead={handleMarkAsRead}
            />
          </div>
        </div>

        {/* Right Side - Tabs and Pools */}
        <div className="w-full md:w-2/3 flex flex-col space-y-6 pl-6">
          {/* Tabs */}
          <div className="flex space-x-8 border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-semibold ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {activeTab === "Created Pools" && (
              <>
                <PoolCard
                  title="Best AI this month"
                  description="Consectetur et viverra fermentum laoreet lobortis enim mattis porttitor."
                  poolAmount="$1255"
                  poolDuration="185 Participants"
                  tokenAmount="501"
                  predictedAmount="80%"
                  option1="2.54"
                  option1Percentage=""
                  option2="1.47"
                  option2Percentage=""
                />
                <PoolCard
                  title="Best AI this month"
                  description="Consectetur et viverra fermentum laoreet lobortis enim mattis porttitor."
                  poolAmount="$1255"
                  poolDuration="185 Participants"
                  tokenAmount="501"
                  predictedAmount="80%"
                  option1="2.54"
                  option1Percentage=""
                  option2="1.47"
                  option2Percentage=""
                />
              </>
            )}

            {activeTab === "Joined Predictions" && (
              <p className="text-gray-400">No joined predictions yet.</p>
            )}

            {activeTab === "Achievement" && (
              <p className="text-gray-400">No achievements unlocked yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
