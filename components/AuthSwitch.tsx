"use client"

import { motion } from "framer-motion";

interface AuthSwitchProps {
  isLogin: boolean;
  onToggle: (value: boolean) => void;
}

export default function AuthSwitch({ isLogin, onToggle }: AuthSwitchProps) {
  return (
    <div className="relative flex items-center p-1 bg-black rounded-full w-[240px] h-12">
      <button
        className={`relative z-10 flex-1 text-center text-sm font-medium transition-colors ${
          isLogin ? 'text-black' : 'text-white'}`}
        onClick={() => onToggle(true)}
        type="button"
      >
        Login
      </button>
      
      <button
        className={`relative z-10 flex-1 text-center text-sm font-medium transition-colors ${
          !isLogin ? 'text-black' : 'text-white'}`}
        onClick={() => onToggle(false)}
        type="button"
      >
        Register
      </button>
      
      <motion.div
        className="absolute top-1 left-1 bg-white rounded-full w-[116px] h-10"
        animate={{ x: isLogin ? 0 : 118, }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
}