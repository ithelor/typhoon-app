import styles from './Table.module.scss'

/**
 * Table Component
 */
interface ITable {
  caption?: string
  head?: string[]
  data: Object[]
}

const handleHead = (head: ITable['head'], data: ITable['data']) => {
  // if "head" is not being provided
  // thead is being composed of "data" keys

  return (
    <tr>
      {(head || Object.keys(data[0])).map((item, key) => (
        <th key={key}>{item}</th>
      ))}
    </tr>
  )
}

const handleData = (data: ITable['data']) => {
  // besides numbers or strings "data" may contain objects
  // due to mongoose populations (usually only one property).
  // if so, the property value is being returned.
  // if not, the original value is being returned.

  return data.map((item, index) => (
    <tr key={index}>
      {Object.values(item).map((value: number | string | Object, key) => {
        // some mongoose populations result in null
        // due to db values referring to invalid keys.
        // because of that checking for null.

        return (
          <td key={key}>
            {typeof value === 'object' && value !== null ? Object.values(value)[0] : value ?? '-'}
          </td>
        )
      })}
    </tr>
  ))
}

const Table = (props: ITable) => (
  <>
    <h3 className={styles.caption}>{props.caption}</h3>
    <div className={styles.wrapper}>
      <table>
        <thead>{handleHead(props.head, props.data)}</thead>
        <tbody>{handleData(props.data)}</tbody>
      </table>
    </div>
  </>
)

export default Table
