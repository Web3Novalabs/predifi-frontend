import useCancelPool from '@/app/hooks/useCancelPool';
import { Button } from '@/components/ui/button';
import { useAccount } from '@starknet-react/core';

interface CancelPoolProps {
  poolId: string;
  creator: string;
}

export default function CancelPool({ poolId, creator }: CancelPoolProps) {
  const { address } = useAccount();
  const creatorAddress = creator as `0x${string}`;
  const { cancelPool, cancelstatus } = useCancelPool(poolId);

  if (!address || creatorAddress !== address) {
    return null;
  }

  return (
    <Button
      onClick={cancelPool}
      className="w-full bg-teal-500 py-6 hover:bg-teal-600 text-black rounded-lg"
    >
      {cancelstatus === "pending" ? "Canceling..." : "Cancel Pool"}
    </Button>
  );
}
