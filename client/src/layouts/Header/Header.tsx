import React from 'react'
import { FaBars as HamburgerIcon } from 'react-icons/fa'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.menuIconButton}>
        <HamburgerIcon className={styles.menuIcon} />
      </button>
    </header>
  )
}

export default Header
