"use client"
import { Input } from "@/components/ui"
import { useGlobal } from "@/provider/global"
import { Task } from "@/reducer"
import React from "react"
import { v4 } from "uuid"

const AddTask = React.forwardRef(({ }, ref) => {
  const { globalState, globalDispatch } = useGlobal()


  const list = globalState.lists.find(collection => collection.id === globalState.selectedList)
  if (!list) return null

  function submit(name: string) {
    if (!list) return null
    if (name.trim() === "" || name === undefined) return null

    const newTask: Task = {
      id: v4(),
      name: name,
      metadata: {
        tags: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        icon: "list",
        author: "user"
      },
      description: "",
      parent: list.id,
      status: "TODO",
      steps: []
    }

    globalDispatch({
      type: "ADD_ELEMENT",
      payload: {
        type: "task",
        element: newTask,
        map: {
          list: list.id,
          task: newTask.id
        }
      }
    })
  }

  return <Input
    callback={submit} color={list.metadata.color ?? ""} name="tarefa" />
})


export {
  AddTask
}