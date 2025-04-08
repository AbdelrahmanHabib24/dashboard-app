"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react"; 
import DataTable from "@/components/DataTable";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function UsersList() {
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
    <div className="px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center sm:text-left">
        Users List
      </h1>
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md overflow-x-auto">
        <DataTable />
      </div>
    </div>
  );
}
