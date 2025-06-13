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
        <div className="flex items-center justify-center rounded-full bg-gray-900 w-[80px] h-[36px] ml-4"></div>


        <div className="flex flex-row items-center mr-4 space-x-1">


        <DropdownMenu>
            <DropdownMenuTrigger asChild >
              <button className="outline-none">
                <CurrencyComponent text={selectedCurrency}/>
              </button>      
            </DropdownMenuTrigger>

            <DropdownMenuContent 
              className="w-[74px] bg-gray-700 border-none rounded-xl space-y-0.5"
            >
            {currencyOptions.map(currency => (
                        <DropdownMenuItem 
                          key={currency} 
                          className="p-0 bg-gray-900"
                          onClick={() => {
                            setSelectedCurrency(currency);
                          }}
                        >
                          <CurrencyComponent text={currency} />
                        </DropdownMenuItem>
                      ))}
            </DropdownMenuContent>

        </DropdownMenu>




        <DropdownMenu>
            <DropdownMenuTrigger className="w-[65px]">
              { selectedLanguage === "EN" ? <EnglishLanguageComponent/> : <UaLanguageComponent/>}
            </DropdownMenuTrigger>

            <DropdownMenuContent 
              className="w-[65px] bg-gray-700 border-none rounded-xl space-y-0.5"
            >
             <DropdownMenuItem className="bg-gray-900">
                <button onClick={() => {
                            setSelectedLanguage("EN");
                          }}>
                  <EnglishLanguageComponent/>
                </button>
            </DropdownMenuItem>
            <DropdownMenuItem className="bg-gray-900">
               <button onClick={() => {
                            setSelectedLanguage("UA");
                          }}>
                  <UaLanguageComponent/>
                </button>
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