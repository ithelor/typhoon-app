import { FaBars as HamburgerIcon } from 'react-icons/fa'

import { useSidebar } from 'hooks/useSidebar'

import styles from './Header.module.scss'

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar()

  return (
    <header className={styles.container}>
      <button
        className={styles.sidebarToggle}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <HamburgerIcon className={styles.toggleIcon} />
      </button>
    </header>
  )
}

export default Header
