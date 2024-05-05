import { DropdownMenuItem, Stack } from "@/components/ui"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components"
import { RefreshCcw, Settings } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { getServerSession } from "next-auth"
import React from "react"


const PerfilAvatar = React.memo(({ image, name }: { image: string, name: string }) => {
  return (
    <Avatar className="w-10 h-10 shadow-md">
      <AvatarImage src={image ?? ""} alt={name ?? ""} />
      <AvatarFallback >{(name ?? "")[0]}</AvatarFallback>
    </Avatar>
  )
})
PerfilAvatar.displayName = "PerfilAvatar"
const Perfil = React.forwardRef(async () => {
  const user = await getServerSession()
  if (!user) return null

  return (
    <section className=" w-full px-2 pt-3 h-12 flex">
      <Dialog >
        <DropdownMenu  >
          <DropdownMenuTrigger >
            <Stack direction={"row"} className="flex-nowrap gap-2 select-none w-full">
              <span>
                <PerfilAvatar
                  image={user.user?.image ?? ""}
                  name={user.user?.name ?? ""}
                />
              </span>
              <Stack direction={"col"} >
                <span className="text-sm text-left leading-4 tracking-tight line-clamp-1">{user.user?.name}</span>
                <span className="text-xs">{user.user?.email}</span>
              </Stack>
            </Stack>
          </DropdownMenuTrigger>

          {/* <DropdownMenuContent className="w-60">

            <DialogTrigger className="w-full">
              <DropdownMenuItem className="w-full gap-2  cursor-pointer">
                <Settings className="w-4 h-4 opacity-50 " /> gerenciar perfil
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuItem className="gap-2  cursor-pointer">
              <RefreshCcw className="w-4 h-4 opacity-50 " /> sincronizar
            </DropdownMenuItem>
          </DropdownMenuContent> */}
        </DropdownMenu >


        <DialogContent className="select-none">
          aqui
        </DialogContent>
      </Dialog>
    </section>
  )
})

Perfil.displayName = "Perfil"
export { Perfil }