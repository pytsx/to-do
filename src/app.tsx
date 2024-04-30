"use client"
import React from "react";
import clsx from "clsx";
import { ListSidebar } from "./components";
import { GlobalProvider } from "./provider";
import { TaskList, TaskSidebar } from "./components/global/task";

const TodoApp = React.forwardRef(({ }, ref) => {
  const [message, setMessage] = React.useState<string>("")
  React.useEffect(() => {
    function handleMessage(event: MessageEvent) {
      setMessage(event.data);
      // Aqui você pode adicionar a lógica para lidar com a mensagem
    }

    window.addEventListener('message', handleMessage);

    // Não se esqueça de remover o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <GlobalProvider>
      <section
        className="flex bg-neutral-900"
      >
        <ListSidebar />

        <section className="w-full h-full flex flex-col ">
          <div className={clsx("bg-neutral-950 w-full h-full select-none ")}>
            {message}
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