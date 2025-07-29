import { Contract } from "starknet";

const CONTRACT_ADDRESS =
  "0x06ff646a722404885793669af5270d4285a8acbb6e7193332ad390844f300121"; 

export async function getUserPoolCount(
  contract: Contract | undefined,
  userAddress: string
): Promise<number> {
  if (!contract || !userAddress) return 0;

  try {
    const result = await contract.get_user_pool_count(userAddress);

    if (typeof result === "bigint") return Number(result);
    if (typeof result === "object" && "toString" in result)
      return parseInt(result.toString(), 10);

    return Number(result);
  } catch (error) {
    console.error("Error fetching user pool count:", error);
    return 0;
  }
}

export { CONTRACT_ADDRESS };
