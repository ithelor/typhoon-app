import React from 'react'
import { useSearchParams } from 'react-router-dom'

import Block from 'components/Block'
import Loader from 'components/Loader'

import { IContreg, INPunkt, IRegion } from 'interfaces'

import { getRegions } from 'api/services/regions'
import { get } from 'api/services'

import './Regions.module.scss'

// loaded from api on first render
interface IStaticData {
  contregs: IContreg[]
  npunkts: INPunkt[]
  regions: IRegion[]
}

// recalculated on 'currentRegion' update
interface IDynamicData {
  adjacent: string[]
  center: string
}

/**
 * Regions page
 * TODO: move data processing to the server
 * TODO: reducer (state { static {...}, current, dynamic {...} }) ?
 *
 * TODO: per-block loading, 'cause too long
 * TODO: move auxiliaries to helpers
 */
const Regions = () => {
  const [searchParams, setSearchParams] = useSearchParams(),
    paramCurrent = searchParams.get('current')

  const [staticData, setstaticData] = React.useState<IStaticData>({
    contregs: [],
    npunkts: [],
    regions: []
  })
  const [currentRegion, setCurrentRegion] = React.useState({} as IRegion)
  const [dynamicData, setDynamicData] = React.useState<IDynamicData>({
    adjacent: [],
    center: ''
  })

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    ;(async () => {
      let contregsResponse = await get('contreg'),
        npunktResponse = await get('npunkt'),
        regionsResponse = await getRegions()

      Promise.all([regionsResponse, contregsResponse, npunktResponse])
        .then(() => {
          ;(regionsResponse.data as IRegion[]).sort((a: IRegion, b: IRegion) =>
            a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0
          )

          setstaticData({
            contregs: contregsResponse.data,
            npunkts: npunktResponse.data,
            regions: regionsResponse.data
          })

          const getFirstNotEmpty = (regionsResponse.data as IRegion[]).find(
            (region) => region.KOD && region.Name
          )

          const getRegionByCode = regionsResponse.data.find(
            (region: IRegion) => region.KOD === paramCurrent
          )

          setCurrentRegion(paramCurrent ? getRegionByCode : getFirstNotEmpty)
        })
        .then(() => setLoading(false))
    })()
  }, [searchParams]) // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setDynamicData({
      adjacent: (() => {
        let result: string[] = []

        staticData.regions.forEach((region) =>
          staticData.contregs.forEach(
            (contreg) =>
              contreg.KOD1 === currentRegion.KOD &&
              contreg.KOD2 === region.KOD &&
              result.push(region.Name)
          )
        )
        return result
      })(),
      center: (() =>
        staticData.npunkts.find((npunkt) => npunkt.KOD === currentRegion.Center)?.NAME!)()
    })

    paramCurrent &&
      setCurrentRegion(staticData.regions.find((region) => region.KOD === paramCurrent)!)
  }, [searchParams, currentRegion]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ current: event.target.value })
    setDynamicData((prev) => ({
      ...prev,
      adjacent: []
    }))
  }

  // TODO: fill-in animation
  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          <select onChange={handleSelectChange} value={paramCurrent || undefined}>
            {staticData.regions.map(
              (region, index) =>
                region.KOD &&
                region.Name && (
                  <option key={region.KOD} value={region.KOD}>
                    {region.Name}
                  </option>
                )
            )}
          </select>

          <Block heading="Прилегающие муниципальные образования" data={dynamicData.adjacent} />
          <Block heading="Центр" data={dynamicData.center} />
          <Block heading="Глава Муниципального образования" data={currentRegion.Remark} />
          <Block heading="Общая площадь территории" data={currentRegion.STER} />
          <Block heading="Численность населения" data={currentRegion.POPULATION} />
        </>
      )}
    </section>
  )
}

export default Regions
