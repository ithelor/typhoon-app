import styles from './Block.module.scss'

/**
 * Block component
 */
interface IBlock {
  heading: string
  data: number | string | string[]
}

const Block = (props: IBlock) => {
  const dataToMap =
    props.data instanceof Array ? props.data.map((item) => <li key={item}>{item}</li>) : props.data

  return (
    <section className={styles.block}>
      <h3>{props.heading}</h3>
      <ul>{dataToMap}</ul>
    </section>
  )
}

export default Block
