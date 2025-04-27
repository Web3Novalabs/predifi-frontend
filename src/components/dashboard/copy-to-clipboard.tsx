import React from 'react'
import { CopyIcon } from 'lucide-react'

type CopyToClipboardProps = {
  text: string
  className?: string
  onCopied?: () => void
}

function CopyToClipboard({ text, className, onCopied }: CopyToClipboardProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      if (onCopied) {
        onCopied()
      }
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  
  return (
    <div className={`flex items-center justify-between p-2.5 bg-[#1F2024] rounded-lg ${className}`}>
      <span className="text-xs text-white/80 italic">{text}</span>
      <button onClick={handleCopy}>
        <CopyIcon className="w-4 h-4 text-white hover:text-white/80 cursor-pointer" />
      </button>
    </div>
  )
}

export default CopyToClipboard