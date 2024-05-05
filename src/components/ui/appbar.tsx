import { Div } from "@/utils/interface"
import React from "react"
import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"


const appbarVariant = cva(
  "h-full flex items-center",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-b border-r",
      },
      size: {
        none: "p-0",
        sm: "px-2 py-1",
        md: "px-3 py-2",
        lg: "px-4 py-3",
        xl: "px-6 py-4"
      },
      orientation: {
        vertical: "!h-full !w-fit !items-start !justify-start flex-col",
        horizontal: "!w-full !h-fit"
      },
      defaultVariants: {
        variant: "default",
        size: "md"
      }
    }
  }
)
interface AppbarProps extends Div, VariantProps<typeof appbarVariant> { }

const Appbar = React.forwardRef<HTMLDivElement, AppbarProps>(
  ({ variant = "default", size = "none", orientation = "horizontal", className, ...props }, ref) =>
    <nav
      ref={ref}
      {...props}
      className={
        cn(appbarVariant({ variant, size, className, orientation }))
      }
    />
)

Appbar.displayName = "Appbar"

export { Appbar, appbarVariant }