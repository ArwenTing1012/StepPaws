import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Label } from "../ui/label"
import { Dog, Cat } from "lucide-react"

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={`flex gap-4 ${className || ''}`}
      {...props}
      ref={ref}
    />
  )
})

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={`h-8 w-8 rounded-full border-2 border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:border-[#4F46E5] hover:scale-110 active:scale-95 transition-all ${className || ''}`}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-5 w-5 rounded-full bg-[#4F46E5] animate-scale-in" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }