import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import Navbar from "@/components/Navbar";
import ReactToast from "@/components/react-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Task",
  description: "Test Task",
};

export default async function RootLayout({ children }: any) {
  const session = await getServerSession() 
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider session={session}>
          <Navbar/>
          {children}
          <ReactToast/>
        </SessionProvider>
      </body>
    </html>
  );
}

