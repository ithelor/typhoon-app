import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import Loader from 'components/Loader'

import { getDocs, getDocsByType, getDocsTypes } from 'api/services/legal'

import { IDoc, IDocsType } from '@shared/interfaces'

import styles from './Legal.module.scss'

/**
 * Legal page
 * NOTE: full docs page is only accessible via address bar 'cause I need to justify accordion
 */

interface IData {
  docs: IDoc[]
  docsTypes: IDocsType[]
}

const Legal = () => {
  const [searchParams] = useSearchParams(),
    paramType = searchParams.get('type')

  const [isLoading, setIsLoading] = React.useState(true)

  const [data, setData] = React.useState<IData>({
    docs: [],
    docsTypes: []
  })

  // whether or not to display doc type heading
  const someOfTypeExist = (type: string) => data.docs.some((doc) => doc.TYP === type)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        const [docsQuery, docsTypesQuery] = await Promise.all([
          paramType ? getDocsByType(paramType) : getDocs(),
          getDocsTypes()
        ])

        setData({ docs: docsQuery.data, docsTypes: docsTypesQuery.data })
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [paramType])

  return (
    <main className={styles.container}>
      <h3>Нормативные акты и документы</h3>
      {isLoading ? (
        <Loader />
      ) : paramType ? (
        <>
          <h4>{data.docsTypes.find((docsType) => paramType === docsType.KOD)?.NAME}</h4>
          <ul>
            {data.docs.length ? (
              data.docs.map(
                (doc) =>
                  doc.TYP === paramType && (
                    <li key={doc.KOD}>
                      <Link to={`/${doc.SRC}`} target="_blank" download={doc.Name}>
                        {doc.Name}
                      </Link>
                    </li>
                  )
              )
            ) : (
              <span>Документы отсутствуют</span>
            )}
          </ul>
        </>
      ) : (
        data.docsTypes.map(
          (docsType) =>
            someOfTypeExist(docsType.KOD) && (
              <div key={docsType.KOD}>
                <h4>{docsType.NAME}</h4>
                <ul>
                  {data.docs.map(
                    (doc) =>
                      docsType.KOD === doc.TYP && (
                        <li key={doc.KOD}>
                          <Link to={`/${doc.SRC}`} target="_blank" download={doc.Name}>
                            {doc.Name}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              </div>
            )
        )
      )}
    </main>
  )
}

export default Legal
