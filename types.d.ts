/**
 * Format: yyyy/mm/dd
 */
export type DocketDateString = `${number}/${number}/${number}`;
/**
 * Format: hh:mm
 */
export type DocketTimeString = `${number}:${number}`;
export interface Docket {
    docketDescription: string;
    pageNumber: number;
    court: string;
    room: string;
    courtDate: string;
    courtTime: DocketTimeString;
    justiceOfThePeace: string;
    docketItems: DocketItem[];
}
export interface DocketItem {
    lineNumber: number;
    informationNumber: string;
    defendantBirthDate: string;
    counts: number;
    appType: string;
    appTypeDescription: string | undefined;
    compBadge: string;
    offenceDate: string;
    defendantName: string;
    offenceDescription: string;
    action: string;
    crEl: string;
    plea: string;
    find: string;
    courtAction: string;
}
