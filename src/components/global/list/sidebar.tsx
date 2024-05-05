import React from "react"
import { Appbar } from "@/components/ui/appbar"
import { Toolbar } from "@/components/ui/toolbar"
import { Perfil } from "../perfil"
import { List } from "./list"
import { SidebarContainer } from "../sidebar.container"
import { AddList } from "./add.list"
import { Stack } from "@/components/ui"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Signout } from "../signout"


const ListSidebar = React.forwardRef(({ }, ref) => {
  return <SidebarContainer type="list">
    <Appbar
      orientation={"vertical"}
      className="relative !w-[280px] min-w-[280px] max-w-[280px] overflow-hidden"
      style={{
        maxHeight: "calc(100vh - 3rem)",
        height: "calc(100vh - 3rem)",
      }}
    >
      <ScrollArea
        className="relative  w-full h-full"
        style={{
          maxHeight: "calc(100vh - 6rem)",
          height: "calc(100vh - 6rem)",
        }}
      >

        <Toolbar className="sticky top-0 z-20 shadow bg-neutral-900  gap-4 h-fit w-full !flex-col !items-start !justify-start">
          <Perfil />
          <List author="system" />
        </Toolbar>

        <div className="h-[1px] w-full  select-none" >
          <div className="border-t  h-full w-full" />
        </div>


        <div className="w-full h-full flex">
          <AddList />
        </div>

        <Toolbar className="h-fit !flex-col !items-start !justify-start pt-1">
          <List author="user" />
        </Toolbar>


      </ScrollArea> 

      <Stack items="center" className="p-2 sticky bottom-0 h-12 bg-inherit border-t w-full">
        <Signout />
      </Stack>

    </Appbar>
  </SidebarContainer>
})

ListSidebar.displayName = "ListSidebar"
export {
  ListSidebar
}