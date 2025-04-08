"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ThemeProvider } from "@/context/ThemeContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

 // useSession( unauthenticated - loading )

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <ThemeProvider>
      <div className="flex bg-white dark:bg-gray-900 overflow-hidden max-h-screen">
        <Sidebar />

        {/* Main Content */}
        <div className="w-full flex justify-center px-2 pt-8 sm:pt-12 overflow-auto">
          <div className="w-full max-w-lg sm:max-w-lg md:max-w-2xl  lg:max-w-6xl">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
