# node-docket-parser

[![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/docket-parser)](https://www.npmjs.com/package/@cityssm/docket-parser)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-docket-parser.svg/?label=active+issues&show_trend=true&token=muETDEKU2ZUoWkSe81VYZ-B5)](https://app.deepsource.com/gh/cityssm/node-docket-parser/)
[![Maintainability](https://api.codeclimate.com/v1/badges/80854a0809d920b041fa/maintainability)](https://codeclimate.com/github/cityssm/node-docket-parser/maintainability)
[![codecov](https://codecov.io/gh/cityssm/node-docket-parser/graph/badge.svg?token=TK0MPXJYP5)](https://codecov.io/gh/cityssm/node-docket-parser)

Parses Ontario Provincial Offences docket print data into JavaScript objects.

## Installation

```sh
npm install @cityssm/docket-parser
```

## Usage

```javascript
import { parseDockets } from '@cityssm/docket-parser'

const docketFileText = fs.readFileSync('test/dockets/whovilleDocket.txt').toString()

const docket = parseDockets(docketFileText)

console.log(docket)

/*
{
  "docketDescription": "POA - ALL",
  "pageNumber": 1,
  "court": "1234",
  "room": "POA",
  "prosecutor": "MAYWHO, A",
  "courtDate": "2024/01/10",
  "courtTime": "09:30",
  "justiceOfThePeace": "WHOVIER, M",
  "clerk": "WHO, C",
  "docketItems": [
    {
      "lineNumber": 1,
      "informationNumber": "999 XX XXX     -00",
      "defendantBirthDate": "1970/01/01",
      "counts": 1,
      "appTypeNumber": "FA 0",
      "appTypeDescription": "First Appearance",
      "compBadgeNumber": "XXXXX 0000",
      "offenceDate": "2023/12/24",
      "defendantName": "GRINCH, THE",
      "offenceDescription": "STEALING CHRISTMAS",
      "action": "WD",
      "actionDescription": "Withdrawn",
      "crEl": "",
      "plea": "",
      "find": "",
      "comment": "WITHDRAWN"
    }
  ]
}
*/
```
