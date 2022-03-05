import React from 'react'
import classNames from 'classnames'
import { BsMenuButtonWideFill as DashboardIcon } from 'react-icons/bs'

import logo from 'assets/shared/logo.svg'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <aside className={classNames(styles.sidebar, styles.open)}>
      <div className={styles.topSidebar}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
        <div className={styles.hiddenSidebar}>Your Channel</div>
        <div className={styles.hiddenSidebar}>Typhoon</div>
      </div>
      <div className={styles.middleSidebar}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <a href="#" className={styles.sidebarLink}>
              <DashboardIcon className={styles.sidebarIcon} />
              <div className={styles.sidebarLinkText}>Dashboard</div>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.bottomSidebar}>Bottom</div>
    </aside>
  )
}

export default Sidebar
