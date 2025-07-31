"use client";

import { useParams } from "next/navigation";
import { useContractFetch } from "@/app/hooks/useBlockchain";
import { PREDIFI_ABI } from "@/app/abi/predifi_abi";
import { GET_POOL } from "@/constants/functionNames";
import { PoolCardDetails, PoolDescription } from "./components/poolDetails";
import PoolPrediction from "./components/poolPrediction";
import StakePool from "./components/StakePool";
import SocialsShare from "./components/socialsShare";
import Comments from "@/components/ui/comments";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, Heart, Share } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { PoolDetails } from "@/lib/types";
import { num, shortString } from "starknet";
import { useAccount } from "@starknet-react/core";
import useGetUserParticiaptionInPool from "@/app/hooks/useGetUserParticipation";

export default function Market() {
  const { id } = useParams();
  const { address, isConnected } = useAccount();
  const poolId = Array.isArray(id) ? id[0] : id;

  const {
    readIsLoading,
    readError,
    readData: pool,
  } = useContractFetch(PREDIFI_ABI, GET_POOL, [poolId]);

  const {
    data: hasUserAlreadyParticipated,
    isLoading: isUserParticipatedLoading,
  } = useGetUserParticiaptionInPool({
    enabled: isConnected,
    userAddress: address,
    poolId: poolId,
  });

  const [poolDetails, setPoolDetails] = useState<PoolDetails | null>(null);

  useEffect(() => {
    if (!pool) return;
    setPoolDetails({
      poolId: pool.pool_id.toString(),
      address: num.toHex(pool.address),
      poolName: shortString.decodeShortString(pool.poolName),
      poolDescription: pool.poolDescription,
      poolImage: pool.poolImage,
      eventSourceUrl: pool.poolEventSourceUrl,
      startTime: pool.poolStartTime.toString(),
      lockTime: pool.poolLockTime.toString(),
      endTime: pool.poolEndTime.toString(),
      option1: shortString.decodeShortString(pool.option1),
      option2: shortString.decodeShortString(pool.option2),
      totalStakeOption1: pool.totalStakeOption1.toString(),
      totalStakeOption2: pool.totalStakeOption2.toString(),
      totalBetAmountStrk: pool.totalBetAmountStrk.toString(),
      totalBetCount: pool.totalBetCount.toString(),
      initialStakeShares: pool.initial_stakes_share,
      minBet: pool.minBetAmount.toString(),
      maxBet: pool.maxBetAmount.toString(),
      creatorFee: pool.creatorFee.toString(),
      isPrivate: pool.isPrivate.toString(),
      category: Object.keys(pool.category?.variant || {})[0] ?? "Unknown",
      poolType: Object.keys(pool.poolType?.variant || {})[0] ?? "Unknown",
      status: Object.keys(pool.status?.variant || {})[0] ?? "Unknown",
    });
  }, [pool]);

  const similarPools = [
    {
      src: "/AI.png",
      title: "Best AI this month for vibe coding",
      amount: "1255",
      users: "185",
    },
  ];

  const comments = [
    {
      name: "Zyrick",
      comment: "xheck the next pool and see the outcome",
      date: "2024-04-03",
      userProfile: "/pool/commenter2.png",
    },
  ];

  const socialShare = [
    { logo: "/social/telegram.png", name: "Telegram" },
    { logo: "/social/reddit.png", name: "Reddit" },
    { logo: "/social/x.png", name: "Twitter" },
    { logo: "/social/discord.png", name: "Discord" },
  ];

  if (!poolId || !Number(poolDetails?.poolId)) {
    return (
      <div className="flex justify-center items-center pt-60 text-red-500">
        Invalid or missing pool ID.
      </div>
    );
  }

  return (
    <div className="bg-black text-white w-full min-h-screen">
      <Link href="/dashboard/pool-market">
        <div className="flex items-center p-4 gap-2 text-sm text-gray-400 hover:text-white">
          <ChevronLeft /> <span>Back to dashboard</span>
        </div>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 mt-8 rounded-md">
        <div className="col-span-5">
          {readIsLoading ? (
            <Skeleton className="h-20 rounded-md mb-4" />
          ) : readError ? (
            <p className="text-red-500 px-4">Failed to load pool data</p>
          ) : (
            poolDetails && (
              <PoolCardDetails
                title={poolDetails.poolName}
                creator={poolDetails.address}
                status={poolDetails.status}
                startTime={poolDetails.startTime}
                user={poolDetails.totalBetCount.toString()}
                category={poolDetails.category}
                poolImage={poolDetails.poolImage}
              />
            )
          )}

          {/* Section 2 */}
          <div className="p-4">
            <div className="border border-gray-800 p-4 rounded-md space-y-2">
              {readIsLoading ? (
                <>
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-4/5" />
                </>
              ) : (
                <>
                  <div className="flex justify-between bg-[#422C0899] capitalize px-2 py-1 text-sm">
                    <span>{poolDetails?.option1}</span>
                    <span>{poolDetails?.totalStakeOption1}</span>
                  </div>
                  <div className="flex justify-between bg-[#3C193699] capitalize px-2 py-1 text-sm">
                    <span>{poolDetails?.option2}</span>
                    <span>{poolDetails?.totalStakeOption2}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      Total stake distribution:{" "}
                      <span className="text-lg font-semibold text-teal-400">
                        {poolDetails?.totalBetAmountStrk} STRK
                      </span>
                    </div>
                    {poolDetails && (
                      <Dialog>
                        <DialogTrigger className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-black px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-teal-500/25 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Stake
                        </DialogTrigger>
                        <DialogContent className="text-white bg-black border-gray-800 shadow-lg rounded-md max-w-md">
                          <DialogHeader>
                            <DialogTitle>Stake on Pool</DialogTitle>
                          </DialogHeader>
                          <StakePool
                            poolId={poolId}
                            isConnected={isConnected}
                            address={address}
                            onStakeSuccess={() => {
                              // Optionally refresh pool data after successful stake
                              window.location.reload();
                            }}
                          />
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col relative">
            <Tabs defaultValue="description" className="w-full">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                {readIsLoading
                  ? Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-6 w-full mb-2" />
                    ))
                  : poolDetails && (
                      <PoolDescription
                        startTime={poolDetails.startTime}
                        lockTime={poolDetails.lockTime}
                        endTime={poolDetails.endTime}
                        desc={poolDetails.poolDescription}
                      />
                    )}

                {/* {similarPools.map((pool, index) => (
                  <SimilarPools
                    key={index}
                    src={pool.src}
                    title={pool.title}
                    amount={pool.amount}
                    users={pool.users}
                  />
                ))} */}
              </TabsContent>
              <TabsContent value="comments">
                <Comments comments={[]} />
              </TabsContent>
            </Tabs>

            <div className="absolute right-0 top-0 flex gap-2 items-center">
              <Heart className="text-teal-500" />
              <Dialog>
                <DialogTrigger className="bg-teal-500 text-black px-4 py-2 rounded-md flex gap-2 items-center">
                  <Share />
                  <span className="hidden lg:block">Share</span>
                </DialogTrigger>
                <DialogContent className="text-white bg-black border-gray-800 shadow-lg rounded-md">
                  <DialogHeader>
                    <DialogTitle>Share to:</DialogTitle>
                    <SocialsShare socialShare={socialShare} />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="space-y-4 col-span-3 ">
          {poolDetails && (
            <PoolPrediction
              name={poolDetails?.poolName ?? ""}
              isParticipationLoading={isUserParticipatedLoading}
              hasParticipatedAlready={hasUserAlreadyParticipated}
              isConnected={isConnected}
              address={address}
              creator={poolDetails.address}
              poolId={poolId}
              predictions={[
                {
                  options: poolDetails?.option1 || "Option 1",
                  odds: poolDetails?.totalStakeOption1.toString() ?? "",
                },
                {
                  options: poolDetails?.option2 || "Option 2",
                  odds: poolDetails?.totalStakeOption2.toString() ?? "",
                },
              ]}
            />
          )}


        </div>
      </div>
    </div>
  );
}
