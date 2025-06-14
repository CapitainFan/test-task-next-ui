"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-52px)] overflow-hidden p-4">
      <div className="flex flex-col items-center space-y-4 mt-8">
        <Button
          className="
            w-[264px] h-[44px]
            flex items-center justify-center
            text-xs leading-[12px] font-medium
            text-gray-900 bg-white
            rounded-full shadow-sm
            hover:bg-gray-100
          "
        >
          Registration
        </Button>
        
        <Button
          className="
            w-[264px] h-[44px]
            flex items-center justify-center
            text-xs leading-[12px] font-medium
            text-gray-900 bg-white
            rounded-full shadow-sm
            hover:bg-gray-100
          "
        >
          Login
        </Button>

        <div className="pt-6">
          <Link
            href="/orders"
            className="
              w-[296px] h-[36px]
              flex items-center justify-center
              text-xs leading-[12px] font-medium
              text-gray-900 bg-white
              rounded-full shadow-sm
              hover:bg-gray-100
              border border-gray-300
            "
          >
            <h3 className="font-bold">Orders</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}