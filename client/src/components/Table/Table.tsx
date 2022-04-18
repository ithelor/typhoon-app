import styles from './Table.module.scss'

/**
 * Table Component
 */
interface ITable {
  caption?: string
  head?: string[]
  data: {}[]
}

// TODO: custom no data message ?
// TODO: fill if not enough to render tds ?
const Table = (props: ITable) => {
  const headData =
    props.head?.map((item, key) => <th key={key}>{item}</th>) ||
    Object.keys(props.data[0]).map((item, key) => <th key={key}>{item}</th>)

  return (
    <>
      <h3 className={styles.caption}>{props.caption}</h3>
      <div className={styles.wrapper}>
        <table>
          <thead>
            <tr>
              {headData || (
                <th>
                  <h3>Nothing to display</h3>
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {props.data.map((item: Object, key) => (
              <tr key={key}>
                {Object.values(item).map((item, key) => (
                  <td key={key}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
