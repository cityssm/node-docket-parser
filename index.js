import { appTypes } from './lookups.js';
const spacePaddingLength = 130;
/**
 * Parses a docket print file into an array of Docket objects.
 * @param {string} docketFileText - The docket text
 * @returns {Docket[]} - An array of dockets
 */
export function parseDockets(docketFileText) {
    const dockets = [];
    const docketLines = docketFileText.split(/[\n\f]/);
    console.log(docketLines.length);
    let docketLineIndex = 0;
    for (docketLineIndex = 0; docketLineIndex < docketLines.length; docketLineIndex += 1) {
        let docketLine = docketLines.at(docketLineIndex) ?? '';
        /*
         * Check if the line is the start of a page.
         */
        if (docketLine.length >= 51 &&
            docketLine.slice(0, 48).trim() === '' &&
            docketLine.slice(48, 51) !== 'XXX' &&
            docketLine.slice(48, 53) !== 'DATE ') {
            const docketDescription = docketLine.trim();
            // Skip two blank lines
            docketLineIndex += 2;
            // First header line
            docketLineIndex += 1;
            docketLine = (docketLines.at(docketLineIndex) ?? '').padEnd(spacePaddingLength, ' ');
            const court = docketLine.slice(1, 6).trim();
            const room = docketLine.slice(31, 36).trim();
            const courtTimeString = docketLine.slice(103, 108);
            // One blank line
            docketLineIndex += 1;
            // Second header line
            docketLineIndex += 1;
            docketLine = (docketLines.at(docketLineIndex) ?? '').padEnd(spacePaddingLength, ' ');
            const courtDateString = docketLine.slice(7, 18).trim();
            const pageNumber = docketLine.slice(34, 35).trim();
            const justiceOfThePeace = docketLine.slice(43, 73).trim();
            const docket = {
                docketDescription,
                pageNumber: Number.parseInt(pageNumber, 10),
                court,
                room,
                courtDate: courtDateString,
                courtTime: courtTimeString,
                justiceOfThePeace,
                docketItems: []
            };
            // Five blank lines
            docketLineIndex += 5;
            while (docketLineIndex < docketLines.length) {
                docketLineIndex += 1;
                const itemLine1 = (docketLines.at(docketLineIndex) ?? '').padEnd(spacePaddingLength, ' ');
                // Blank first line, items complete
                if (itemLine1.trim() === '') {
                    break;
                }
                docketLineIndex += 1;
                const itemLine2 = (docketLines.at(docketLineIndex) ?? '').padEnd(spacePaddingLength, ' ');
                const lineNumber = itemLine1.slice(0, 4).trim();
                if (lineNumber === '') {
                    // Likely a court action overflowing to next two lines
                    const extendedCourtAction = (itemLine1.slice(112, 131).trim() +
                        '\n' +
                        itemLine2.slice(112, 131)).trim();
                    docket.docketItems.at(-1).courtAction +=
                        '\n' + extendedCourtAction;
                    continue;
                }
                const informationNumber = (itemLine1.slice(5, 16).trim() +
                    ' ' +
                    itemLine2.slice(5, 16)).trim();
                const birthDate = itemLine1.slice(17, 24).trim();
                const counts = itemLine1.slice(25, 27).trim();
                const appType = itemLine1.slice(28, 31).trim();
                const appTypeNumber = itemLine2.slice(28, 31).trim();
                const appTypeDescription = appTypes[appType];
                const compBadge = (itemLine1.slice(32, 40).trim() +
                    ' ' +
                    itemLine2.slice(32, 40)).trim();
                const offenceDate = itemLine1.slice(41, 48).trim();
                const defendantName = itemLine1.slice(53, 78).trim();
                const offenceDescription = itemLine1.slice(78, 99).trim();
                const action = itemLine1.slice(100, 103).trim();
                // eslint-disable-next-line unicorn/prevent-abbreviations
                const crEl = itemLine1.slice(104, 105).trim();
                const plea = itemLine1.slice(106, 108).trim();
                const find = itemLine1.slice(109, 111).trim();
                const courtAction = (itemLine1.slice(112, 131).trim() +
                    '\n' +
                    itemLine2.slice(112, 131)).trim();
                const docketItem = {
                    lineNumber: Number.parseInt(lineNumber, 10),
                    informationNumber,
                    defendantBirthDate: birthDate,
                    counts: Number.parseInt(counts, 10),
                    appType: (appType + ' ' + appTypeNumber).trim(),
                    appTypeDescription,
                    compBadge,
                    offenceDate,
                    defendantName,
                    offenceDescription,
                    action,
                    crEl,
                    plea,
                    find,
                    courtAction
                };
                docket.docketItems.push(docketItem);
            }
            dockets.push(docket);
        }
    }
    return dockets;
}
