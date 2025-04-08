import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Responsive admin dashboard with Firebase auth, dynamic user table and charts using React, Next.js, Tailwind and Redux Toolkit.",
};

//RootLayout(Main)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en overflow-hidden">
      <body className={`${inter.className} overflow-x-hidden bg-gray-200 dark:bg-gray-900`} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
