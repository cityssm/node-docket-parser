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
};
/**
 * Converts the court date on the docket into a standardized format.
 * @param {string} courtDateString ex. "10 JAN 2024"
 * @returns {DocketDateString} ex. "2024/01/10"
 */
export function normalizeCourtDate(courtDateString) {
    const courtDatePieces = courtDateString.padStart(11, '0').split(' ');
    const monthString = monthNumbers[courtDatePieces[1]];
    return `${courtDatePieces[2]}/${monthString}/${courtDatePieces[0]}`;
}
/**
 * Converts the line item dates on the docket into a standardized format.
 * @param itemDateString ex. "1AUG23"
 * @returns {DocketDateString} ex. "2023/08/01"
 */
export function normalizeItemDate(itemDateString) {
    if (itemDateString === '00') {
        return undefined;
    }
    const currentDate = new Date();
    const currentCentury = currentDate.getFullYear() - (currentDate.getFullYear() % 100);
    const itemDateStringPadded = itemDateString.padStart(7, '0');
    let itemYear = currentCentury + Number.parseInt(itemDateStringPadded.slice(5), 10);
    const itemMonthString = monthNumbers[itemDateStringPadded.slice(2, 5)];
    const itemDayString = itemDateStringPadded.slice(0, 2);
    const itemDate = new Date(itemYear, Number.parseInt(itemMonthString, 10) - 1, Number.parseInt(itemDayString, 10));
    if (itemDate.getTime() > currentDate.getTime()) {
        itemYear -= 100;
    }
    return `${itemYear.toString()}/${itemMonthString}/${itemDayString}`;
}
