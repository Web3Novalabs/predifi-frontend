"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#000A0B] text-white py-4 px-6 shadow-xl shadow-[#000A0B] fixed top-0 left-0 right-0 z-50">
      <div className="w-full h-[107px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/Logo.png" alt="" width={124} height={67} />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="border-[0.5px] border-[rgba(235, 253, 255, 0.6)] rounded-full p-[10px] hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors"
          >
            FEATURES
          </Link>
          <Link
            href="#benefits"
            className="text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors"
          >
            BENEFITS
          </Link>
          <Link
            href="#faqs"
            className="text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors"
          >
            FAQS
          </Link>
          <Link
            href="#community"
            className="text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors"
          >
            COMMUNITY
          </Link>
          <Link
            href="/help-center"
            className="text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors"
          >
            Help Center
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="/explore-pools"
            className="bg-[#37B7C3] hover:bg-cyan-500 text-slate-900 font-medium px-4 py-2 rounded-md transition-colors"
          >
            Explore Pools
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col items-center">
          <Link
            href="#features"
            className="text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FEATURES
          </Link>
          <Link
            href="#benefits"
            className="text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            BENEFITS
          </Link>
          <Link
            href="#faqs"
            className="text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQS
          </Link>
          <Link
            href="#community"
            className="text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            COMMUNITY
          </Link>
          <Link
            href="dashboard/pool-market"
            className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-medium px-4 py-2 rounded-md transition-colors w-full text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Explore Pools
          </Link>
        </div>
      )}
    </nav>
  );
}
