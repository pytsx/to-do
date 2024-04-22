import { IconName } from "@/const"

export type ElementAuthor = "system" | "user"
export type TaskStatus = "TODO" | "DONE"

interface Metadata {
  [x: string]: any
  tags: string[]
  createdAt: Date
  updatedAt: Date
  icon?: IconName
  color?: string
  author: ElementAuthor
}

export interface List {
  id: string
  name: string
  tasks: Task[]
  metadata: Metadata
}

export type Step = {
  id: string
  name: string
  status: TaskStatus
}

export interface Task {
  id: string
  name: string
  description: string
  steps: Step[]
  parent: string
  status: TaskStatus
  metadata: Metadata
}

export type ElementType = "list" | "task" | "step"

export interface GlobalState {
  lists: List[]
  selectedList?: string
  selectedTask?: string
  openSidebars: Omit<Record<ElementType, boolean>, "step">
}

type Map = Partial<Record<ElementType, string>>
export type GlobalActions =
  | {
    type: "ADD_ELEMENT",
    payload: {
      type: ElementType
      map: Map
      element: Task | List | Step
    }
  }
  | {
    type: "UPDATE_ELEMENT"
    payload: {
      type: ElementType
      map: Map
      element: Task | List | Step
    }
  }
  | {
    type: "DELETE_ELEMENT"
    payload: {
      type: ElementType
      map: Map
    }
  }
  | {
    type: "SELECT_ELEMENT"
    payload: {
      type: ElementType
      elementId: string
      parentId?: string
    }
  }
  | {
    type: "DESELECT_ELEMENT"
    payload: {
      type: ElementType
    }
  }
  | {
    type: "TOOGLE_SIDEBARS"
    payload: {
      type: ElementType
    }
  }

