import { MdMenu as MenuIcon } from 'react-icons/md'

import Logo from 'components/Logo/Logo'
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher'

import { useSidebar } from 'hooks/useSidebar'

import styles from './Header.module.scss'

/**
 * Header Component
 */
const Header = () => {
  const sidebarContext = useSidebar()

  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <button onClick={() => sidebarContext?.setIsOpen(!sidebarContext.isOpen)}>
          <MenuIcon />
        </button>
        <Logo />
      </div>
      <ThemeSwitcher />
    </header>
  )
}

export default Header
