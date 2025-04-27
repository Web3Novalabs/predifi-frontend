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


// function splits camel case strings into separate words
const splitByCamelCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2")
}

function TransactionSummary({ data }: Props) {
  // obtain table headers from the first object in the data array
  const tableHeader = Object.keys(data?.[0] || {})

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
      <div className="flex max-md:flex-col gap-4 justify-between md:items-center px-2.5 py-6.5">
        <h3 className="text-lg font-semibold">Token History</h3>
        <div className="max-md:flex-1 flex gap-2.5 items-center">
          <button>
            <ListFilterPlus className="w-6 text-white" />
          </button>
          <Search className="flex-1" onChange={(query) => setSetsearchQuery(query as string)} />
        </div>
      </div>

      <div className="border border-[#515461]/80 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-[#515461]/80 uppercase">
              {tableHeader.map((header, i) => <TableHead key={i} className="text-white/60 px-2.5">
                {splitByCamelCase(header)}
              </TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {renderedHistory.map((invoice, index) => (
              <TableRow
                key={index}
                className="border-[#515461]/50 hover:bg-[#515461]/20 transition-colors">
                {tableHeader.map((header, i) => (
                  <TableCell key={i} className="px-2.5 py-6">{invoice?.[header as keyof TransactionHistory]}</TableCell>
                ))}
              </TableRow>
            ))}
            {/* empty states */}
            {renderedHistory.length === 0 && (
              <TableRow className="border-[#515461]/50 hover:bg-transparent">
                <TableCell colSpan={tableHeader.length} className="text-center py-6 text-white/60">
                  No transaction history found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TransactionSummary