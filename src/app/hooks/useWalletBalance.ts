import { useState, useEffect } from 'react';
import { useBalance } from '@starknet-react/core';
import { constants } from 'starknet';

interface UseWalletBalanceProps {
  address?: string;
  enabled?: boolean;
}

interface UseWalletBalanceReturn {
  balance: number;
  balanceFormatted: string;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export default function useWalletBalance({ 
  address, 
  enabled = true 
}: UseWalletBalanceProps): UseWalletBalanceReturn {
  const [balance, setBalance] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);

  // STRK token address (mainnet)
  const STRK_TOKEN_ADDRESS = '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d';

  const { 
    data: balanceData, 
    isLoading, 
    error: balanceError,
    refetch 
  } = useBalance({
    address: address as `0x${string}`,
    token: STRK_TOKEN_ADDRESS,
    watch: true,
  });

  useEffect(() => {
    if (balanceData?.value) {
      try {
        // Convert from wei to STRK (18 decimals)
        const balanceInStrk = Number(balanceData.value) / 1e18;
        setBalance(balanceInStrk);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setBalance(0);
      }
    } else if (balanceError) {
      setError(balanceError);
      setBalance(0);
    }
  }, [balanceData, balanceError]);

  const balanceFormatted = balance.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  });

  return {
    balance,
    balanceFormatted,
    isLoading,
    error,
    refetch: refetch || (() => {}),
  };
}
