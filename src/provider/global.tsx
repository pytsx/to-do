"use client"
import React from "react"
import { Children } from "@/utils/interface"
import { ThemeProvider } from "./theme"
import { type GlobalActions, type GlobalState, globalReducer } from "@/reducer"
import { SessionProvider } from "next-auth/react"
import { v4 } from "uuid"

interface ContextProps {
  globalState: GlobalState
  globalDispatch: React.Dispatch<GlobalActions>
}

const globalInitialState: GlobalState = {
  lists: [
    {
      id: v4(),
      name: "meu dia",
      tasks: [],
      metadata: {
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        icon: "sun",
        color: "#a0cbf1",
        author: "system"
      }
    },
    {
      id: v4(),
      name: "importante",
      tasks: [],
      metadata: {
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        icon: "star",
        color: "#f5b6c2",
        author: "system"
      }
    },
    {
      id: v4(),
      name: "planejado",
      tasks: [],
      metadata: {
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        icon: "dashboard",
        color: "#8bd3ce",
        author: "system"
      }
    },
    {
      id: v4(),
      name: "atribuido a mim",
      tasks: [],
      metadata: {
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        icon: "person",
        color: "#9ad2ba",
        author: "system"
      }
    },
    {
      id: v4(),
      name: "tarefas",
      tasks: [],
      metadata: {
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        icon: "home",
        color: "#788cde",
        author: "system"
      }
    }
  ],
  openSidebars: {
    task: false,
    list: true,
  }
}

const Context = React.createContext<ContextProps>({
  globalDispatch() { },
  globalState: globalInitialState
})


interface GlobalProviderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
const GlobalProvider = React.forwardRef<HTMLDivElement, GlobalProviderProps>(({ children }, ref) => {
  const [globalState, globalDispatch] = React.useReducer(globalReducer, globalInitialState)
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Context.Provider value={{ globalState, globalDispatch }}>

          {children}
        </Context.Provider>
      </ThemeProvider>
    </SessionProvider>
  )
})

GlobalProvider.displayName = "GlobalProvider"

const useGlobal = () => {
  const context = React.useContext(Context)
  if (!context) throw new Error("useGlobal must be inside GlobalProvider")
  return context
}

export {
  useGlobal,
  GlobalProvider
}