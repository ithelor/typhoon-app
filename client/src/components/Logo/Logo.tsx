import { ReactComponent as AppLogo } from 'assets/shared/logo.svg'

import styles from './Logo.module.scss'

/**
 * Logo Component
 */
const Logo = () => (
  <div className={styles.container}>
    <AppLogo />
    <h2>
      Тай<span>фун</span>
    </h2>
  </div>
)

export default Logo
