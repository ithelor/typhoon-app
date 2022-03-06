import React from 'react'

import { SidebarContext } from 'contexts/SidebarContext'

interface ISidebarProvider {
  children: React.ReactElement
}

const SidebarProvider = (props: ISidebarProvider) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>{props.children}</SidebarContext.Provider>
}

export default SidebarProvider
