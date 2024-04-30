"use client"
import { Button } from "@/components/ui"
import { Appbar } from "@/components/ui/appbar"
import { Toolbar } from "@/components/ui/toolbar"
import { useGlobal } from "@/provider/global"
import { SidebarClose, Trash } from "lucide-react"
import { SidebarContainer } from "../sidebar.container"
import { TaskItem } from "./list"
import React from "react"

const TaskSidebar = React.forwardRef(() => {
  const { globalState, globalDispatch } = useGlobal()

  function closeTaskSidebar() {
    globalDispatch({
      type: "TOOGLE_SIDEBARS",
      payload: {
        type: "task"
      }
    })
  }

  function deleteTask() {
    if (globalState.selectedTask && globalState.selectedList) {
      globalDispatch({
        type: "DELETE_ELEMENT",
        payload: {
          type: "task",
          map: {
            task: globalState.selectedTask,
            list: globalState.selectedList,
          }
        }
      })

      globalDispatch({
        type: "DESELECT_ELEMENT",
        payload: {
          type: "task"
        }
      })
    }
  }

  if (!globalState.selectedTask) return null
  const collection = globalState.lists.find(list => list.id === globalState.selectedList)
  const task = collection?.tasks.find(task => task.id == globalState.selectedTask)
  if (!task) return null
  return (
    <SidebarContainer type="task">
      <Appbar
        orientation={"vertical"}
        className="relative !w-[280px] min-w-[280px] max-w-[280px] justify-center overflow-hidden "
      >
        <Toolbar className="gap-4 py w-full h-full flex !flex-col justify-between items-start">
          <section className="w-full h-full">
            <div className="pt-3">
              <TaskItem task={task} editable />
            </div>
          </section>

        </Toolbar>

        <div className="flex items-center justify-between w-full border-t p-2">

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={closeTaskSidebar}
          >
            <SidebarClose className="w-5 h-5 -scale-x-100" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={deleteTask}
          >
            <Trash className="w-5 h-5" />
          </Button>

        </div>
      </Appbar>
    </SidebarContainer>
  )
})


TaskSidebar.displayName = "TaskSidebar"


export {
  TaskSidebar
}