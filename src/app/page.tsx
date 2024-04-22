import { ListSidebar } from "@/components";
import { TaskList, TaskSidebar } from "@/components/global/task";
import { getServerSession } from "next-auth";
import clsx from "clsx";

export default async function Home() {
  const user = await getServerSession()
  if (!user) return null
  return (
    <main
      className="flex w-screen h-screen bg-neutral-900"
    >
      <ListSidebar />
      <section className="w-full h-full flex flex-col ">
        <div className={clsx("bg-neutral-950 w-full h-full select-none ")}>
          <TaskList />
        </div>
      </section>
      <TaskSidebar />
    </main>
  );
}
