'use client';
import Search from "@/components/ui/search"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TransactionHistory } from "@/lib/types"
import { useState } from "react"
import { ListFilterPlus } from "lucide-react";

type Props = {
  data: TransactionHistory[]
}

function TransactionSummary({ data }: Props) {
  const [setsearchQuery, setSetsearchQuery] = useState("")
  // perform a freontend filtering of the history data with the search query
  const renderedHistory = data.filter((history) => {
    const searchQuery = setsearchQuery.toLowerCase()

    return (
      history.poolName.toLowerCase().includes(searchQuery) ||
      history.action.toLowerCase().includes(searchQuery) ||
      history.status.toLowerCase().includes(searchQuery)
    )
  })

  return (
    <div>
      <div className="flex max-md:flex-col gap-4 justify-between px-2.5 py-6.5">
        <h3 className="text-lg font-semibold">Token History</h3>
        <div className="flex gap-2.5 items-center">
          <button>
            <ListFilterPlus className="w-6 text-white" />
          </button>
          <Search onChange={(query) => setSetsearchQuery(query as string)} />
        </div>
      </div>

      <div className="border border-[#515461]/80 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-[#515461]/80 uppercase">
              <TableHead className="text-white/60 px-2.5">Date</TableHead>
              <TableHead className="text-white/60 px-2.5">Action</TableHead>
              <TableHead className="text-white/60 px-2.5">Pool name</TableHead>
              <TableHead className="text-white/60 px-2.5">Amount staked</TableHead>
              <TableHead className="text-white/60 px-2.5">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {renderedHistory.map((invoice, index) => (
              <TableRow
                key={index}
                className="border-[#515461]/50 hover:bg-[#515461]/20 transition-colors">
                <TableCell className="font-medium px-2.5 py-6">{invoice.date}</TableCell>
                <TableCell className="px-2.5 py-6">{invoice.action}</TableCell>
                <TableCell className="px-2.5 py-6">{invoice.poolName}</TableCell>
                <TableCell className="px-2.5 py-6">{invoice.amountStaked}</TableCell>
                <TableCell className="px-2.5 py-6">{invoice.status}</TableCell>
              </TableRow>
            ))}
            {/* implement enpty state consider search query */}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TransactionSummary