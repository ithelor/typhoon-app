import React from 'react'

import Block from 'components/Block'
import Loader from 'components/Loader'

import { IContreg, INPunkt, IRegions } from 'interfaces'

import { getRegions } from 'api/services/regions'
import { get } from 'api/services'

import './Regions.module.scss'

/**
 * Regions page
 */
interface IRegionsData {
  contregs: IContreg[]
  npunkts: INPunkt[]
  regions: IRegions[]
}

const Regions = () => {
  const [data, setData] = React.useState<IRegionsData>({
      contregs: [],
      npunkts: [],
      regions: []
    }),
    [currentRegion, setCurrentRegion] = React.useState<IRegions>({} as IRegions),
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
          const sortedRegions: IRegions[] = regionsResponse.data.sort((a: IRegions, b: IRegions) =>
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

    // FIXME: idk what this shit is
    setRegionCenter(() => {
      const getCenter = data.npunkts.find((npunkt) => npunkt.KOD === currentRegion.Center)

      return getCenter ? getCenter.NAME : 'yup, this option never fires, but I still need it fsr'
    })
  }, [currentRegion]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAdjacentRegions([])
    setCurrentRegion({ ...currentRegion, KOD: event.target.value })
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
