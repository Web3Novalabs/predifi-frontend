import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { truncate } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface Prediction {
  name: string
  predictions: {
    options: string;
    odds: string;
  }[];
  isConnected?: boolean;
  address?: string;
  hasParticipatedAlready?: boolean;
  isParticipationLoading?: boolean;
}

export default function PoolPrediction({ predictions, name, isConnected, address, hasParticipatedAlready, isParticipationLoading }: Prediction) {
  const [stake, setStake] = useState('0');
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [selectedOdds, setSelectedOdds] = useState('1.17');
  return (
    <div className="col-span-2 border border-gray-800 w-full h-fit  rounded-lg">
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-lg font-bold text-center">Select Prediction</h2>
        {predictions.map((prediction, index) => (
          <SelectPrediction
            className={`${
              selectedOption === prediction.options
                ? 'bg-teal-600 text-black'
                : ''
            }`}
            key={index}
            options={prediction.options}
            odds={prediction.odds}
            onClick={() => {
              setSelectedOption(prediction.options);
              setSelectedOdds(prediction.odds);
            }}
          />
        ))}
        {/* Stake input */}
        <div>
          <div className="flex justify-between text-sm lg:md:text-md  p-4">
            <span>Stake</span>
            <span>${stake}</span>
          </div>
          <div className="relative border border-gray-800 rounded-md">
            <Input
              type="text"
              placeholder="$0"
              className="text-right border-none focus:outline-0 "
              onChange={(e) => setStake(e.target.value)}
            />
            <span className="absolute top-1 left-2 text-[#CCCCCC]">
              Amount stake
            </span>
          </div>
        </div>

        {/* Stake Preview */}
        <div className=" border-grey-800 p-4">
          <h2 className="text-center text-xl rounded-md p-2">Preview</h2>
          <div className="flex gap-4 items-center text-sm lg:md:text-md border border-transparent border-b-gray-800 p-4 ">
            <div className="w-[50px] h-[50px] border-2 border-[#259BA599] flex justify-center items-center rounded-lg p-2">
              <Image src="/AI.png" alt="holder" width={100} height={100} />
            </div>
            <h2>{name}</h2>
          </div>
          <div>
            <div className="flex justify-between text-sm lg:md:text-md p-4">
              <span>Prediction</span>
              <span>{selectedOption}</span>
            </div>
            <div className="flex justify-between text-sm lg:md:text-md p-4">
              <span>Stake</span>
              <span>{stake} strk</span>
            </div>
            <div className="flex justify-between text-sm lg:md:text-md p-4">
              <span>Odd</span>
              <span>{selectedOdds}</span>
            </div>
            <div className="flex justify-between text-sm lg:md:text-md p-4">
              <span>Potential Payout:</span>
              <span>{+selectedOdds * +stake} strk</span>
            </div>
          </div>
          { isParticipationLoading 
            ?  <div>
              <Button disabled={true} className="w-full bg-teal-500 py-8 hover:bg-teal-600 text-black rounded-lg disabled">
                <div className="rounded-full animate-spin">
                  <FaSpinner />
                </div>
              </Button>
            </div>
            : hasParticipatedAlready 
              ? 
              <div>
                <Button disabled={true} className="w-full bg-teal-500 py-8 hover:bg-teal-600 text-black rounded-lg disabled">
                  {truncate(address ?? "", { maxLength: 16, truncateMiddle: { front: 6, back: 5 } })}  has already bet.
                </Button>
              </div>
              : isConnected ? 
                <div>
                  <Button className="w-full bg-teal-500 py-8 hover:bg-teal-600 text-black rounded-lg">
                    Bet from {truncate(address ?? "", { maxLength: 16, truncateMiddle: { front: 6, back: 5 } })} 
                  </Button>
                </div>
                : <div>
                  <Button className="w-full bg-teal-500 py-8 hover:bg-teal-600 text-black rounded-lg">
                    Connect Wallet
                  </Button>
                  <div className="italic text-center">
                    {' '}
                    Once confirmed, this bet cannot be changed.
                  </div>
                </div>
          }
        </div>
      </div>
    </div>
  );
}

interface SelectPredictionProps {
  options: string;
  odds: string;
  className?: string;
  onClick: () => void;
}

export function SelectPrediction({
  options,
  odds,
  onClick,
  className,
}: SelectPredictionProps) {
  return (
    <Button
      className={` "flex justify-between border-gray-800 border capitalize hover:bg-teal-600 hover:text-black " ${className}`}
      onClick={onClick}
    >
      <div>{options}</div>
      <div>{odds}</div>
    </Button>
  );
}
