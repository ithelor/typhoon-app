import React from 'react'
import { useParams } from 'react-router-dom'

import { get } from 'api/services'

const Table = () => {
  const [data, setData] = React.useState([]),
    [loading, setLoading] = React.useState(true)

  const { target } = useParams()

  React.useEffect(() => {
    if (target)
      try {
        get(target).then((res) => {
          setData(res.data)
          setLoading(false)
        })
      } catch (error) {
        console.error(error)
      }
  }, [target])

  return !loading ? (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((item, key) => (
            <th key={key}>{item}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item: Object, key) => (
          <tr key={key}>
            {Object.values(item).map((item, key) => (
              <td key={key}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h2>🦇👨</h2>
  )
}

export default Table
