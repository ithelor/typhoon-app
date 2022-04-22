import classNames from 'classnames'

import styles from './Loader.module.scss'

interface ILoader {
  fillGrid?: boolean
}

const Loader = (props: ILoader) => (
  <svg className={classNames(styles.loader, { [styles.fillGrid]: props.fillGrid })} />
)

export default Loader
