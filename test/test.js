import assert from 'node:assert';
import fs from 'node:fs';
import { parseDockets } from '../index.js';
describe('docket-parser', () => {
    it('Parses a docket file', () => {
        const docketFileText = fs.readFileSync('test/dockets/docket.txt').toString();
        const docket = parseDockets(docketFileText);
        console.log(docket);
        assert.ok(docket.length > 0);
    });
});
