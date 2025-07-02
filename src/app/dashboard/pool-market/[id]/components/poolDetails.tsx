import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  formatTimeDiffFromNow,
  formatToGMTPlusOne,
  shortenAddress,
} from "@/lib/utils";
import { Users, Banknote } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
interface PoolCardDetailsProps {
  title: string;
  creator: string;
  status: string;
  startTime: string;
  user: string;
  category: string;
  poolImage: string;
}
export function PoolCardDetails({
  title,
  creator,
  startTime,
  status,
  user,
  category,
  poolImage,
}: PoolCardDetailsProps) {
  const creatorAddress = creator as `0x${string}`;
  return (
    <div className="flex lg:md:flex-row flex-col justify-between mb-8">
      <div className="flex lg:md:flex-row flex-col lg:md:gap-6 gap-3 items-center">
        {/* Image */}
        <div className="lg:md:w-[120px] lg:md:h-[120px] w-[100px] h-[100px] flex justify-center items-center rounded-full">
          <PoolImage src={poolImage} />
        </div>
        {/* Details */}
        <div className=" space-x-2 lg:md:text-md text-sm">
          <span className="rounded-xl border border-gray-800 px-2 py-1">
            {category}
          </span>

          <div className="text-[#CCCCCC] mt-2">
            <h2 className="text-white font-semibold capitalize">{title}</h2>
            <p className="">
              Created by
              <span className="font-bold uppercase text-teal-500 ml-1.5">
                {shortenAddress(creatorAddress)}
              </span>
            </p>
            <div className="flex gap-2 items-center mt-2">
              <div className="flex gap-2 items-center">
                <Users />
                <span>{user}</span>
              </div>
              <p className="gap-4 mt-2">
                <span>Status</span>{" "}
                <span className="bg-green-900 px-2 py-1">{status}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:md:-right text-sm lg:md:text-md">
        <small>
          Begins in{" "}
          <span className="text-teal-500">
            {formatTimeDiffFromNow(Number(startTime))}{" "}
          </span>
        </small>
        <p>{formatToGMTPlusOne(Number(startTime))}</p>
      </div>
    </div>
  );
}
interface PoolDescriptionProps {
  startTime: string;
  lockTime: string;
  endTime: string;
  desc: string;
}

export function PoolDescription({
  startTime,
  lockTime,
  endTime,
  desc,
}: PoolDescriptionProps) {
  return (
    <div>
      <p className="my-4 capitalize">{desc}</p>
      <Accordion
        type="single"
        collapsible
        className="bg-[#0E0E10] rounded-lg p-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>TIMELINE AND VALIDATION PROCESS</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 max-w-[300px] mx-auto p-4">
              <p className="flex justify-between">
                <span>START TIME</span>{" "}
                <span>{formatToGMTPlusOne(Number(startTime))}</span>
              </p>
              <p className="flex justify-between">
                <span>LOCK TIME</span>{" "}
                <span>{formatToGMTPlusOne(Number(lockTime))}</span>
              </p>
              <p className="flex justify-between">
                <span>END TIME</span>{" "}
                <span>{formatToGMTPlusOne(Number(endTime))}</span>
              </p>
            </div>
            <div className="p-4">
              NOTE:{" "}
              <span className="italic">
                Validation time varies which can approximately affect the end
                time.{" "}
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
interface SimilarPoolsProps {
  src: string;
  title: string;
  amount: string;
  users: string;
}
export function SimilarPools({ src, title, amount, users }: SimilarPoolsProps) {
  return (
    <div className="flex flex-col gap-2 my-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className=" gap-4">
        <div className="flex gap-4 items-center border border-transparent border-b-gray-800  p-4 max-w-[500px] ">
          <div className="w-[50px] h-[50px] border-2 border-[#259BA599] flex justify-center items-center rounded-xl p-2">
            <Image src={src} alt="holder" width={100} height={100} />
          </div>
          <div className="text-[#CCCCCC]">
            <h2 className="text-white">Best AI this month for vibe coding</h2>
            <div className="justify-between flex gap-2">
              <div className="flex gap-2 items-center">
                <Banknote />
                <span>${amount}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Users />
                <span>{users}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type PoolImageProps = {
  src?: string;
};

function PoolImage({ src }: PoolImageProps) {
  const [hasError, setHasError] = useState(false);

  const fallback = "/pool/pool.png";

  const imageSrc = useMemo(() => {
    if (!src) return fallback;
    if (src.startsWith("http") || src.startsWith("/")) return src;
    return `https://ipfs.io/ipfs/${src}`;
  }, [src]);

  return (
    <div className="w-[100px] h-[100px] lg:md:w-[120px] lg:md:h-[120px] flex justify-center items-center rounded-full">
      <Image
        src={hasError ? fallback : imageSrc}
        alt="Pool Image"
        width={100}
        height={100}
        onError={() => setHasError(true)}
        unoptimized
      />
    </div>
  );
}
