import React from "react";
import clsx from "clsx";
import { ListSidebar } from "./components";
import { GlobalProvider } from "./provider";
import { TaskList, TaskSidebar } from "./components/global/task";
import { MessageListener } from "./messageListener";

const TodoApp = React.forwardRef(({ }, ref) => {

  return (
    <GlobalProvider>
      <section
        className="flex bg-neutral-900"
      >
        <MessageListener />
        <ListSidebar />

        <section className="w-full h-full flex flex-col ">
          <div className={clsx("bg-neutral-950 w-full h-full select-none ")}>
            <TaskList />
          </div>
        </section>
        <TaskSidebar />
      </section>
    </GlobalProvider>
  )
})
TodoApp.displayName = "TodoApp"
export { TodoApp }