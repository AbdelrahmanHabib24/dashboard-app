"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "aos/dist/aos.css";
import LoadingSpinner from "@/components/LoadingSpinner";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();
  const [error, setError] = useState<string>("");

 // useSession( authenticated - loading )

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }
// Login Form

  return (
    <div
      className="min-h-screen duration-1000 flex items-center justify-center bg-gray-200 dark:bg-gray-900 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-md"
        data-aos="zoom-in"
      >
        <h1
          className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-5 sm:mb-6"
          data-aos="fade-down"
        >
          Login to Dashboard
        </h1>

        <LoginForm setError={setError} />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
}
