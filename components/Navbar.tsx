"use client"

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {DollarSvg, CurrencyComponent, UaLanguageComponent, EnglishLanguageComponent} from "@/components/NavbarComponents"


export default function Navbar() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const currencyOptions = ["USD", "UAH", "EUR"];

  return (
    <div className="flex justify-between items-center h-[52px] bg-gray-800">
    
      <div className="flex items-center justify-center rounded-full bg-gray-900 w-[80px] h-[36px] ml-4"/>


      <div className="flex flex-row items-center mr-4 space-x-1">

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="outline-none">
              <div className="flex items-center justify-center rounded-full w-[74px] h-[36px] bg-gray-900 gap-1">
                <DollarSvg/>
                <span className="text-sm">{selectedCurrency}</span>
              </div>
            </button>      
          </DropdownMenuTrigger>

          <DropdownMenuContent className=" min-w-0 w-[74px] h-[108px] bg-gray-700 border-0 
            shadow-none rounded-xl p-0 overflow-hidden [&>*]:w-full"
          >
            <DropdownMenuItem 
                className="p-0 m-0 w-full h-[36px] rounded-none bg-gray-900 hover:bg-gray-800"
                onClick={() => setSelectedCurrency("USD")}
            >
              <div className="w-full h-full flex items-center justify-center">
              <CurrencyComponent text={"USD"} />
              </div>
            </DropdownMenuItem>
            <div className="h-px bg-gray-600 w-full" />
            <DropdownMenuItem 
                className="p-0 m-0 w-full h-[36px] rounded-none bg-gray-900 hover:bg-gray-800"
                onClick={() => setSelectedCurrency("UAH")}
            >
              <div className="w-full h-full flex items-center justify-center">
              <CurrencyComponent text={"UAH"} />
              </div>
            </DropdownMenuItem>
            <div className="h-px bg-gray-600 w-full" />
            <DropdownMenuItem 
                className="p-0 m-0 w-full h-[36px] rounded-none bg-gray-900 hover:bg-gray-800"
                onClick={() => setSelectedCurrency("EUR")}
            >
              <div className="w-full h-full flex items-center justify-center">
              <CurrencyComponent text={"EUR"} />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="outline-none">
              <div className="flex items-center justify-center rounded-full w-[65px] h-[36px] bg-gray-900 gap-1">
              {selectedLanguage === "EN" 
              ? 
              <div className="flex items-center justify-center rounded-full w-[65px] h-[36px] bg-gray-900 gap-1">
                <div className="w-5 h-5 rounded-full overflow-hidden 
                  bg-[url('../static/images/britainflag.png')] bg-center bg-cover"
                />
                <h3 className="text-[13px] leading-none align-middle">EN</h3>
              </div>
              : 
              <div className="flex items-center justify-center rounded-full w-[65px] h-[36px] bg-gray-900 gap-1">
                <div className="
                  w-5 h-5 rounded-full 
                  bg-[linear-gradient(180deg,rgb(51,138,243)_50%,rgb(255,218,68)_50%)]"
                />
                <h3 className="text-[13px] leading-none align-middle">UA</h3>
              </div>
              }
              </div>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent 
            className=" min-w-0 w-[65px] h-[72px] bg-gray-700 border-0 
            shadow-none rounded-xl p-0 overflow-hidden [&>*]:w-full"
          >
            <DropdownMenuItem 
              className="p-0 m-0 w-full h-[36px] rounded-none bg-gray-900 hover:bg-gray-800"
              onClick={() => setSelectedLanguage("EN")}
            >
              <div className="w-full h-full flex items-center justify-center">
                <EnglishLanguageComponent/>
              </div>
            </DropdownMenuItem>
            <div className="h-px bg-gray-600 w-full" />
            <DropdownMenuItem 
              className="p-0 m-0 w-full h-[36px] rounded-none bg-gray-900 hover:bg-gray-800"
              onClick={() => setSelectedLanguage("UA")}
            >
              <div className="w-full h-full flex items-center justify-center">
                <UaLanguageComponent/>
              </div>
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