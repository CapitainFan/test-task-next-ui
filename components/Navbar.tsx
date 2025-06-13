"use client"
import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import DollarSvg from "@/components/DollarSvg"



export default function Navbar() {


  return (
    <div className="flex justify-between items-center h-[52px] bg-gray-800">
        <div className="flex items-center justify-center rounded-full bg-gray-900 w-[80px] h-[36px] ml-4"></div>


        <div className="flex flex-row items-center mr-4 space-x-1">


        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center justify-center rounded-full w-[74px] h-[36px] bg-gray-900 gap-1">
                  <DollarSvg />
                <h3 className="text-[13px] leading-none font-medium">USD</h3>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[74px] bg-gray-700 border-none rounded-xl">
            <DropdownMenuItem className="flex items-center justify-center rounded-full w-[74px] h-[36px] bg-gray-900 gap-1">
                  <DollarSvg />
                <h3 className="text-[13px] leading-none font-medium">USD</h3>
            </DropdownMenuItem>
             <DropdownMenuItem className="flex items-center justify-center rounded-full w-[74px] h-[36px] bg-gray-900 gap-1">
                  <DollarSvg />
                <h3 className="text-[13px] leading-none font-medium">UAH</h3>
            </DropdownMenuItem>
             <DropdownMenuItem className="flex items-center justify-center rounded-full w-[74px] h-[36px] bg-gray-900 gap-1">
                  <DollarSvg />
                <h3 className="text-[13px] leading-none font-medium">EUR</h3>
            </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>




        <DropdownMenu >
            <DropdownMenuTrigger className="w-[65px]">
                    <div className="flex items-center justify-center rounded-full w-[65px] h-[36px] bg-gray-900 gap-1">
                    <div className="
                      w-5 h-5 
                      rounded-full 
                      bg-[linear-gradient(180deg,rgb(51,138,243)_50%,rgb(255,218,68)_50%)]"
                    >
                    </div>
                    <h3 className="w-[17px] h-[12px]">UA</h3>
                    </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[65px] bg-gray-700 border-none rounded-xl">
            <DropdownMenuItem className="flex items-center justify-center rounded-full w-[65px] h-[36px] bg-gray-900 gap-1">
                    <div className="w-5 h-5 rounded-full overflow-hidden 
                    bg-[url('../static/images/britainflag.png')] bg-center bg-cover"
                    />
                    <h3 className="w-[26px] h-[12px]">EN</h3>
            </DropdownMenuItem>
             <DropdownMenuItem className="flex items-center justify-center rounded-full w-[65px] h-[36px] bg-gray-900 gap-1">
                    <div className="
                      w-5 h-5 
                      rounded-full 
                      bg-[linear-gradient(180deg,rgb(51,138,243)_50%,rgb(255,218,68)_50%)]"
                    >
                    </div>
                    <h3 className="w-[17px] h-[12px]">UA</h3>
            </DropdownMenuItem>
             <DropdownMenuItem className="flex items-center justify-center rounded-full w-[65px] h-[36px] bg-gray-900 gap-1">
                    <div className="
                      w-5 h-5 
                      rounded-full 
                      bg-[linear-gradient(180deg,rgb(51,138,243)_50%,rgb(255,218,68)_50%)]"
                    >
                    </div>
                    <h3 className="w-[17px] h-[12px]">UA</h3>
            </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>




        <div className="flex items-center justify-center rounded-full bg-gray-900 w-[36px] h-[36px]">
        <div className="w-5 h-5 rounded-full overflow-hidden 
          bg-[url('../static/images/britainflag.png')] bg-center bg-cover"
        />
        </div>


        </div>
    </div>
  )
}