"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, X } from "lucide-react";
import  {Input}  from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePoolCreation } from "@/contexts/pool-creation-context";

export default function PredictionSetupStep() {
  const { formData, updateFormData } = usePoolCreation();
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const availableCategories = [
    "Crypto",
    "Finance",
    "Sports",
    "Politics",
    "Entertainment",
    "Technology",
    "AI",
    "Science",
    "Gaming",
    "Social",
  ];

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    updateFormData({ options: newOptions });
  };

  const addOption = () => {
    updateFormData({ options: [...formData.options, ""] });
  };

  const toggleCategory = (category: string) => {
    if (formData.categories.includes(category)) {
      updateFormData({
        categories: formData.categories.filter((c) => c !== category),
      });
    } else {
      updateFormData({
        categories: [...formData.categories, category],
      });
    }
  };

  const removeCategory = (category: string) => {
    updateFormData({
      categories: formData.categories.filter((c) => c !== category),
    });
  };

  return (
    <motion.div
      className="space-y-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold pb-4 border-b border-b-white/20">
        Setup Prediction
      </h2>

      <div className="space-y-6">
        {formData.options.map((option, index) => (
          <div key={index}>
            <label className="block text-sm font-medium mb-2">
              Option {index + 1}
            </label>
            <Input
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder="Text"
              className="bg-transparent border-gray-700 focus:border-teal-500"
            />
          </div>
        ))}

        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-teal-500 hover:text-teal-400 hover:bg-transparent"
          onClick={addOption}
        >
          <Plus className="w-4 h-4" />
          Add more
        </Button>

        <div>
          <label className="block text-sm font-medium mb-2">Categories</label>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
            >
              <Input
                placeholder={
                  formData.categories.length === 0
                    ? "Select at least [1] tag"
                    : "Add more tags"
                }
                className="bg-transparent border-gray-700 focus:border-teal-500 pr-10 cursor-pointer"
                readOnly
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            {showCategoriesDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-gray-900 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
                {availableCategories.map((category) => (
                  <div
                    key={category}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-800 ${
                      formData.categories.includes(category)
                        ? "bg-gray-800"
                        : ""
                    }`}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="flex items-center flex-wrap gap-2 mt-2"
            onClick={() => setShowCategoriesDropdown(false)}
          >
            {formData.categories.map((category) => (
              <Badge
                key={category}
                className="bg-gray-800 text-xs font-normal hover:bg-gray-700 flex items-center gap-1"
              >
                {category}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCategory(category);
                  }}
                />
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Lock Date</label>
            <div className="relative">
              <Input
                placeholder="Select a date"
                type="date"
                className="bg-transparent border-gray-700 focus:border-teal-500 pr-10"
                value={formData.lockDate}
                onChange={(e) => updateFormData({ lockDate: e.target.value })}
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">End Date</label>
            <div className="relative w-full">
              <Input
                placeholder="Select a date"
                type="date"
                className="bg-transparent border-gray-700 focus:border-teal-500 pr-10 w-full"
                value={formData.endDate}
                onChange={(e) => updateFormData({ endDate: e.target.value })}
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
