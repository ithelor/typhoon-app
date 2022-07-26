import React from 'react'
import { useSearchParams } from 'react-router-dom'

import Loader from 'components/Loader'
import Table from 'components/Table'

import { getCommission } from 'api/services/commissions'
import { getRegions } from 'api/services/regions'

import { COMMISSIONS_LABELS } from 'shared/constants'

import { IKomiss, IRegion } from '@shared/interfaces'

import styles from './Commissions.module.scss'

const Commissions = () => {
  const [searchParams, setSearchParams] = useSearchParams(),
    paramReg = searchParams.get('reg') ?? 'VVPR'

  const [regions, setRegions] = React.useState<IRegion[]>([])
  const [commissions, setCommissions] = React.useState<IKomiss[] | IKomiss[][]>([])

  const [isLoading, setIsLoading] = React.useState(true)
  const [isFetching, setIsFetching] = React.useState(false)

  React.useEffect(() => {
    const fetchStatic = async () => {
      const regionsData = (await getRegions()).data

      setRegions(
        regionsData
          .filter((region) => region.KOD !== 'PRIK')
          .sort((a, b) => (a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0))
      )

      setIsLoading(false)
    }

    fetchStatic()
  }, [])

  React.useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)

      try {
        setCommissions(
          paramReg === 'ALL'
            ? await Promise.all(
                regions.map(async (region) => (await getCommission(region.KOD)).data)
              )
            : (await getCommission(paramReg)).data
        )
      } catch (error) {
        console.error(error)
      } finally {
        setIsFetching(false)
      }
    }

    fetchData()
  }, [paramReg, regions])

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ reg: event.target.value })
  }

  return (
    <main className={styles.container}>
      <h2>Состав комиссий по ЧС</h2>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <select value={paramReg} onChange={handleSelectChange}>
            <option value={'ALL'}>Приморский край</option>
            {regions.map(
              (region) =>
                region.KOD &&
                region.Name && (
                  <option key={region.KOD} value={region.KOD}>
                    {region.Name}
                  </option>
                )
            )}
          </select>

          {isFetching ? (
            <Loader />
          ) : commissions.length ? (
            paramReg === 'ALL' ? (
              Array.isArray(commissions[0]) &&
              commissions.map((commission, index) => (
                <Table
                  key={(commission as IKomiss).KOD}
                  caption={regions[index].Name}
                  head={COMMISSIONS_LABELS}
                  data={commission as IKomiss[]}
                />
              ))
            ) : (
              <Table
                head={COMMISSIONS_LABELS}
                data={commissions as []}
                style={{ maxHeight: '70vh' }}
              />
            )
          ) : (
            <span className={styles.noData}>Данные о составе комиссий по ЧС не найдены</span>
          )}
        </>
      )}
    </main>
  )
}

export default Commissions
