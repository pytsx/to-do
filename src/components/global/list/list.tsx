"use client"
import { ElementAuthor } from "@/reducer"
import { ListContent } from "./list.content"
import React from "react"

export type ListProps = {
  author: ElementAuthor
}
const List = React.forwardRef((props: ListProps, ref) => {
  return <ListContent {...props} />
})

export {
  List
}