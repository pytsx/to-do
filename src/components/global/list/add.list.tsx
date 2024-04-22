"use client"
import { Stack } from "@/components/ui"
import { useGlobal } from "@/provider/global"
import { List } from "@/reducer"
import clsx from "clsx"
import { Plus } from "lucide-react"
import React from "react"
import { v4 } from "uuid"

const AddList = () => {
  const { globalDispatch } = useGlobal()
  const [value, setValue] = React.useState<string>("")
  const [active, setActive] = React.useState<boolean>(false)

  function submit() {
    if (value.trim() === "" || value === undefined) return null

    const newList: List = {
      id: v4(),
      name: value,
      tasks: [],
      metadata: {
        tags: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        icon: "list",
        author: "user"
      }
    }
    globalDispatch({
      type: "ADD_ELEMENT",
      payload: {
        type: "list",
        element: newList,
        map: {}
      }
    })
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    if (newValue == undefined) return null
    setValue(newValue)
  }

  function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code !== "Enter" && (e.code !== "NumpadEnter")) return null
    submit()
    setValue("")
  }
  return (
    <Stack direction={"row"} className="w-full h-fit ">

      <label
        htmlFor="addList"
        className={clsx("flex gap-3 px-3 py-2 w-full  hover:bg-blue-600/20 select-none", [active && "bg-blue-600/20"])}
      >
        <span className="w-10  flex items-center justify-center select-none ">
          <Plus className="w-5 h-5 text-blue-300" />
        </span>
        <input
          onKeyDown={handleEnterPress}
          type="text"
          value={value}
          onClick={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={handleInputChange}
          id="addList"
          className="outline-none text-blue-300 text-sm bg-transparent select-none first-letter:!capitalize"
          placeholder="inserir lista" />
      </label>

      {/* <Button className="rounded-none" variant="ghost">
        <Group />
      </Button> */}
    </Stack>
  )
}

AddList.displayName = "AddList"
export { AddList }