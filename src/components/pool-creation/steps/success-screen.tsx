"use client";

import { motion } from "framer-motion";
import { Check, MessageSquare, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessScreen() {
  const socialIcons = [
    { icon: Send, color: "text-teal-500" },
    { icon: MessageSquare, color: "text-teal-500" },
    { icon: Twitter, color: "text-teal-500" },
    { icon: MessageSquare, color: "text-teal-500" },
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <Check className="w-8 h-8 text-teal-500" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Pool Created Successfully!
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Pool has been added to &quot;Dashboard&quot;
      </motion.p>

      <motion.div
        className="flex gap-4 w-full mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="outline"
          className="flex-1 border-gray-700 text-white hover:bg-gray-800"
        >
          View Pool
        </Button>
        <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-black">
          Return to home
        </Button>
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-center text-gray-400 mb-4">Share to:</p>
        <div className="flex justify-center gap-6">
          {socialIcons.map((social, index) => (
            <motion.button
              key={index}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <social.icon className={`w-5 h-5 ${social.color}`} />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
