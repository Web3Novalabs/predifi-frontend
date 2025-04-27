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
  date: string
  action: string
  poolName: string
  amountStaked: string
  status: string
}