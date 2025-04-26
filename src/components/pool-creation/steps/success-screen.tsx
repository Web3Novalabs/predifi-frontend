"use client";

import { motion } from "framer-motion";
import { FaDiscord, FaRedditSquare, FaTelegram } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePoolCreation } from "@/contexts/pool-creation-context";

export default function SuccessScreen() {
  const router = useRouter();
  const { resetForm } = usePoolCreation();

  const socialIcons = [
    {
      icon: FaTelegram,
      color: "text-teal-500",
      url: "https://t.me/predifi",
    },
    {
      icon: FaRedditSquare,
      color: "text-teal-500",
      url: "https://reddit.com/r/predifi",
    },
    {
      icon: FaSquareXTwitter,
      color: "text-teal-500",
      url: "https://twitter.com/predifi",
    },
    {
      icon: FaDiscord,
      color: "text-teal-500",
      url: "https://discord.gg/predifi",
    },
  ];

  const handleViewPool = () => {
    // Navigate to the pool view page
    router.push("/dashboard");
  };

  const handleReturnHome = () => {
    // Reset the form and navigate to the home page
    resetForm();
    router.push("/dashboard");
  };

  const handleShareSocial = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center p-6 w-full max-w-2xl mx-auto rounded-xl text-white bg-black/80 border border-gray-800 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <IoMdCheckmarkCircleOutline className="w-16 h-16 text-teal-500" />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Pool Created Successfully!
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Pool has been added to &quot;Dashboard&quot;
        </motion.p>

        <motion.div
          className="flex gap-4 w-full mb-8 border-b border-gray-700 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            variant="outline"
            className="flex-1 border-gray-700 text-white bg-gray-500/50 py-5"
            onClick={handleViewPool}
          >
            View Pool
          </Button>
          <Button
            className="flex-1 bg-transparent hover:bg-teal-600 text-white border py-5"
            onClick={handleReturnHome}
          >
            Return to home
          </Button>
        </motion.div>

        <motion.div
          className="w-full border border-gray-700 rounded-lg p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-center text-gray-400 mb-4">Share to:</p>
          <div className="flex justify-center gap-6">
            {socialIcons.map((social, index) => (
              <motion.button
                key={index}
                className="flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                onClick={() => handleShareSocial(social.url)}
                aria-label={`Share on ${social.icon.name}`}
              >
                <social.icon className={`w-8 h-8 ${social.color}`} />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
