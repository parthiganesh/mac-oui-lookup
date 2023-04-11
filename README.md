# MAC OUI Lookup
A package for performing vendor lookups based on MAC address OUIs. Requires an internet connection and API access key. Uses IEEE OUI data in JSON format.

## Installation
```
npm install mac-oui-lookup --save
```

## Usage
```javascript
const { getVendor } = require('mac-oui-lookup');

console.log(getVendor('00-50-56-BB-FC-8E')); // Output: VMware, Inc.
```

## API

### getVendor(macAddress)
Returns the vendor information for the given MAC address.

#### Parameters
`macAddress` - The MAC address to lookup. Can be in the format 00:50:56:BB:FC:8E, 00-50-56-BB-FC-8E, or 005056bbfc8e.

#### Returns
Returns the vendor information for the given MAC address as a string. If the vendor information is not found for the given MAC address, it returns null.

## Data Source
The vendor data used by this package is obtained from the IEEE OUI database.

## License
This project is licensed under the MIT License - see the LICENSE file for details.