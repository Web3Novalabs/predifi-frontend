import { PINATA_BEARER_TOKEN } from "@/lib/utils";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";
import { useReadContract } from "@starknet-react/core";
import { Abi, Contract, RpcProvider } from "starknet";
import { PoolDetails } from "@/lib/types";


export function useContractFetch(
  abi: Abi,
  functionName: string,
  args: unknown[] = []
) {
  const {
    data: readData,
    refetch: dataRefetch,
    isError: readIsError,
    isLoading: readIsLoading,
    error: readError,
    isFetching: readRefetching,
  } = useReadContract({
    abi: abi,
    functionName: functionName,
    address: PREDIFI_CONTRACT_ADDRESS,
    args: args,
    refetchInterval: 600000,

  });

  return {
    readData,
    dataRefetch,
    readIsError,
    readIsLoading,
    readError,
    readRefetching,
  };
}

/**
 * Helper function to determine the winning option for a settled pool
 * @param pool - The pool details
 * @returns Object with winning option information
 */
export function getPoolWinnerInfo(pool: PoolDetails) {
  const option1Stake = pool.totalStakeOption1;
  const option2Stake = pool.totalStakeOption2;
  const totalStake = option1Stake + option2Stake;

  const option1Wins = totalStake > 0 ? option1Stake > option2Stake : false;

  return {
    winningOption: option1Wins ? "option1" : "option2",
    winningText: option1Wins ? pool.option1 : pool.option2,
    winningStake: option1Wins ? option1Stake : option2Stake,
    losingOption: option1Wins ? "option2" : "option1",
    losingText: option1Wins ? pool.option2 : pool.option1,
    losingStake: option1Wins ? option2Stake : option1Stake,
    winningPercentage: totalStake > 0 ? ((option1Wins ? option1Stake : option2Stake) / totalStake) * 100 : 0,
    losingPercentage: totalStake > 0 ? ((option1Wins ? option2Stake : option1Stake) / totalStake) * 100 : 0,
    totalStake,
    isTie: option1Stake === option2Stake,
  };
}

export async function readContractFunctionWithStarknetJs(
  functionName: string,
  args: unknown[] = []
): Promise<unknown> {
  const provider = new RpcProvider({
    nodeUrl: process.env.NEXT_PUBLIC_RPC_URL,
  });

  // Get the contract ABI from the chain
  const { abi } = await provider.getClassAt(PREDIFI_CONTRACT_ADDRESS);
  if (!abi) {
    throw new Error("No ABI found for the contract.");
  }

  // Instantiate contract
  const contract = new Contract(abi, PREDIFI_CONTRACT_ADDRESS, provider);

  // Dynamically call the function
  if (typeof contract[functionName] !== "function") {
    throw new Error(
      `Function '${functionName}' does not exist on the contract.`
    );
  }

  const result = await contract[functionName](...args);
  return result;
}

export const fetchContentFromIPFS = async (cid: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.NEXT_PUBLIC_PINATA_GATEWAY_TOKEN}`
    );
    const data = await response.json();

    return { ...data, cid: cid };
  } catch (error) {
    console.error(`Error fetching data for CID ${cid}:`, error);
    return null;
  }
};

// Utility Function to upload image to IPFS
export const uploadImageToIPFS = async (imgFile: File) => {
  if (!imgFile) {
    return;
  }
  try {
    const ImageData = new FormData();
    ImageData.append("file", imgFile);

    const image_upload_res = await fetch(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PINATA_BEARER_TOKEN}`,
        },
        body: ImageData,
      }
    );

    const image_upload_resData = await image_upload_res.json();

    return image_upload_resData;
  } catch (err) {
    console.log(err);
  }
};
