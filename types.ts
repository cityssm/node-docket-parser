import type { actions, appTypes, finds, pleas } from './lookups.js'

/**
 * Format: yyyy/mm/dd
 */
export type DocketDateString = `${number}/${number}/${number}`

/**
 * Format: hh:mm
 */
export type DocketTimeString = `${number}:${number}`

export interface Docket {
  docketDescription: string
  pageNumber: number
  court: string
  room: string
  prosecutor: string
  courtDate: DocketDateString
  courtTime: DocketTimeString
  justiceOfThePeace: string
  clerk: string
  docketItems: DocketItem[]
}

export interface DocketItem {
  lineNumber: number
  informationNumber: string
  defendantBirthDate: DocketDateString | undefined
  counts: number

  appTypeNumber: string
  appTypeDescription: (typeof appTypes)[keyof typeof appTypes] | undefined

  compBadgeNumber: string
  offenceDate: DocketDateString | undefined
  arrestDate: DocketDateString | undefined
  defendantName: string
  offenceDescription: string

  action: string
  actionDescription: (typeof actions)[keyof typeof actions] | undefined

  crEl: string

  plea: string
  pleaDescription: (typeof pleas)[keyof typeof pleas] | undefined

  find: string
  findDescription: (typeof finds)[keyof typeof finds] | undefined

  comment: string
}
