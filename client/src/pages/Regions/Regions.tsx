import React from 'react'

import Loader from 'components/Loader'
import Table from 'components/Table'

import { IContreg, IRegions } from 'interfaces'

import { getRegions } from 'api/services/regions'
import { get } from 'api/services'

/**
 * Regions page
 */
const Regions = () => {
  const [regions, setRegions] = React.useState<IRegions[]>([]),
    [contregs, setContregs] = React.useState<IContreg[]>(),
    [selectedRegion, setSelectedRegion] = React.useState(''),
    [intersection, setIntersection] = React.useState<IRegions[]>([]),
    [loading, setLoading] = React.useState(true)

  // TODO: generalize into helpers
  React.useEffect(() => {
    ;(async () => {
      let regionsResponse = await getRegions(),
        contregsResponse = await get('contreg')

      Promise.all([regionsResponse, contregsResponse])
        .then(() => {
          const sortedRegions: IRegions[] = regionsResponse.data.sort((a: IRegions, b: IRegions) =>
            a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0
          )

          const getFirstNotEmpty = sortedRegions.find((region) => region.KOD && region.Name)!

          setRegions(sortedRegions)
          setContregs(contregsResponse.data)
          setSelectedRegion(getFirstNotEmpty.KOD)
        })
        .then(() => setLoading(false))
    })()
  }, [])

  React.useEffect(() => {
    regions.forEach((region) =>
      contregs?.forEach(
        (contreg) =>
          contreg.KOD1 === selectedRegion &&
          contreg.KOD2 === region.KOD &&
          setIntersection((prev) => [...prev, region])
      )
    )
  }, [selectedRegion]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIntersection([])
    setSelectedRegion(event.target.value)
  }

  // TODO: reduce to helper ?
  // TODO: fill-in animation
  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          <select onChange={handleSelectChange}>
            {regions.map(
              (region, index) =>
                region.KOD &&
                region.Name && (
                  <option key={region.KOD} value={region.KOD} defaultChecked={index === 0}>
                    {region.Name}
                  </option>
                )
            )}
          </select>

          <Table caption={`Прилегающие муниципальные образования`} data={intersection} />
        </>
      )}
    </section>
  )
}

export default Regions
