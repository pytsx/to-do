"use client"
import React from "react";
import { Material, Octopus } from "./ui";

interface LayoutProps {
  children: React.ReactNode
  appbar?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, appbar }) => {
  return (
    <Material.Section
      design={{
        justify: "space-between",
        flexDirection: "column",
        height: "calc(100vh - 3rem)",
      }}
    >
      <Octopus.Appbar>
        {
          appbar
            ? appbar
            : <span />
        }
      </Octopus.Appbar>
      <Material.Main>
        {children}
      </Material.Main>
    </Material.Section>
  )
}

Layout.displayName = 'Layout'
export { Layout }