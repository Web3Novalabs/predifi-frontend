"use client"
import { useState, useMemo } from "react"
import { Trophy, Medal, Award, TrendingUp, TrendingDown, Search, Download, FileText, Loader2 } from "lucide-react"

interface LeaderboardEntry {
  rank: number
  username: string
  score: number
  winRate: number
  totalEarned: number
  change: number
  avatar?: string
}

const leaderboardData = {
  month: [
    {
      rank: 1,
      username: "CryptoKing",
      score: 4850,
      winRate: 87.5,
      totalEarned: 15420.5,
      change: 2,
    },
    {
      rank: 2,
      username: "PredictionMaster",
      score: 4720,
      winRate: 82.3,
      totalEarned: 12890.25,
      change: -1,
    },
    {
      rank: 3,
      username: "MarketWizard",
      score: 4650,
      winRate: 79.8,
      totalEarned: 11250.75,
      change: 1,
    },
    {
      rank: 4,
      username: "TradingPro",
      score: 4420,
      winRate: 76.2,
      totalEarned: 9875.3,
      change: 0,
    },
    {
      rank: 5,
      username: "PoolShark",
      score: 4180,
      winRate: 73.5,
      totalEarned: 8650.9,
      change: 3,
    },
    {
      rank: 6,
      username: "BetMaster",
      score: 3950,
      winRate: 71.2,
      totalEarned: 7420.15,
      change: -2,
    },
    {
      rank: 7,
      username: "ProfitHunter",
      score: 3780,
      winRate: 68.9,
      totalEarned: 6890.45,
      change: 1,
    },
    {
      rank: 8,
      username: "SmartBetter",
      score: 3620,
      winRate: 66.4,
      totalEarned: 6120.8,
      change: -1,
    },
    {
      rank: 9,
      username: "DataDriven",
      score: 3450,
      winRate: 64.8,
      totalEarned: 5890.2,
      change: 2,
    },
    {
      rank: 10,
      username: "AlgoTrader",
      score: 3280,
      winRate: 62.1,
      totalEarned: 5420.9,
      change: -3,
    },
  ],
  week: [
    {
      rank: 1,
      username: "QuickStrike",
      score: 1250,
      winRate: 92.1,
      totalEarned: 3420.8,
      change: 5,
    },
    {
      rank: 2,
      username: "WeeklyWinner",
      score: 1180,
      winRate: 89.4,
      totalEarned: 2890.5,
      change: 3,
    },
    {
      rank: 3,
      username: "FastTrader",
      score: 1120,
      winRate: 85.7,
      totalEarned: 2650.25,
      change: -1,
    },
    {
      rank: 4,
      username: "CryptoKing",
      score: 1080,
      winRate: 83.2,
      totalEarned: 2420.75,
      change: -3,
    },
    {
      rank: 5,
      username: "RapidRise",
      score: 1020,
      winRate: 81.5,
      totalEarned: 2180.9,
      change: 8,
    },
    {
      rank: 6,
      username: "PredictionMaster",
      score: 980,
      winRate: 78.9,
      totalEarned: 1950.4,
      change: -2,
    },
    {
      rank: 7,
      username: "ShortTermPro",
      score: 920,
      winRate: 76.3,
      totalEarned: 1720.15,
      change: 4,
    },
    {
      rank: 8,
      username: "WeekendWarrior",
      score: 880,
      winRate: 74.1,
      totalEarned: 1580.6,
      change: 2,
    },
    {
      rank: 9,
      username: "DayTrader",
      score: 820,
      winRate: 71.8,
      totalEarned: 1420.3,
      change: 1,
    },
    {
      rank: 10,
      username: "SwiftPredictor",
      score: 780,
      winRate: 69.5,
      totalEarned: 1280.7,
      change: -4,
    },
  ],
  allTime: [
    {
      rank: 1,
      username: "LegendaryTrader",
      score: 28750,
      winRate: 84.2,
      totalEarned: 125420.8,
      change: 0,
    },
    {
      rank: 2,
      username: "MarketMaster",
      score: 26890,
      winRate: 82.7,
      totalEarned: 118650.5,
      change: 1,
    },
    {
      rank: 3,
      username: "PredictionGod",
      score: 25420,
      winRate: 81.3,
      totalEarned: 112890.25,
      change: -1,
    },
    {
      rank: 4,
      username: "CryptoKing",
      score: 23650,
      winRate: 79.8,
      totalEarned: 98750.75,
      change: 2,
    },
    {
      rank: 5,
      username: "ElitePredictor",
      score: 22180,
      winRate: 78.4,
      totalEarned: 89420.9,
      change: 0,
    },
    {
      rank: 6,
      username: "VeteranBetter",
      score: 20950,
      winRate: 76.9,
      totalEarned: 82650.4,
      change: 3,
    },
    {
      rank: 7,
      username: "ConsistentWinner",
      score: 19780,
      winRate: 75.2,
      totalEarned: 76890.15,
      change: -2,
    },
    {
      rank: 8,
      username: "PredictionMaster",
      score: 18620,
      winRate: 73.8,
      totalEarned: 71250.6,
      change: 1,
    },
    {
      rank: 9,
      username: "ProTrader",
      score: 17450,
      winRate: 72.1,
      totalEarned: 65890.4,
      change: -1,
    },
    {
      rank: 10,
      username: "MarketSage",
      score: 16280,
      winRate: 70.5,
      totalEarned: 59420.8,
      change: 2,
    },
  ],
}

const periodStats = {
  month: {
    totalPlayers: 1247,
    totalRewards: "2.4M",
    avgAccuracy: 89.2,
  },
  week: {
    totalPlayers: 892,
    totalRewards: "580K",
    avgAccuracy: 91.5,
  },
  allTime: {
    totalPlayers: 15420,
    totalRewards: "45.2M",
    avgAccuracy: 76.8,
  },
}

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Trophy className="w-5 h-5 text-yellow-400" />
    case 2:
      return <Medal className="w-5 h-5 text-gray-300" />
    case 3:
      return <Award className="w-5 h-5 text-amber-600" />
    default:
      return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-400">#{rank}</span>
  }
}

function getChangeIndicator(change: number) {
  if (change > 0) {
    return (
      <div className="flex items-center text-green-400 text-xs">
        <TrendingUp className="w-3 h-3 mr-1" />+{change}
      </div>
    )
  } else if (change < 0) {
    return (
      <div className="flex items-center text-red-400 text-xs">
        <TrendingDown className="w-3 h-3 mr-1" />
        {change}
      </div>
    )
  } else {
    return <div className="text-gray-500 text-xs">-</div>
  }
}

export default function Leaderboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<"month" | "week" | "allTime">("month")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handlePeriodChange = async (newPeriod: "month" | "week" | "allTime") => {
    setIsLoading(true)
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSelectedPeriod(newPeriod)
    setIsLoading(false)
  }

  const currentData = leaderboardData[selectedPeriod]
  const currentStats = periodStats[selectedPeriod]

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return currentData
    return currentData.filter((entry) => entry.username.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [currentData, searchQuery])

  // Export to CSV function
  const exportToCSV = () => {
    const headers = ["Rank", "Username", "Score", "Win Rate (%)", "Total Earned ($)", "Change"]
    const csvContent = [
      headers.join(","),
      ...filteredData.map((entry) =>
        [entry.rank, entry.username, entry.score, entry.winRate, entry.totalEarned, entry.change].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `leaderboard-${selectedPeriod}-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

 

  return (
    <div className="bg-[#09090B] border border-gray-800 rounded-lg p-6 w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Leaderboard</h2>
          <p className="text-gray-400 text-sm">
            Top performers{" "}
            {selectedPeriod === "month" ? "this month" : selectedPeriod === "week" ? "this week" : "of all time"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white text-sm rounded-md pl-10 pr-4 py-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Export Buttons */}
          <div className="flex gap-2">
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm rounded-md px-3 py-2 transition-colors"
              title="Export as CSV"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">CSV</span>
            </button>
          
          </div>

          {/* Period Selector */}
          <select
            value={selectedPeriod}
            onChange={(e) => handlePeriodChange(e.target.value as "month" | "week" | "allTime")}
            disabled={isLoading}
            className="bg-gray-800 border border-gray-700 text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
          >
            <option value="month">This Month</option>
            <option value="week">This Week</option>
            <option value="allTime">All Time</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3 text-cyan-400">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="text-lg">Loading leaderboard...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-4 text-sm text-gray-400">
              {filteredData.length > 0
                ? `Found ${filteredData.length} user${filteredData.length !== 1 ? "s" : ""} matching "${searchQuery}"`
                : `No users found matching "${searchQuery}"`}
            </div>
          )}

          {/* Table Header */}
          <div className="hidden md:grid md:grid-cols-6 gap-4 text-gray-400 text-sm font-medium mb-4 px-4">
            <div>Rank</div>
            <div>User</div>
            <div>Score</div>
            <div>Win Rate</div>
            <div>Total Earned</div>
            <div>Stat</div>
          </div>

          {/* Leaderboard Entries */}
          <div className="space-y-2">
            {filteredData.length > 0 ? (
              filteredData.map((entry, index) => (
                <div
                  key={entry.username}
                  className={`
                    rounded-lg p-4 transition-all duration-200 hover:bg-gray-800/50
                    ${index < 3 ? "bg-gradient-to-r from-gray-800/30 to-transparent border border-cyan-500/20" : "bg-gray-800/20"}
                  `}
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getRankIcon(entry.rank)}
                        <div>
                          <div className="text-white font-semibold">{entry.username}</div>
                          <div className="text-gray-400 text-sm">Score: {entry.score.toLocaleString()}</div>
                        </div>
                      </div>
                      {getChangeIndicator(entry.change)}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Win Rate:</span>
                        <span className="text-cyan-400 ml-2 font-semibold">{entry.winRate}%</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Earned:</span>
                        <span className="text-green-400 ml-2 font-semibold">${entry.totalEarned.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-6 gap-4 items-center">
                    <div className="flex items-center space-x-2">{getRankIcon(entry.rank)}</div>

                    <div className="flex items-center space-x-3">
                    
                      <span className="text-white font-semibold">{entry.username}</span>
                    </div>

                    <div className="text-cyan-400 font-bold text-lg">{entry.score.toLocaleString()}</div>

                    <div className="text-white">
                      <span className="text-cyan-400 font-semibold">{entry.winRate}%</span>
                    </div>

                    <div className="text-green-400 font-semibold">${entry.totalEarned.toLocaleString()}</div>

                    <div>{getChangeIndicator(entry.change)}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400">No users found matching your search criteria.</div>
            )}
          </div>

          {/* Footer Stats */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">{currentStats.totalPlayers.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Total Players</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">${currentStats.totalRewards}</div>
                <div className="text-gray-400 text-sm">Total Rewards</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">{currentStats.avgAccuracy}%</div>
                <div className="text-gray-400 text-sm">Avg Accuracy</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
