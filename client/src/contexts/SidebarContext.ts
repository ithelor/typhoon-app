import React from 'react'

interface ISidebarContext {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const SidebarContext = React.createContext<ISidebarContext | null>(null)
