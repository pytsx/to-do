"use client";

import { Button } from "@/components";
import { Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);

  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);
  if (loading) return <div className="mx-auto w-fit">
    <Loader color="#A8A29E" className="animate-spin" />
  </div>
  return (
    <section className="flex flex-col gap-1">
      {/* <Button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          signIn("github");
        }}
        variant={"outline"}
      >
        <Github />
        <p className="text-sm font-medium text-stone-600 dark:text-stone-400 px-4">
          continue com GitHub
        </p>
      </Button> */}

      <Button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          signIn("credentials");
        }}
        variant={"default"}
      >
        <p >
          sessão anônima
        </p>
      </Button>
    </section>
  );
}
