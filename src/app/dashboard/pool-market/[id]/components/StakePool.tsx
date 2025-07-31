import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { truncate } from '@/lib/utils';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import useStakePool from '@/app/hooks/useStakePool';
import useWalletBalance from '@/app/hooks/useWalletBalance';
import ConnectWalletModal from '@/components/ConnectWalletModal';

interface StakePoolProps {
  poolId: string;
  isConnected?: boolean;
  address?: string;
  onStakeSuccess?: () => void;
}

export default function StakePool({ 
  poolId, 
  isConnected, 
  address, 
  onStakeSuccess 
}: StakePoolProps) {
  const [stakeAmount, setStakeAmount] = useState('');
  const [showConnectModal, setShowConnectModal] = useState(false);
  const { stakeStatus, stakeOnPool } = useStakePool(poolId);
  
  // Get wallet balance using the dedicated hook
  const { balance: walletBalance, isLoading: balanceLoading } = useWalletBalance({
    address,
    enabled: isConnected,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow empty string
    if (value === '') {
      setStakeAmount('');
      return;
    }
    
    // Only allow valid number patterns (digits and single decimal point)
    const numberRegex = /^\d*\.?\d*$/;
    
    if (numberRegex.test(value)) {
      // Prevent multiple decimal points
      const decimalCount = (value.match(/\./g) || []).length;
      if (decimalCount <= 1) {
        // Convert to number to check if it's positive
        const numValue = parseFloat(value);
        if (isNaN(numValue) || numValue >= 0) {
          setStakeAmount(value);
        }
      }
    }
  };

  const handleStake = async () => {
    await stakeOnPool(stakeAmount);
    if (onStakeSuccess) {
      onStakeSuccess();
    }
    // Clear the input after successful stake
    setStakeAmount('');
  };

  const isLoading = stakeStatus === 'pending';
  const stakeAmountNum = parseFloat(stakeAmount) || 0;
  const isValidAmount = stakeAmount && stakeAmountNum > 0;
  const isMinimumStake = stakeAmountNum >= 10;
  const hasSufficientBalance = stakeAmountNum <= walletBalance;
  const canStake = isValidAmount && isMinimumStake && hasSufficientBalance && isConnected;

  return (
    <div className="p-2">
      <p className="text-sm text-gray-400 mb-4">
        Stake tokens on this pool without voting on a specific outcome. 
        Your stake will be distributed proportionally based on the final results.
      </p>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-medium text-gray-300">Balance</label>
          <div className="text-sm text-gray-400">
         <span className="text-teal-400 font-semibold">
              {balanceLoading ? 'Loading...' : `${walletBalance.toFixed(2)} STRK`}
            </span>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg blur-sm"></div>
          <div className="relative bg-gray-900/80 border border-gray-700 rounded-lg p-4 backdrop-blur-sm hover:border-teal-500/50 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="0.00"
                  value={stakeAmount}
                  onChange={handleInputChange}
                  className="bg-transparent border-0 text-2xl font-bold text-white placeholder-gray-500 focus:outline-0 focus:border-0 focus:ring-0 focus:shadow-none outline-0 ring-0 shadow-none p-0 h-auto [&:focus]:outline-none [&:focus]:border-none [&:focus]:ring-0 [&:focus]:shadow-none"
                  disabled={isLoading}
                  style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                />
                <div className="text-xs text-gray-400 mt-1">
                  Enter amount to stake
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                  STRK
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Token
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 mt-3">
          {['10', '50', '100', '500'].map((amount) => (
            <button
              key={amount}
              onClick={() => setStakeAmount(amount)}
              disabled={isLoading}
              className="flex-1 px-3 py-2 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {amount}
            </button>
          ))}
        </div>
      </div>

      {isConnected && stakeAmount && (
        <div className="mb-3 space-y-1">
          {!isMinimumStake && (
            <div className="text-xs text-red-400 flex items-center gap-1">
              <span>⚠️</span>
              Minimum stake is 10 STRK
            </div>
          )}
          {!hasSufficientBalance && (
            <div className="text-xs text-red-400 flex items-center gap-1">
              <span>⚠️</span>
              Insufficient balance. You have {walletBalance.toFixed(2)} STRK
            </div>
          )}
          {isValidAmount && isMinimumStake && hasSufficientBalance && (
            <div className="text-xs text-green-400 flex items-center gap-1">
              <span>✓</span>
              Ready to stake
            </div>
          )}
        </div>
      )}

      {/* Wallet Balance Display */}
      {isConnected && (
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Wallet Balance:</span>
            <span className="text-white font-medium">
              {balanceLoading ? 'Loading...' : `${walletBalance.toFixed(2)} STRK`}
            </span>
          </div>
        </div>
      )}

      {/* Stake Button */}
      {isLoading ? (
        <Button 
          disabled 
          className="w-full bg-teal-500 py-4 hover:bg-teal-600 text-black rounded-lg"
        >
          <div className="rounded-full animate-spin mr-2">
            <FaSpinner />
          </div>
          Staking...
        </Button>
      ) : !isConnected ? (
        <Button 
          onClick={() => setShowConnectModal(true)}
          className="w-full bg-teal-500 py-4 hover:bg-teal-600 text-black rounded-lg"
        >
          Connect Wallet to Stake
        </Button>
      ) : !isValidAmount ? (
        <Button 
          disabled 
          className="w-full bg-gray-500 py-4 text-white rounded-lg"
        >
          Enter Valid Amount
        </Button>
      ) : !isMinimumStake ? (
        <Button 
          disabled 
          className="w-full bg-gray-500 py-4 text-white rounded-lg"
        >
          Minimum Stake: 10 STRK
        </Button>
      ) : !hasSufficientBalance ? (
        <Button 
          disabled 
          className="w-full bg-gray-500 py-4 text-white rounded-lg"
        >
          Insufficient Balance
        </Button>
      ) : (
        <Button 
          onClick={handleStake}
          className="w-full bg-teal-500 py-4 hover:bg-teal-600 text-black rounded-lg"
        >
          Stake {stakeAmount} STRK from {truncate(address ?? "", { maxLength: 16, truncateMiddle: { front: 6, back: 5 } })}
        </Button>
      )}
      
      <div className="text-xs text-center text-gray-400 mt-2">
        Stakes are locked until pool settlement
      </div>
      
      <ConnectWalletModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
      />
    </div>
  );
}
