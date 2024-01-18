import type { DocketDateString } from './types.js'

const monthNumbers = {
  JAN: '01',
  FEB: '02',
  MAR: '03',
  APR: '04',
  MAY: '05',
  JUN: '06',
  JUL: '07',
  AUG: '08',
  SEP: '09',
  OCT: '10',
  NOV: '11',
  DEC: '12'
}

export function normalizeCourtDate(courtDateString: string): DocketDateString {
  const courtDatePieces = courtDateString.padStart(12, '0').split(' ')

  return (courtDatePieces[2] +
    '/' +
    monthNumbers[courtDatePieces[1]] +
    '/' +
    courtDatePieces[0]) as DocketDateString
}
