import React from 'react'
import classNames from 'classnames'
import {
  BsMenuButtonWideFill as DashboardIcon,
  BsPlayBtnFill as ContentIcon,
  BsMusicPlayerFill as PlaylistIcon,
  BsFileBarGraphFill as AnalyticsIcon,
  BsPersonFill as ProfileIcon,
  BsGearFill as SettingsIcon
} from 'react-icons/bs'

import { useSidebar } from 'hooks/useSidebar'

import logo from 'assets/shared/logo.svg'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
  const { sidebarOpen } = useSidebar()

  return (
    <aside className={classNames(styles.sidebar, { [styles.open]: sidebarOpen })}>
      <div className={styles.topSidebar}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
        <div className={classNames(styles.hiddenSidebar, styles.yourChannel)}>Your Channel</div>
        <div className={classNames(styles.hiddenSidebar, styles.channelName)}>Typhoon</div>
      </div>
      <div className={styles.middleSidebar}>
        <ul className={styles.sidebarList}>
          <li className={classNames(styles.sidebarListItem, styles.active)}>
            <a href="#" className={styles.sidebarLink}>
              <DashboardIcon className={styles.sidebarIcon} />
              <div className={styles.hiddenSidebar}>Dashboard</div>
            </a>
          </li>
          <li className={styles.sidebarListItem}>
            <a href="#" className={styles.sidebarLink}>
              <ContentIcon className={styles.sidebarIcon} />
              <div className={styles.hiddenSidebar}>Content</div>
            </a>
          </li>
          <li className={styles.sidebarListItem}>
            <a href="#" className={styles.sidebarLink}>
              <PlaylistIcon className={styles.sidebarIcon} />
              <div className={styles.hiddenSidebar}>Playlist</div>
            </a>
          </li>
          <li className={styles.sidebarListItem}>
            <a href="#" className={styles.sidebarLink}>
              <AnalyticsIcon className={styles.sidebarIcon} />
              <div className={styles.hiddenSidebar}>Analytics</div>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.bottomSidebar}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <a href="#" className={styles.sidebarLink}>
              <ProfileIcon className={styles.sidebarIcon} />
              <div className={styles.hiddenSidebar}>Profile</div>
            </a>
          </li>
          <li className={styles.sidebarListItem}>
            <a href="#" className={styles.sidebarLink}>
              <SettingsIcon className={styles.sidebarIcon} />
              <div className={styles.hiddenSidebar}>Settings</div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
