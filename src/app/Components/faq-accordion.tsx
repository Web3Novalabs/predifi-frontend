"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="md:space-y-4 space-y-0">
      {items.map((item, index) => (
        <div
          key={index}
          className="md:rounded-lg rounded-none md:border border-y border-slate-700"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between py-3 px-2 text-left hover:bg-slate-700/30 transition-colors"
          >
            <span className="text-white font-medium">{item.question}</span>
            {openItems.includes(index) ? (
              <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            )}
          </button>
          {openItems.includes(index) && (
            <div className="px-6 pb-6">
              <p className="text-slate-300 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
