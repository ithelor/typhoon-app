import { IDivision, IObjekt, IPstatus } from '@shared/interfaces'

export default interface INpunkt {
  KOD: string
  NAME: string
  REGION: string
  STATUS: string
  PEOPLE: number
  STER: string
  COAL: string
  OIL: string
  DIZT: string
  EL: string
  RGZ: string
  RAILST: string
  Glava: string
  BUS: string
  PBUS: string
  PstatusData: IPstatus
  ObjektsData: IObjekt[]
  DivisionsData: IDivision[]
}
