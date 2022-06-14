import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import Loader from 'components/Loader'

import { getDocs, getDocsByType } from 'api/services/legal'

import { IDoc } from '@shared/interfaces'

/**
 * Docs page
 * TODO: currently displayed docs type (if paramType), via docstype collection
 */
const Legal = () => {
  const [searchParams] = useSearchParams(),
    paramType = searchParams.get('type')

  const [isLoading, setIsLoading] = React.useState(true)
  const [docs, setDocs] = React.useState<IDoc[]>()

  React.useEffect(() => {
    const fetchStatic = async () => {
      try {
        setIsLoading(true)

        const docsQuery = await (paramType ? getDocsByType(paramType) : getDocs())

        setDocs(docsQuery.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStatic()
  }, [paramType])

  return (
    <main>
      <h3>Нормативные акты и документы</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {docs?.map((doc) => (
            <li key={doc.KOD}>
              <Link key={doc.KOD} to={`/${doc.SRC}`} target="_blank" download={doc.Name}>
                {doc.Name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default Legal
