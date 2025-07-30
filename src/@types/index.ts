type VariantWrapper<T extends string = string> = {
  variant: Record<T, unknown>;
};

export interface Pool {
  pool_id: number | bigint;
  address: number | bigint;
  poolName: string;
  poolDescription: string;
  poolImage: string;
  poolEventSourceUrl: string;
  poolStartTime: number | bigint;
  poolLockTime: number | bigint;
  poolEndTime: number | bigint;
  option1: string;
  option2: string;
  totalStakeOption1: number | bigint;
  totalStakeOption2: number | bigint;
  totalBetAmountStrk: number | bigint;
  totalBetCount: number | bigint;
  initial_stakes_share: string;
  minBetAmount: number | bigint;
  maxBetAmount: number | bigint;
  creatorFee: number | bigint;
  isPrivate: boolean;
  category?: VariantWrapper;
  poolType?: VariantWrapper;
  status?: VariantWrapper;
}
