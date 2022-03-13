import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { IconType } from 'react-icons'
import {
  MdDashboard as DashboardIcon,
  MdPersonOutline as PersonIcon,
  MdReceiptLong as OrdersIcon,
  MdInsights as AnalyticsIcon,
  MdMailOutline as MessagesIcon,
  MdInventory as ProductsIcon,
  MdOutlineReportGmailerrorred as ReportsIcon,
  MdSettings as SettingsIcon,
  MdAdd as AddProductIcon,
  MdLogout as LogoutIcon
} from 'react-icons/md'

import { useSidebar } from 'hooks/useSidebar'

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
const MenuItem = (props: IMenuItem) => (
  <NavLink to={props.to} className={classNames(styles.navlink, { [styles.active]: props.active })}>
    <props.icon className={styles.menuItemIcon} />
    <h3>{props.title}</h3>
  </NavLink>
)

/**
 * Sidebar Component
 */
const Sidebar = () => {
  const { sidebarOpen } = useSidebar()

  return (
    <aside className={classNames(styles.container, { [styles.open]: sidebarOpen })}>
      <nav className={styles.navMenu}>
        <MenuItem icon={DashboardIcon} title="Dashboard" to="#" active />
        <MenuItem icon={PersonIcon} title="Customers" to="#" />
        <MenuItem icon={OrdersIcon} title="Orders" to="#" />
        <MenuItem icon={AnalyticsIcon} title="Analytics" to="#" />
        <MenuItem icon={MessagesIcon} title="Messages" to="#" />
        <MenuItem icon={ProductsIcon} title="Products" to="#" />
        <MenuItem icon={ReportsIcon} title="Reports" to="#" />
        <MenuItem icon={SettingsIcon} title="Settings" to="#" />
        <MenuItem icon={AddProductIcon} title="Add product" to="#" />
        <MenuItem icon={LogoutIcon} title="Logout" to="#" />
      </nav>
    </aside>
  )
}

export default Sidebar
