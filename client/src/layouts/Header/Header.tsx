import { MdMenu as MenuIcon } from 'react-icons/md'

import Logo from 'components/Logo/Logo'
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher'

import { useSidebar } from 'hooks/useSidebar'

import { ReactComponent as ReactLogo } from 'assets/shared/logo.svg'

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
      <div className={styles.right}>
        <ThemeSwitcher />
        <div className={styles.profile}>
          <div className={styles.info}>
            <p>
              Hey, <b>Username</b>
            </p>
            <small>Role</small>
          </div>
          <ReactLogo />
        </div>
      </div>
    </header>
  )
}

export default Header
