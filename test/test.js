import assert from 'node:assert';
import fs from 'node:fs';
import { parseDockets } from '../index.js';
describe('docket-parser', () => {
    it('Parses a docket file', () => {
        const docketFileText = fs
            .readFileSync('test/dockets/whovilleDocket.txt')
            .toString();
        const docket = parseDockets(docketFileText);
        console.log(JSON.stringify(docket, undefined, 2));
        assert.ok(docket.length > 0);
    });
});
