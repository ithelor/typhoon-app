import React from 'react'
import {
  MdMenu as MenuIcon,
  MdLightMode as LightModeIcon,
  MdDarkMode as DarkModeIcon
} from 'react-icons/md'

import { useSidebar } from 'hooks/useSidebar'

import { ReactComponent as Logo } from 'assets/shared/logo.svg'

import styles from './Header.module.scss'

/**
 * Header Component
 */
const Header = () => {
  const defaultDark =
    window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark'

  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || defaultDark || 'light'
  )

  const { sidebarOpen, setSidebarOpen } = useSidebar()

  React.useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={styles.right}>
      <div className={styles.top}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <MenuIcon />
        </button>
        <button
          className={styles.themeToggler}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <LightModeIcon
            className={theme === 'light' ? styles.active : undefined}
          />
          <DarkModeIcon
            className={theme === 'dark' ? styles.active : undefined}
          />
        </button>
        <div className={styles.profile}>
          <div className={styles.info}>
            <p>
              Hey, <b>Username</b>
            </p>
            <small>Admin</small>
          </div>
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Header
