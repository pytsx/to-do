import { cn } from "@/lib/utils"
import { Div } from "@/utils/interface"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

const stackVariants = cva(
  "flex",
  {
    variants: {
      variant: {
        default: "flex select-none"
      },
      direction: {
        row: "!flex-row",
        col: "!flex-col"
      },
      items: {
        center: "items-center",
        start: "items-start",
        end: "items-end",
      },
      justify: {
        between: "justify-between",
        center: "justify-center",
        start: 'justify-start'
      },
      defaultVariants: {
        variant: "default",
        direction: "row"
      }
    }
  }
)

interface StackProps extends Div, VariantProps<typeof stackVariants> { }

const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ className, items = "start", justify = "start", variant = "default", direction = "row", children, ...props }, ref) =>
  <div
    ref={ref}
    {...props}
    className={cn(
      stackVariants({ direction, variant, items, justify, className }),
    )}>
    {
      React.Children.toArray(children).map(child => child)
    }
  </div>
)


Stack.displayName = "Stack"
export { Stack }