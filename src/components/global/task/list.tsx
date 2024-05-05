"use client"

import { Button, Input, Stack } from "@/components/ui"
import { Iconify } from "@/components/ui/iconify"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useGlobal } from "@/provider/global"
import { Step, Task } from "@/reducer"
import { Div } from "@/utils/interface"
import clsx from "clsx"
import { Circle, CircleCheckBigIcon, Menu, X } from "lucide-react"
import React from "react"
import { AddTask } from "./add.task"
import { EditableText } from "../Editable.text"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { v4 } from "uuid"

interface CheckerProps extends Div {
  active?: boolean
}

const Checker = React.forwardRef<HTMLDivElement, CheckerProps>(({ active, className, onClick, ...props }, ref) => {
  const [mouseEnter, setMouseEnter] = React.useState<boolean>(false)

  return (
    <Stack className={clsx("w-full h-full gap-2", className)} ref={ref} {...props}>
      <div
        className={clsx("w-10 h-full  flex items-center justify-center cursor-pointer")}
        onClick={(e) => onClick && onClick(e as React.MouseEvent<HTMLDivElement, MouseEvent>)}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        {mouseEnter || active
          ? <CircleCheckBigIcon className={"w-5 h-5"} />
          : <Circle className="w-5 h-5" />
        }
      </div>
      {props.children}
    </Stack>
  )
})

Checker.displayName = "Checker"
interface TaskItemProps extends Div {
  task?: Task
  active?: boolean
  editable?: boolean
  dense?: boolean
}

const TaskItem = React.forwardRef<HTMLDivElement, TaskItemProps>(({
  task,
  active = false,
  editable,
  dense = false,
  ...props
}, ref) => {
  const { globalDispatch } = useGlobal()
  if (!task) return <div className="w-full h-16 border-b" />

  function toogleTaskstatus(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    e.stopPropagation()
    if (!task) return null

    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        element: {
          ...task,
          status: task.status == "DONE" ? "TODO" : "DONE"
        },
        map: {
          list: task?.parent,
          task: task?.id,
        },
        type: "task",
      }
    })
  }

  function toogleStepstatus(step: Step) {
    if (!task) return null

    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        element: {
          ...step,
          status: step.status == "DONE" ? "TODO" : "DONE"
        },
        map: {
          list: task?.parent,
          task: task?.id,
          step: step.id
        },
        type: "step",
      }
    })
  }


  function renameTask(title: string) {
    if (!task) return null

    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        element: {
          ...task,
          name: title
        } as Task,
        type: "task",
        map: {
          list: task?.parent,
          task: task.id
        },
      }
    })
  }

  function addStep(name: string) {
    if (!task) return null
    if (name.trim() == "") return null
    globalDispatch({
      type: "ADD_ELEMENT",
      payload: {
        type: "step",
        map: {
          list: task.parent,
          task: task.id
        },
        element: {
          id: v4(),
          name,
          status: "TODO"
        } as Step
      }
    })
  }

  function renameStep(name: string, step: Step) {
    if (!task) return null
    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        type: "step",
        map: {
          list: task.parent,
          task: task.id,
          step: step.id
        },
        element: {
          ...step,
          name,
        } as Step
      }
    })
  }

  function deleteStep(stepId: string) {
    if (!task) return null
    globalDispatch({
      type: "DELETE_ELEMENT",
      payload: {
        type: "step",
        map: {
          list: task.parent,
          task: task.id,
          step: stepId
        },
      }
    })
  }
  return (
    <Stack
      ref={ref}
      className={clsx("group/taskItem h-16 bg-neutral-900 rounded-md", [active && "border-transparent"], [!dense && "!h-fit "])}
    >
      <Stack
        direction={"col"}
        key={task.id}
        {...props}
        className={clsx(
          "h-full w-full gap-2 group-hover/taskItem:bg-neutral-800 transition-all rounded-md cursor-pointer",
          [!dense && active && "!bg-neutral-800 group-hover/taskItem:bg-neutral-900 "],
          [!dense && "px-2 py-4 !bg-neutral-800 group-hover/taskItem:bg-transparent cursor-default"]
        )}
      > 


        <Checker onClick={toogleTaskstatus} active={task.status == "DONE"}>
          <Stack direction={"col"} justify={"center"} className={clsx(" h-full w-full")}>
            <EditableText
              value={task.name}
              callback={renameTask}
              contentEditable={!!editable}
              className={clsx("min-w-32 line-clamp-1 max-w-48 text-neutral-300", task.status == "DONE" && "line-through", [dense && "max-w-full"])}
            />

            <div className="flex flex-row w-full whitespace-nowrap pr-2 text-neutral-500">
              {
                task.steps.length > 0 && <div className="w-full text-xs leading-3">
                  {task.steps.filter(el => el.status == "DONE").length} de {task.steps.length}
                </div>
              }
              <p className="text-xs leading-3">
                {task.metadata.updatedAt.toLocaleString()}
              </p>
            </div>
          </Stack>
        </Checker>

        {
          !dense
          && <section className="w-full flex flex-col gap-1">
            {
                task.steps.slice(0, 10).map(step => (
                  <Checker key={v4()} className="-ml-1 px-2 items-center hover:bg-neutral-900 rounded-md text-neutral-300 py-1 w-full " active={step.status == "DONE"} onClick={(e) => {
                  e.stopPropagation()
                  toogleStepstatus(step)
                }}>
                  <EditableText
                    value={step.name}
                    callback={(name) => renameStep(name, step)}
                      className="h-full w-full max-w-[80%] line-clamp-1 text-sm"
                  />
                  <Button variant={"ghost"} className="rounded-full px-2" size={"icon"} onClick={() => deleteStep(step.id)}>
                    <X className="w-5 h-5" />
                  </Button>
                </Checker>
              ))
            }
            <Input
                disabled={task.steps.length >= 10}
                hidden={task.steps.length >= 10}
                name="etapa"
                variant="ghost"
                callback={addStep}
            />
          </section>

        }
      </Stack>

    </Stack>
  )
})

TaskItem.displayName = "TaskItem"

const TaskList = React.forwardRef(({ }, ref) => {
  const { globalState, globalDispatch } = useGlobal()

  function selectTask(taskId: string) {
    if (
      (!globalState.selectedTask || globalState.selectedTask == taskId) ||
      (globalState.selectedTask !== taskId && !globalState.openSidebars.task)
    ) {
      globalDispatch({
        type: "TOOGLE_SIDEBARS",
        payload: {
          type: "task"
        }
      })
    }

    globalDispatch({
      type: "SELECT_ELEMENT",
      payload: {
        type: "task",
        parentId: globalState.selectedList,
        elementId: taskId
      }
    })
  }

  function closeListSidebar() {
    globalDispatch({
      type: "TOOGLE_SIDEBARS",
      payload: {
        type: "list"
      }
    })
  }

  const list = globalState.lists.find(list => list.id === globalState.selectedList)
  if (!list) return null
  function renameList(name: string) {
    if (!list || list.metadata.author == "system") return null
    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        type: "list",
        map: {
          list: list.id
        },
        element: {
          ...list,
          name
        }
      }
    })
  }

  return (
    <section className="relative flex flex-col overflow-hidden gap-4"
      style={{
        maxHeight: "calc(100vh - 3rem)",
        height: "calc(100vh - 3rem)",
      }}
    >

      {
        globalState.selectedList &&
        <section className="pt-5 px-4 flex gap-2 w-full">
          <span className="w-10 flex items-center justify-center">
            <Button variant={"outline"} size="icon" onClick={closeListSidebar}>
              <Menu className="w-4 h-4" />
            </Button>
            </span>
          <Stack
            items={"center"}
            key={list.id}
            style={{ color: list.metadata.color }}
            className="gap-2 h-9"
          >
            <span className="w-10 flex items-center justify-center">
              {list.metadata.icon
                && <Iconify
                  iconName={list.metadata.icon}

                />}
            </span>

            <EditableText
              callback={renameList}
              value={list.name}
              className={clsx("text-xl first-letter:capitalize min-w-64")}
              contentEditable={list.metadata.author !== "system"}
            />
          </Stack>

          </section>

      }
      <ScrollArea className="relative flex flex-col max-h-screen px-4">
        {
          globalState.selectedList
          && (
            <div className="flex flex-col gap-1 pb-8">
              <AddTask />
              {
                list.tasks
                  .sort((a, b) => new Date(b.metadata.updatedAt ?? new Date()).getTime() - new Date(a.metadata.updatedAt ?? new Date()).getTime())
                  .filter(el => el.status !== "DONE")
                  .map(task => (
                    <TaskItem
                      dense
                      onClick={() => selectTask(task.id)}
                      key={task.id}
                      active={task.id === globalState.selectedTask}
                      task={task}
                    />
                  ))
              }


              <Accordion type="multiple" defaultValue={[]}>
                {list.tasks.filter(el => el.status === "DONE").length > 0 &&
                  <AccordionItem value="DONE">
                    <AccordionTrigger>concluída ({list.tasks.filter(el => el.status === "DONE").length})</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-1 w-full">
                      {
                        list.tasks
                          .sort((a, b) => new Date(b.metadata.updatedAt ?? new Date()).getTime() - new Date(a.metadata.updatedAt ?? new Date()).getTime())
                          .filter(el => el.status === "DONE")
                          .map(task => (
                            <TaskItem
                              dense
                              onClick={() => selectTask(task.id)}
                              key={task.id}
                              active={task.id === globalState.selectedTask}
                              task={task}
                            />
                          ))
                      }
                    </AccordionContent>
                  </AccordionItem>
                }

              </Accordion>
            </div>)
        }


      </ScrollArea>
    </section>
  )
})


TaskList.displayName = "TaskList"
export { TaskList, TaskItem }