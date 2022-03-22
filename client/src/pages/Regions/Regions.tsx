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

  // TODO: reduce to helper ?
  React.useEffect(() => {
    async function fetchData() {
      let regionsResponse = await getRegions(),
        contregsResponse = await get('contreg')

      setRegions(regionsResponse.data)
      setContregs(contregsResponse.data)
      setSelectedRegion(regionsResponse.data[0].KOD)
    }

    fetchData().then(() => setLoading(false))
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

  return loading ? (
    <Loader />
  ) : (
    <div>
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

      <Table data={intersection} />
    </div>
  )
}

export default Regions
