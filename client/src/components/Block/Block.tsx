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
      props.data.map((item, index, array) => {
        return index === array.length - 1 ? item : <>{item}, </>
      })
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
