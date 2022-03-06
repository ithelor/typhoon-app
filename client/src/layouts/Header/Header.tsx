import React from 'react'
import { FaBars as HamburgerIcon } from 'react-icons/fa'

import { useSidebar } from 'hooks/useSidebar'

import styles from './Header.module.scss'

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar()

  return (
    <header className={styles.header}>
      <button className={styles.menuIconButton} onClick={() => setSidebarOpen(!sidebarOpen)}>
        <HamburgerIcon className={styles.menuIcon} />
      </button>
    </header>
  )
}

export default Header
