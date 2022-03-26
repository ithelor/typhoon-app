import React from 'react'

import Block from 'components/Block'
import Loader from 'components/Loader'

import { IContreg, INPunkt, IRegion } from 'interfaces'

import { getRegions } from 'api/services/regions'
import { get } from 'api/services'

import './Regions.module.scss'

/**
 * Regions page
 */
interface IData {
  contregs: IContreg[]
  npunkts: INPunkt[]
  regions: IRegion[]
}

const Regions = () => {
  const [data, setData] = React.useState<IData>({
      contregs: [],
      npunkts: [],
      regions: []
    }),
    [currentRegion, setCurrentRegion] = React.useState<IRegion>({} as IRegion),
    [adjacentRegions, setAdjacentRegions] = React.useState<string[]>([]),
    [regionCenter, setRegionCenter] = React.useState(''),
    [loading, setLoading] = React.useState(true)

  // TODO: generalize into helpers
  React.useEffect(() => {
    ;(async () => {
      let contregsResponse = await get('contreg'),
        npunktResponse = await get('npunkt'),
        regionsResponse = await getRegions()

      Promise.all([regionsResponse, contregsResponse, npunktResponse])
        .then(() => {
          const sortedRegions: IRegion[] = regionsResponse.data.sort((a: IRegion, b: IRegion) =>
            a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0
          )

          const getFirstNotEmpty = sortedRegions.find((region) => region.KOD && region.Name)!

          setData({
            contregs: contregsResponse.data,
            npunkts: npunktResponse.data,
            regions: sortedRegions
          })
          setCurrentRegion(getFirstNotEmpty)
        })
        .then(() => setLoading(false))
    })()
  }, [])

  // TODO: generalize into helpers
  React.useEffect(() => {
    data.regions.forEach((region) =>
      data.contregs.forEach(
        (contreg: IContreg) =>
          contreg.KOD1 === currentRegion.KOD &&
          contreg.KOD2 === region.KOD &&
          setAdjacentRegions((prev) => [...prev, region.Name])
      )
    )

    setRegionCenter(() => data.npunkts.find((npunkt) => npunkt.KOD === currentRegion.Center)?.NAME!)
  }, [currentRegion]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAdjacentRegions([])
    setCurrentRegion(data.regions.find((region) => region.KOD === event.target.value)!)
  }

  // TODO: fill-in animation
  // TODO: per-block loading, 'cause too long
  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          <select onChange={handleSelectChange}>
            {data.regions.map(
              (region, index) =>
                region.KOD &&
                region.Name && (
                  <option key={region.KOD} value={region.KOD} defaultChecked={index === 0}>
                    {region.Name}
                  </option>
                )
            )}
          </select>

          <Block heading="Прилегающие муниципальные образования" data={adjacentRegions} />
          <Block heading="Центр" data={regionCenter} />
        </>
      )}
    </section>
  )
}

export default Regions
