// import classNames from 'classnames'
import {
  MdMenu as MenuIcon,
  MdLightMode as LightModeIcon,
  MdDarkMode as DarkModeIcon
} from 'react-icons/md'

import { ReactComponent as Logo } from 'assets/shared/logo.svg'

// import { useSidebar } from 'hooks/useSidebar'

import styles from './Header.module.scss'

const Header = () => {
  // const { sidebarOpen, setSidebarOpen } = useSidebar()

  return (
    <div className={styles.right}>
      <div className={styles.top}>
        <button>
          <MenuIcon />
        </button>
        <div className={styles.themeToggler}>
          <LightModeIcon
            // className={classNames({[styles.active]: props.active})}
            className={styles.active}
          />
          <DarkModeIcon />
        </div>
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
