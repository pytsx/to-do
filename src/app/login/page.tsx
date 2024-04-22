import LoginButton from "./login.button";
import { Suspense } from "react";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { Github } from "@/const";
import { Pytsx } from "@/components/global/logo";
import { Button } from "@/components";
import Link from "next/link";
export default async function LoginPage() {
  const user = await getServerSession()
  if (user) redirect("/")
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <div className="mx-5 border border-neutral-200 py-10 dark:border-neutral-800 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:shadow-md">
        <div className="mx-auto w-fit">
          <Pytsx sup="to do" />
        </div>


        <div className="mx-auto mt-4 w-11/12 max-w-xs sm:w-full">
          <Suspense
            fallback={
              <div className="my-2 h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800" />
            }
          >
            <LoginButton />
          </Suspense>
        </div>
      </div>
      <p className="my-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
        <Button
          variant={"link"}
          className="font-medium text-black hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
          asChild
        >
          <Link href="/" target="_blank" rel="noreferrer">
            saiba mais
          </Link>
        </Button>
      </p>
    </section>
  );
}