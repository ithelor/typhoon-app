import React from 'react'
import { useSearchParams } from 'react-router-dom'

import Block from 'components/Block'
import Loader from 'components/Loader'

import { IRegion } from '@shared/interfaces'

import { getRegions, getRegion, getAdjacent, getCenter } from 'api/services/regions'

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
  center: string
}

const Regions = () => {
  const [searchParams, setSearchParams] = useSearchParams(),
    paramCurrent = searchParams.get('current') ?? 'VVPR'

  // loaded once on first render
  const [loading, setLoading] = React.useState(true)
  const [regions, setRegions] = React.useState<IRegion[]>([])

  // either found by search params or taken first from regions
  const [currentRegion, setCurrentRegion] = React.useState({} as IRegion)

  // updated on currentRegion update
  const [fetching, setFetching] = React.useState(false)
  const [dynamicData, setDynamicData] = React.useState<IDynamicData>({
    adjacent: [],
    center: ''
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
        const [adjacentData, centerData] = await Promise.all([
          getAdjacent(region.KOD),
          getCenter(region.KOD)
        ])

        setCurrentRegion(region)
        setDynamicData({ adjacent: adjacentData.data, center: centerData.data })
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
        setFetching(false)
      }
    }

    fetchDynamic()
  }, [searchParams]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFetching(true)
    setSearchParams({ current: event.target.value })
  }

  return (
    <section>
      {loading ? (
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

          {fetching ? (
            <Loader />
          ) : (
            <>
              <Block heading="Прилегающие муниципальные образования" data={dynamicData.adjacent} />
              <Block heading="Центр" data={dynamicData.center} />
              <Block heading="Глава Муниципального образования" data={currentRegion.Remark} />
              <Block heading="Общая площадь территории" data={currentRegion.STER} />
              <Block heading="Численность населения" data={currentRegion.POPULATION} />
            </>
          )}
        </>
      )}
    </section>
  )
}

export default Regions
