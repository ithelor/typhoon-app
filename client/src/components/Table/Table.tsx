/**
 * Table Component
 */
interface ITable {
  data: {}[]
}

// TODO: custom no data message ?
const Table = (props: ITable) => (
  <table>
    <thead>
      <tr>
        {props.data.length > 0 ? (
          Object.keys(props.data[0]).map((item, key) => <th key={key}>{item}</th>)
        ) : (
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
)

export default Table
