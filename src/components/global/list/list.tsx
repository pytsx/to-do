"use client"
import { ElementAuthor } from "@/reducer"
import { ListContent } from "./list.content"

export type ListProps = {
  author: ElementAuthor
}
const List = (props: ListProps) => {
  return <ListContent {...props} />
}

export {
  List
}