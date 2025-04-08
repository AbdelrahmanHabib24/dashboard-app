"use client";

import { useSession } from "next-auth/react";
import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const UserSettings = () => {
  const { data: userSession, status } = useSession();
  const { darkMode, toggleDarkMode } = useTheme();

  // useSession( authenticated - loading )

  if (status === "loading") {
    return (
      <div className="text-center mt-10 text-gray-700 dark:text-white">
        Loading profile...
      </div>
    );
  }

  if (status !== "authenticated") return null;

  const user = userSession?.user;

  return (
    <div
      data-aos="fade-up"
      className="w-full max-w-sm mx-auto p-3 sm:p-4 mt-12 sm:mt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md transition-all"
    >
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-3 sm:mb-4 text-gray-800 dark:text-white">
        Profile Settings
      </h1>

      <div className="flex flex-col items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-center">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
            {user?.name || ""}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {user?.email || ""}
          </p>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {/* Name */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1">
            Name:
          </label>
          <input
            type="text"
            value={user?.name || "No Name"}
            disabled
            className="w-full px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-none rounded text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1">
            Email:
          </label>
          <input
            type="email"
            value={user?.email || "No Email"}
            disabled
            className="w-full px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-none rounded text-sm sm:text-base"
          />
        </div>

        {/* Theme Toggle */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1">
            Theme:
          </label>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-full px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm sm:text-base"
          >
            {darkMode ? (
              <span className="flex items-center">
                <FaSun className="mr-2" />
                Light Mode
              </span>
            ) : (
              <span className="flex items-center">
                <FaMoon className="mr-2" />
                Dark Mode
              </span>
            )}
          </button>
        </div>

        {/* Password Placeholder */}
        <div>
          <label className="block text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1">
            Password
          </label>
          <button
            className="w-full px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-not-allowed text-sm sm:text-base"
            disabled
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
