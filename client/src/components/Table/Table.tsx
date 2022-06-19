import styles from './Table.module.scss'

/**
 * Table Component
 */
interface ITable {
  caption?: string
  head?: string[]
  data: Object[]
}

const Table = (props: ITable) =>
  props.data instanceof Array && props.data.length === 0 ? (
    <></>
  ) : (
    <>
      <h3 className={styles.caption}>{props.caption}</h3>
      <div className={styles.wrapper}>
        <table>
          <thead>
            <tr>
              {
                // if "head" is not being provided
                // thead is being composed of "data" keys

                (props.head || Object.keys(props.data[0])).map((item, key) => (
                  <th key={key}>{item}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr key={index}>
                {
                  // besides numbers or strings "data" may contain objects
                  // due to mongoose populations (usually only one property).
                  // if so, the property value is being used.
                  // if not, the original value is being used.

                  // data-label attr duplicates th content to display it in mobile layout

                  Object.values(item).map((value: number | string | Object, index) => (
                    <td
                      key={index}
                      data-label={
                        props.head ? props.head[index] : Object.keys(props.data[0])[index]
                      }
                    >
                      {
                        // some mongoose populations result in null
                        // due to db values referring to invalid keys.
                        // because of that checking for null

                        // also for spaces (yup)

                        value && typeof value === 'object'
                          ? Object.values(value)[0]
                          : (value !== ' ' && value) || '-'
                      }
                    </td>
                  ))
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )

export default Table
