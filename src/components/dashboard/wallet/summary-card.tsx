type Props = {
  title: string
  amount: string
} & React.HTMLAttributes<HTMLDivElement>

function SummaryCard({ title, amount, ...props }: Props) {
  return (
    <div
      {...props}
      className="p-px bg-gradient-to-t to-[#515461] from-[#515461]/0 rounded-xl
      shadow-xs shadow-[#0A0D12]/5">
      <div
        className="bg-gradient-to-t from-[#181C1C] to-[#0E0E10] rounded-xl
        p-4 md:p-5 flex flex-col gap-3 md:gap-5">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <span className="text-2xl text-white">{amount}</span>
      </div>
    </div>
  )
}

export default SummaryCard