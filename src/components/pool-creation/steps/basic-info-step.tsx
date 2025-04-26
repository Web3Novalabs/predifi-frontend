"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePoolCreation } from "@/contexts/pool-creation-context";
import Image from "next/image";

export default function BasicInfoStep() {
  const { formData, updateFormData } = usePoolCreation();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateFormData({ image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      className="space-y-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold pb-4 border-b border-b-white/20">
        Basic info
      </h2>

      <div className="space-y-4 text-[#CCCCCC]">
        <div>
          <div className="flex items-center gap-10">
            <p className="flex flex-col cursor-pointer">
              <span className="">Image</span>
              <span className="text-xs font-light">(Upload Image)</span>
            </p>
            <div
              className="w-24 h-24 bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden border border-gray-700 hover:border-teal-500 transition-colors"
              onClick={() => document.getElementById("image-upload")?.click()}
            >
              {imagePreview ? (
                <Image
                  height={500}
                  width={500}
                  src={imagePreview || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center space-x-2 text-xs bg-[#1a1a1a] text-white p-2 rounded-lg">
                  <span>Select</span>
                  <UploadCloud className="w-4 h-4" />
                </div>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="pool-name" className="block text-sm font-medium mb-2">
            Pool Name:
          </label>
          <Input
            id="pool-name"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            placeholder="Name:"
            className="bg-transparent border-gray-700 focus:border-teal-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Description
          </label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => updateFormData({ description: e.target.value })}
            placeholder="Text"
            className="bg-transparent border-gray-700 focus:border-teal-500 min-h-[80px]"
          />
        </div>

        <div>
          <label
            htmlFor="event-source"
            className="block text-sm font-medium mb-2"
          >
            Event source URL
          </label>
          <Input
            id="event-source"
            value={formData.eventSourceUrl}
            onChange={(e) => updateFormData({ eventSourceUrl: e.target.value })}
            placeholder="Link"
            className="bg-transparent border-gray-700 focus:border-teal-500"
          />
        </div>
      </div>
    </motion.div>
  );
}
