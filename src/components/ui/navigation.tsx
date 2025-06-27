"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import {
  Menu,
  Search,
  LayoutDashboard,
  Eclipse,
  Radio,
  TicketCheck,
  Wallet,
  Settings,
  FileText,
  DiamondPlus,
  UserRoundCog,
  BellDot,
} from "lucide-react";
import WalletConnectButton from "../WalletConnectButton";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Pool Market",
      icon: <Eclipse size={20} />,
      path: "/dashboard/pool-market",
    },
    {
      name: "Live Market",
      icon: <Radio size={20} />,
      path: "/dashboard/live-market",
    },
    {
      name: "Validator",
      icon: <TicketCheck size={20} />,
      path: "/dashboard/validator",
    },
    {
      name: "My Profile",
      icon: <UserRoundCog size={20} />,
      path: "/dashboard/profile",
    },
    {
      name: "Wallet Token",
      icon: <Wallet size={20} />,
      path: "/dashboard/wallet",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
      bottomSection: true,
    },
    {
      name: "Docs",
      icon: <FileText size={20} />,
      path: "/dashboard",
      bottomSection: true,
      external: true,
    },
  ];

  const topMenuItems = menuItems.filter((item) => !item.bottomSection);
  const bottomMenuItems = menuItems.filter((item) => item.bottomSection);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div
        className={`flex flex-col bg-black text-gray-600 h-screen transition-all duration-300 z-30
          ${isCollapsed ? "w-20" : "w-60"}
          ${isMobile ? "fixed left-0 top-0 h-screen" : "relative"}
          ${
            isMobile && !mobileMenuOpen ? "-translate-x-full" : "translate-x-0"
          }`}
      >
        {!isMobile && (
          <div className="flex items-center justify-between py-4 px-6">
            {!isCollapsed && (
              <Image src="/Logo.png" alt="Logo" width={100} height={30} />
            )}
            <button
              onClick={toggleSidebar}
              className="text-white rounded-md w-8 h-8 flex items-center justify-center"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <Menu size={20} />
            </button>
          </div>
        )}

        {/* Search bar */}
        <div className="px-4 mb-4">
          {isCollapsed ? (
            <div className="flex justify-center">
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-950 text-white">
                <Search size={20} />
              </button>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-gray-950 border-2 border-gray-950 rounded-md text-sm text-white focus:outline-none transition-all duration-200"
                aria-label="Search"
              />
            </div>
          )}
        </div>

        {/* Create Pool Button */}
        <div className="px-4 mb-8">
          <Link
            href="/dashboard/create-pool"
            className={`flex items-center bg-teal-600 text-black rounded-md h-10 hover:bg-teal-500 transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10">
              <DiamondPlus size={20} className="transform font-bold" />
            </div>
            {!isCollapsed && (
              <span className="font-bold text-lg">Create Pool</span>
            )}
          </Link>
        </div>

        {/* Top navigation */}
        <nav className="flex-grow overflow-y-auto">
          <ul className="space-y-3 px-4">
            {topMenuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`flex items-center h-10 rounded-md transition-colors ${
                      isActive
                        ? "bg-gray-800 text-teal-400"
                        : "hover:bg-gray-800 hover:text-teal-600"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={isMobile ? toggleMobileMenu : undefined}
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 ${
                        isCollapsed ? "mx-auto" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                    {!isCollapsed && <span className="ml-2">{item.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom navigation */}
        <div className="mt-auto mb-4">
          <ul className="space-y-3 px-4">
            {bottomMenuItems.map((item) => (
              <li key={item.name}>
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center h-10 rounded-md transition-colors hover:bg-gray-800 hover:text-white"
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 ${
                        isCollapsed ? "mx-auto" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                    {!isCollapsed && <span className="ml-2">{item.name}</span>}
                  </a>
                ) : (
                  <Link
                    href={item.path}
                    className={`flex items-center h-10 rounded-md transition-colors ${
                      pathname === item.path
                        ? "bg-gray-800 text-teal-400"
                        : "hover:bg-gray-800 hover:text-white"
                    }`}
                    aria-current={pathname === item.path ? "page" : undefined}
                    onClick={isMobile ? toggleMobileMenu : undefined}
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 ${
                        isCollapsed ? "mx-auto" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                    {!isCollapsed && <span className="ml-2">{item.name}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main area (Navbar + Page content) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <div className="flex items-center justify-between w-full bg-black px-4 py-3 ">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center">
              {isMobile && (
                <button
                  onClick={() => {
                    toggleMobileMenu(); // Open the sidebar on mobile
                    setIsCollapsed(false); // Optionally expand the sidebar when opened
                  }}
                  className="text-white rounded-md w-8 h-8 flex items-center justify-center"
                  aria-label={
                    isCollapsed ? "Expand sidebar" : "Collapse sidebar"
                  }
                >
                  <Menu size={20} />
                </button>
              )}

              <LayoutDashboard size={24} className="text-white" />
              <span className="ml-2 text-white font-bold text-lg">
                Dashboard
              </span>
            </Link>

            {/* Page Title */}
            <div className="hidden md:flex ml-6">
              <h1 className="text-white text-xl font-medium">
                {pathname.substring(1).charAt(0).toUpperCase() +
                  pathname.slice(2)}
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="text-gray-400 hover:text-white p-2 border-2 border-gray-600 rounded-md">
              <BellDot size={20} />
            </button>
            <WalletConnectButton />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>

      {/* Mobile overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMobileMenu}
        />
      )}
    </div>
  );
};

const Navigation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
};

export default Navigation;
