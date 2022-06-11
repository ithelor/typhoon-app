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
    props.data instanceof Array ? (
      <ul>
        {props.data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : (
      <span>{props.data}</span>
    )

  return props.data instanceof Array && props.data.length === 0 ? (
    <></>
  ) : (
    <div className={styles.container}>
      <h3>{props.heading}</h3>
      <div className={styles.content}>{dataToMap}</div>
    </div>
  )
}

export default Block
