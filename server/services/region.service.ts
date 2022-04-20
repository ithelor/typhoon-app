import { Contreg, Komiss, Npunkt, Region, River, RiverReg, Spop } from 'models'

const getRegions = async (query: {}) => {
  try {
    const regions = await Region.find(query).select('-_id').orFail()

    return regions
  } catch (error) {
    throw Error('Error while fetching regions')
  }
}

const getRegion = async (query: { KOD: string }) => {
  try {
    const region = await Region.findOne(query)
      .lean()
      .populate({
        path: 'CenterNpunkt',
        select: '-_id'
      })
      .select('-_id')
      .orFail()

    return region
  } catch (error) {
    throw Error('Error while fetching a region')
  }
}

const getAdjacent = async (query: { KOD1: string }) => {
  try {
    const contregsToRegion = await Contreg.find(query).select('-_id KOD2')
    const contregsCodes = contregsToRegion.map((contreg) => contreg.KOD2)

    const adjacent = await Region.find({ KOD: { $in: contregsCodes } })
    const adjacentNames = adjacent.map((region) => region.Name)

    return adjacentNames
  } catch (error) {
    throw Error('Error while fetching adjacent')
  }
}

const getRivers = async (query: { KODP: string }) => {
  try {
    const riverregsToRegion = await RiverReg.find(query).select('-_id KODR')
    const riverregsCodes = riverregsToRegion.map((riverreg) => riverreg.KODR)

    const rivers = await River.find({ KOD: { $in: riverregsCodes } }).select('-_id Name')
    const riversNames = rivers.map((river) => river.Name)

    return riversNames
  } catch (error) {
    throw Error('Error while fetching rivers')
  }
}

const getComission = async (query: { reg: string }) => {
  try {
    const comission = await Komiss.find(query).lean().select('-_id')

    return comission
  } catch (error) {
    throw Error('Error while fetching a comission')
  }
}

const getChiefs = async (query: { reg: string; Name: { $regex: RegExp } }) => {
  try {
    const chiefs = await Spop.find(query).select('-_id')

    return chiefs
  } catch (error) {
    throw Error('Error while fetching chiefs')
  }
}

const getSettlements = async (query: { REGION: string }) => {
  try {
    const settlements = await Npunkt.find(query)
      .lean()
      .populate({ path: 'pstatus', select: '-_id -KOD Name' })
      .select('-_id KOD NAME STATUS PEOPLE')

    return settlements
  } catch (error) {
    throw Error('Error while fetching settlements')
  }
}

const getHazard = async (query: { REGION: string }) => {
  try {
    const hazard = await Npunkt.find(query)
      .lean()
      .populate({
        path: 'ObjektsData',
        select: '-_id KOD NAME ADRESS CHAF CHAFGO HAR Remark TYPOBJ',
        populate: {
          path: 'TypData',
          select: '-_id -KOD NAME'
        }
      })
      .select('-_id KOD NAME')

    return hazard
  } catch (error) {
    throw Error('Error while fetching hazard')
  }
}

const getDivisions = async (query: { REGION: string }) => {
  try {
    const divisions = await Npunkt.find(query)
      .lean()
      .populate({
        path: 'DivisionsData',
        select: '-_id KOD NAME ADRESS CHAF CHAFGO POPUL TECHNIK TREADY REMARK HAR TYPSS',
        populate: {
          path: 'TypData',
          select: '-_id -KOD NAME'
        }
      })
      .select('-_id KOD NAME')

    return divisions
  } catch (error) {
    throw Error('Error while fetching divisions')
  }
}

export default {
  getRegions,
  getRegion,
  getAdjacent,
  getRivers,
  getComission,
  getChiefs,
  getSettlements,
  getHazard,
  getDivisions
}
