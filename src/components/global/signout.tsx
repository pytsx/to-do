"use client"
import { LucideDoorOpen } from "lucide-react";
import { Button } from "../ui";
import { signOut } from "next-auth/react"
import React from "react";

const Signout = React.forwardRef(() => {
  return (
    <Button
      variant="ghost"
      className="px-2 rounded-full"
      size={"icon"}
      onClick={() => {
        signOut()
      }}
    >
      <LucideDoorOpen className="w-5 h-5" />
    </Button>
  )
})

Signout.displayName = "Signout"
export { Signout }