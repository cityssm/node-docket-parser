import type { DocketDateString } from './types.js';
/**
 * Converts the court date on the docket into a standardized format.
 * @param {string} courtDateString ex. "10 JAN 2024"
 * @returns {DocketDateString} ex. "2024/01/10"
 */
export declare function normalizeCourtDate(courtDateString: string): DocketDateString;
/**
 * Converts the line item dates on the docket into a standardized format.
 * @param itemDateString ex. "1AUG23"
 * @returns {DocketDateString} ex. "2023/08/01"
 */
export declare function normalizeItemDate(itemDateString: string): DocketDateString | undefined;
