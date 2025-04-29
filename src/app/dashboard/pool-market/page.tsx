// app/dashboard/pool-market/page.tsx
'use client';

import React, { useState } from 'react';
import PoolCard from './PoolCard';
import { ListCollapse } from 'lucide-react';

// Mock data for the pools
const mockPools = [
  {
    id: 1,
    title: 'Best AI this month...',
    description:
      'Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...',
    poolAmount: '$1045',
    poolDuration: '10D',
    tokenAmount: '10k',
    predictedAmount: '16k',
    option1: 'Option 1',
    option1Percentage: '9.54',
    option2: 'Option 2',
    option2Percentage: '1.47',
    category: 'crypto',
  },
  {
    id: 2,
    title: 'Best AI this month...',
    description:
      'Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...',
    poolAmount: '$1045',
    poolDuration: '10D',
    tokenAmount: '10k',
    predictedAmount: '16k',
    option1: 'Option 1',
    option1Percentage: '9.54',
    option2: 'Option 2',
    option2Percentage: '1.47',
    category: 'sports',
  },
  {
    id: 3,
    title: 'Best AI this month...',
    description:
      'Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...',
    poolAmount: '$1249',
    poolDuration: '10D',
    tokenAmount: '10k',
    predictedAmount: '16k',
    option1: 'Option 1',
    option1Percentage: '9.54',
    option2: 'Option 2',
    option2Percentage: '1.67',
    category: 'culture',
  },
  {
    id: 4,
    title: 'Best AI this month...',
    description:
      'Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...',
    poolAmount: '$1045',
    poolDuration: '10D',
    tokenAmount: '10k',
    predictedAmount: '16k',
    option1: 'Option 1',
    option1Percentage: '9.54',
    option2: 'Option 2',
    option2Percentage: '1.47',
    category: 'politics',
  },
  {
    id: 5,
    title: 'Best AI this month...',
    description:
      'Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...',
    poolAmount: '$1045',
    poolDuration: '10D',
    tokenAmount: '10k',
    predictedAmount: '16k',
    option1: 'Option 1',
    option1Percentage: '9.54',
    option2: 'Option 2',
    option2Percentage: '1.47',
    category: 'tech',
  },
  {
    id: 6,
    title: 'Best AI this month...',
    description:
      'Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...',
    poolAmount: '$1249',
    poolDuration: '10D',
    tokenAmount: '10k',
    predictedAmount: '16k',
    option1: 'Option 1',
    option1Percentage: '9.54',
    option2: 'Option 2',
    option2Percentage: '1.67',
    category: 'finance',
  },
  {
    id: 7,
    title: 'Best AI this month...',
    description:
      'Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...',
    poolAmount: '$1045',
    poolDuration: '10D',
    tokenAmount: '10k',
    predictedAmount: '16k',
    option1: 'Option 1',
    option1Percentage: '9.54',
    option2: 'Option 2',
    option2Percentage: '1.47',
    category: 'crypto',
  },
  {
    id: 8,
    title: 'Best AI this month...',
    description:
      'Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...',
    poolAmount: '$1045',
    poolDuration: '10D',
    tokenAmount: '10k',
    predictedAmount: '16k',
    option1: 'Option 1',
    option1Percentage: '9.54',
    option2: 'Option 2',
    option2Percentage: '1.47',
    category: 'sports',
  },
  {
    id: 9,
    title: 'Best AI this month...',
    description:
      'Crowdsourced AI experts forecasting market outcome predictions based on which model will perform...',
    poolAmount: '$1249',
    poolDuration: '10D',
    tokenAmount: '10k',
    predictedAmount: '16k',
    option1: 'Option 1',
    option1Percentage: '9.54',
    option2: 'Option 2',
    option2Percentage: '1.67',
    category: 'finance',
  },
];

export default function Market() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter pools based on active category
  const filteredPools =
    activeCategory === 'all'
      ? mockPools
      : mockPools.filter((pool) => pool.category === activeCategory);

  return (
    <div className="bg-black min-h-screen text-white w-full">
      {/* Category filters - removed padding-top */}
      <div className="flex justify-between items-center overflow-x-auto scrollbar-hide px-4 py-2">
        <div className="flex space-x-2 items-center">
          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === 'all'
                ? 'border-[#259BA6] text-[#259BA6]'
                : 'border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === 'trending'
                ? 'border-[#259BA6] text-[#259BA6]'
                : 'border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]'
            }`}
            onClick={() => setActiveCategory('trending')}
          >
            Trending
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === 'crypto'
                ? 'border-[#259BA6] text-[#259BA6]'
                : 'border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]'
            }`}
            onClick={() => setActiveCategory('crypto')}
          >
            Crypto
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === 'sports'
                ? 'border-[#259BA6] text-[#259BA6]'
                : 'border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]'
            }`}
            onClick={() => setActiveCategory('sports')}
          >
            Sports
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === 'culture'
                ? 'border-[#259BA6] text-[#259BA6]'
                : 'border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]'
            }`}
            onClick={() => setActiveCategory('culture')}
          >
            Culture
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === 'politics'
                ? 'border-[#259BA6] text-[#259BA6]'
                : 'border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]'
            }`}
            onClick={() => setActiveCategory('politics')}
          >
            Politics
          </button>
          <button
            className={`whitespace-nowrap min-w-max px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === 'tech'
                ? 'border-[#259BA6] text-[#259BA6]'
                : 'border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]'
            }`}
            onClick={() => setActiveCategory('tech')}
          >
            Tech & Science
          </button>

          <button
            className={`px-4 py-2 text-sm border-b-2 transition-colors duration-200 ${
              activeCategory === 'finance'
                ? 'border-[#259BA6] text-[#259BA6]'
                : 'border-transparent text-gray-300 hover:text-[#259BA6] hover:border-[#259BA6]'
            }`}
            onClick={() => setActiveCategory('finance')}
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
            id={pool.id}
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
