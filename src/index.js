const vendorData = require('../vendor-data.json');

function getVendor(macAddress, defaultVendor=null) {

  // Extract the first 6 characters of the MAC address
  const oui24 = macAddress.toUpperCase().replace(/[:-]/g, '').substring(0, 6);
  const oui28 = macAddress.toUpperCase().replace(/[:-]/g, '').substring(0, 7);
  const oui36 = macAddress.toUpperCase().replace(/[:-]/g, '').substring(0, 9);

  return vendorData[oui36] || vendorData[oui28] || vendorData[oui24] || defaultVendor;
}

module.exports = {
  getVendor
};