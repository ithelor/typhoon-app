import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { IconType } from 'react-icons'
import {
  BsMenuButtonWideFill as DashboardIcon,
  BsPlayBtnFill as ContentIcon,
  BsFileBarGraphFill as AnalyticsIcon,
  BsPersonFill as ProfileIcon,
  BsGearFill as SettingsIcon
} from 'react-icons/bs'

import { useSidebar } from 'hooks/useSidebar'

import { ReactComponent as Logo } from 'assets/shared/logo.svg'

import styles from './Sidebar.module.scss'

/**
 * MenuItem Component
 */
interface IMenuItem {
  title: string
  to: string
  icon: IconType
  active?: boolean
}
const MenuItem = (props: IMenuItem) => {
  return (
    <li
      className={classNames(styles.menuListItem, {
        [styles.active]: props.active
      })}
    >
      <NavLink to={props.to} className={styles.navlink}>
        <props.icon className={styles.sidebarIcon} />
        <div className={styles.hiddenSidebar}>{props.title}</div>
      </NavLink>
    </li>
  )
}

/**
 * Sidebar Component
 */
const Sidebar = () => {
  const { sidebarOpen } = useSidebar()

  return (
    <aside
      className={classNames(styles.container, { [styles.open]: sidebarOpen })}
    >
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={classNames(styles.hiddenSidebar, styles.title)}>
          Title
        </div>
        <div className={classNames(styles.hiddenSidebar, styles.subtitle)}>
          Subtitle
        </div>
      </div>
      <div className={styles.middleSection}>
        <ul className={styles.menuList}>
          <MenuItem title="Dashboard" to="#" icon={DashboardIcon} active />
          <MenuItem title="Content" to="#" icon={ContentIcon} />
          <MenuItem title="Analytics" to="#" icon={AnalyticsIcon} />
        </ul>
      </div>
      <div className={styles.bottomSection}>
        <ul className={styles.menuList}>
          <MenuItem title="Profile" to="#" icon={ProfileIcon} />
          <MenuItem title="Settings" to="#" icon={SettingsIcon} />
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
