import { PINATA_BEARER_TOKEN } from "@/lib/utils";
import { PREDIFI_CONTRACT_ADDRESS } from "@/static";
import {
  useContract,
  useReadContract,
  useSendTransaction,
  useTransactionReceipt,
} from "@starknet-react/core";
import { useMemo } from "react";
import { Abi, Contract, RpcProvider } from "starknet";

export function useContractFetch(
  abi: Abi,
  functionName: string,
  args: any[] = []
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

// Utility function to perform contract write operations
export function useContractWriteUtility(
  functionName: string,
  args: any[],
  abi: Abi
) {
  const { contract } = useContract({ abi, address: PREDIFI_CONTRACT_ADDRESS });

  const calls = useMemo(() => {
    if (
      !contract ||
      !args ||
      args.some(
        (arg) => arg === undefined || arg === null || arg === "0x" || arg === ""
      )
    ) {
      return undefined;
    }

    return [contract.populate(functionName, args)];
  }, [contract, functionName, args]);

  const {
    send: writeAsync,
    data: writeData,
    isPending: writeIsPending,
  } = useSendTransaction({ calls });

  const {
    isLoading: waitIsLoading,
    data: waitData,
    status: waitStatus,
    isError: waitIsError,
    error: waitError,
  } = useTransactionReceipt({
    hash: writeData?.transaction_hash,
    watch: true,
  });

  return {
    writeAsync,
    writeData,
    writeIsPending,
    waitIsLoading,
    waitData,
    waitStatus,
    waitIsError,
    waitError,
    calls,
  };
}

export async function readContractFunctionWithStarknetJs(
  functionName: string,
  args: any[] = []
): Promise<any> {
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
