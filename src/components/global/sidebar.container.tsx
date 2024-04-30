"use client"
import { useGlobal } from "@/provider/global"
import { ElementType } from "@/reducer"
import React from "react"

interface SidebarContainer extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
  type: ElementType
}

const SidebarContainer = React.forwardRef<HTMLElement, SidebarContainer>(({ children, type }, ref) => {
  const { globalState } = useGlobal()
  if (type == "step") return null
  if (!globalState.openSidebars[type]) return null
  return children
}
)
SidebarContainer.displayName = "SidebarContainer"
export {
  SidebarContainer
}