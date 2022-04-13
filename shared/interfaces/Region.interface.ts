import { INpunkt } from '@shared/interfaces'

export default interface IRegion {
  KOD: string
  Name: string
  RTYPE: string
  Center: string
  Remark: string
  STER: number
  RGZ: string
  SPOP: number
  POPULATION: number
  ELPOWER: string
  GAS: string
  COAL: string
  OIL: string
  RAILST: string
  BUS: string
  PBUS: string
  CenterNpunkt: INpunkt
}
