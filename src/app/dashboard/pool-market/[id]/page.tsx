"use client";

import { useParams } from "next/navigation";
import { useContractFetch } from "@/app/hooks/useBlockchain";
import { PREDIFI_ABI } from "@/app/abi/predifi_abi";
import { GET_POOL } from "@/constants/functionNames";
import {
  PoolCardDetails,
  PoolDescription,
  SimilarPools,
} from "./components/poolDetails";
import PoolPrediction from "./components/poolPrediction";
import SocialsShare from "./components/socialsShare";
import Comments from "@/components/ui/comments";
import { Button } from "@/components/ui/button";
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

export default function Market() {
  const { id } = useParams();
  const poolId = Array.isArray(id) ? id[0] : id;

  const {
    readIsLoading,
    readError,
    readData: pool,
  } = useContractFetch(PREDIFI_ABI, GET_POOL, [poolId]);

  const [poolDetails, setPoolDetails] = useState<PoolDetails | null>(null);

  useEffect(() => {
    if (!pool) return;
    setPoolDetails({
      poolId: pool.pool_id,
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

  return (
    <div className="bg-black text-white w-full min-h-screen">
      <Link href="/dashboard/pool-market">
        <div className="flex items-center p-4 gap-2 text-sm text-gray-400 hover:text-white">
          <ChevronLeft /> <span>Back to dashboard</span>
        </div>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-8 rounded-md">
        <div className="col-span-3">
          {/* Section 1 */}
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
                  <div className="text-right text-sm">
                    Total stake distribution:{" "}
                    <span className="text-lg font-semibold">
                      {poolDetails?.totalBetAmountStrk}
                    </span>
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

        <PoolPrediction
          name={poolDetails?.poolName ?? ""}
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
      </div>
    </div>
  );
}
