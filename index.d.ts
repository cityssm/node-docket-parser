import type { Docket } from './types.js';
/**
 * Parses a docket print file into an array of Docket objects.
 * @param {string} docketFileText - The docket text
 * @returns {Docket[]} - An array of dockets
 */
export declare function parseDockets(docketFileText: string): Docket[];
