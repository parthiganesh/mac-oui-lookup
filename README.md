# MAC OUI Lookup
mac-oui-lookup is a Node.js module that allows you to retrieve the vendor name of a MAC address with no internet connection required. The module comes with an up-to-date database of around 50K OUIs directly imported from IEEE registries.

This module has no dependencies and can be easily integrated into your Node.js projects.

[![npm downloads](https://img.shields.io/npm/dt/mac-oui-lookup.svg)](https://www.npmjs.com/package/mac-oui-lookup)
![GitHub issues](https://img.shields.io/github/issues/parthiganesh/mac-oui-lookup)
![License](https://img.shields.io/github/license/parthiganesh/mac-oui-lookup)


## Installation
```
npm install mac-oui-lookup --save
```

## Usage
```javascript
const { getVendor } = require('mac-oui-lookup');

const vendor = getVendor('00-50-56-BB-FC-8E');
console.log(vendor); // Output: VMware, Inc.
```

```typescript
import getVendor from 'mac-oui-lookup';

const vendor = getVendor('00-50-56-BB-FC-8E');
console.log(vendor); // Output: VMware, Inc.
```

## Features
- Fast and efficient vendor name lookup
- Works offline. No internet connection required
- Up-to-date database directly imported from IEEE registries
- Lightweight with no dependencies

## API

### getVendor(macAddress)
Returns the vendor name for the given MAC address.

#### Parameters
`macAddress` - The MAC address to lookup. Can be in the format 00:50:56:BB:FC:8E, 00-50-56-BB-FC-8E, or 005056bbfc8e.

#### Returns
Returns the vendor name for the given MAC address as a string. If the vendor name is not found, the function will return null by default. You can provide a default vendor name as a second argument.

## Data Source
The vendor data used by this package is obtained from the IEEE OUI database.

## License
This project is licensed under the MIT License - see the LICENSE file for details.