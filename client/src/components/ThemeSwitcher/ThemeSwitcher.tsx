import React from 'react'
import { MdLightMode as LightModeIcon, MdDarkMode as DarkModeIcon } from 'react-icons/md'

import styles from './ThemeSwitcher.module.scss'

/**
 * ThemeSwitcher Component
 */
const ThemeSwitcher = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark'

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || defaultDark || 'light')

  React.useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button
      className={styles.container}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <LightModeIcon className={theme === 'light' ? styles.active : undefined} />
      <DarkModeIcon className={theme === 'dark' ? styles.active : undefined} />
    </button>
  )
}

export default ThemeSwitcher
