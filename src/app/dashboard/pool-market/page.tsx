'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Comments from '@/components/ui/comments';
import { Heart, Share } from 'lucide-react';
import {
  PoolCardDetails,
  PoolDescription,
  SimilarPools,
} from './components/poolDetails';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import PoolPrediction from './components/poolPrediction';
import SocialsShare from './components/socialsShare';

export default function Market() {
  const predictions = [
    { options: 'Option 1', odds: '1.17' },
    { options: 'Option 2', odds: '2.54' },
  ];
  const poolDetails = {
    title: 'Will Bitcoin reach $70K by June?',
    creator: 'BIRDMANN',
    status: 'Active',
    startTime: 'April 3, 2024, 3pm AMT',
    lockTime: 'April 3, 2024',
    endTime: 'April 3, 2024',
    user: '125',
  };
  const similarPools = [
    {
      src: '/pool/similar-pool.png',
      title: 'Best AI this month for vibe coding',
      amount: '1255',
      users: '185',
    },
    {
      src: '/pool/similar-pool.png',
      title: 'Best AI this month for vibe coding',
      amount: '1255',
      users: '185',
    },
    {
      src: '/pool/similar-pool.png',
      title: 'Best AI this month for vibe coding',
      amount: '1255',
      users: '185',
    },
  ];

  const comments = [
    {
      name: 'Zyrick',
      comment: 'xheck the next pool and see the outcome',
      date: '2024-04-03',
      userProfile: '/pool/commenter2.png',
    },
    {
      name: 'Birdmann',
      comment: 'yessss 1000x',
      date: '2024-04-03',
      userProfile: '/pool/commenter1.png',
    },
    {
      name: 'Ola Ola',
      comment: 'My stake is on fire 🔥 ',
      date: '2024-04-03',
      userProfile: '/pool/commenter2.png',
    },
  ];

  const socialShare = [
    {
      logo: '/social/telegram.png',
      name: 'Telegram',
    },
    {
      logo: '/social/reddit.png',
      name: 'Reddit',
    },
    {
      logo: '/social/x.png',
      name: 'Twitter',
    },

    {
      logo: '/social/discord.png',
      name: 'Discord',
    },
  ];
  return (
    <>
      <div>Back to dashboard</div>
      <div className="lg:md:grid grid-cols-5 gap-4 mt-8 rounded-md">
        <div className="col-span-3 ">
          {/* Section1 */}
          <PoolCardDetails
            title={poolDetails.title}
            creator={poolDetails.creator}
            status={poolDetails.status}
            startTime={poolDetails.startTime}
            user={poolDetails.user}
          />
          {/* Section 2 */}
          <div className="lg:md:p-8">
            <div className="border border-gray-800  p-2 rounded-md">
              <div className=" space-y-2">
                <div
                  className="w-[54%] h-fit justify-between flex bg-[#422C0899] px-2 py-1 text-sm lg:md:text-md
                "
                >
                  <span>Option 1 </span>
                  <span>54%</span>
                </div>
                <div
                  className="w-[32%] h-fit justify-between flex bg-[#3C193699] px-2 py-1 text-sm lg:md:text-md
                "
                >
                  <span>Option 2 </span>
                  <span>32%</span>
                </div>
                <div></div>
              </div>
              <div className="text-right gap-6 text-sm lg:md:text-md">
                Total stake distribution:{' '}
                <span className="lg:md:text-xl text-md"> 1,253$</span>
              </div>{' '}
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex lg:flex-row flex-col justify-between items-center relative">
            <Tabs defaultValue="description" className="w-full">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <PoolDescription
                  startTime={poolDetails.startTime}
                  lockTime={poolDetails.lockTime}
                  endTime={poolDetails.endTime}
                />
                {similarPools.map((pool, index) => (
                  <SimilarPools
                    key={index}
                    src={pool.src}
                    title={pool.title}
                    amount={pool.amount}
                    users={pool.users}
                  />
                ))}
              </TabsContent>
              <TabsContent value="comments">
                <Comments comments={comments} />
              </TabsContent>
            </Tabs>
            <div className="absolute flex lg:md:flex-row flex-col gap-2 items-center  right-0 top-0">
              <Heart className="text-teal-500" />
              <Dialog>
                <DialogTrigger className="bg-teal-500 text-black px-4 py-2 rounded-md flex gap-2 items-center">
                  {' '}
                  <Share />
                  <span className="hidden lg:md:block ">Share </span>
                </DialogTrigger>
                <DialogContent className="text-white bg-black border-1 shawdow-lg rounded-md">
                  <DialogHeader>
                    <DialogTitle>Share to:</DialogTitle>

                    <SocialsShare socialShare={socialShare} />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <PoolPrediction predictions={predictions} />
      </div>
    </>
  );
}
