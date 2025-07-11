import { Skeleton } from "@/components/ui/skeleton"

export default function PoolCardSkeleton() {
  return (
    <div className="rounded-xl bg-[#00262A66] space-y-4 backdrop-blur-lg p-6 shadow-sm">
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>

      <div>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>

      <Skeleton className="h-10 w-full rounded-full mt-4" />
    </div>
  )
}
