import { getServerSession } from "next-auth";
import { TodoApp } from "..";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getServerSession()
  if (!user) redirect("/login")
  return <TodoApp />
}
