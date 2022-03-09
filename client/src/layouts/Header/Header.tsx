import { FaBars as HamburgerIcon } from 'react-icons/fa'

import { useSidebar } from 'hooks/useSidebar'
import { useBackdrop } from 'hooks/useBackdrop'

import styles from './Header.module.scss'

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar()
  const { backdropOpen, setBackdropOpen } = useBackdrop()

  return (
    <header className={styles.container}>
      <button
        className={styles.sidebarToggle}
        onClick={() => {
          setSidebarOpen(!sidebarOpen)
          setBackdropOpen(!backdropOpen)
        }}
      >
        <HamburgerIcon className={styles.toggleIcon} />
      </button>
    </header>
  )
}

export default Header
