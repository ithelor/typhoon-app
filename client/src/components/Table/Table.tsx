import React from 'react'
import { useLocation } from 'react-router-dom'

import { get } from 'api/services'

const Table = () => {
  const [data, setData] = React.useState([]),
    [loading, setLoading] = React.useState(true)

  const location = useLocation(),
    queryTarget = new URLSearchParams(location.search).get('target')

  React.useEffect(() => {
    if (queryTarget)
      try {
        get(queryTarget).then((res) => {
          setData(res.data)
          setLoading(false)
        })
      } catch (error) {
        console.error(error)
      }
  }, [queryTarget])

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
    <span>🦇👨</span>
  )
}

export default Table
