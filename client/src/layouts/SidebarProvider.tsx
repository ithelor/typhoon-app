import React from 'react'

import { SidebarContext } from 'contexts/SidebarContext'

interface ISidebarProvider {
  children: React.ReactElement | React.ReactElement[]
}

const SidebarProvider = (props: ISidebarProvider) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
