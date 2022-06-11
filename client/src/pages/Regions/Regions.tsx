import React from 'react'
import { useSearchParams } from 'react-router-dom'

import Block from 'components/Block'
import Loader from 'components/Loader'
import Table from 'components/Table'

import { IKomiss, INpunkt, IRegion, ISpop } from '@shared/interfaces'
import {
  COMISSION_LABELS,
  CHIEFS_LABELS,
  SETTLEMENTS_LABELS,
  HAZARD_LABELS,
  DIVISIONS_LABELS
} from 'shared/constants'

import {
  getRegions,
  getRegion,
  getAdjacent,
  getRivers,
  getComission,
  getChiefs,
  getSettlements,
  getHazard,
  getDivisions
} from 'api/services/regions'

import styles from './Regions.module.scss'

/**
 * Regions page
 * TODO: ? reducer (state { static {...}, current, dynamic {...} })
 *
 * TODO: move auxiliaries to helpers
 * TODO: fill-in animation
 * FIXME: sections in a section? wow.
 */

interface IDynamicData {
  adjacent: string | string[]
  rivers: string[]
  comission: IKomiss[]
  chiefs: ISpop[]
  settlements: INpunkt[]
  hazard: INpunkt[]
  divisions: INpunkt[]
}

const Regions = () => {
  const [searchParams, setSearchParams] = useSearchParams(),
    paramCurrent = searchParams.get('current') ?? 'VVPR'

  // loaded once on first render
  const [isLoading, setIsLoading] = React.useState(true)
  const [regions, setRegions] = React.useState<IRegion[]>([])

  // either found by search params or taken first from regions
  const [currentRegion, setCurrentRegion] = React.useState({} as IRegion)

  // updated on currentRegion update
  const [isFetching, setIsFetching] = React.useState(false)
  const [dynamicData, setDynamicData] = React.useState<IDynamicData>({
    adjacent: [],
    rivers: [],
    comission: [],
    chiefs: [],
    settlements: [],
    hazard: [],
    divisions: []
  })

  React.useEffect(() => {
    const fetchStatic = async () => {
      setRegions(
        (await getRegions()).data.sort((a, b) => (a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0))
      )
    }

    fetchStatic()
  }, [])

  React.useEffect(() => {
    const fetchDynamic = async () => {
      const region = (await getRegion(paramCurrent)).data

      try {
        const [
          adjacentQuery,
          riversQuery,
          comissionQuery,
          chiefsQuery,
          settlementsQuery,
          hazardQuery,
          divisionsQuery
        ] = await Promise.all([
          getAdjacent(region.KOD),
          getRivers(region.KOD),
          getComission(region.KOD),
          getChiefs(region.KOD),
          getSettlements(region.KOD),
          getHazard(region.KOD),
          getDivisions(region.KOD)
        ])

        setCurrentRegion(region)
        setDynamicData({
          adjacent: adjacentQuery.data,
          rivers: riversQuery.data,
          comission: comissionQuery.data,
          chiefs: chiefsQuery.data,
          settlements: settlementsQuery.data,
          hazard: hazardQuery.data,
          divisions: divisionsQuery.data
        })
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
        setIsFetching(false)
      }
    }

    fetchDynamic()
  }, [searchParams]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsFetching(true)
    setSearchParams({ current: event.target.value })
  }

  return (
    <main className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className={styles.controls}>
            <h2>Муниципальные образования Приморского края</h2>
            <select value={paramCurrent} onChange={handleSelectChange}>
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
          </section>
          {isFetching ? (
            <Loader fillGrid />
          ) : (
            <>
              <section className={styles.main}>
                <>
                  <Table
                    caption="Состав комиссий по предупреждению и ликвидации чрезвычайных ситуаций и обеспечению пожарной безопасности"
                    head={COMISSION_LABELS}
                    data={dynamicData.comission}
                  />

                  <Table
                    caption="СПИСОК глав муниципальных образований, председателей КЧС, уполномоченных по делам ГОЧС"
                    head={CHIEFS_LABELS}
                    data={dynamicData.chiefs}
                  />

                  <Table
                    caption="Населенные пункты"
                    head={SETTLEMENTS_LABELS}
                    data={dynamicData.settlements}
                  />

                  {dynamicData.hazard.map(
                    (value, index) =>
                      value.ObjektsData.length > 0 && (
                        <Table
                          key={index}
                          caption={`Потенциально опасные объекты (${value.NAME})`}
                          head={HAZARD_LABELS}
                          data={value.ObjektsData}
                        />
                      )
                  )}

                  {dynamicData.divisions.map(
                    (value, index) =>
                      value.DivisionsData.length > 0 && (
                        <Table
                          key={index}
                          caption={`Подразделения (${value.NAME})`}
                          head={DIVISIONS_LABELS}
                          data={value.DivisionsData}
                        />
                      )
                  )}
                </>
              </section>
              <section className={styles.side}>
                {
                  <>
                    <Block
                      heading="Прилегающие муниципальные образования"
                      data={dynamicData.adjacent}
                    />
                    <Block heading="Центр" data={currentRegion.CenterNpunkt.NAME} />
                    <Block heading="Глава Муниципального образования" data={currentRegion.Remark} />
                    <Block heading="Общая площадь территории" data={currentRegion.STER} />
                    <Block heading="Численность населения" data={currentRegion.POPULATION} />
                    <Block heading="Реки" data={dynamicData.rivers} />
                  </>
                }
              </section>
            </>
          )}
        </>
      )}
    </main>
  )
}

export default Regions
