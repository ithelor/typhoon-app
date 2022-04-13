import React from 'react'
import { useSearchParams } from 'react-router-dom'

import Block from 'components/Block'
import Loader from 'components/Loader'
import Table from 'components/Table'

import { IDivision, IKomiss, INpunkt, IObjekt, IRegion, ISpop } from '@shared/interfaces'

import {
  getRegions,
  getRegion,
  getAdjacent,
  getRivers,
  getKomiss,
  getSpop,
  getNpunkts,
  getObjekts,
  getDivisions
} from 'api/services/regions'

import './Regions.module.scss'

/**
 * Regions page
 * TODO: ? reducer (state { static {...}, current, dynamic {...} })
 *
 * TODO: move auxiliaries to helpers
 * TODO: fill-in animation
 */

interface IDynamicData {
  adjacent: string | string[]
  rivers: string[]
  komiss: IKomiss[]
  spop: ISpop[]
  npunkts: INpunkt[]
  objekts: IObjekt[]
  divisions: IDivision[]
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
    komiss: [],
    spop: [],
    npunkts: [],
    objekts: [],
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
          komissQuery,
          spopQuery,
          npunktsQuery,
          objektsQuery,
          divisionsQuery
        ] = await Promise.all([
          getAdjacent(region.KOD),
          getRivers(region.KOD),
          getKomiss(region.KOD),
          getSpop(region.KOD),
          getNpunkts(region.KOD),
          getObjekts(region.KOD),
          getDivisions(region.KOD)
        ])

        setCurrentRegion(region)
        setDynamicData({
          adjacent: adjacentQuery.data,
          rivers: riversQuery.data,
          komiss: komissQuery.data,
          spop: spopQuery.data,
          npunkts: npunktsQuery.data,
          objekts: objektsQuery.data,
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
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <select onChange={handleSelectChange} value={paramCurrent}>
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
          ) : (
            <>
              <Block heading="Прилегающие муниципальные образования" data={dynamicData.adjacent} />
              <Block heading="Центр" data={currentRegion.CenterNpunkt.NAME} />
              <Block heading="Глава Муниципального образования" data={currentRegion.Remark} />
              <Block heading="Общая площадь территории" data={currentRegion.STER} />
              <Block heading="Численность населения" data={currentRegion.POPULATION} />
              <Block heading="Реки" data={dynamicData.rivers} />

              {dynamicData.komiss.length > 0 && (
                <Table
                  caption="Состав комиссий по предупреждению и ликвидации чрезвычайных ситуаций и обеспечению пожарной безопасности"
                  data={dynamicData.komiss}
                />
              )}

              {dynamicData.spop.length > 0 && (
                <Table
                  caption="СПИСОК глав муниципальных образований, председателей КЧС, уполномоченных по делам ГОЧС"
                  data={dynamicData.spop}
                />
              )}

              {/*
                <Table caption="Населенные пункты" data={dynamicData.npunkts} /> 
                <Table caption="Потенциально опасные объекты" data={dynamicData.objekts} />
                <Table caption="Подразделения" data={dynamicData.divisions} />
              */}
            </>
          )}
        </>
      )}
    </section>
  )
}

export default Regions
