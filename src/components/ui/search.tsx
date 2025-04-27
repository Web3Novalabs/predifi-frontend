import React from 'react'
import { SearchIcon } from 'lucide-react'

type SearchProps = {
  onChange: (query: string) => void
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

function Search({ onChange, className, ...props }: SearchProps) {
  return (
    <label
      className="flex items-center gap-2 relative px-4.5 py-3 rounded-xl bg-[#0E0E10] text-[#AAAAAA]
      focus-within:ring-2 focus-within:ring-[#259BA5] transition-colors">
      <SearchIcon className="w-4.5" />
      <input
        onChange={(e) => onChange(e.target.value)}
        {...props}
        type="text"
        placeholder="Search"
        className={`focus:outline-none text-white placeholder:text-[#AAAAAA] ${className}`}
      />
    </label>
  )
}

export default Search