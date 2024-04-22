"use client"
import { useGlobal } from "@/provider/global"
import { ElementType } from "@/reducer"
import { Children } from "@/utils/interface"

interface SidebarContainer extends Children {
  type: ElementType
}

const SidebarContainer = ({ children, type }: SidebarContainer) => {
  const { globalState } = useGlobal()
  if (type == "step") return null
  if (!globalState.openSidebars[type]) return null
  return children
}

SidebarContainer.displayName = "SidebarContainer"
export {
  SidebarContainer
}