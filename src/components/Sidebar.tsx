"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { navLinks } from "@/utils/data";
import { SidebarLinkProps } from "@/utils/type";
import { FaSignOutAlt } from "react-icons/fa";

// Sidebar link 
const SidebarLink = ({ href, icon, label, isSidebarOpen }: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center p-4 group hover:bg-gray-700 transition-all duration-300 ease-in-out"
    >
      <div className="flex place-items-center space-x-4">
        <div className="text-white ml-3">{icon}</div>
        <div
          className={`text-sm font-medium transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100 " : "opacity-0"
          }`}
        >
          {label}
        </div>
      </div>
    </Link>
  );
};

// Sidebar main 
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 640) setIsSidebarOpen(true); 
  };
  
  const handleMouseLeave = () => {
    if (window.innerWidth >= 640) setIsSidebarOpen(false);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-20"
      } bg-black text-white h-screen  flex flex-col justify-between`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Title */}
      <div className="p-4">
        <h2
          className={`text-2xl font-bold transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          Dashboard
        </h2>
      </div>

      {/* Navigation links */}
      <nav className="flex-1">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <SidebarLink
                href={link.href}
                icon={link.icon}
                label={link.label}
                isSidebarOpen={isSidebarOpen}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Sign Out */}
      <div className="p-4">
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-2 w-full rounded hover:bg-red-600 text-sm flex items-center justify-center gap-3"
        >
          <FaSignOutAlt className="text-xl" />
          <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
            Log out
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
