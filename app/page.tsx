"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import AuthSwitch from "@/components/AuthSwitch"
import { CancelButtonAuth, CheckboxAuth} from "@/components/AuthComponents"
import { motion, AnimatePresence } from "framer-motion"


export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleAuthToggle = (isLogin: boolean) => {
    setIsLoginForm(isLogin);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-52px)] overflow-hidden p-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="flex flex-col items-center space-y-4 mt-8">
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-[264px] h-[44px] flex items-center justify-center text-xs leading-[12px] font-medium text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100"
              onClick={() => setIsLoginForm(false)}
            >
              Registration
            </Button>
          </DialogTrigger>
          
          <DialogTrigger asChild>
            <Button
              className="w-[264px] h-[44px] flex items-center justify-center text-xs leading-[12px] font-medium text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100"
              onClick={() => setIsLoginForm(true)}
            >
              Login
            </Button>
          </DialogTrigger>
        </div>

        <AnimatePresence>
          {isDialogOpen && (
            <DialogContent 
              forceMount
              className={`
                bg-gray-800 border-none
                w-[350px] 
                ${isLoginForm ? 'h-[316px]' : 'h-[376px]'}
                overflow-hidden
                p-0
                flex flex-col
              `}
            >
              <DialogClose asChild>
                <button>
                  <CancelButtonAuth/>
                </button>
              </DialogClose>

              <motion.div
                key={isDialogOpen ? "dialog-open" : "dialog-closed"}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="flex-1 flex flex-col pt-2"
              >
                <DialogHeader>
                  <DialogTitle className="flex justify-center mt-4">
                    <AuthSwitch 
                      isLogin={isLoginForm} 
                      onToggle={handleAuthToggle} 
                    />
                  </DialogTitle>
                </DialogHeader>

                <div className="px-6 pb-4 flex-1 flex flex-col">
                  {isLoginForm ? (
                    <>
                      <div className="grid gap-4 py-2">
                        <Input name="email" placeholder="Email" className="bg-gray-700 border-none text-white"/>
                        <Input name="password" placeholder="Password" type="password" className="bg-gray-700 border-none text-white"/>
                      </div>
                      
                      <div className="mt-auto">
                        <Button
                          className="w-full mt-4 h-[44px] flex items-center justify-center text-xs leading-[12px] font-medium text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100"
                          type="button"
                        >
                          Login
                        </Button>
                        
                        <label className="flex items-center justify-center text-xs mt-4 text-white">
                          Use social networks
                        </label>

                         <label className="flex items-center justify-center text-xs mt-4 text-gray-400 underline">
                          Forgot password?
                        </label>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid gap-4 py-2">
                        <Input name="email" placeholder="Email or Mobile" className="bg-gray-700 border-none text-white"/>
                        <Input name="password" placeholder="Password" type="password" className="bg-gray-700 border-none text-white"/>
                        <Input name="confirmPassword" placeholder="Confirm Password" type="password" className="bg-gray-700 border-none text-white"/>
                      </div>
                      
                      <div className="mt-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <CheckboxAuth
                             onCheck={() => console.log("Галочка установлена!")}
                            />
                          <label htmlFor="terms" className="text-sm text-gray-300">
                            Use social networks
                          </label>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Button
                          className="w-full mt-4 h-[44px] flex items-center justify-center text-xs leading-[12px] font-medium text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100"
                          type="button"
                        >
                          Registration
                        </Button>
                        
                        <label className="flex items-center justify-center text-xs mt-4 text-white">
                          Use social networks
                        </label>

                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>

      <div className="pt-6">
        <Link
          href="/orders"
          className="w-[296px] h-[36px] flex items-center justify-center text-xs leading-[12px] font-medium text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100 border border-gray-300"
        >
          <h3 className="font-bold">Orders</h3>
        </Link>
      </div>
    </div>
  );
}