"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DataTable from "@/components/DataTable";
import LineChart from "@/components/LineChart";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useAppSelector, useAppDispatch } from "@/utils/hooks";
import { User } from "@/utils/type";
import { fetchUsers } from "@/store/slices/tableSlice";
import { LineChartData } from "@/utils/type";


export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


 // Activity
const filteredUsers = useAppSelector((state): User[] => state.table.filteredData);

const chartData: LineChartData[] = filteredUsers.map((user) => ({
  name: user.name || `User `,
  value: user.activity ?? 0,
}));

 // useSession( authenticated - loading )

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-full px-4 sm:px-6">
      <h1 className="text-xl sm:text-2xl  text-gray-800 dark:text-white mx-auto text-center font-bold mb-4">
        Welcome {session?.user?.name} to the dashboard
      </h1>
      <div className="space-y-6 sm:space-y-8">
        <DataTable />
        <LineChart data={chartData} />
      </div>
    </div>
  );
}
