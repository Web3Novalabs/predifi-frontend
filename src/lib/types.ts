export interface PoolFormData {
  image: File | null;
  name: string;
  description: string;
  eventSourceUrl: string;
  options: string[];
  categories: string[];
  lockDate: string;
  endDate: string;
  minBetAmount: string;
  maxBetAmount: string;
  creatorFee: string;
  privacy: "public" | "private";
}

export type TransactionHistory = {
  date: string;
  action: string;
  poolName: string;
  amountStaked: string;
  status: string;
};

// Type for StatsCard props
export interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
  trend: React.ReactNode;
}

// Type for ActivePrediction props
export interface ActivePredictionProps {
  title: string;
  date: string;
  status: string;
  potentialPayout: string;
  stake: string;
  odd: string;
  id: string;
  description: string;
  statusIcon: React.ReactNode;
  idIcon: React.ReactNode;
  actionIcon: React.ReactNode;
}

// Type for Chart props
export interface ChartProps {
  title: string;
  buttonText: string;
  data: { month: string; value: number }[];
  yAxisLabels: string[]; // Array of y-axis labels
  highlightedIndex?: number; // Optional index to highlight a specific bar
}

export type PoolDetails = {
  poolId: string;
  address: string;
  poolName: string;
  poolDescription: string;
  poolImage: string;
  eventSourceUrl: string;
  startTime: string;
  lockTime: string;
  endTime: string;
  option1: string;
  option2: string;
  minBet: string;
  maxBet: string;
  creatorFee: string;
  totalStakeOption1: number;
  totalStakeOption2: number;
  totalBetAmountStrk: number;
  totalBetCount: number;
  initialStakeShares: number;
  isPrivate: boolean;
  category: string;
  poolType: string;
  status: string;
};
export type ActionType =  "idle" | "pending" | "success" | "error";
