"use client "

import { Iconify } from "@/components/ui/iconify"
import { cn } from "@/lib/utils"
import { useGlobal } from "@/provider/global"
import { Div } from "@/utils/interface"
import clsx from "clsx"
import React from "react"
import { ListProps } from "./list"

interface ListItemProps extends Div {
  active: boolean
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(({ className, active, ...props }, ref) => {
  return <div
    ref={ref}
    className={clsx(
      "relative w-full flex items-center gap-4 p-2 hover:bg-neutral-300/10 cursor-pointer  text-sm rounded-sm select-none",
      className,
      active && "bg-neutral-300/20 hover:bg-neutral-300/20"
    )}
    {...props}
  >
    {props.children}
    <span className={
      clsx(
        "absolute opacity-0 -left-1 rounded-l-sm w-1 h-5/6 bg-blue-300",
        active && "!opacity-100"
      )
    } />
  </div>
}
)
const ListContent = React.forwardRef(({ author }: ListProps, ref) => {
  const { globalState, globalDispatch } = useGlobal()
  function selectList(listId: string) {
    globalDispatch({
      type: "SELECT_ELEMENT",
      payload: {
        type: "list",
        elementId: listId
      }
    })
  }
  return (
    <section className=" w-full flex flex-col gap-1" >
      {
        globalState.lists.filter(el => el.metadata.author === author).map(list => (
          <ListItem
            active={globalState.selectedList === list.id}
            key={list.id}
            onClick={() => selectList(list.id)}
            className={cn(
              globalState.selectedList === list.id
            )}
          >
            <span className="w-10 flex justify-center ">

              {
                list.metadata?.icon &&
                <Iconify
                  iconName={list.metadata.icon}
                  className="w-5 h-5 opacity-80 "
                  style={{ color: list.metadata.color }}
                />
              }
            </span>
            <div className="w-full flex justify-between">
              <p className="first-letter:capitalize text-sm">
                {list.name}
              </p>
              <p>
                {list.tasks.length > 0 && list.tasks.length}
              </p>
            </div>
          </ListItem>
        ))
      }
    </section>
  )
})
ListItem.displayName = "ListItem"
ListContent.displayName = "ListContent"
export {
  ListContent
}