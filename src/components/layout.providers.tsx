"use client"

import { OctopusProvider } from "@pytsx/octopus"

interface LayoutProvidersProps {
  children: React.ReactNode
}

const LayoutProviders: React.FC<LayoutProvidersProps> = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "localhost:3001"
  const origin = (typeof window == "object" && window.location.origin) || "http://localhost:3001"

  return (<OctopusProvider
    os={{
      domain,
      origin,
    }}
  >
    {children}
  </OctopusProvider>)
}

LayoutProviders.displayName = "LayoutProviders"

export {
  LayoutProviders
}