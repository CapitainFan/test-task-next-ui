"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type CheckboxAuthProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  onCheck?: () => void;
};

export const CheckboxAuth = ({
  className,
  onCheck,
  ...props
}: CheckboxAuthProps) => {
  const handleCheckedChange = (checked: CheckboxPrimitive.CheckedState) => {
    if (props.onCheckedChange) {
      props.onCheckedChange(checked);
    }
    
    if (checked === true && onCheck) {
      onCheck();
    }
  };

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-white data-[state=checked]:border-white data-[state=checked]:bg-transparent size-4 shrink-0 rounded-[4px] border shadow-xs transition-colors outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
      onCheckedChange={handleCheckedChange}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-white"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}


export const CancelButtonAuth = () => {
  return (
  <button className="absolute top-4 right-4 z-50 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors">
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#374151" stroke-width="3" stroke-linecap="round"/>
    <path d="M6 6L18 18" stroke="#374151" stroke-width="3" stroke-linecap="round"/>
  </svg>
</button>
)}