import { IconName, icons } from "../../const"
import React from "react"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  iconName: IconName
}

const Iconify = React.forwardRef<SVGSVGElement, Props>(({ iconName, ...props }, ref) => {
  const Icon = icons[iconName]
  return <Icon ref={ref} {...props} />
})


Iconify.displayName = "Iconify"

export { Iconify }