'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Comments from '@/components/ui/comments';
import { Heart, Share } from 'lucide-react';
import {
  PoolCardDetails,
  PoolDescription,
  SimilarPools,
} from './components/poolDetails';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import PoolPrediction from './components/poolPrediction';
import SocialsShare from './components/socialsShare';

export default function Market() {
  const predictions = [
    { options: 'Option 1', odds: '1.17' },
    { options: 'Option 2', odds: '2.54' },
  ];
  const poolDetails = {
    title: 'Will Bitcoin reach $70K by June?',
    creator: 'BIRDMANN',
    status: 'Active',
    startTime: 'April 3, 2024, 3pm AMT',
    lockTime: 'April 3, 2024',
    endTime: 'April 3, 2024',
    user: '125',
  };
  const similarPools = [
    {
      src: '/pool/similar-pool.png',
      title: 'Best AI this month for vibe coding',
      amount: '1255',
      users: '185',
    },
    {
      src: '/pool/similar-pool.png',
      title: 'Best AI this month for vibe coding',
      amount: '1255',
      users: '185',
    },
    {
      src: '/pool/similar-pool.png',
      title: 'Best AI this month for vibe coding',
      amount: '1255',
      users: '185',
    },
  ];

  const comments = [
    {
      name: 'Zyrick',
      comment: 'xheck the next pool and see the outcome',
      date: '2024-04-03',
      userProfile: '/pool/commenter2.png',
    },
    {
      name: 'Birdmann',
      comment: 'yessss 1000x',
      date: '2024-04-03',
      userProfile: '/pool/commenter1.png',
    },
    {
      name: 'Ola Ola',
      comment: 'My stake is on fire 🔥 ',
      date: '2024-04-03',
      userProfile: '/pool/commenter2.png',
    },
  ];

  const socialShare = [
    {
      logo: '/social/telegram.png',
      name: 'Telegram',
    },
    {
      logo: '/social/reddit.png',
      name: 'Reddit',
    },
    {
      logo: '/social/x.png',
      name: 'Twitter',
    },

    {
      logo: '/social/discord.png',
      name: 'Discord',
    },
  ];
  return (
    <>
      <div>Back to dashboard</div>
      <div className="lg:md:grid grid-cols-5 gap-4 mt-8 rounded-md">
        <div className="col-span-3 ">
          {/* Section1 */}
          <PoolCardDetails
            title={poolDetails.title}
            creator={poolDetails.creator}
            status={poolDetails.status}
            startTime={poolDetails.startTime}
            user={poolDetails.user}
          />
          {/* Section 2 */}
          <div className="lg:md:p-8">
            <div className="border border-gray-800  p-2 rounded-md">
              <div className=" space-y-2">
                <div
                  className="w-[54%] h-fit justify-between flex bg-[#422C0899] px-2 py-1 text-sm lg:md:text-md
                "
                >
                  <span>Option 1 </span>
                  <span>54%</span>
                </div>
                <div
                  className="w-[32%] h-fit justify-between flex bg-[#3C193699] px-2 py-1 text-sm lg:md:text-md
                "
                >
                  <span>Option 2 </span>
                  <span>32%</span>
                </div>
                <div></div>
              </div>
              <div className="text-right gap-6 text-sm lg:md:text-md">
                Total stake distribution:{' '}
                <span className="lg:md:text-xl text-md"> 1,253$</span>
              </div>{' '}
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex lg:flex-row flex-col justify-between items-center relative">
            <Tabs defaultValue="description" className="w-full">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <PoolDescription
                  startTime={poolDetails.startTime}
                  lockTime={poolDetails.lockTime}
                  endTime={poolDetails.endTime}
                />
                {similarPools.map((pool, index) => (
                  <SimilarPools
                    key={index}
                    src={pool.src}
                    title={pool.title}
                    amount={pool.amount}
                    users={pool.users}
                  />
                ))}
              </TabsContent>
              <TabsContent value="comments">
                <Comments comments={comments} />
              </TabsContent>
            </Tabs>
            <div className="absolute flex lg:md:flex-row flex-col gap-2 items-center  right-0 top-0">
              <Heart className="text-teal-500" />
              <Dialog>
                <DialogTrigger className="bg-teal-500 text-black px-4 py-2 rounded-md flex gap-2 items-center">
                  {' '}
                  <Share />
                  <span className="hidden lg:md:block ">Share </span>
                </DialogTrigger>
                <DialogContent className="text-white bg-black border-1 shawdow-lg rounded-md">
                  <DialogHeader>
                    <DialogTitle>Share to:</DialogTitle>

                    <SocialsShare socialShare={socialShare} />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <PoolPrediction predictions={predictions} />
      </div>
    </>
  );
}
=======
// app/dashboard/pool-market/page.tsx
"use client";

import React, { useState } from "react";
import PoolCard from "./PoolCard";
import { ListCollapse } from "lucide-react";

// Mock data for the pools
const mockPools = [
  {
    id: 1,
    title: "Best AI this month...",
    description:
      "Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...",
    poolAmount: "$1045",
    poolDuration: "10D",
    tokenAmount: "10k",
    predictedAmount: "16k",
    option1: "Option 1",
    option1Percentage: "9.54",
    option2: "Option 2",
    option2Percentage: "1.47",
    category: "crypto",
  },
  {
    id: 2,
    title: "Best AI this month...",
    description:
      "Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...",
    poolAmount: "$1045",
    poolDuration: "10D",
    tokenAmount: "10k",
    predictedAmount: "16k",
    option1: "Option 1",
    option1Percentage: "9.54",
    option2: "Option 2",
    option2Percentage: "1.47",
    category: "sports",
  },
  {
    id: 3,
    title: "Best AI this month...",
    description:
      "Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...",
    poolAmount: "$1249",
    poolDuration: "10D",
    tokenAmount: "10k",
    predictedAmount: "16k",
    option1: "Option 1",
    option1Percentage: "9.54",
    option2: "Option 2",
    option2Percentage: "1.67",
    category: "culture",
  },
  {
    id: 4,
    title: "Best AI this month...",
    description:
      "Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...",
    poolAmount: "$1045",
    poolDuration: "10D",
    tokenAmount: "10k",
    predictedAmount: "16k",
    option1: "Option 1",
    option1Percentage: "9.54",
    option2: "Option 2",
    option2Percentage: "1.47",
    category: "politics",
  },
  {
    id: 5,
    title: "Best AI this month...",
    description:
      "Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...",
    poolAmount: "$1045",
    poolDuration: "10D",
    tokenAmount: "10k",
    predictedAmount: "16k",
    option1: "Option 1",
    option1Percentage: "9.54",
    option2: "Option 2",
    option2Percentage: "1.47",
    category: "tech",
  },
  {
    id: 6,
    title: "Best AI this month...",
    description:
      "Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...",
    poolAmount: "$1249",
    poolDuration: "10D",
    tokenAmount: "10k",
    predictedAmount: "16k",
    option1: "Option 1",
    option1Percentage: "9.54",
    option2: "Option 2",
    option2Percentage: "1.67",
    category: "finance",
  },
  {
    id: 7,
    title: "Best AI this month...",
    description:
      "Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...",
    poolAmount: "$1045",
    poolDuration: "10D",
    tokenAmount: "10k",
    predictedAmount: "16k",
    option1: "Option 1",
    option1Percentage: "9.54",
    option2: "Option 2",
    option2Percentage: "1.47",
    category: "crypto",
  },
  {
    id: 8,
    title: "Best AI this month...",
    description:
      "Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...",
    poolAmount: "$1045",
    poolDuration: "10D",
    tokenAmount: "10k",
    predictedAmount: "16k",
    option1: "Option 1",
    option1Percentage: "9.54",
    option2: "Option 2",
    option2Percentage: "1.47",
    category: "sports",
  },
  {
    id: 9,
    title: "Best AI this month...",
    description:
      "Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...",
    poolAmount: "$1249",
    poolDuration: "10D",
    tokenAmount: "10k",
    predictedAmount: "16k",
    option1: "Option 1",
    option1Percentage: "9.54",
    option2: "Option 2",
    option2Percentage: "1.67",
    category: "finance",
  },
];

export default function Market() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter pools based on active category
  const filteredPools =
    activeCategory === "all"
      ? mockPools
      : mockPools.filter((pool) => pool.category === activeCategory);

  return (
    <div className="bg-black min-h-screen text-white w-full">
      {/* Category filters - removed padding-top */}
      <div className="flex justify-between items-center overflow-x-auto scrollbar-hide px-4 py-2">
        <div className="flex space-x-2 items-center">
          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === "all"
                ? "border-[#259BA6] text-[#259BA6]"
                : "border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === "trending"
                ? "border-[#259BA6] text-[#259BA6]"
                : "border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]"
            }`}
            onClick={() => setActiveCategory("trending")}
          >
            Trending
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === "crypto"
                ? "border-[#259BA6] text-[#259BA6]"
                : "border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]"
            }`}
            onClick={() => setActiveCategory("crypto")}
          >
            Crypto
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === "sports"
                ? "border-[#259BA6] text-[#259BA6]"
                : "border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]"
            }`}
            onClick={() => setActiveCategory("sports")}
          >
            Sports
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === "culture"
                ? "border-[#259BA6] text-[#259BA6]"
                : "border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]"
            }`}
            onClick={() => setActiveCategory("culture")}
          >
            Culture
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === "politics"
                ? "border-[#259BA6] text-[#259BA6]"
                : "border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]"
            }`}
            onClick={() => setActiveCategory("politics")}
          >
            Politics
          </button>
          <button
            className={`whitespace-nowrap min-w-max px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === "tech"
                ? "border-[#259BA6] text-[#259BA6]"
                : "border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]"
            }`}
            onClick={() => setActiveCategory("tech")}
          >
            Tech & Science
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === "finance"
                ? "border-[#259BA6] text-[#259BA6]"
                : "border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]"
            }`}
            onClick={() => setActiveCategory("finance")}
          >
            Financials
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="bg-[#232323] px-3 py-1.5 rounded-sm text-white text-sm flex items-center gap-1">
            <span>Predictions</span>
            <span className="bg-[#259BA6] text-black text-sm px-1.5 py-0.5 rounded-full">
              0
            </span>
          </button>
          <button className=" px-3 py-1.5 text-white text-sm flex items-center gap-1">
            <ListCollapse size={20} />
            <span>Toggle</span>
          </button>
        </div>
      </div>

      {/* Pool cards grid - adjusted margin-top to remove whitespace */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-2">
        {filteredPools.map((pool) => (
          <PoolCard
            key={pool.id}
            title={pool.title}
            description={pool.description}
            poolAmount={pool.poolAmount}
            poolDuration={pool.poolDuration}
            tokenAmount={pool.tokenAmount}
            predictedAmount={pool.predictedAmount}
            option1={pool.option1}
            option1Percentage={pool.option1Percentage}
            option2={pool.option2}
            option2Percentage={pool.option2Percentage}
          />
        ))}
      </div>
    </div>
  );
}
