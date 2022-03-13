import { ReactComponent as ReactLogo } from 'assets/shared/logo.svg'

import styles from './Logo.module.scss'

/**
 * Logo Component
 */
const Logo = () => (
  <div className={styles.container}>
    <ReactLogo />
    <h2>
      Typ<span>hoon</span>
    </h2>
  </div>
)

export default Logo
