"use client"

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
import {
  CancelButtonAuth,
  CheckboxAuth,
  AuthSwitch,
  GoogleIcon,
  AppleIcon,
  FaceBookIcon,
  DiskordIcon,
  TelegramIcon,
} from "@/components/AuthComponents"
import { motion, AnimatePresence } from "framer-motion"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, useSession } from 'next-auth/react'
import { toast } from "react-toastify";


export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

  const { data: session, status: sessionStatus } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAuthToggle = (isLogin: boolean) => {
    setIsLoginForm(isLogin);
  };

  const handleLoginSubmit = async () => {
    setIsLoading(true);

    if (!loginEmail || !loginPassword) {
      toast.error("Please fill all fields");
      setIsLoading(false);
      return;
    }

    try {
      const res = await signIn("credientals", {
        redirect: false,
        email: loginEmail,
        password: loginPassword,
      });

      if (res?.error) {
        throw new Error(res.error);
      }

      toast.success("Successfully logged in");
      router.push('/orders');
    } catch (error) {
      toast.error(error.message || "Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };



  const handleRegisterSubmit = async () => {
    if (!registerEmail || !registerPassword || !registerConfirmPassword) {
            toast.error('Please fill all the input fields');
            return;
        } else if (registerPassword !== registerConfirmPassword) {
            toast.error("Password do not match")
            return;
        }

    setIsLoading(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword,
          confirmPassword: registerConfirmPassword,
        })
      });

      if (res.status === 400) {
        toast.error("This email is already registered");
      } else if (res.status === 201) {
        toast.success("Account created successfully");
        
        const loginRes = await signIn("credientals", {
          redirect: false,
          email: registerEmail,
          password: registerPassword,
        });

        if (loginRes?.error) {
          throw new Error(loginRes.error);
        }

        toast.success("Successfully logged in");
        router.push('/orders');
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };


  if (sessionStatus === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-52px)] overflow-hidden p-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="flex flex-col items-center space-y-4 mt-8">
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-[264px] h-[44px] flex items-center justify-center text-xs leading-[12px]
              font-medium text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100"
              onClick={() => setIsLoginForm(false)}
            >
              Registration
            </Button>
          </DialogTrigger>
          
          <DialogTrigger asChild>
            <Button
              className="w-[264px] h-[44px] flex items-center justify-center text-xs leading-[12px] font-medium
              text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100"
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
                bg-[#1f242c] border-none
                w-[360px] 
                ${isLoginForm ? 'h-[408px]' : 'h-[486px]'}
                overflow-hidden
                p-0 rounded-xl
                flex flex-col
              `}
              showCloseButton={false}
            >

              <motion.div
                key={isDialogOpen ? "dialog-open" : "dialog-closed"}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="flex-1 flex flex-col pt-2 relative"
              >
                <DialogHeader className="mb-[25px]">
                  <DialogTitle className="flex justify-between items-center mt-4 px-6">
                    <div className="flex-1"></div>
                    <div className="flex-1 flex justify-center -translate-x-4">
                      <AuthSwitch 
                        isLogin={isLoginForm} 
                        onToggle={handleAuthToggle} 
                      />
                    </div>
                    <div className="flex-1 flex justify-end">
                      <button onClick={() => setIsDialogOpen(false)}>
                        <CancelButtonAuth/>
                      </button>
                    </div>
                  </DialogTitle>
                </DialogHeader>

                <div className="px-6 pb-4 flex-1 flex flex-col">
                  {isLoginForm ? (
                    <>
                      <div className="grid gap-4 py-2">
                        <form className="space-y-2">
                          <Input
                            id="loginEmail" name="loginEmail"
                            value={loginEmail}
                            onChange={e => setLoginEmail(e.target.value)}
                            placeholder="Email" type="text"
                            className="bg-[#101418] border-[#3a3e45] text-white h-[44px] rounded-xl"
                          />
                          <Input
                            id="loginPassword" name="loginPassword"
                            value={loginPassword} 
                            onChange={e => setLoginPassword(e.target.value)}
                            placeholder="Password" type="password" 
                            className="bg-[#101418] border-[#3a3e45] text-white h-[44px] rounded-xl"
                          />
                        </form>
                      </div>
                      
                      <div className="mt-auto">
                          <Button
                            className="w-full mt-4 h-[44px] flex items-center justify-center text-xs leading-[12px]
                            font-normal text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100"
                            type="button"
                            onClick={handleLoginSubmit}
                          >
                            {isLoading ? "Processing..." : "Login"}
                          </Button>
                        
                        <label className="flex items-center justify-center text-xs mt-7 mb-1 text-white">
                          Use social networks
                        </label>

                        <div className="flex justify-center mt-3">
                          <div className="flex gap-3 w-[322px] justify-center">
                            <GoogleIcon/>
                            <AppleIcon/>
                            <FaceBookIcon/>
                            <DiskordIcon/>
                            <TelegramIcon/>
                          </div>
                        </div>

                        <Link 
                          className="flex items-center justify-center text-xs mt-4 text-gray-400 underline"
                          href="#"
                          >
                          Forgot password ?
                        </Link>
                        
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid gap-4 py-2">
                        <form className="space-y-2">
                          <Input
                            id="registerEmail" name="registerEmail"
                            value={registerEmail}
                            onChange={e => setRegisterEmail(e.target.value)}
                            placeholder="Email or Mobile" type="text"
                            className="bg-[#101418] border-[#3a3e45] text-white h-[44px] rounded-xl"
                          />
                          <Input
                            id="registerPassword" name="registerPassword"
                            value={registerPassword}
                            onChange={e => setRegisterPassword(e.target.value)}
                            placeholder="Password" type="password"
                            className="bg-[#101418] border-[#3a3e45] text-white h-[44px] rounded-xl"
                          />
                          <Input
                            id="registerConfirmPassword" name="registerConfirmPassword"
                            value={registerConfirmPassword}
                            onChange={e => setRegisterConfirmPassword(e.target.value)}
                            placeholder="Confirm Password" type="password"
                            className="bg-[#101418] border-[#3a3e45] text-white h-[44px] rounded-xl"
                          />
                        </form>
                      </div>
                      
                      <div className="mt-6 mb-4">
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
                            className="w-full mt-4 h-[44px] flex items-center justify-center text-xs leading-[12px]
                            font-normal text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100"
                            type="button"
                            onClick={handleRegisterSubmit}
                          >
                            {isLoading ? "Processing..." : "Registration"}
                        </Button>
                        
                        <label className="flex items-center justify-center text-xs mt-7 mb-1 text-white">
                          Use social networks
                        </label>

                        <div className="flex justify-center mt-3">
                          <div className="flex gap-3 w-[322px] justify-center">
                            <GoogleIcon/>
                            <AppleIcon/>
                            <FaceBookIcon/>
                            <DiskordIcon/>
                            <TelegramIcon/>
                          </div>
                        </div>

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
          className="w-[296px] h-[36px] flex items-center justify-center text-xs leading-[12px] font-medium
          text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100 border border-gray-300"
        >
          <h3 className="font-bold">Orders</h3>
        </Link>
      </div>
    </div>
  );
}