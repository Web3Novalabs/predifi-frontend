type TokenPreferenceProps = {
  value: string
  options: string[]
  onChange: (value: string) => void
}
const TokenPreference = ({ value, options, onChange }: TokenPreferenceProps) => {
  return (
    <div className="flex items-center gap-x-2">
      {options.map((option) => (
        <button
          key={option}
          className={`flex gap-2 px-2.5 py-4 rounded-md hover:bg-[#1F2024]
          border border-[#515461] text-white font-medium text-sm
          transition-all duration-200 ease-in-out cursor-pointer
          ${value === option && "bg-[#259BA5] hover:bg-[#259BA5]/80 !text-black" }`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default TokenPreference