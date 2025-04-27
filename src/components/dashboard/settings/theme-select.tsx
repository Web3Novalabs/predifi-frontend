import { Moon, SunMoonIcon } from "lucide-react"

type ThemeSelectProps = {
  value: string
  onChange: (value: string) => void
}
const ThemeSelect = ({ value, onChange }: ThemeSelectProps) => {
  const themes = [
    {
      value: "dark",
      icon: Moon,
    },
    {
      value: "light",
      icon: SunMoonIcon,
    },
  ]
  return (
    <div className="flex items-center gap-x-2">
      {themes.map((theme) => (
        <button
          key={theme.value}
          className={`flex gap-2 px-2.5 py-1 rounded-md hover:bg-[#1F2024]
          transition-all duration-200 ease-in-out cursor-pointer
          ${value === theme.value ? "bg-[#1F2024]" : "text-white/40"}`}
          onClick={() => onChange(theme.value)}
        >
          {<theme.icon className={`w-6 ${value === theme.value && "text-[#259BA5]"}`} />}
          {theme.value}
        </button>
      ))}
    </div>
  )
}

export default ThemeSelect