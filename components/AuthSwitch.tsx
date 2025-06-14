"use client"

import { motion } from "framer-motion";

interface AuthSwitchProps {
  isLogin: boolean;
  onToggle: (value: boolean) => void;
}

export default function AuthSwitch({ isLogin, onToggle }: AuthSwitchProps) {
  return (
    <div className="relative flex items-center bg-black rounded-full w-[284px] h-[36px] mx-auto">
      <button
        className={`relative z-10 flex-1 text-center font-medium transition-colors text-[13px] h-full flex items-center justify-center ${
          isLogin ? 'text-black' : 'text-white'
        }`}
        onClick={() => onToggle(true)}
        type="button"
      >
        Login
      </button>
      
      <button
        className={`relative z-10 flex-1 text-center font-medium transition-colors text-[13px] h-full flex items-center justify-center ${
          !isLogin ? 'text-black' : 'text-white'
        }`}
        onClick={() => onToggle(false)}
        type="button"
      >
        Register
      </button>
      
      <motion.div
        className="absolute bg-white rounded-full w-[138px] h-[28px]"
        style={{
          top: '4px',
          left: '4px',
        }}
        animate={{
          x: isLogin ? 0 : 138,
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 280, 
          damping: 22,
          mass: 0.6
        }}
      />
    </div>
  );
}