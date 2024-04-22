import { cn } from "@/lib/utils"
import React from "react"
import { Stack } from "./stack"
import { Div } from "@/utils/interface"

const Toolbar = React.forwardRef<HTMLDivElement, Div>(({ className, ...props }, ref) =>
  <Stack
    ref={ref}
    {...props}
    className={
      cn(
        "gap-1 w-full h-fit items-center justify-between p-2",
        className
      )
    }
  />
)
Toolbar.displayName = "Toolbar"
export { Toolbar }