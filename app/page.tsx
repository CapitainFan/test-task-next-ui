"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import AuthSwitch from "@/components/AuthSwitch"

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(null)

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-52px)] overflow-hidden p-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="flex flex-col items-center space-y-4 mt-8">
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="
                w-[264px] h-[44px]
                flex items-center justify-center
                text-xs leading-[12px] font-medium
                text-gray-900 bg-white
                rounded-full shadow-sm
                hover:bg-gray-100
              "
              onClick={() => setIsLoginOpen(false)}
            >
              Registration
            </Button>
          </DialogTrigger>
          
          <DialogTrigger asChild>
            <Button
              className="
                w-[264px] h-[44px]
                flex items-center justify-center
                text-xs leading-[12px] font-medium
                text-gray-900 bg-white
                rounded-full shadow-sm
                hover:bg-gray-100
              "
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </Button>
          </DialogTrigger>
        </div>

        {isLoginOpen ? (
          
          
          <DialogContent 
          className="sm:max-w-[425px] bg-gray-800"
        >
          <DialogHeader>
            <DialogTitle className="flex justify-center">
              <AuthSwitch isLogin={isLoginOpen} onToggle={() => setIsLoginOpen(!isLoginOpen)} />
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <Input name="email" placeholder="Email"/>
            <Input name="password" placeholder="Password"/>
          </div>

          
          <Button
            className="
              w-full mt-4
              h-[44px]
              flex items-center justify-center
              text-xs leading-[12px] font-medium
              text-gray-900 bg-white
              rounded-full shadow-sm
              hover:bg-gray-100
            "
            type="button"
          >
            Login
          </Button>

          <label className="flex items-center justify-center text-xs">
              Use social networks
          </label>

          </DialogContent>


        ) : (

        <DialogContent 
          className="sm:max-w-[425px] bg-gray-800"
        >
          <DialogHeader>
            <DialogTitle className="flex justify-center">
              <AuthSwitch isLogin={isLoginOpen} onToggle={() => setIsLoginOpen(!isLoginOpen)} />
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <Input name="email" placeholder="Email or Mobile"/>
            <Input name="password" placeholder="Password"/>
            <Input name="confirmPassword" placeholder="Confirm Password"/>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm">
              Use social networks
            </label>
          </div>
          
          <Button
            className="
              w-full mt-4
              h-[44px]
              flex items-center justify-center
              text-xs leading-[12px] font-medium
              text-gray-900 bg-white
              rounded-full shadow-sm
              hover:bg-gray-100
            "
            type="button"
          >
            Registration
          </Button>

          <label className="flex items-center justify-center text-xs">
              Use social networks
          </label>

          </DialogContent>
        )}
      </Dialog>

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
  );
}