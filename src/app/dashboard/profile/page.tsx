"use client";

import React, { useState } from "react";
import PoolCard from "../pool-market/PoolCard";
import Notification from "./Notification";
import { UserRoundPlus, Bell } from "lucide-react";
import { FaCalendarAlt } from 'react-icons/fa';

const tabs = ["Created Pools", "Joined Predictions", "Achievement"];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Created Pools");
  const [showNotifications, setShowNotifications] = useState(false);

  const handleMarkAsRead = (id: number) => {
    console.log(`Notification ${id} marked as read.`);
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  return (
    <div className="min-h-screen p-6 bg-[#09090B] text-white">
      {/* Top Bar with Notification Icon */}
      <div className="flex justify-end mb-6">
        <button
          className="relative"
          onClick={toggleNotifications}
          aria-label="Toggle Notifications"
        >
          <Bell className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Left Side - Profile Info */}
        <div className="w-full md:w-2/4 flex flex-col space-y-6 pr-6 border-r border-gray-700">

          {/* Avatar + Name/Followers/Follow button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-[#1F1F22] flex items-center justify-center text-3xl font-bold">
                Z
              </div>
              <div>
                <h1 className="text-2xl font-bold">Zyrick</h1>
                <p className="text-sm text-gray-400">185 Followers</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              <UserRoundPlus size={18} />
              <span>Follow</span>
            </button>
          </div>

          <div className="bg-[#1F1F22] rounded-lg p-4 text-sm text-gray-300">
            <p>
              Description et viverra fermentum laoreet lobortis enim mattis porttitor nibh.
              In cursus malesuada arcu accumsan dictumst eleifend mi lorem.
              Mauris in id convallis auctor gravida integer tincidunt.
              Mauris in et convallis aliquam pharetra netus lacus magna.
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1 bg-[#1F1F22] rounded-lg p-4 text-center">
              <p className="text-xl font-semibold">175</p>
              <p className="text-xs text-gray-400">Winnings</p>
            </div>
            <div className="flex-1 bg-[#1F1F22] rounded-lg p-4 text-center">
              <p className="text-xl font-semibold">309</p>
              <p className="text-xs text-gray-400">Participation Count</p>
            </div>
            <div className="flex-1 bg-[#1F1F22] rounded-lg p-4 text-center">
              <p className="text-xl font-semibold">501</p>
              <p className="text-xs text-gray-400">Total Pools</p>
            </div>
          </div>

         {showNotifications && (
  <div className="fixed top-20 right-6 w-[520px] max-h-[600px] overflow-auto z-50 bg-[#000004] border border-gray-600 p-4 rounded-lg shadow-lg flex flex-col space-y-4">
{/* Sharp border around notifications section */}
    
    {/* Header */}
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">Notification</h2>
      <label className="flex items-center gap-1 cursor-pointer text-sm font-medium">
        <input
          type="checkbox"
          className="appearance-none w-4 h-4 border border-[#067f2b] rounded-sm checked:bg-[#067f2b] checked:border-[#067f2b] transition"
        />
        Mark all as read
      </label>
    </div>

    {/* Filter Section */}
    <div className="border border-gray-500 rounded-md p-4 flex items-center gap-4 w-fit"> {/* Ash border + rounded corners */}
      <span className="text-sm font-medium text-white">Filter by:</span>
      <div className="flex gap-4">
        {/* Today Filter */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#1F1F1F] text-sm text-white rounded-md min-w-[120px] cursor-pointer">
          <b>Today</b>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Categories Filter */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#1F1F1F] text-sm text-white rounded-md min-w-[120px] cursor-pointer">
          <b>Categories</b>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Unread Filter */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#1F1F1F] text-sm text-white rounded-md min-w-[120px] cursor-pointer">
          <b>Unread</b>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>

    {/* Notification Items */}
    <Notification
      id={1}
      title="Your pool 'Best AI bet' just got a new stake: 450 USDC"
      description={
        <span className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-400" />
          3 mins ago
        </span>
      }
      isRead={false}
      onMarkAsRead={handleMarkAsRead}
    />
    <Notification
      id={2}
      title="Your withdrawal of $2555.25 was successful"
      description={
        <span className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-400" />
          1 hr ago
        </span>
      }
      isRead={false}
      onMarkAsRead={handleMarkAsRead}
    />
    <Notification
      id={3}
      title="Final results are in for pool #1244: Option 2 won!"
      description={
        <span className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-400" />
          5 hrs ago
        </span>
      }
      isRead={false}
      onMarkAsRead={handleMarkAsRead}
    />
    <Notification
      id={4}
      title="Reminder: Your pool 'ETH price close' closes in 1hr."
      description={
        <span className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-400" />
          2 days ago
        </span>
      }
      isRead={false}
      onMarkAsRead={handleMarkAsRead}
    />
  </div>
)}
</div>

        {/* Right Side - Tabs and Pools */}
        <div className="w-full md:w-1/3 flex flex-col space-y-6 pl-6">

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

          <div className="flex flex-col space-y-6 pt-6">

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